import React, {  useState } from "react";
import Link from "next/link";
import useSwr from "swr";

import { Stack } from "@mui/system";
import styles from "styles/navbar";
import Marquee from "react-fast-marquee";

// import SearchIcon from "@mui/icons-material/Search";
// import DropdownButton from "./components/dropdownButton";
import { ResponsiveNavbar } from "./responsiveNavbar";
import { CustomContainer } from "components/layout";
import { AppBar, Button, Grid, IconButton, Toolbar, useMediaQuery, useTheme } from "@mui/material";

import Typography from "components/customText";
import CartDrawer from "components/cartDrawer/cartDrawer";
import DropDownMenu from "./components/dropDownMenu";

export default function Navbar(props:any) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));

  const [openDrawer, toggleDrawer] = useState(false);

  const onClickDrawer = () => {
    toggleDrawer(!openDrawer);
  };
  const { data } = useSwr("https://pedlar-dev.ts.r.appspot.com/storefront/412809756899/vendors/");
  const { data: shopList } = useSwr("https://pedlar-dev.ts.r.appspot.com/storefront/412809756899/categories/");

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
                    <img src="/pedlar.png" alt="No Image Found" style={{ height: "25px", cursor: "pointer" }} />
                  </Link>
                  <Grid sx={styles.navTypo}>{props?.storefrontName ? props?.storefrontName : ""}</Grid>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Link href={`/${props?.slug}`}>
                    <Button sx={styles.tabButton}>Home</Button>
                  </Link>

                  <DropDownMenu
                    loading={!data}
                    type={"Brands"}
                    data={data ? data.data.map((item:any) => item.vendor) : []}
                  />

                  <DropDownMenu
                    loading={!shopList}
                    type={"Shop"}
                    data={shopList ? shopList.data.map((item:any) => item.productType) : []}
                  />

                  <Link href={`/${props?.slug}/faq`}>
                    <Button color="inherit" sx={styles.tabButton}>
                      FAQ
                    </Button>
                  </Link>
                  <IconButton sx={styles.iconColor}>
                    <img src="/search.png" height="19.48px" width="19.48px" />
                  </IconButton>
                  <IconButton sx={styles.iconColor}>
                    <img src="/cart.png" height="19.48px" width="19.48px" onClick={onClickDrawer} />
                  </IconButton>
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
