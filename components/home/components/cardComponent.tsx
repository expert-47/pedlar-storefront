import React from "react";
import PropTypes from "prop-types";

import { Typography, Grid } from "@mui/material";
interface Props {
  name: string;
  type: string;
  price: string;
}

const CardComponent = ({ name, type, price }: React.PropsWithChildren<Props>) => {
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
            color: "#1C1B1F"
          }}
        >
          {name}
        </Typography>
        <Typography style={{ fontSize: "16px", fontWeight: "600", textOverflow: "wrap", color: "#1C1B1F" }}>{type}</Typography>
        <Typography style={{ fontSize: "16px", fontWeight: "600", color: "#1C1B1F" }}>{price}</Typography>
      </Grid>
    </>
  );
};
CardComponent.propTypes = {
  name: PropTypes.string,
};
export default CardComponent;
