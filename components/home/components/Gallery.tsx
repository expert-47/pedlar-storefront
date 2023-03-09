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
          xs={11.5}
          sm={11.8}
          md={11.6}
          lg={12}
          sx={{
            paddingLeft: { xs: "5px", sm: "5px" },
            paddingRight: { xs: "5px", sm: "5px" },
            justifyContent: "flex-start",
          }}
          columnSpacing={columnSpacing || 10}
          rowSpacing={10}
        >
          {Array.isArray(newAdditionData) &&
            newAdditionData?.map((item: any, index: any) => {
              console.log("item.priceRange", item.priceRange);

              return (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  key={item?.collectionId}
                  sx={{ justifyContent: "space-evenly" }}
                >
                  <CardComponent
                    width={{ xs: "150px", sm: 250, md: 320, lg: 344 }}
                    height={{ xs: "150px", sm: 250, md: 320, lg: 344 }}
                    type={item?.vendor}
                    name={item?.title}
                    price={
                      item.priceRange?.minVariantPrice?.currencyCode === "AUD"
                        ? `$${item.priceRange?.minVariantPrice?.amount}`
                        : item.priceRange?.minVariantPrice?.amount
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
