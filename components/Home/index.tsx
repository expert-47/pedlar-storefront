import React from "react";
import BannerImg from "./components/banner";
import BrandListing from "./components/brandListing";
import { Grid } from "@mui/material";
import Bar from "./components/bar";
import GridGallery from "./components/gridGallery";
// import BrandTitles from "./Components/BrandTitles";
import BaseFooter from "components/footer/baseFooter";
// import ReverseGallery from "./Components/ReverseGallery";
import Divider from "@mui/material/Divider";
import { useStyles } from "styles/home";

export const Home = () => {
  const { classes, cx } = useStyles();
  return (
    <Grid>
      <BannerImg />
      <Divider className={cx(classes.bannerDivider)} />
      <Bar />
      <BrandListing leftHeading="New Additions" rightHeading="SHOP ALL" />
      <GridGallery />
      <BrandListing leftHeading=" Curated Brands" rightHeading="SHOP BRANDS" />
      <GridGallery
        style={{
          flexDirection: "row-reverse",
          display: "flex",
        }}
      />

      <Divider className={cx(classes.footerDivider)} />
      <BaseFooter />
      {/* <Divider className={cx(classes.footerDivider)} /> */}
    </Grid>
  );
};
