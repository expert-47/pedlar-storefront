import React from "react";
import PropTypes from "prop-types";

import { Typography, Grid, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { getStoreName } from "utils/getPathName";
import PedlarImage from "components/pedlarImage";
import * as gtmEvents from "utils/gtm";
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
    gtmEvents.selectItem(item);
  };
  return (
    <Link href={{ pathname: `${path}/product/${productId}` }}>
      <Box
        sx={{
          cursor: "pointer",
          width: "100%",
          // backgroundColor: "pink",
          // border: "1px solid red",
        }}
        onClick={onClickCard}
      >
        {image && (
          <Grid item xs={12}>
            <Box
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: { xs: "100%", sm: 190, md: 400 },
                height: { xs: 158, sm: 190, md: 344 },
                // backgroundColor: "red",
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
