import React from "react";
import { Grid } from "@mui/material";
import CardComponent from "./cardComponent";

const ReverseGallery = () => {
  return (
    <Grid container xs={12} md={12} lg={12} style={{ paddingTop: "20px", paddingBottom: "20px" }}>
      <Grid container item gap={2} xs={12} sm={12} md={5.5} lg={6.3}>
        <Grid item xs={5.5} lg={5.5}>
          <img src="/grid-img6.png" alt="Grid-img6" style={{ width: "100%" }}></img>
          <CardComponent />
        </Grid>
        <Grid item xs={5.5} lg={5.5}>
          <img src="/grid-img3.png" alt="Grid-img3" style={{ width: "100%" }}></img>
          <CardComponent />
        </Grid>
        <Grid item xs={5.5} lg={5.5}>
          <img src="/grid-img4.png" alt="Grid-img4" style={{ width: "100%" }}></img>
          <CardComponent />
        </Grid>
        <Grid item xs={5.5} lg={5.5}>
          <img src="/grid-img8.png" alt="Grid-img8" style={{ width: "100%" }}></img>
          <CardComponent />
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={12} md={6} lg={5.5}>
        <img src="/grid-img7.png" alt="Grid-img7" style={{ width: "100%", height: "90%" }}></img>
        <CardComponent />
      </Grid>
    </Grid>
  );
};

export default ReverseGallery;
