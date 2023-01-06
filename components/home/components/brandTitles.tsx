import React from "react";
import { Box, Grid, GridProps } from "@mui/material";
import { CustomGrid } from "components/layout";
import { brands } from "./data";
import styles from "styles/home";
import Image from "next/image";
const BrandTitles = (props: GridProps) => {
  return (
    <>
      <CustomGrid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container xs={12} sm={12} md={12} lg={12} gap={12} {...props} style={{ justifyContent: "space-between" }}>
          {brands.map((item) => (
            <>
              <Box
                sx={styles.brandImage}
                style={{
                  border: "1px solid #C0C0C0",
                  boxShadow: "0 4px 6px -4px grey",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={item} alt="bordergrid" />
              </Box>
            </>
          ))}
        </Grid>
      </CustomGrid>
    </>
  );
};

export default BrandTitles;
