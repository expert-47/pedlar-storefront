import React from "react";
import PropTypes from "prop-types";

import { Typography, Grid } from "@mui/material";
interface Props {
  name: string;
  type: string;
  price: string;
  crossPrice?: string;
}

const CardComponent = ({ name, type, price, crossPrice }: React.PropsWithChildren<Props>) => {
  return (
    <>
      <Grid>
        <Typography
          style={{
            fontSize: "12px",
            fontWeight: "600",
            textTransform: "uppercase",
            paddingTop: "8px",
            lineHeight: "16px",
          }}
        >
          {name}
        </Typography>
        <Typography style={{ fontSize: "16px", fontWeight: "600", textOverflow: "wrap" }}>{type}</Typography>
        {crossPrice ? <Grid sx={{ display: "flex" }}>
          <Typography style={{ fontSize: "16px", fontWeight: "600", textDecoration: "line-through",textDecorationColor: "#1C1B1F", textDecorationThickness: "0.05em",
 color: "#1C1B1F" }}>{crossPrice}</Typography>
          <Typography style={{ fontSize: "16px", marginLeft: "6px", fontWeight: "600" }}>{price}</Typography>
        </Grid> :
        <Typography style={{ fontSize: "16px", fontWeight: "600" }}>{price}</Typography>

        }
      </Grid>
    </>
  );
};
CardComponent.propTypes = {
  name: PropTypes.string,
};
export default CardComponent;
