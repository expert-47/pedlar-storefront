import React from "react";
import { Box, Grid, Typography, useMediaQuery, Theme } from "@mui/material";
import { CustomGrid } from "components/layout";
import styles from "styles/home";
import { useRouter } from "next/router";
import { NextImage } from "components/pedlarImage";
import { useSelector } from "react-redux";
import Link from "next/link";

const BrandTitles = (props: any) => {
  const route = useRouter();
  const storeName = useSelector((data: any) => data.app.storeName);
  const type = "Brands";
  const isGreaterThanSmall = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  return (
    <>
      <CustomGrid>
        <Grid
          container
          {...props}
          justifyContent={{
            xs:
              props?.curatedBrandsResponse?.length === 1 || props?.curatedBrandsResponse?.length === 3
                ? "flex-start"
                : "center",
          }}
          paddingLeft={{
            xs:
              props?.curatedBrandsResponse?.length === 1
                ? 15
                : props?.curatedBrandsResponse?.length === 3
                ? 15
                : undefined,
          }}
          mt={5}
          columnGap={15}
          rowGap={15}
        >
          {props?.curatedBrandsResponse?.slice(0, 4)?.map((item: any, index: number) => (
            <Grid item xs={5.5} sm={2.8} sx={styles.brandImage} key={item?.vendor + index}>
              <Link
                href={{
                  pathname: `${route.basePath}/${storeName}/products`,
                  query: { dataType: type, itemValue: item.vendor },
                }}
                as={`${route.basePath}/${storeName}/products`}
              >
                <NextImage
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
                  alt={item?.vendor}
                  quality={50}
                  fill={false}
                  width={270}
                  height={150}
                  style={{ position: "relative", width: "100%", height: "100%" }}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </CustomGrid>
    </>
  );
};

export default BrandTitles;
