import React from "react";
import PropTypes from "prop-types";

import { Typography, Grid, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { getStoreName } from "utils/getPathName";
import PedlarImage from "components/pedlarImage";
import { gtmEvents } from "utils/gtm";
interface Props {
  name: string;
  type: string;
  price: string;
  image?: string;
  crossPrice?: string;
  id: string;
  item: any;
}

const CardComponent = ({ name, type, price, image, crossPrice, id, item }: React.PropsWithChildren<Props>) => {
  let productId = id?.split("gid://shopify/Product/")[1];
  const route = useRouter();
  let path = getStoreName(route);

  const onClickCard = () => {
    gtmEvents({
      event: "select_item",
      ecommerce: {
        items: [
          {
            currency: item?.priceRange?.minVariantPrice?.currencyCode || "", // Currency
            item_name: item?.title || "", // Name or ID is required.
            item_id: item?.id || "", //ID of the item.
            price: item?.priceRange?.minVariantPrice?.amount || "", //total price of the item.
            item_brand: item?.vendor || "", // brand of the item.(this is the example value)
            item_category: item?.productType || "", //The category to which the product belongs to.
            // item_category2: size, //size of the product.
            //   item_variant: color, // color of the product.
            //  item_list_name: "Category Page",//e.g. Filter results, Popular Picks For You ,Recently Viewed, Best sellers, Search Results, Personal Boutique etc.
            //  item_list_id: "H3123", //ID of the list in which the item was presented to the user.
            // index: 2, // position of the item
            quantity: item.quantity, //quantity of the item
            // promotion_id: "abc123",
            // promotion_name: "shop now"
          },
        ],
      },
    });
  };
  return (
    <Link href={{ pathname: `${path}/product/${productId}` }}>
      <Box
        sx={{
          cursor: "pointer",
          width: "100%",
        }}
        onClick={onClickCard}
      >
        {image && (
          <Grid item xs={12}>
            <Box
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: { xs: "100%", sm: 190, md: 344 },
                height: { xs: 158, sm: 190, md: 344 },
              }}
            >
              <PedlarImage src={image} objectFit="contain" />
            </Box>
          </Grid>
        )}
        <Grid xs={12}>
          <Typography
            style={{
              textTransform: "uppercase",
              paddingTop: "8px",
              lineHeight: "16px",
              color: "#1C1B1F",
            }}
            fontSize={"12px"}
            fontWeight={"600"}
          >
            {name}
          </Typography>
          <Typography fontSize={"16px"} fontWeight={"600"} style={{ textOverflow: "wrap", color: "#1C1B1F" }}>
            {type}
          </Typography>
          {crossPrice ? (
            <Grid sx={{ display: "flex" }}>
              <Typography
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "#1C1B1F87",
                  textDecorationThickness: "0.1em",
                  color: "#1C1B1F87",
                }}
                fontSize={"16px"}
                fontWeight={"600"}
              >
                {crossPrice}
              </Typography>
              <Typography style={{ fontSize: "16px", marginLeft: "6px", fontWeight: "600" }}>{price}</Typography>
            </Grid>
          ) : (
            <Typography style={{ fontSize: "16px", fontWeight: "600" }}>{price}</Typography>
          )}
        </Grid>
      </Box>
    </Link>
  );
};
CardComponent.propTypes = {
  name: PropTypes.string,
};
export default CardComponent;
