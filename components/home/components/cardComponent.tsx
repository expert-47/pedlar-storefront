import React from "react";
import PropTypes from "prop-types";

import { Typography, Grid, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
interface Props {
  name: string;
  type: string;
  price: string;
  image?: string;
  crossPrice?: string;
  id: string;
}

const CardComponent = ({ name, type, price, image, crossPrice, id }: React.PropsWithChildren<Props>) => {
  let productId = id?.split("gid://shopify/Product/")[1];
  const route = useRouter();

  return (
    <Link href={`${route.asPath}/product/${productId}`}>
      <Box
        style={{
          cursor: "pointer",
          width: "100%",
        }}
      >
        {image && (
          <Grid item xs={12}>
            {/* <img src={image} width="343px" height={"343px"} style={{maxWidth:"100%" , maxHeight:"100%" , objectFit:"fill"}} ></img> */}

            <Box
              component="img"
              src={image}
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: { xs: 158, sm: 190, md: 344 },
                height: { xs: 158, sm: 190, md: 344 },
              }}
            ></Box>
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
