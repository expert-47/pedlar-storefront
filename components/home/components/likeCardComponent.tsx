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

const LikeCardComponent = ({ name, type, price, image, crossPrice, id, item }: React.PropsWithChildren<Props>) => {
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
          width: { xs: "100%", sm: 170, md: 230, lg: 209 },
        }}
        onClick={onClickCard}
      >
        {image && (
          <Box
            sx={{
              width: "100%",
              height: { xs: 158, sm: 170, md: 230, lg: 215 },
            }}
          >
            <PedlarImage src={image} objectFit="contain" />
          </Box>
        )}
        <Grid xs={12}>
          <Typography
            fontSize={"16px"}
            fontWeight={"600"}
            style={{ textOverflow: "wrap", color: "#1C1B1F", paddingTop: "8px" }}
          >
            {type}
          </Typography>
          <Typography
            style={{
              textTransform: "uppercase",
              lineHeight: "16px",
              color: "#1C1B1F",
            }}
            fontSize={"12px"}
            fontWeight={"600"}
          >
            {name}
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
LikeCardComponent.propTypes = {
  name: PropTypes.string,
};
export default LikeCardComponent;
