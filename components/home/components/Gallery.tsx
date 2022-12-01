import React from "react";
import { Grid, GridProps } from "@mui/material";
import CardComponent from "./cardComponent";
import { CustomGrid } from "components/layout";

interface Props {
  girdProps?: GridProps;
  data: any[];
  columnSpacing?: number;
}
const Gallery = ({ girdProps, data, columnSpacing = 10 }: Props) => {
  return (
    <CustomGrid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container sm={12} columnSpacing={10} {...girdProps}>
        <Grid container item xs={12} sm={12} md={6} lg={6} columnSpacing={columnSpacing || 10} rowSpacing={10}>
          {data.slice(1, 5).map((item) => (
            <Grid item xs={6} lg={6}>
              <CardComponent name={item.name} type={item.type} price={item.price} image={item.imgPath} />
            </Grid>
          ))}
        </Grid>
        <Grid container item xs={12} sm={12} md={6} lg={6}>
          <CardComponent
            crossPrice={data[0].crossPrice}
            name={data[0].name}
            type={data[0].type}
            image={data[0].imgPath}
            price={data[0].price}
          />
        </Grid>
      </Grid>
    </CustomGrid>
  );
};

export default Gallery;
