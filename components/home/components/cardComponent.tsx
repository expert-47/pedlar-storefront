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
}: React.PropsWithChildren<Props>) => {
  let productId = id?.split("gid://shopify/Product/")[1];
  const route = useRouter();
  let path = getStoreName(route);

  const onClickCard = () => {
    gtmEvents.selectItem({ ...item, index: index });
  };

  return (
    <Link
      href={{ pathname: `${path}/product/${productId}`, query: { id: productId, index: index } }}
      as={`${path}/product/${productId}`}
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
            <PedlarImage src={image} objectFit="contain" />
          </Box>
        )}
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
          {name?.length > 20 ?  name.substring(0,20) + "..." : name}
        </Typography>
        {crossPrice ? (
          <Box sx={{ display: "flex" }}>
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
          </Box>
        ) : (
          <Typography style={{ fontSize: "16px", fontWeight: "600" }}>{price}</Typography>
        )}
      </Box>
    </Link>
  );
};
CardComponent.propTypes = {
  name: PropTypes.string,
};
export default CardComponent;
