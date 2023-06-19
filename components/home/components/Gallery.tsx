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
              //   assign the value of price according to the requirement of the client
              //(remove .0 if exists , and if there is one decimal and that
              //  decimal is not zero put the extra zero with that decimal for example 1.1 should be 1.10)
              const prices = item.priceRange?.minVariantPrice?.amount;
              let formattedPrice = prices;

              const decimalPart = formattedPrice.split(".")[1];
              if (decimalPart && decimalPart.length === 1 && decimalPart !== "0") {
                formattedPrice += "0";
              } else if (decimalPart === "0") {
                formattedPrice = Math.round(formattedPrice);
              }

              return (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  key={item?.collectionId}
                  sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                  <CardComponent
                    width={{ xs: "185px", sm: 250, md: 320, lg: 380 }}
                    height={{ xs: "230px", sm: 312, md: 400, lg: 450 }}
                    type={item?.vendor}
                    name={item?.title?.toLowerCase()}
                    price={
                      item.priceRange?.minVariantPrice?.currencyCode === "AUD" ? `$${formattedPrice}` : formattedPrice
                    }
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
