import React from "react";
import { Box, Grid } from "@mui/material";
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
        // sx={{
        //   paddingLeft: { xs: "15px", sm: "20px" },
        //   paddingRight: { xs: "15px", sm: "20px" },
        // }}
      >
        <Grid container xs={12} sm={12} md={12} lg={12} gap={10} {...props} justifyContent={{ xs: "space-evenly" }}>
          {props?.curatedBrandsResponse?.map((item: any, index: number) => (
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
                  <PedlarImage src={item?.logo_url} alt={"image" + index} quality="100" />
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
