import React from "react";
import BannerImg from "./components/banner";
import BrandListing from "./components/brandListing";
import { Box, Grid, Button } from "@mui/material";
import Bar from "./components/bar";
import BaseFooter from "components/footer/baseFooter";
import Divider from "@mui/material/Divider";
import styles from "styles/home";
import BrandTitles from "./components/brandTitles";
import Gallery from "./components/Gallery";
import HomepagePopup from "components/popups/homepagePopup";
import Link from "next/link";
import { useRouter } from "next/router";
import * as gtmEvents from "utils/gtm";
import { useSelector } from "react-redux";

export const Home = (props: any) => {
  const router = useRouter();
  const slug = router?.query;
  const storeName = useSelector((data: any) => data.app.storeName);

  const data = [];

  for (let i = 0; i < props?.newAdditionData?.length; i = i + 5) {
    data.push(props?.newAdditionData.slice(i, i + 5));
  }
  const onClickShopAll = () => {
    gtmEvents.viewPromotion(storeName, "shop all", "new additions", "3");
  };
  const onClickShopNow = () => {
    gtmEvents.viewPromotion(storeName, "shop brand", "curated brands", "2");
  };
  return (
    <Grid>
      <BannerImg headerData={props?.headerData} />
      <Divider sx={styles.bannerDivider} />
      <HomepagePopup />
      <Box>
        <BrandListing onClick={onClickShopAll} leftHeading="New Additions" rightHeading="SHOP ALL" />
        <Gallery newAdditionData={props?.newAdditionData} />
        <Box
          sx={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "20px",
            zIndex: "-100 !important",
            paddingLeft: { xs: "15px", md: "0px" },
            paddingRight: { xs: "15px", md: "0px" },
          }}
        >
          <Link href={{ pathname: "/products", query: { slug: slug.slug } }} as={`/${slug.slug}/products`}>
            <Grid>
              <Button
                sx={{
                  width: { xs: "100%", sm: "156px" },
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
        <BrandListing onClick={onClickShopNow} leftHeading=" Curated Brands" rightHeading="SHOP BRANDS" />
        <BrandTitles curatedBrandsResponse={props?.curatedBrandsResponse?.slice(0, 4)} />
      </Box>
      <Bar />
      <Divider sx={styles.footerDivider} />
      <BaseFooter />
    </Grid>
  );
};
