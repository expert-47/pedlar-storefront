import React from "react";
import { Grid, GridProps } from "@mui/material";
import CardComponent from "./cardComponent";
import { CustomGrid } from "components/layout";

interface Props {
  girdProps?: GridProps;
  data: any[];
}
const ReverseGallery = ({ girdProps, data}: Props) => {
  return (
    <CustomGrid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container sm={12} columnSpacing={10} {...girdProps}>
        <Grid container item xs={12} sm={12} md={6} lg={6} columnSpacing={10} rowSpacing={10}>
          {data.slice(1,5).map((item) => (
            <Grid item xs={6} lg={6}>
              <Grid item height={{ lg: "224px", md: "224px", sm: "224px", xs: "158px" }} xs={12}>
                <img src={item.imgPath} style={{ width: "100%", height: "100%" }}></img>
              </Grid>
              <CardComponent name={item.name} type={item.type} price={item.price} />
            </Grid>
          ))}
        </Grid>
        <Grid container item xs={12} sm={12} md={6} lg={6}>
          <Grid item height={{ lg: "534px", md: "534px", sm: "390px", xs: "390px" }} xs={12}>
            <img src={data[0].imgPath} alt="Grid-img7" style={{ width: "100%", height: "100%" }}></img>
          </Grid>
          <CardComponent name={data[0].name} type={data[0].type} price={data[0].price} />
        </Grid>
      </Grid>
    </CustomGrid>
  );
};

export default ReverseGallery;
