import React from "react";
import Link from "next/link";

import { Stack } from "@mui/system";
import styles from "styles/navbar";
import Marquee from "react-fast-marquee";

import SearchIcon from "@mui/icons-material/Search";
import DropdownButton from "./components/dropdownButton";
import { ResponsiveNavbar } from "./responsiveNavbar";
import { CustomContainer } from "components/layout";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AppBar, Button, Grid, IconButton, Toolbar, useMediaQuery, useTheme } from "@mui/material";

import Typography from "components/customText";
import { brandList, shopList } from "./data";
const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Grid container item xs={12} sm={12} lg={12} sx={styles.container}>
      <AppBar position="static" sx={styles.appBar} elevation={0}>
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
            <Grid container item lg={12} sx={styles.padding}>
              <Toolbar sx={styles.toolbar}>
                <Stack direction="row" sx={styles.leftContainer}>
                  <Link href="/">
                    <img src="/pedlar.png" alt="No Image Found" style={{ height: "25px" }} />
                  </Link>
                  <Typography sx={styles.navTypo}>Hannah Juneva</Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Link href="/">
                    <Button sx={styles.tabButton}>Home</Button>
                  </Link>

                  <DropdownButton type={"Brands"} data={brandList} />

                  <DropdownButton type={"Shop"} data={shopList} />

                  <Link href="faq">
                    <Button color="inherit" sx={styles.tabButton}>
                      Faq
                    </Button>
                  </Link>
                  <IconButton sx={styles.iconColor}>
                    <SearchIcon />
                  </IconButton>
                  <IconButton sx={styles.iconColor}>
                    <ShoppingCartOutlinedIcon />
                  </IconButton>
                </Stack>
              </Toolbar>
            </Grid>
          )}
        </CustomContainer>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
