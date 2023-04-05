import React from "react";
import styles from "styles/home";
import Grid from "@mui/material/Grid";
import { Typography, useTheme } from "@mui/material";
import { CustomGrid } from "components/layout";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ProductListing = () => {
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
        sm={11.5}
        md={10}
        lg={12}
        paddingX={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
        paddingY={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
      >
        <Grid container item xs={8} sm={10} md={10.5} lg={11}>
          <Typography sx={styles.gridtag1typo1}>New Additions</Typography>
        </Grid>
        <Grid
          container
          item
          xs={4}
          sm={2}
          md={1.5}
          lg={1}
          paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
          justifyContent={"center"}
          alignItems="center"
        >
          <Typography sx={styles.gridtag1typo2}>Shop ALL</Typography>
          <ArrowRightAltIcon />
        </Grid>
      </Grid>
    </CustomGrid>
  );
};

export default ProductListing;
