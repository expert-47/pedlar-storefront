import {
  Drawer,
  List,
  ListItemText,
  Grid,
  Typography,
  ListItem,
  ListItemButton,
  Button,
  Box,
  IconButton,
  CircularProgress,
  Badge,
} from "@mui/material";
import Link from "next/link";

import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Marquee from "react-fast-marquee";
import styles from "styles/navbar";
import Image from "next/image";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { cartDrawerToggle } from "store/slice/appSlice";

export const PedlarDrawer = (props: {
  openDrawer: boolean;
  storefrontName: string;
  toggleDrawer: (value: boolean) => void;
  slug: string;
}) => {
  const { type = "Brands", openDrawer, toggleDrawer, storefrontName, data, shopList, loading, shopListLoading } = props;

  const route = useRouter();

  const [viewAllBrand, toggleViewAllBrand] = useState(true);
  const [viewAllShop, toggleViewAllShop] = useState(true);

  const paperStyle = {
    color: "black",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  };

  const cartProducts = useSelector((data) => data.app.products);
  const dispatch = useDispatch();

  const onClickDrawer = () => {
    toggleDrawer(!openDrawer);
  };
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClicks = () => {
    setOpens(!opens);
  };
  const brandsNameHanlder = () => {
    toggleViewAllBrand((prv) => !prv);
  };
  const onClickViewAllShop = () => {
    toggleViewAllShop((prv) => !prv);
  };
  const openCartHandler = () => {
    dispatch(cartDrawerToggle(true));
  };
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={() => toggleDrawer(false)}
      PaperProps={{
        sx: paperStyle,
      }}
    >
      <Marquee
        style={{ backgroundColor: "black", color: "white", paddingTop: "12px", paddingBottom: "12px" }}
        gradient={false}
      >
        <Typography fontSize={"14px"} fontWeight={"600"}>
          FREE Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All Orders
          Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE
          Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All Orders
          Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE
          Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All Orders
          Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
        </Typography>
      </Marquee>
      <List sx={styles.drawerList}>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5px" }}
        >
          <Grid xs={1.5}>
            <CloseIcon onClick={onClickDrawer} sx={{ paddingLeft: "8px" }} />
          </Grid>
          <Grid item xs={9} sm={9} md={9} style={{ display: "flex", alignItems: "center" }}>
            <Box sx={{}}>
              <Link href={`/${props?.slug}`}>
                <Image src="/pedlar.png" alt="No Image Found" width={68} height={22} />
              </Link>
            </Box>

            <Typography fontSize={22} fontWeight={400} sx={{ marginLeft: "5px", marginTop: "-5px" }}>
              {storefrontName ? storefrontName : ""}
            </Typography>
          </Grid>
          <Grid xs={1.5}>
            <Badge badgeContent={cartProducts.length} color="secondary" sx={{ right: 10 }} onClick={openCartHandler}>
              <IconButton sx={styles.iconColor}>
                <Image src="/cart.png" height="19.48px" width="19.48px" />
              </IconButton>
            </Badge>
          </Grid>
        </Grid>

        <Grid style={{ paddingTop: "10px" }}></Grid>
        <ListItemText sx={styles.drawerText}>
          <Link href={`/${route.query.slug}`}>
            <ListItem color="inherit" style={{ fontSize: "16px", fontWeight: "600" }}>
              Home
            </ListItem>
          </Link>
          <List>
            <ListItemButton onClick={handleClick} style={{ fontSize: "16px", fontWeight: "600", padding: "unset" }}>
              <ListItem style={{ color: open ? "rgba(0,0,0,0.3)" : "inherit" }}>
                Brands
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            </ListItemButton>
            <Collapse in={open}>
              <List>
                <ListItem>
                  <Grid container item gap={10} xs={12} sm={12}>
                    {loading ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      data?.data?.slice(0, viewAllBrand ? 10 : data?.data.length)?.map((item) => (
                        <Grid
                          key={item}
                          item
                          xs={5.5}
                          sm={5.5}
                          style={{ color: "black", fontWeight: "500", fontSize: "14px" }}
                          onClick={() => toggleDrawer(false)}
                        >
                          <Link
                            as={`/${route?.query?.slug}/products`}
                            href={{
                              pathname: `/${route?.query?.slug}/products`,
                              query: { dataType: "Brands", itemValue: item.vendor },
                            }}
                          >
                            <Typography
                              sx={{ textDecoration: "none", color: "black", fontWeight: "500", fontSize: "14px" }}
                            >
                              {item.vendor}
                            </Typography>
                          </Link>
                        </Grid>
                      ))
                    )}
                    {data?.data?.length > 10 && (
                      <Button onClick={brandsNameHanlder}>
                        <ListItemText
                          style={{
                            color: "black",
                            fontWeight: "600",
                            fontSize: "14px",
                            textDecoration: "underline",
                            marginTop: "-10px",
                            textTransform: "none",
                            lineHeight: "4px",
                          }}
                        >
                          <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                            {viewAllBrand ? "View all" : "View less"}
                          </Typography>
                        </ListItemText>
                      </Button>
                    )}
                  </Grid>
                </ListItem>
              </List>
            </Collapse>
          </List>
          <List>
            <ListItemButton onClick={handleClicks} style={{ fontSize: "16px", fontWeight: "600", padding: "unset" }}>
              <ListItem style={{ color: opens ? "rgba(0,0,0,0.3)" : "inherit" }}>
                Shops {opens ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            </ListItemButton>
            <Collapse in={opens}>
              <List>
                <ListItem>
                  <Grid container item gap={10} xs={12} sm={12}>
                    {shopListLoading ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      shopList?.data?.slice(0, viewAllShop ? 10 : shopList?.data?.length)?.map((item) => (
                        <Grid
                          key={item}
                          item
                          xs={5.5}
                          sm={5.5}
                          style={{ color: "black", fontWeight: "500", fontSize: "14px" }}
                          onClick={() => toggleDrawer(false)}
                        >
                          <Link
                            as={`/${route?.query?.slug}/products`}
                            href={{
                              pathname: `/${route?.query?.slug}/products`,
                              query: { dataType: "Shop", itemValue: item.productType },
                            }}
                          >
                            <Typography
                              sx={{ textDecoration: "none", color: "black", fontWeight: "500", fontSize: "14px" }}
                            >
                              {item.productType}
                            </Typography>
                          </Link>
                        </Grid>
                      ))
                    )}
                    {shopList?.data?.length > 10 && (
                      <Button onClick={onClickViewAllShop}>
                        <ListItemText
                          style={{
                            color: "black",
                            fontWeight: "600",
                            fontSize: "14px",
                            textDecoration: "underline",
                            marginTop: "-10px",
                            textTransform: "none",
                            lineHeight: "4px",
                          }}
                        >
                          <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                            {viewAllShop ? "View all" : "View less"}
                          </Typography>
                        </ListItemText>
                      </Button>
                    )}
                  </Grid>
                </ListItem>
              </List>
            </Collapse>
          </List>
          <Link href={`/${route.query.slug}/faq`}>
            <ListItem color="inherit" style={{ fontSize: "16px", fontWeight: "600" }}>
              FAQ
            </ListItem>
          </Link>
        </ListItemText>
      </List>
    </Drawer>
  );
};

export default PedlarDrawer;
