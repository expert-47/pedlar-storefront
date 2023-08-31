import React from "react";
import styles from "styles/home";
import { Button, Box, useTheme, Typography, useMediaQuery, Paper, Grid } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
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
      paddingX={{ xs: theme.spacing(20), md: theme.spacing(30), lg: theme.spacing(40) }}
      paddingY={{ xs: theme.spacing(20), md: theme.spacing(30), lg: theme.spacing(40) }}
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        wordWrap: "break-word",
        width: "100%",
        minWidth: "242px",
        paddingBottom: isMatch ? "20px" : "0px",
      }}
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
        <Link href={{ pathname: `/${slug.slug}/products`, query: { slug: slug.slug } }} as={`/${slug.slug}/products`}>
          <Grid
            style={{
              marginTop: "20px",
              width: isMatch ? "260px" : "100%",
            }}
          >
            <Button sx={{ width: !isMatch ? "100%" : "260px", ...styles.shopbutton }} onClick={onClickShopNow}>
              Shop now
            </Button>
          </Grid>
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: !isMatch ? "center" : undefined,
          }}
        >
          {props?.headerData?.instagramLink && instaNameLink[1] != "" && (
            <a
              target="_blank"
              href={`http://instagram.com/${instaNameLink[1]}/`}
              style={{
                textDecoration: "none",
              }}
            >
              <Paper sx={styles.paper}>
                <Image src="/instagram-icon.svg" height="24px" width="24px" />
              </Paper>
            </a>
          )}

          {props?.headerData?.tiktokLink && tiktokNameLink[1] != "" && (
            <a
              target="_blank"
              href={`https://www.tiktok.com/@${tiktokNameLink[1]}`}
              style={{
                textDecoration: "none",
                marginLeft: instaNameLink[1] != "" ? "20px" : "0px",
              }}
            >
              <Paper sx={styles.paper}>
                <Image src="/tiktok-icon2.svg" height="24px" width="24px" />
              </Paper>
            </a>
          )}
        </div>
      </Grid>
    </Box>
  );
};

export default TextBox;
