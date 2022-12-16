import React from "react";
import { Grid, GridProps } from "@mui/material";
import CardComponent from "./cardComponent";
import { CustomGrid } from "components/layout";

interface Props {
  
  data: any[];
  columnSpacing?: number;
  newAdditionData?:any[];
  position:boolean;
}
const Gallery = ({  position , newAdditionData,  columnSpacing = 10 }: Props) => {

  
  return (
    <CustomGrid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container sm={12} columnSpacing={10} direction={position === true ? "row-reverse" : "row"}  >
        <Grid container item xs={12} sm={12} md={6} lg={6} columnSpacing={columnSpacing || 10} rowSpacing={10}>
          {newAdditionData?.slice(1, 5).map((item, index) => (
            <Grid item xs={6} lg={6}>
              <CardComponent
                key={index}
                name={item?.title}
                type={item?.productType}
                price={
                  newAdditionData?.[index].priceRange?.maxVariantPrice?.currencyCode === "AUD"
                    ? `A$${newAdditionData?.[index].priceRange?.maxVariantPrice?.amount}`
                    : newAdditionData?.[index].priceRange?.maxVariantPrice?.amount
                }
                image={item?.featuredImage?.transformedSrc}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container item xs={12} sm={12} md={6} lg={6}>
          <CardComponent
            name={newAdditionData?.[0].title}
            type={newAdditionData?.[0].productType}
            image={newAdditionData?.[0].featuredImage?.transformedSrc}
            price={
              newAdditionData?.[0].priceRange?.maxVariantPrice?.currencyCode === "AUD"
                ? `A$${newAdditionData?.[0].priceRange?.maxVariantPrice?.amount}`
                : newAdditionData?.[0].priceRange?.maxVariantPrice?.amount
            }
          />
        </Grid>
      </Grid>
    </CustomGrid>
  );
};

export default Gallery;
