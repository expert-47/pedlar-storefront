import React from "react";
import { Box, Grid, GridProps, useTheme } from "@mui/material";
import { CustomGrid } from "components/layout";
import { brands } from "./data";
import styles from "styles/home";

const BrandTitles = (props: GridProps) => {
  const theme = useTheme();

  return (
    <CustomGrid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        gap={10}
        paddingX={{ xs: theme.spacing(20),sm: theme.spacing(35), md: theme.spacing(88), lg: theme.spacing(40) }}
        justifyContent={{ xs: "flex-start", sm: "flex-start", md: "flex-start", lg: "flex-start" }}
        {...props}
      >
        {brands.map((item) => (
          <Box
            sx={styles.brandImage}
            style={{
              border: "1px solid rgba(0,0,0,0.4)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={item} alt="bordergrid" />
          </Box>
        ))}
      </Grid>
    </CustomGrid>
  );
};

export default BrandTitles;
