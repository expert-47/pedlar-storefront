import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Stack } from "@mui/system";
import styles from "styles/navbar";
import Marquee from "react-fast-marquee";

import SearchIcon from "@mui/icons-material/Search";
import DropdownButton from "./components/dropdownButton";
import { ResponsiveNavbar } from "./responsiveNavbar";
import { CustomContainer } from "components/layout";
import { AppBar, Button, Grid, IconButton, Toolbar, useMediaQuery, useTheme } from "@mui/material";

import Typography from "components/customText";
import CartDrawer from "components/cartDrawer/cartDrawer";
import DropDownMenu from "./components/dropDownMenu";



export default function Navbar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));
  
  const [openDrawer, toggleDrawer] = useState(false);
  
  const onClickDrawer = () => {
    toggleDrawer(!openDrawer);
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shopList, setShopList] = useState([]);
  const [loadingShops, setLoadingShops] = useState(false);

  async function initProducts() {
    setLoading(true);
    await fetch(`http://pedlar-dev.ts.r.appspot.com/storefront/412809756899/vendors`)
        .then(response => response.json())
        .then(response => {
            setData((response.data).map(item=> item.vendor));
            setLoading(false);
         } )
        .catch(err => console.error(err));
  }
  async function getCategories() {
    setLoadingShops(true);
    await fetch(`http://pedlar-dev.ts.r.appspot.com/storefront/412809756899/categories`)
      .then(response => response.json())
      .then(response => {
        setShopList((response.data).map(item => item.productType));
        setLoadingShops(false);
      })
      .catch(err => console.error(err));
  }
  useEffect(()=>{
    initProducts()
    getCategories()
  }, [])
  return (
    <Grid container item xs={12} sm={12} lg={12} sx={styles.container}>
      <AppBar position="fixed" sx={styles.appBar} elevation={0}>
        <Marquee style={styles.marquee} gradient={false}>
          <Typography fontSize={"14px"} fontWeight={"600"}>
            FREE Returns - FREE Shipping - All Orders Shipped Directly From The Brand - FREE Returns - FREE Shipping -
            All Orders Shipped Directly From The Brand - FREE Returns - FREE Shipping - All Orders Shipped Direc
          </Typography>
        </Marquee>

        <CustomContainer>
          {!isMatch ? (
            <ResponsiveNavbar />
          ) : (
            <Grid container item xs={12} md={12} lg={12} sx={styles.padding}>
              <Toolbar sx={styles.toolbar}>
                <Stack direction="row" sx={styles.leftContainer}>
                  <Link href="/">
                    <img src="/pedlar.png" alt="No Image Found" style={{ height: "25px", cursor: "pointer" }} />
                  </Link>
                  <Typography sx={styles.navTypo}>Hannah Juneva</Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Link href="/">
                    <Button sx={styles.tabButton}>Home</Button>
                  </Link>

                  <DropDownMenu loading={loading} type={"Brands"} data={data} />

                  <DropDownMenu loading={loadingShops} type={"Shop"} data={shopList} />

                  <Link href="faq">
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
};

