import React from "react";
import { Grid, GridProps } from "@mui/material";
import CardComponent from "./cardComponent";
import { CustomGrid } from "components/layout";

const reverseImages = [
  {
    label: "Coat",
    imgPath: "/grid-img2.png",
  },
  {
    label: "Coat",
    imgPath: "/grid-img3.png",
  },
  {
    label: "Coat",
    imgPath: "/grid-img4.png",
  },
  {
    label: "Coat",
    imgPath: "/grid-img8.png",
  },
];

const ReverseGallery = (props: GridProps) => {
  return (
    <CustomGrid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container sm={12} columnSpacing={10} {...props}>
        <Grid container item xs={12} sm={12} md={6} lg={6}>
          <Grid item height={{ lg: "534px", md: "534px", sm: "390px", xs: "390px" }} xs={12}>
            <img src="/grid-img1.png" alt="Grid-img1" style={{ width: "100%", height: "100%" }}></img>
          </Grid>
          <CardComponent
            name={"Low Classic"}
            type={"Green Polyester Blazer"}
            price="$365"
          />
        </Grid>

        <Grid container item xs={12} sm={12} md={6} lg={6} columnSpacing={10} rowSpacing={10}>
          {reverseImages.map((item) => (
            <Grid item xs={6} lg={6}>
              <Grid item height={{ lg: "224px", md: "224px", sm: "158px", xs: "158px" }} xs={12}>
                <img src={item.imgPath} style={{ width: "100%", height: "100%" }}></img>
              </Grid>
              <CardComponent name={"Veja X Marni"} type={"35s"} price="$320" />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </CustomGrid>
  );
};

export default ReverseGallery;
