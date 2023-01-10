import React, { useState } from "react";
import Link from "next/link";
import useSwr from "swr";

import { Stack } from "@mui/system";
import styles from "styles/navbar";
import Marquee from "react-fast-marquee";
import Image from "next/image";
// import SearchIcon from "@mui/icons-material/Search";
// import DropdownButton from "./components/dropdownButton";
import { ResponsiveNavbar } from "./responsiveNavbar";
import { CustomContainer } from "components/layout";
import { AppBar, Badge, Button, Grid, IconButton, Toolbar, useMediaQuery, useTheme } from "@mui/material";

import Typography from "components/customText";
import CartDrawer from "components/cartDrawer/cartDrawer";
import DropDownMenu from "./components/dropDownMenu";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Navbar(props: any) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));
  const cartProducts = useSelector((data) => data.app.products);

  const [openDrawer, toggleDrawer] = useState(false);

  const onClickDrawer = () => {
    toggleDrawer(!openDrawer);
  };
  const { data } = useSwr("https://pedlar-dev.ts.r.appspot.com/storefront/412809756899/vendors/");
  const { data: shopList } = useSwr("https://pedlar-dev.ts.r.appspot.com/storefront/412809756899/categories/");
  const route = useRouter();
  let path = route.asPath.split("/")[1];

  return (
    <Grid container item xs={12} sm={12} lg={12} sx={styles.container}>
      <AppBar position="fixed" sx={styles.appBar} elevation={0}>
        <Marquee style={styles.marquee} gradient={false}>
          <Typography fontSize={"14px"} fontWeight={"600"}>
            FREE Returns - FREE Shipping - All Orders Shipped Directly From The Brand - FREE Returns - FREE Shipping -
            All Orders Shipped Directly From The Brand - FREE Returns - FREE Shipping - All Orders Shipped Directly From
            The Brand -
          </Typography>
        </Marquee>

        <CustomContainer>
          {!isMatch ? (
            <ResponsiveNavbar storefrontName={props?.storefrontName} />
          ) : (
            <Grid container item xs={12} md={12} lg={12} sx={styles.padding}>
              <Toolbar sx={styles.toolbar}>
                <Stack direction="row" sx={styles.leftContainer}>
                  <Link href={`/${props?.slug}`}>
                    <Image
                      src="/pedlar.png"
                      alt="No Image Found"
                      height="22px"
                      width="68px"
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                  <Grid sx={styles.navTypo}>{props?.storefrontName ? props?.storefrontName : ""}</Grid>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Link href={`/${path}`}>
                    <Button sx={styles.tabButton}>Home</Button>
                  </Link>

                  {props?.productsPage === true ? null : (
                    <>
                      <DropDownMenu
                        loading={!data}
                        type={"Brands"}
                        data={data ? data.data.map((item: any) => item.vendor) : []}
                      />

                      <DropDownMenu
                        loading={!shopList}
                        type={"Shop"}
                        data={shopList ? shopList.data.map((item: any) => item.productType) : []}
                      />
                    </>
                  )}

                  <Link href={`/${path}/faq`}>
                    <Button color="inherit" sx={styles.tabButton}>
                      FAQ
                    </Button>
                  </Link>
                  <IconButton sx={styles.iconColor}>
                    <Image src="/search.png" height="19.48px" width="19.48px" />
                  </IconButton>
                  <Badge badgeContent={cartProducts.length} color="secondary">
                    <IconButton sx={styles.iconColor}>
                      <Image src="/cart.png" height="19.48px" width="19.48px" onClick={onClickDrawer} />
                    </IconButton>
                  </Badge>
                </Stack>
                <CartDrawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
              </Toolbar>
            </Grid>
          )}
        </CustomContainer>
      </AppBar>
    </Grid>
  );
}
