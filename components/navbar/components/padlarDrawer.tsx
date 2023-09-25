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
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { cartDrawerToggle } from "store/slice/appSlice";
import { isIOS } from "react-device-detect";
import { NextImage } from "components/pedlarImage";

export const PedlarDrawer = (props: {
  openDrawer: boolean;
  storefrontName: string;
  toggleDrawer: (value: boolean) => void;
  slug: string;
  data: any;
  shopList: any;
  loading: any;
  shopListLoading: any;
  type: "Brands";
  totalProductLength: number;
}) => {
  const {
    type = "Brands",
    openDrawer,
    toggleDrawer,
    data,
    shopList,
    loading,
    shopListLoading,
    totalProductLength,
    storefrontName,
  } = props;
  const route = useRouter();
  const storeName = useSelector((data: any) => data.app.storeName);
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

  // const cartProducts = useSelector((data: any) => data.app.products);
  const dispatch = useDispatch();
  const isIOSDevice = isIOS;

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
  const closeDrawer = () => toggleDrawer(false);

  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={closeDrawer}
      transitionDuration={500}
      PaperProps={{
        sx: paperStyle,
      }}
    >
      <Marquee
        style={{
          backgroundColor: "black",
          color: "white",
          paddingTop: "6px",
          paddingBottom: "6px",
        }}
        gradient={false}
      >
        <Typography fontSize={isIOSDevice ? "8.5px" : "11px"} fontWeight={"600"}>
          FREE Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All Orders
          Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE
          Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All Orders
          Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE
          Returns&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;FREE Shipping&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;All Orders
          Shipped Directly From The Brand&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
        </Typography>
      </Marquee>
      <List sx={styles.drawerList}>
        <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5px" }}>
          <Grid item xs={1.5}>
            <CloseIcon onClick={onClickDrawer} sx={{ paddingLeft: "8px" }} />
          </Grid>
          <Grid item xs={9} sx={{ display: "flex", alignItems: "center" }}>
            <Box onClick={closeDrawer}>
              <Link href={`/${props?.slug}`}>
                <NextImage
                  layout="default"
                  fill={false}
                  src="/pedlar.png"
                  alt="No Image Found"
                  width={68}
                  height={22}
                  placeholder="empty"
                />
              </Link>
            </Box>

            <Typography fontSize={22} fontWeight={400} sx={{ marginLeft: "5px", marginTop: "-5px" }}>
              {storefrontName ? storefrontName : ""}
            </Typography>
          </Grid>
          <Grid item xs={1.5}>
            <Badge badgeContent={totalProductLength} color="secondary" sx={{ right: 10 }}>
              <IconButton onClick={openCartHandler} sx={styles.iconColor}>
                <NextImage
                  src="/cart.png"
                  layout="default"
                  alt="cart-mobile"
                  fill={false}
                  height={19.48}
                  width={19.48}
                  placeholder="empty"
                />
              </IconButton>
            </Badge>
          </Grid>
        </Grid>

        <div style={{ paddingTop: "10px" }}></div>
        <ListItemText sx={styles.drawerText}>
          <Link href={`/${storeName}`} style={{ textDecoration: "none", color: "black" }}>
            <ListItem onClick={closeDrawer} color="inherit" style={{ fontSize: "16px", fontWeight: "600" }}>
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
                  <Grid container gap={10}>
                    {loading ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      data?.slice(0, viewAllBrand ? 10 : data.length)?.map((item: any) => {
                        return (
                          <Grid
                            key={item}
                            item
                            xs={5.5}
                            sm={5.5}
                            style={{ color: "black", fontWeight: "500", fontSize: "14px" }}
                            onClick={() => {
                              closeDrawer();

                              route.push(
                                {
                                  pathname: `${route.basePath}/${storeName}/products`,
                                  query: { dataType: "Brands", itemValue: item.label },
                                },
                                `${route.basePath}/${storeName}/products`,
                              );
                            }}
                          >
                            <Typography
                              sx={{ textDecoration: "none", color: "black", fontWeight: "500", fontSize: "14px" }}
                            >
                              {item.label}
                            </Typography>
                          </Grid>
                        );
                      })
                    )}
                    {data?.length > 10 && (
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
                Categories {opens ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            </ListItemButton>
            <Collapse in={opens}>
              <List>
                <ListItem>
                  <Grid container gap={10}>
                    {shopListLoading ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      shopList?.slice(0, viewAllShop ? 10 : shopList?.length)?.map((item: any) => (
                        <Grid
                          key={item}
                          item
                          xs={5.5}
                          sm={5.5}
                          style={{ color: "black", fontWeight: "500", fontSize: "14px" }}
                          onClick={() => {
                            closeDrawer();
                            route.push(
                              {
                                pathname: `${route.basePath}/${storeName}/products`,
                                query: { dataType: "Categories", itemValue: item?.label },
                              },
                              `${route.basePath}/${storeName}/products`,
                            );
                          }}
                        >
                          <Typography
                            sx={{ textDecoration: "none", color: "black", fontWeight: "500", fontSize: "14px" }}
                          >
                            {item.label}
                          </Typography>
                        </Grid>
                      ))
                    )}
                    {shopList?.length > 10 && (
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
          <Link
            href={`/${storeName}/faq`}
            target={"blank"}
            style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
          >
            <ListItem onClick={closeDrawer} color="inherit" style={{ fontSize: "16px", fontWeight: "600" }}>
              FAQ
            </ListItem>
          </Link>
        </ListItemText>
      </List>
    </Drawer>
  );
};

export default PedlarDrawer;
