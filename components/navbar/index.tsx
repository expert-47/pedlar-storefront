import { useState } from "react";
import Link from "next/link";

import { Stack } from "@mui/system";
import { useStyles } from "styles/navbar";
import Marquee from "react-fast-marquee";

import SearchIcon from "@mui/icons-material/Search";
import DropdownButton from "./components/dropdownButton";
import { ResponsiveNavbar } from "./responsiveNavbar";
import { CustomContainer } from "components/layout";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AppBar, Button, Grid, IconButton, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import PadlarCollapseView from "./components/padlarCollapseView";
import Typography from "components/customText";
import { brandList, shopList } from "./data";
const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));
  const [showBrandsList, toggleBrandsList] = useState(false);
  const [showShopList, toggleShopList] = useState(false);

  const { classes, cx } = useStyles();

  return (
    <Grid container item xs={12} sm={12} lg={12} className={cx(classes.container)}>
      <AppBar
        position="static"
        className={cx(classes.appBar)}
        sx={{
          boxShadow: 3,
        }}
      >
        <Marquee className={cx(classes.marquee)} gradient={false}>
          <Typography fontSize={"14px"} fontWeight={"600"}>
            FREE Returns - FREE Shipping - All Orders Shipped Directly From The Brand - FREE Returns - FREE Shipping -
            All Orders Shipped Directly From The Brand - FREE Returns - FREE Shipping - All Orders Shipped Direc
          </Typography>
        </Marquee>
        <CustomContainer>
          {!isMatch ? (
            <ResponsiveNavbar />
          ) : (
            <Grid container item lg={12} className={cx(classes.padding)}>
              <Toolbar className={cx(classes.toolbar)}>
                <Stack direction="row" className={cx(classes.leftContainer)}>
                  <Link href="/">
                    <img src="/pedlar.png" alt="No Image Found" style={{ height: "25px" }} />
                  </Link>
                  <Typography fontSize={"22px"} fontWeight={"400"} paddingLeft={"5px"}>
                    Hannah Juneva
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Link href="/">
                    <Button className={cx(classes.tabButton)}>Home</Button>
                  </Link>

                  <DropdownButton type={"Brands"} data={brandList} />

                  <DropdownButton type={"Shop"} data={shopList} />

                  <Link href="faq">
                    <Button color="inherit" className={cx(classes.tabButton)}>
                      Faq
                    </Button>
                  </Link>
                  <IconButton className={cx(classes.iconColor)}>
                    <SearchIcon />
                  </IconButton>
                  <IconButton className={cx(classes.iconColor)}>
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
