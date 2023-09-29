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
import Link from "next/link";
import { useRouter } from "next/router";
import * as gtmEvents from "utils/gtm";
import { useSelector } from "react-redux";

export const Home = (props: any) => {
  const router = useRouter();
  const slug = router?.query;
  const storeName = useSelector((data: any) => data.app.storeName);

  const onClickShopAll = () => {
    gtmEvents.selectPromission(storeName, "shop all", "my latest picks", "3", "abc12ddd3");
  };
  const onClickShopNow = () => {
    gtmEvents.selectPromission(storeName, "shop brand", "curated brands", "2", "abc12d3");
  };

  return (
    <Grid>
      <BannerImg headerData={props?.headerData} isMobile={props?.isMobile} />
      <Divider sx={styles.bannerDivider} />
      <Box>
        <BrandListing onClick={onClickShopAll} leftHeading="My Latest Picks" rightHeading="SHOP ALL" />
        <Gallery newAdditionData={props?.newAdditionData} heading={"my latest picks"} />
        <Box
          sx={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "50px",
            zIndex: "-100 !important",
            paddingLeft: { xs: "10px", md: "0px" },
            paddingRight: { xs: "10px", md: "0px" },
          }}
        >
          <Link
            href={{ pathname: `/${slug.slug}/products`, query: { slug: slug.slug } }}
            as={`/${slug.slug}/products`}
            style={{ textDecoration: "none" }}
          >
            <Grid>
              <Button
                sx={{
                  width: { xs: "100%", sm: "335px" },
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
        <BrandTitles curatedBrandsResponse={props?.curatedBrandsResponse} />
      </Box>
      <Bar />
      <Divider sx={styles.footerDivider} />
      <BaseFooter />
    </Grid>
  );
};

export default Home;
