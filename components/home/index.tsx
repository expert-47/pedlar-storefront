import React from "react";
import BannerImg from "./components/banner";
import BrandListing from "./components/brandListing";
import { Grid } from "@mui/material";
import Bar from "./components/bar";
import GridGallery from "./components/gridGallery";
import BaseFooter from "components/footer/baseFooter";
import Divider from "@mui/material/Divider";
import styles from "styles/home";
import BrandTitles from "./components/brandTitles";

export const Home = () => {
  return (
    <Grid>
      <BannerImg />
      <Divider sx={styles.bannerDivider} />
      <Bar />
      <BrandListing leftHeading="New Additions" rightHeading="SHOP ALL" />
      <GridGallery />
      <GridGallery
        style={{
          flexDirection: "row-reverse",
          display: "flex",
        }}
      />
      <BrandListing leftHeading=" Curated Brands" rightHeading="SHOP BRANDS" />
      <BrandTitles />

      <Divider sx={styles.footerDivider} />
      <BaseFooter />
    </Grid>
  );
};
