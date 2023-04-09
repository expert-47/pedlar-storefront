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
  let productId = id?.split("gid://shopify/Product/")[1];
  const route = useRouter();
  let path = getStoreName(route);

  const onClickCard = () => {
    gtmEvents.selectItem({ ...item, index: index, heading: heading });
  };

  return (
    <Link
      href={{ pathname: `${path}/product/${productId}`, query: { id: productId, index: index, heading: heading } }}
      as={`${path}/product/${productId}`}
    >
      <Box
        width={width}
        height="100%"
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
            <PedlarImage src={image} objectFit="contain" />
          </Box>
        )}
        <Typography
          align="center"
          fontSize={"14px"}
          fontWeight={"500"}
          style={{
            color: "#1C1B1F",
            paddingTop: "20px",
            textTransform: "capitalize"
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
          fontSize={"14px"}
          fontWeight={"400"}
          sx={{
            paddingInlineStart: "7px",
            paddingInlineEnd: "7px",
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
                paddingTop: "8px",
                textDecoration: "line-through",
                textDecorationColor: "#1C1B1F87",
                textDecorationThickness: "0.1em",
                color: "#1C1B1F87",
              }}
              fontSize={"12px"}
              fontWeight={"400"}
            >
              {crossPrice}
            </Typography>
            <Typography align="center" style={{ fontSize: "12px", marginLeft: "6px", fontWeight: "400", paddingTop: "8px" }}>{price}</Typography>
          </Box>
        ) : (
          <Typography  align="center" style={{ fontSize: "12px", fontWeight: "400", paddingTop: "8px" }}>{price}</Typography>
        )}
      </Box>
    </Link>
  );
};
CardComponent.propTypes = {
  name: PropTypes.string,
};
export default CardComponent;
