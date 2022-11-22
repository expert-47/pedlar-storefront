import { Box, Grid } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <img src="/home-banner1.png" alt="home banner" style={{ width: "100%", paddingTop: "108px" }}></img>
      </Grid>
    </Box>
  );
};

export default Banner;
