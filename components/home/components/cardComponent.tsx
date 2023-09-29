import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Grid } from "@mui/material";
import Link from "next/link";
import { NextImage } from "components/pedlarImage";
import * as gtmEvents from "utils/gtm";
import { useSelector } from "react-redux";
interface Props {
  name: string;
  type: string;
  price: string;
  image?: string;
  crossPrice?: string;
  id: string;
  item: any;
  width: any;
  height: any;
  index: number;
  heading: string;
}
const CardComponent = ({
  name,
  type,
  price,
  image,
  crossPrice,
  id,
  item,
  width,
  height,
  index,
  heading,
}: React.PropsWithChildren<Props>) => {
  const productId = id?.split("gid://shopify/Product/")[1];
  const storeName = useSelector((data: any) => data.app.storeName);
  const onClickCard = () => {
    gtmEvents.selectItem({ ...item, index: index, heading: heading });
  };

  return (
    <Grid item xs={11.4}>
      <Link
        href={{
          pathname: `/${storeName}/product/${productId}`,
          query: { id: productId, index: index, heading: heading },
        }}
        as={`/${storeName}/product/${productId}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Box
          width={width}
          sx={{
            cursor: "pointer",
          }}
          onClick={onClickCard}
        >
          {image && (
            <Box
              height={height}
              sx={{
                width: "100%",
              }}
            >
              <NextImage src={image} style={{ objectFit: "cover", objectPosition: "center center" }} alt={name} />
            </Box>
          )}
          <Typography
            align="center"
            fontSize={{ xs: "14px", sm: "14px", md: "15px", lg: "15px" }}
            fontWeight={"500"}
            style={{
              color: "#1C1B1F",
              paddingTop: "20px",
            }}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
            }}
          >
            {type}
          </Typography>
          <Typography
            align="center"
            style={{
              textTransform: "capitalize",
              lineHeight: "18px",
              color: "#1C1B1F",
            }}
            fontSize={{ xs: "14px", sm: "14px", md: "15px", lg: "15px" }}
            fontWeight={"400"}
            sx={{
              paddingTop: "3px",
              paddingInline: "7px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {name}
          </Typography>
          {crossPrice ? (
            <Box sx={{ display: "flex" }}>
              <Typography
                align="center"
                style={{
                  fontSize: "13px",
                  fontWeight: "400",
                  paddingTop: "8px",
                  textDecoration: "line-through",
                  textDecorationColor: "#1C1B1F87",
                  textDecorationThickness: "0.1em",
                  color: "#1C1B1F87",
                }}
              >
                {crossPrice}
              </Typography>
              <Typography
                align="center"
                style={{ fontSize: "13px", marginLeft: "6px", fontWeight: "400", paddingTop: "8px" }}
              >
                {price}
              </Typography>
            </Box>
          ) : (
            <Typography align="center" style={{ fontSize: "13px", fontWeight: "400", paddingTop: "8px" }}>
              {price}
            </Typography>
          )}
        </Box>
      </Link>
    </Grid>
  );
};
CardComponent.propTypes = {
  name: PropTypes.string,
};
export default CardComponent;
