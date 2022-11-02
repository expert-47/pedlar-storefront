import React from "react";
import styles from "styles/home";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { CustomGrid } from "components/layout";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BrandListing = (props: { leftHeading: string; rightHeading: string }) => {
  const theme = useTheme();
  const { leftHeading, rightHeading } = props;
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
        item
        xs={11}
        sm={11}
        md={11}
        lg={11}
        justifyContent={"center"}
        alignItems={"center"}
        paddingX={{ xs: theme.spacing(0), md: theme.spacing(20), lg: theme.spacing(40) }}
        paddingY={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(30) }}
      >
        <Grid container item xs={7} sm={9} md={9} lg={9}>
          <Typography sx={styles.gridtag1typo1}>{leftHeading}</Typography>
        </Grid>
        <Grid
          container
          item
          xs={5}
          sm={3}
          md={3}
          lg={3}
          justifyContent={"flex-end"}
          alignItems={"center"}
          paddingX={{ xs: theme.spacing(0), md: theme.spacing(40), lg: theme.spacing(10) }}
          // paddingY={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(20) }}
        >
          <Typography sx={styles.gridtag1typo2}>{rightHeading}</Typography>
          <ArrowForwardIcon sx={styles.arrowIcon} />
        </Grid>
      </Grid>
    </CustomGrid>
  );
};

export default BrandListing;
