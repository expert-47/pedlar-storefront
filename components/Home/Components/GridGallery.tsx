import React from "react";
import { Grid } from "@mui/material";
import CardComponent from "./CardComponent";

const GridGallery = () => {
  return (
    <Grid container style={{ justifyContent: "center", paddingTop: "20px", paddingBottom: "20px" }}>
      <Grid container item xs={12} sm={12} md={6} lg={6}>
        <img src="/grid-img1.png" alt="Grid-img1" style={{ width: "100%", height: "88%" }} />
        <CardComponent />
      </Grid>
      <Grid container item gap={2} xs={12} sm={12} md={5.5} lg={6} style={{ justifyContent: "center" }}>
        <Grid item xs={5.5} lg={5.5}>
          <img src="/grid-img2.png" alt="Grid-img2" style={{ width: "100%" }}></img>
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
          <img src="/grid-img5.png" alt="Grid-img5" style={{ width: "100%" }}></img>
          <CardComponent />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GridGallery;
