import React from "react";
import styles from "styles/home";
import { Button, Box, useTheme, Typography, useMediaQuery, Paper, Grid } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import * as gtmEvents from "utils/gtm";
import { useSelector } from "react-redux";
import { NextImage } from "components/pedlarImage";

const TextBox = (props: any) => {
  const router = useRouter();
  const slug = router?.query;
  const theme = useTheme();
  const storeName = useSelector((data: any) => data.app.storeName);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

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
        paddingBottom: isMatch ? "0px" : "20px",
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
        <Link
          href={{ pathname: `/${slug.slug}/products`, query: { slug: slug.slug } }}
          as={`/${slug.slug}/products`}
          style={{ textDecoration: "none" }}
        >
          <Grid
            style={{
              marginTop: "20px",
              width: "100%",
            }}
          >
            <Button sx={{ width: isMatch ? "100%" : "260px", ...styles.shopbutton }} onClick={onClickShopNow}>
              Shop now
            </Button>
          </Grid>
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: isMatch ? "center" : undefined,
          }}
        >
          {props?.headerData?.instagramLink && instaNameLink[1] != "" && (
            <Link
              target="blank"
              href={`http://instagram.com/${instaNameLink[1]}/`}
              style={{
                textDecoration: "none",
              }}
            >
              <Paper sx={styles.paper}>
                <NextImage
                  layout="default"
                  fill={false}
                  src="/instagram-icon.svg"
                  alt="instagram-icon"
                  height={24}
                  width={24}
                />
              </Paper>
            </Link>
          )}

          {props?.headerData?.tiktokLink && tiktokNameLink[1] != "" && (
            <Link
              target="blank"
              href={`https://www.tiktok.com/@${tiktokNameLink[1]}`}
              style={{
                textDecoration: "none",
                marginLeft: instaNameLink[1] != "" ? "20px" : "0px",
              }}
            >
              <Paper sx={styles.paper}>
                <NextImage
                  src="/tiktok-icon2.svg"
                  alt="tiktok-icon2"
                  layout="default"
                  fill={false}
                  height={24}
                  width={24}
                />
              </Paper>
            </Link>
          )}
        </div>
      </Grid>
    </Box>
  );
};

export default TextBox;
