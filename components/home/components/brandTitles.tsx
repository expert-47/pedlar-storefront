import React from "react";
import { Box, Grid, Typography } from "@mui/material";
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

  return (
    <>
      <CustomGrid>
        <Grid
          container
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
          columnGap={10}
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
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    height: {
                      lg: 165,
                      md: 140,
                      sm: 125,
                      xs: 115,
                    },
                  }}
                >
                  <NextImage
                    renderError={() => {
                      return (
                        <Box
                          sx={{
                            color: "black",
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            fontSize={"16px"}
                            sx={{
                              textAlign: "center",
                              width: { xs: 145, sm: 160, md: 230 },
                              wordBreak: "break-word",
                            }}
                          >
                            {item?.vendor}
                          </Typography>
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
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </CustomGrid>
    </>
  );
};

export default BrandTitles;
