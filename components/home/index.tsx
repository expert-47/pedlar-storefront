import React from "react";
import BannerImg from "./components/banner";
import BrandListing from "./components/brandListing";
import { Box, Grid, useTheme } from "@mui/material";
import Bar from "./components/bar";
import BaseFooter from "components/footer/baseFooter";
import Divider from "@mui/material/Divider";
import styles from "styles/home";
import BrandTitles from "./components/brandTitles";
import Gallery from "./components/Gallery";
import HomepagePopup from "components/popups/homepagePopup";

export const Home = (props: any) => {
  const theme = useTheme();

  const data = [];

  for (let i = 0; i < props?.newAdditionData?.length; i = i + 5) {
    data.push(props?.newAdditionData.slice(i, i + 5));
  }

  return (
    <Grid>
      <BannerImg headerData={props?.headerData} />

      <Divider sx={styles.bannerDivider} />
      {/* <HomepagePopup /> */}
      <Bar />
      <Box
      // sx={{
      //   paddingLeft: { xs: theme.spacing(20), sm: theme.spacing(40), md: theme.spacing(10), lg: theme.spacing(5) },
      //   paddingRight: { xs: theme.spacing(20), sm: theme.spacing(40), md: theme.spacing(80), lg: theme.spacing(5) },
      // }}
      >
        <BrandListing leftHeading="New Additions" rightHeading="SHOP ALL" />

        <Gallery newAdditionData={props?.newAdditionData} />

        <BrandListing leftHeading=" Curated Brands" rightHeading="SHOP BRANDS" />
        <BrandTitles curatedBrandsResponse={props?.curatedBrandsResponse} />
      </Box>
      <Divider sx={styles.footerDivider} />
      <BaseFooter />
    </Grid>
  );
};
