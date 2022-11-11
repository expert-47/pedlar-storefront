import React from "react";
import PropTypes from "prop-types";

import { Typography, Grid, Box } from "@mui/material";
import Link from "next/link";
interface Props {
  name: string;
  type: string;
  price: string;
  image?: string;
  crossPrice?:string
}

const CardComponent = ({ name, type, price, image,crossPrice }: React.PropsWithChildren<Props>) => {
  return (
    <Link href={"/product"}>
      <Box
      style={{
        cursor: "pointer",
        width:"100%"
      }}
      >
        {image && (
          <Grid item xs={12}>
            <img src={image} style={{ width: "100%", height: "100%" }}></img>
          </Grid>
        )}
        <Grid>
          <Typography
            style={{
              fontSize: "12px",
              fontWeight: "600",
              textTransform: "uppercase",
              paddingTop: "8px",
              lineHeight: "16px",
              color: "#1C1B1F",
            }}
          >
            {name}
          </Typography>
          <Typography style={{ fontSize: "16px", fontWeight: "600", textOverflow: "wrap", color: "#1C1B1F" }}>
            {type}
          </Typography>
          <Typography style={{ fontSize: "16px", fontWeight: "600", color: "#1C1B1F" }}>{price}</Typography>
          {crossPrice ? <Grid sx={{ display: "flex" }}>
          <Typography style={{ fontSize: "16px", fontWeight: "600", textDecoration: "line-through",textDecorationColor: "#1C1B1F", textDecorationThickness: "0.05em",
 color: "#1C1B1F" }}>{crossPrice}</Typography>
          <Typography style={{ fontSize: "16px", marginLeft: "6px", fontWeight: "600" }}>{price}</Typography>
        </Grid> :
        <Typography style={{ fontSize: "16px", fontWeight: "600" }}>{price}</Typography>

        }
        </Grid>
      </Box>
    </Link>
  );
};
CardComponent.propTypes = {
  name: PropTypes.string,
};
export default CardComponent;
