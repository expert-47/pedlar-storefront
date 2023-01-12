import React from "react";
import { Box, Grid, GridProps } from "@mui/material";
import { CustomGrid } from "components/layout";
import styles from "styles/home";
import { useRouter } from "next/router";
import Link from "next/link";
import PedlarImage from "components/pedlarImage";

const BrandTitles = (props: any) => {
  const route = useRouter();

  return (
    <>
      <CustomGrid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "0",
        }}
      >
        <Grid container xs={12} sm={12} md={12} lg={12} gap={12} {...props} style={{ justifyContent: "space-between" }}>
          {props?.curatedBrandsResponse?.map((item: any, index: number) => (
            <>
              <Box
                sx={styles.brandImage}
                style={{
                  border: "1px solid #C0C0C0",
                  boxShadow: "0 4px 6px -4px grey",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: "-1",
                }}
              >
                <Link
                  as={`${route?.query?.slug}/products`}
                  href={{
                    pathname: `${route?.query?.slug}/products`,
                    query: { dataType: "Brands", itemValue: item?.vendor },
                  }}
                >
                  <PedlarImage src={item?.logo_url} alt={"image" + index} quality="1" />
                </Link>
              </Box>
            </>
          ))}
        </Grid>
      </CustomGrid>
    </>
  );
};

export default BrandTitles;
