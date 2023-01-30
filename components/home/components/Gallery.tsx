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
  return (
    <CustomGrid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ justifyContent: "center", padding: "1px" }}
        columnSpacing={columnSpacing || 10}
        rowSpacing={10}
      >
        {newAdditionData?.map((item: any, index: any) => {
          return (
            <Grid item xs={5.9} sm={3.99} md={3.99} lg={3.99} xl={3.99} key={item?.collectionId}>
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
    </CustomGrid>
  );
};

export default Gallery;
