import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { CustomGrid } from "components/layout";
import styles from "styles/home";
import { useRouter } from "next/router";
import Link from "next/link";
import PedlarImage from "components/pedlarImage";
import { useSelector } from "react-redux";

const BrandTitles = (props: any) => {
  const route = useRouter();
  const storeName = useSelector((data: any) => data.app.storeName);

  const navigateToProduct = (data: any) => {
    const type = "Brands";
    route.push(
      {
        pathname: `${route.basePath}/${storeName}/products`,
        query: { dataType: type, itemValue: data.vendor },
      },
      `${route.basePath}/${storeName}/products`,
    );
  };
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
        <Grid
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          gap={10}
          {...props}
          justifyContent={{ xs: "flex-start" }}
          paddingLeft={{ xs: "20px", sm: "10px" }}
          sx={{ columnGap: "15px" }}
        >
          {props?.curatedBrandsResponse?.slice(0, 4)?.map((item: any, index: number) => (
            <Box
              onClick={() => {
                navigateToProduct(item);
              }}
              sx={styles.brandImage}
              style={{
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "1",
                cursor: "pointer",
              }}
            >
              <PedlarImage
                renderError={() => {
                  return (
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
                  );
                }}
                src={item?.logo_url}
                alt={item?.vendor + index}
                quality="100"
              />
            </Box>
          ))}
        </Grid>
      </CustomGrid>
    </>
  );
};

export default BrandTitles;
