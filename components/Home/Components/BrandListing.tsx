import React from "react";
import { useStyles } from "../Style";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { CustomGrid } from "components/Layout/layout";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const BrandListing = () => {
  const { classes, cx } = useStyles();
  return (
    <CustomGrid>
      <Grid container item lg={12} style={{ marginTop: "50px" }}>
        <Grid container item xs={9} sm={10} md={10.5} lg={11}>
          <Typography className={cx(classes.gridtag1typo1)}>Curated Brands</Typography>
        </Grid>
        <Grid container item xs={3} sm={2} md={1.5} lg={1} style={{ alignItems: "center" }}>
          <Typography className={cx(classes.gridtag1typo2)}>SHOP BRANDS</Typography>
          <ArrowRightAltIcon />
        </Grid>
      </Grid>
    </CustomGrid>
  );
};

export default BrandListing;
