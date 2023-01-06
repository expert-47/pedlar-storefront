import React from "react";
import { Grid } from "@mui/material";
import CardComponent from "./cardComponent";
import { CustomGrid } from "components/layout";

interface Props {
  // data: any[];
  columnSpacing?: number;
  newAdditionData?: any[];
  // position:boolean;
}
const Gallery = ({ newAdditionData, columnSpacing = 10 }: Props) => {

  console.log("newAdditionData card component" , newAdditionData);
  
  return (
    <CustomGrid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container item xs={12} sm={12} md={12} lg={12} columnSpacing={columnSpacing || 10} rowSpacing={10}>
        {newAdditionData?.map((item: any, index: any) => {
          return (
            <Grid item xs={5.9} sm={5.9} md={3.8} lg={3.8} xl={3.8} key={item?.collectionId}>
              <CardComponent
                name={item?.title}
                type={item?.productType}
                price={
                  newAdditionData?.[index].priceRange?.maxVariantPrice?.currencyCode === "AUD"
                    ? `A$${newAdditionData?.[index].priceRange?.maxVariantPrice?.amount}`
                    : newAdditionData?.[index].priceRange?.maxVariantPrice?.amount
                }
                image={item?.featuredImage?.transformedSrc}
                id={item?.id}
              />
            </Grid>
          );
        })}
      </Grid>
      {/* <Grid container item xs={12} sm={12} md={6} lg={6}>
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
        </Grid> */}
      {/* </Grid> */}
    </CustomGrid>
  );
};

export default Gallery;
