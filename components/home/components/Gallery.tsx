import React from "react";
import { Grid, GridProps } from "@mui/material";
import CardComponent from "./cardComponent";
import { CustomGrid } from "components/layout";

interface Props {
  girdProps?: GridProps;
  data: any[];
  columnSpacing?: number;
}
const Gallery = ({ girdProps, data,newAdditionData,  columnSpacing = 10 }: Props) => {

  // console.log("newAdditionData  gallery...." , newAdditionData?.[0].featuredImage?.transformedSrc);
  
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
          {newAdditionData?.slice(1 , 5).map((item , index) => (
            <Grid item xs={6} lg={6}>
              <CardComponent
              key={item?.id} 
              
              name={item?.title} type={item?.productType}  
              
              price={newAdditionData?.[0].priceRange?.maxVariantPrice?.currencyCode === "AUD" ? 
              `A$${newAdditionData?.[0].priceRange?.maxVariantPrice?.amount}` : newAdditionData?.[0].priceRange?.maxVariantPrice?.amount
            }
              
              image={item?.featuredImage?.transformedSrc}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container item xs={12} sm={12} md={6} lg={6}>
          <CardComponent
            // crossPrice={data[0].crossPrice}
            name={newAdditionData?.[0].title}
            type={
              newAdditionData?.[0].productType
            }
            image={newAdditionData?.[0].featuredImage?.transformedSrc}
            price={      newAdditionData?.[0].priceRange?.maxVariantPrice?.currencyCode === "AUD" ? 
            `A$${newAdditionData?.[0].priceRange?.maxVariantPrice?.amount}` : newAdditionData?.[0].priceRange?.maxVariantPrice?.amount
          }
          />
        </Grid>
      </Grid>
    </CustomGrid>
  );
};

export default Gallery;
