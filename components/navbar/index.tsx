//package imports
import React from "react";
import Link from "next/link";
import styles from "styles/navbar";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import Marquee from "react-fast-marquee";
import { isIOS } from "react-device-detect";
import { AppBar, Badge, Button, Grid, IconButton, Toolbar, Box } from "@mui/material";
//components
import Typography from "components/customText";
import { NextImage } from "components/pedlarImage";
import { CustomContainer } from "components/layout";
import DropDownMenu from "./components/dropDownMenu";
import { ResponsiveNavbar } from "./responsiveNavbar";
import CartDrawer from "components/cartDrawer/cartDrawer";
//redux
import { useSelector, useDispatch } from "react-redux";
import { cartDrawerToggle } from "store/slice/appSlice";

export default function Navbar(props: any) {
  const { data, shopList, loading, shopListLoading, isMobile } = props;
  const isIOSDevice = isIOS;

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
    <Grid container sx={styles.container}>
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
          {isMobile ? (
            <ResponsiveNavbar
              storefrontName={props?.storefrontName}
              slugs={props?.slug}
              data={data}
              shopList={shopList}
              loading={loading}
              shopListLoading={shopListLoading}
            />
          ) : (
            <Grid item sx={styles.padding}>
              <Toolbar sx={styles.toolbar}>
                <Stack direction="row" sx={styles.leftContainer}>
                  <Link href={`/${props?.slug}`}>
                    <Box sx={{ height: 22, width: 68, cursor: "pointer" }}>
                      <NextImage src="/pedlar.png" alt="No Image Found" placeholder="empty" />
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
                        placeholder="empty"
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
