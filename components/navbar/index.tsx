import React from "react";
import Link from "next/link";

import { Stack } from "@mui/system";
import styles from "styles/navbar";
import Marquee from "react-fast-marquee";
import { isIOS } from "react-device-detect";

import { ResponsiveNavbar } from "./responsiveNavbar";
import { CustomContainer } from "components/layout";
import { AppBar, Badge, Button, Grid, IconButton, Toolbar, useMediaQuery, useTheme, Box } from "@mui/material";

import Typography from "components/customText";
import CartDrawer from "components/cartDrawer/cartDrawer";
import DropDownMenu from "./components/dropDownMenu";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { NextImage } from "components/pedlarImage";
import { cartDrawerToggle } from "store/slice/appSlice";

export default function Navbar(props: any) {
  const { data, shopList, loading, shopListLoading } = props;
  const isIOSDevice = isIOS;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const storeName = useSelector((data: any) => data.app.storeName);
  const cartProducts = useSelector((data: any) => data.app.products[storeName]) || [];

  const dispatch = useDispatch();

  const onClickDrawer = () => {
    dispatch(cartDrawerToggle(true));
  };

  const route = useRouter();
  const path = route.asPath.split("/")[1];
  const totalProductLength =
    Array.isArray(cartProducts) && cartProducts.length > 1
      ? cartProducts.reduce((total: any, item: any) => {
          return typeof total == "object"
            ? Number(total.quantity) + Number(item.quantity)
            : total + Number(item.quantity);
        })
      : cartProducts.length == 1
      ? Number(cartProducts[0].quantity)
      : 0;
  return (
    <Grid container item xs={12} sm={12} lg={12} sx={styles.container}>
      <AppBar position="fixed" sx={styles.appBar} elevation={0}>
        <Marquee style={styles.marquee} gradient={false}>
          <Typography fontSize={isIOSDevice ? "8.5px" : "11px"} fontWeight={"600"} sx={{ display: { xl: "none" } }}>
            FREE Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All
            Orders Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE
            Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All Orders
            Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE
            Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All Orders
            Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE
            Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All Orders
            Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
          </Typography>
          <Typography fontSize={"11px"} fontWeight={"600"} sx={{ display: { xs: "none", xl: "block" } }}>
            FREE Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All
            Orders Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE
            Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All Orders
            Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE
            Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All Orders
            Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp; FREE
            Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All Orders
            Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp; FREE
            Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All Orders
            Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE
            Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All Orders
            Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
          </Typography>
        </Marquee>

        <CustomContainer>
          {isMatch ? (
            <ResponsiveNavbar
              storefrontName={props?.storefrontName}
              slugs={props?.slug}
              data={data}
              shopList={shopList}
              loading={loading}
              shopListLoading={shopListLoading}
            />
          ) : (
            <Grid container item xs={12} md={12} lg={12} sx={styles.padding}>
              <Toolbar sx={styles.toolbar}>
                <Stack direction="row" sx={styles.leftContainer}>
                  <Link href={`/${props?.slug}`}>
                    <Box sx={{ height: 22, width: 68, cursor: "pointer" }}>
                      <NextImage src="/pedlar.png" alt="No Image Found" />
                    </Box>
                  </Link>
                  <Grid sx={styles.navTypo}>{props?.storefrontName ? props?.storefrontName : ""}</Grid>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Link href={`/${path}`} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                    <Button sx={styles.tabButton}>Home</Button>
                  </Link>

                  {props?.productsPage === true ? null : (
                    <>
                      <DropDownMenu loading={loading} type={"Brands"} data={data || []} />

                      <DropDownMenu loading={shopListLoading} type={"Categories"} data={shopList || []} />
                    </>
                  )}

                  <Link href={`/${path}/faq`} target="_blank" style={{ textDecoration: "none", marginTop: "4px" }}>
                    <Button color="inherit" sx={styles.tabButton}>
                      FAQ
                    </Button>
                  </Link>

                  <Badge badgeContent={totalProductLength} color="secondary">
                    <IconButton sx={styles.iconColor} onClick={onClickDrawer}>
                      <NextImage
                        fill={false}
                        layout="default"
                        alt="cart"
                        src="/cart.png"
                        height={19.48}
                        width={19.48}
                      />
                    </IconButton>
                  </Badge>
                </Stack>
                <CartDrawer />
              </Toolbar>
            </Grid>
          )}
        </CustomContainer>
      </AppBar>
    </Grid>
  );
}
