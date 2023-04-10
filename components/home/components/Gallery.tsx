import React from "react";
import { Grid } from "@mui/material";
import CardComponent from "./cardComponent";
import { CustomGrid } from "components/layout";

interface Props {
  columnSpacing?: number;
  newAdditionData?: any[];
  heading: string;
}
const Gallery = ({ newAdditionData, heading }: Props) => {
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
            justifyContent: "flex-start",
            margin: "0px auto 0px auto",
          }}
          rowSpacing={20}
          alignItems={"baseline"}
        >
          {Array.isArray(newAdditionData) &&
            newAdditionData?.map((item: any, index) => {
              const prices = item.priceRange?.minVariantPrice?.amount.endsWith(".0")
                ? Math.round(item.priceRange?.minVariantPrice?.amount)
                : item.priceRange?.minVariantPrice?.amount;

              return (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  key={item?.collectionId}
                  sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
                >
                  <CardComponent
                    width={{ xs: "185px", sm: 250, md: 320, lg: 380 }}
                    height={{ xs: "230px", sm: 312, md: 400, lg: 450 }}
                    type={item?.vendor?.toLowerCase()}
                    name={item?.title?.toLowerCase()}
                    price={item.priceRange?.minVariantPrice?.currencyCode === "AUD" ? `$${prices}` : prices}
                    image={item?.featuredImage?.src}
                    id={item?.id}
                    item={item}
                    index={index}
                    heading={heading}
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
