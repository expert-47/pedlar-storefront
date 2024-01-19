//package imports
import React from "react";
//components
import { NextImage } from "components/pedlarImage";
//assets
import CreatorShopBanner from "../../public/creator_shop_banner.png";
import CreatorShopBannerMobile from "../../public/creator_shop_banner_mobile.png";

import { Box, useMediaQuery, Theme, Paper, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
//styles
import { styles } from "./styles";
const CreateShop = () => {
  const router = useRouter();
  const slug = router?.query;

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <Box>
      {!isMobile ? (
        <>
          <Box sx={styles.desktopMainBox} className="creatorShopMainImageBox">
            <NextImage src={CreatorShopBanner} alt="Creator shop banner" layout="default"></NextImage>
            <Box sx={styles.paperComponentMainBox}>
              <Paper elevation={1} sx={styles.desktopPaperStyling}>
                <Box sx={styles.textAlignCenter}>
                  <Typography color={"#1C1B1F"} sx={styles.desktopPaperTypography}>
                    Discover & shop <span style={{ color: "#8652FF" }}>40% off</span> everything in exchange for content
                    creation
                  </Typography>
                </Box>
                <Link
                  href={{ pathname: `/${slug.slug}/products`, query: { slug: slug.slug } }}
                  as={`/${slug.slug}/products`}
                  style={{ textDecoration: "none" }}
                >
                  <Button sx={styles.desktopButton}>Shop now</Button>
                </Link>
              </Paper>
            </Box>
          </Box>
          <Box sx={styles.desktopTypographyBox}>
            <Typography sx={styles.desktopTypographyPremium}>
              Shop top premium brands at unheard of discounts in exchange for posting a Reel or a Tiktok
            </Typography>
          </Box>
        </>
      ) : (
        <Box>
          <Box sx={styles.mobileImageBox}>
            <NextImage src={CreatorShopBannerMobile} alt="Creator shop banner" layout="default"></NextImage>
          </Box>
          <Box sx={styles.mobilePaperBox}>
            <Paper elevation={1} sx={styles.borderRadiusTen}>
              <Box sx={styles.mobilePaperInnerBox}>
                <Typography color={"#1C1B1F"} sx={styles.mobilePaperTypography}>
                  Discover & shop <span style={{ color: "#8652FF" }}>40% off</span> everything in exchange for content
                  creation
                </Typography>
              </Box>
              <Box textAlign={"center"}>
                <Link
                  href={{ pathname: `/${slug.slug}/products`, query: { slug: slug.slug } }}
                  as={`/${slug.slug}/products`}
                  style={{ textDecoration: "none" }}
                >
                  <Button sx={styles.mobileShopNowButton}>Shop now</Button>
                </Link>
              </Box>
            </Paper>
          </Box>
          <Box sx={styles.mobilePremiumTextBox}>
            <Typography sx={styles.mobilePremiumTypography}>
              Shop top premium brands at unheard of discounts in exchange for posting a Reel or a Tiktok
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CreateShop;
