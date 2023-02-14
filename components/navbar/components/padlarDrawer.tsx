import {
  Drawer,
  List,
  ListItemText,
  Grid,
  Typography,
  InputBase,
  ListItem,
  ListItemButton,
  Button,
  Divider,
  Checkbox,
  useTheme,
  MenuItem,
  Box,
  IconButton,
  CircularProgress,
  Badge,
} from "@mui/material";
import Link from "next/link";

import React, { useState } from "react";
import useSwr from "swr";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Marquee from "react-fast-marquee";
import styles from "styles/navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { truncate } from "fs";
import { useSelector } from "react-redux";

export const PedlarDrawer = (props: {
  openDrawer: boolean;
  storefrontName: string;
  toggleDrawer: (value: boolean) => void;
  slug: string;
}) => {
  const { type = "Brands", openDrawer, toggleDrawer, storefrontName, slug } = props;
  const theme = useTheme();
  const route = useRouter();

  const { data } = useSwr("https://pedlar-dev.ts.r.appspot.com/storefront/412809756899/vendors/");
  const { data: shopList } = useSwr("https://pedlar-dev.ts.r.appspot.com/storefront/412809756899/categories/");
  const paperStyle = {
    color: "black",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  };
  const [viewAll, setViewAll] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const cartProducts = useSelector((data) => data.app.products);

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
    setViewAll(data?.data?.map((item) => item?.vendor)?.map((items) => items));
    setIsClicked(true);
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
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <Grid xs={1.5}>
            <CloseIcon onClick={onClickDrawer} sx={{ paddingLeft: "8px" }} />
          </Grid>
          <Grid item xs={9} sm={9} md={9} style={{ display: "flex", alignItems: "center" }}>
            {/* <Grid item xs={6}> */}
            <Box sx={{}}>
              <Link href={`/${props?.slugs}`}>
                <Image src="/pedlar.png" alt="No Image Found" width={68} height={22} />
              </Link>
            </Box>
            {/* </Grid> */}
            {/* <Grid item xs={6}> */}
            <Typography fontSize={22} fontWeight={400} sx={{ marginLeft: "5px", marginTop: "-5px" }}>
              {storefrontName ? storefrontName : ""}
            </Typography>
            {/* </Grid> */}
          </Grid>
          <Grid xs={1.5}>
            <Badge badgeContent={cartProducts.length} color="secondary" sx={{ right: 10 }}>
              <IconButton sx={styles.iconColor}>
                <Image src="/cart.png" height="19.48px" width="19.48px" />
              </IconButton>
            </Badge>
          </Grid>
        </Grid>
        {/* <Grid style={{ paddingTop: "36px", paddingLeft: "10px", paddingRight: "10px" }}>
          <Box
            style={{
              padding: "5px",
              display: "flex",
              alignItems: "center",
              borderRadius: "25px",
              border: "1px solid rgba(0,0,0,0.3)",
            }}
          >
            <SearchIcon style={{ color: "rgba(0,0,0,0.3)", padding: "2px" }} sx={styles.drawerIcon} />
            <InputBase placeholder="Search store" type="text" aria-label="search icons"></InputBase>
          </Box>
        </Grid> */}
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
                  <Grid container item gap={10} item xs={12} sm={12}>
                    {!data ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      data.data

                        .map((item) => item.vendor)
                        .map((item) => (
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
                                query: { dataType: type, itemValue: item },
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              {item}
                            </Link>
                          </Grid>
                        ))
                    )}

                    <Button onClick={brandsNameHanlder}>
                      <ListItemText
                        style={{ color: "black", fontWeight: "600", fontSize: "12px", textDecoration: "underline" }}
                      >
                        View all.....
                      </ListItemText>
                    </Button>
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
                  <Grid container item gap={10} item xs={12} sm={12}>
                    {!shopList ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      shopList.data
                        .map((item) => item.productType)

                        .slice(0, 2)
                        .map((item) => (
                          <Grid
                            key={item}
                            item
                            xs={5.5}
                            sm={5.5}
                            style={{ color: "black", fontWeight: "500", fontSize: "14px" }}
                          >
                            <Link
                              as={`/${route?.query?.slug}/products`}
                              href={{
                                pathname: `/${route?.query?.slug}/products`,
                                query: { dataType: type, itemValue: item },
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              {item}
                            </Link>
                          </Grid>
                        ))
                    )}
                    <ListItemText
                      style={{ color: "black", fontWeight: "600", fontSize: "12px", textDecoration: "underline" }}
                    >
                      View all.....
                    </ListItemText>
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
