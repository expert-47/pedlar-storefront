import React from "react";
import { Grid } from "@mui/material";
import CardComponent from "./cardComponent";
import { CustomGrid } from "components/layout";

interface Props {
  columnSpacing?: number;
  newAdditionData?: any[];
}
const Gallery = ({ newAdditionData, columnSpacing = 10 }: Props) => {
  return (
    <>
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
          sx={{
            paddingLeft: { xs: "15px", sm: "10px" },
            paddingRight: { xs: "5px", sm: "10px" },
            justifyContent: "space-around",
          }}
          columnSpacing={columnSpacing || 10}
          rowSpacing={10}
        >
          {newAdditionData?.map((item: any, index: any) => {
            return (
              <Grid item xs={6} sm={3.8} md={3.8} lg={3.8} xl={3.8} key={item?.collectionId}>
                <CardComponent
                  name={item?.title}
                  type={item?.vendor}
                  price={
                    item.priceRange?.maxVariantPrice?.currencyCode === "AUD"
                      ? `$${item.priceRange?.maxVariantPrice?.amount}`
                      : item.priceRange?.maxVariantPrice?.amount
                  }
                  image={item?.featuredImage?.transformedSrc}
                  id={item?.id}
                  item={item}
                />
              </Grid>
            );
          })}
        </Grid>
      </CustomGrid>
    </>
  );
};

export default Gallery;
