import React from "react";
import { Grid, Box, Button } from "@mui/material";
import CardComponent from "./cardComponent";
import styles from "styles/home";
import { CustomGrid } from "components/layout";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  // data: any[];
  columnSpacing?: number;
  newAdditionData?: any[];
  // position:boolean;
}
const Gallery = ({ newAdditionData, columnSpacing = 10 }: Props) => {
  const router = useRouter();
  const slug = router?.query;
  return (
<<<<<<< HEAD
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
          sx={{ justifyContent: "center", padding: "2px" }}
          columnSpacing={columnSpacing || 10}
          rowSpacing={10}
        >
          {newAdditionData?.map((item: any, index: any) => {
            return (
              <Grid item xs={5.9} sm={3.8} md={3.8} lg={3.8} xl={3.8} key={item?.collectionId}>
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
      <Box sx={{ textAlign: "center", marginTop: "20px", marginBottom: "20px", zIndex: "-100 !important" }}>
        <Link href={{ pathname: "/products", query: { slug: slug.slug } }} as={`/${slug.slug}/products`}>
          <Grid>
            <Button
              sx={{
                width: { xs: "100%", sm: "150px" },
                backgroundColor: "primary.dark",
                color: "primary.main",
                borderRadius: "666px",
                fontWeight: "600",
                textTransform: "none",
                padding: "10px 32.5px",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Shop all
            </Button>
          </Grid>
        </Link>
      </Box>
    </>
=======
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
>>>>>>> bdafc648dab786460c68237a1012079ee020af4e
  );
};

export default Gallery;
