import React from "react";
import { Typography, Grid } from "@mui/material";

const CardComponent = () => {
  return (
    <>
      <Grid>
        <Typography style={{ fontSize: "12px", fontWeight: "600" }}>LOW CLASSIC</Typography>
        <Typography style={{ fontSize: "16px", fontWeight: "600" }}>Green Polyester Blazer</Typography>
        <Typography style={{ fontSize: "16px", fontWeight: "600" }}>$365</Typography>
      </Grid>
    </>
  );
};

export default CardComponent;
