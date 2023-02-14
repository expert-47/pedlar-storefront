import React from "react";
import BannerImg from "./components/banner";
import BrandListing from "./components/brandListing";
import { Box, Grid, useTheme, Button } from "@mui/material";
import Bar from "./components/bar";
import BaseFooter from "components/footer/baseFooter";
import Divider from "@mui/material/Divider";
import styles from "styles/home";
import BrandTitles from "./components/brandTitles";
import Gallery from "./components/Gallery";
import HomepagePopup from "components/popups/homepagePopup";
import Link from "next/link";
import { useRouter } from "next/router";

export const Home = (props: any) => {
  const theme = useTheme();
  const router = useRouter();
  const slug = router?.query;

  const data = [];

  for (let i = 0; i < props?.newAdditionData?.length; i = i + 5) {
    data.push(props?.newAdditionData.slice(i, i + 5));
  }

  return (
    <Grid>
      <BannerImg headerData={props?.headerData} />

      <Divider sx={styles.bannerDivider} />
      <HomepagePopup />
      <Bar />
      <Box
      // sx={{
      //   paddingLeft: { xs: theme.spacing(20), sm: theme.spacing(40), md: theme.spacing(10), lg: theme.spacing(5) },
      //   paddingRight: { xs: theme.spacing(20), sm: theme.spacing(40), md: theme.spacing(80), lg: theme.spacing(5) },
      // }}
      >
        <BrandListing leftHeading="New Additions" rightHeading="SHOP ALL" />

        <Gallery newAdditionData={props?.newAdditionData} />
        <Box sx={{ textAlign: "center", marginTop: "20px", marginBottom: "20px", zIndex: "-100 !important" }}>
          <Link href={{ pathname: "/products", query: { slug: slug.slug } }} as={`/${slug.slug}/products`}>
            <Grid>
              <Button
                sx={{
                  width: { xs: "335px", sm: "156px" },
                  height: "46px",
                  backgroundColor: "primary.dark",
                  color: "primary.main",
                  borderRadius: "666px",
                  fontWeight: "600",
                  textTransform: "none",
                  padding: "10px 32.5px",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                }}
              >
                Shop all
              </Button>
            </Grid>
          </Link>
        </Box>

        <BrandListing leftHeading=" Curated Brands" rightHeading="SHOP BRANDS" />
        <BrandTitles curatedBrandsResponse={props?.curatedBrandsResponse} />
      </Box>
      <Divider sx={styles.footerDivider} />
      <BaseFooter />
    </Grid>
  );
};
