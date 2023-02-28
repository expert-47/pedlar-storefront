import React from "react";
import { Box, Grid, Typography } from "@mui/material";
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
        <Grid container xs={12} sm={12} md={12} lg={12} gap={10} {...props} justifyContent={{ xs: "space-evenly" }}>
          {props?.curatedBrandsResponse?.map((item: any, index: number) => (
              console.log("logo_url",item?.logo_url),
<>
              <Box
                sx={styles.brandImage}
                style={{
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "white",
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
                  {item?.logo_url ? (
                    <PedlarImage src={item?.logo_url} alt={item?.vendor + index} quality="100" />
                  ) : (
                    <>
                      <Box
                        sx={{
                          color: "black",
                          height: "150px",
                          width: "280px",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                        }}
                      >
                        <Typography fontSize={"16px"}>{item?.vendor}</Typography>
                      </Box>
                    </>
                  )}
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
