import React from "react";
import { useStyles } from "styles/home";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { CustomGrid } from "components/Layout/layout";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const BrandListing = (props: { leftHeading: string; rightHeading: string }) => {
  const { classes, cx } = useStyles();
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
        lg={12}
        sm={11.5}
        md={10}
        paddingX={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
        paddingY={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
      >
        <Grid container item md={10.5} lg={10} xs={7} sm={9}>
          <Typography className={cx(classes.gridtag1typo1)}>{leftHeading}</Typography>
        </Grid>
        <Grid
          container
          item
          xs={5}
          sm={3}
          md={1.5}
          lg={2}
          paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
          justifyContent={"center"}
          alignItems="center"
        >
          <Typography className={cx(classes.gridtag1typo2)}>{rightHeading}</Typography>
          <ArrowRightAltIcon />
        </Grid>
      </Grid>
    </CustomGrid>
  );
};

export default BrandListing;
