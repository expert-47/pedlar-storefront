import React from "react";
import styles from "styles/home";
import Text from "../../customText/index";
import Grid from "@mui/material/Grid";
import { Button, Box, useTheme, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const TextBox = (props) => {
  const router = useRouter();
  const slug = router?.query;
  const theme = useTheme();

  const instaNameLink = props?.headerData?.instagramLink?.split("instagram.com/@") || "";
  const tiktokNameLink = props?.headerData?.tiktokLink?.split("tiktok.com/@") || "";

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        wordWrap: "break-word",
        width: "100%",
      }}
      paddingX={{ xs: theme.spacing(20), md: theme.spacing(30), lg: theme.spacing(40) }}
      paddingY={{ xs: theme.spacing(20), md: theme.spacing(30), lg: theme.spacing(40) }}
    >
      <Typography sx={styles.bannerText}>
        {props?.headerData?.storefrontDescription
          ? props?.headerData?.storefrontDescription
          : "Hi honeys! I’ve worked closely with some of my fave brands to curate my own store! All items are shipped out directly from each brand. I hope you love what I've put together."}
      </Typography>
      <Grid container item xs={10} sm={10} md={10} lg={12} style={{ display: "flex", flexDirection: "column" }}>
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
        <Link href={{ pathname: "/products", query: { slug: slug.slug } }} as={`/${slug.slug}/products`}>
          <Grid
            style={{
              marginTop: "20px",
              width: "150px",
            }}
          >
            <Button sx={styles.shopbutton}>Shop now</Button>
          </Grid>
        </Link>
      </Grid>
    </Box>
  );
};

export default TextBox;
