import React from "react";
import BannerImg from "./Components/BannerImg";
import ProductListing from "./Components/ProductListing";
import BrandListing from "./Components/BrandListing";
import { Grid } from "@mui/material";
import Bar from "./Components/Bar";
import GridGallery from "./Components/GridGallery";
// import BrandTitles from "./Components/BrandTitles";
import BaseFooter from "../Footer/BaseFooter";
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
      <BrandListing leftHeading="New Additions" rightHeading="Shop ALL" />

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
