import React from "react";
import styles from "styles/home";
import Grid from "@mui/material/Grid";
import { Button, Box, useTheme, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import * as gtmEvents from "utils/gtm";
import { useSelector } from "react-redux";

const TextBox = (props: any) => {
  const router = useRouter();
  const slug = router?.query;
  const theme = useTheme();
  const storeName = useSelector((data: any) => data.app.storeName);
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));

  const instaNameLink = props?.headerData?.instagramLink?.split("instagram.com/@") || "";
  const tiktokNameLink = props?.headerData?.tiktokLink?.split("tiktok.com/@") || "";

  const onClickShopNow = () => {
    gtmEvents.selectPromission(storeName, "shop now", "home page banner", "1", "abc123");
  };
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        wordWrap: "break-word",
        width: "100%",
        minWidth: "242px",
      }}
      paddingX={{ xs: theme.spacing(20), md: theme.spacing(30), lg: theme.spacing(40) }}
      paddingY={{ xs: theme.spacing(20), md: theme.spacing(30), lg: theme.spacing(40) }}
    >
      <Typography sx={styles.bannerText}>
        {props?.headerData?.storefrontDescription
          ? props?.headerData?.storefrontDescription
          : "Welcome to my Pedlar Store! Here is a collection of my favourite products from my favourite brands. Have a browse and enjoy."}
      </Typography>
      <Grid
        container
        item
        xs={10}
        sm={10}
        md={10}
        lg={12}
        style={{ display: "flex", flexDirection: "column", maxWidth: "100%" }}
      >
        {props?.headerData?.instagramLink && instaNameLink[1] != "" && (
          <a
            target="_blank"
            href={`http://instagram.com/${instaNameLink[1]}/`}
            style={{
              textDecoration: "none",
            }}
          >
            <Grid
              style={{
                display: "flex",
                justifyContent: "flex-start",
                paddingTop: "20px",
                alignItems: "center",
              }}
            >
              <Image src="/instagram.png" height="16px" width="16px" />

              <Box fontSize={"18px"} sx={styles.boxtext}>
                {props?.headerData?.instagramLink ? instaNameLink[1] : " "}
              </Box>
            </Grid>
          </a>
        )}
        {props?.headerData?.tiktokLink && tiktokNameLink[1] != "" && (
          <a
            target="_blank"
            href={`https://www.tiktok.com/@${tiktokNameLink[1]}`}
            style={{
              textDecoration: "none",
            }}
          >
            <Grid
              style={{
                display: "flex",
                justifyContent: "flex-start",
                paddingTop: "8px",
                alignItems: "center",
                height: "30px",
              }}
            >
              <Image src="/tiktok.png" height="16px" width="16px" />

              <Box fontSize={"18px"} sx={styles.boxtext}>
                {props?.headerData?.tiktokLink ? tiktokNameLink[1] : " "}
              </Box>
            </Grid>
          </a>
        )}
        <Link href={{ pathname: "/products", query: { slug: slug.slug } }} as={`/${slug.slug}/products`}>
          <Grid
            style={{
              marginTop: "20px",
              width: isMatch ? "150px" : "100%",
            }}
          >
            <Button sx={{ width: !isMatch ? "100%" : "197px", ...styles.shopbutton }} onClick={onClickShopNow}>
              Shop now
            </Button>
          </Grid>
        </Link>
      </Grid>
    </Box>
  );
};

export default TextBox;
