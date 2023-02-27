import React from "react";
import styles from "styles/home";
import Grid from "@mui/material/Grid";
import { Button, Box, useTheme, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { gtmEvents } from "utils/gtm";
import { useSelector } from "react-redux";

const TextBox = (props: any) => {
  const router = useRouter();
  const slug = router?.query;
  const theme = useTheme();
  const storeName = useSelector((data) => data.app.storeName);

  const instaNameLink = props?.headerData?.instagramLink?.split("instagram.com/@") || "";
  const tiktokNameLink = props?.headerData?.tiktokLink?.split("tiktok.com/@") || "";

  const onClickShopNow = () => {
    gtmEvents({
      event: "view_promotion",
      ecommerce: {
        items: [
          {
            item_name: "The mariah", // Name or ID is required.
            item_id: "555",
            item_brand: "Hannah Juneva",
            item_category: "shoes",
            item_list_name: "Category Page", // item list name
            price: 240.0,
            promotion_id: "abc123",
            promotion_name: "shop now", // name of the banner/promotion
            creative_name: "home page banner",
            creative_slot: "1",
            location_id: `https://storefront-ui-dot-pedlar-dev.ts.r.appspot.com/${storeName}`, //location_id belongs to the current page url
            index: 1,
          },
        ],
      },
    });
  };
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
        {props?.headerData?.instagramLink && instaNameLink[1] != "" && (
          <a
            target="_blank"
            href={`http://instagram.com/${instaNameLink[1]}/`}
            style={{
              textDecoration: "none",
            }}
          >
            <Grid
              // onClick={() => {
              //   alert();
              //   router.push("instagram://user?username={USERNAME}");
              // }}
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
              width: "150px",
            }}
          >
            <Button sx={styles.shopbutton} onClick={onClickShopNow}>
              Shop now
            </Button>
          </Grid>
        </Link>
      </Grid>
    </Box>
  );
};

export default TextBox;
