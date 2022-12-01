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
} from "@mui/material";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import useSwr from "swr";

import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Marquee from "react-fast-marquee";
import styles from "styles/navbar";

export const PedlarDrawer = (props: { openDrawer: boolean; toggleDrawer: (value: boolean) => void }) => {
  const { openDrawer, toggleDrawer } = props;
  const theme = useTheme();

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
        <Typography style={{ fontSize: "14px", fontWeight: "600" }}>
          FREE Returns - FREE Shipping - All Orders Shipped Directly From The Brand - FREE Returns - FREE Shipping - All
          Orders Shipped Directly From The Brand - FREE Returns - FREE Shipping - All Orders Shipped Directly From The
          Brand -
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
          <CloseIcon onClick={onClickDrawer} />
          <Grid item xs={10} sm={10} md={10} style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
            <Link href="/">
              <img src="/pedlar.png" alt="No Image Found" style={{ width: "70px", height: "30px" }} />
            </Link>
            <Typography style={{ fontSize: "22px", fontWeight: "400", paddingLeft: "5px" }}>Hannah Juneva</Typography>
          </Grid>
          <IconButton sx={styles.shoppingCartIcon}>
            <img src="/cart.png" height="19.48px" width="19.48px" />
          </IconButton>
        </Grid>
        <Grid style={{ paddingTop: "36px", paddingLeft: "10px", paddingRight: "10px" }}>
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
        </Grid>
        <ListItemText sx={styles.drawerText}>
          <Link href="/">
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
                        .sort()
                        .slice(0, 28)
                        .map((item) => (
                          <Grid
                            key={item}
                            item
                            xs={5.5}
                            sm={5.5}
                            style={{ color: "black", fontWeight: "500", fontSize: "14px" }}
                          >
                            {item}
                          </Grid>
                        ))
                    )}
                    <Link href="/">
                      <ListItemText
                        style={{ color: "black", fontWeight: "600", fontSize: "12px", textDecoration: "underline" }}
                      >
                        View all.....
                      </ListItemText>
                    </Link>
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
                        .sort()
                        .slice(0, 28)
                        .map((item) => (
                          <Grid
                            key={item}
                            item
                            xs={5.5}
                            sm={5.5}
                            style={{ color: "black", fontWeight: "500", fontSize: "14px" }}
                          >
                            {item}
                          </Grid>
                        ))
                    )}
                    <Link href="/">
                      <ListItemText
                        style={{ color: "black", fontWeight: "600", fontSize: "12px", textDecoration: "underline" }}
                      >
                        View all.....
                      </ListItemText>
                    </Link>
                  </Grid>
                </ListItem>
              </List>
            </Collapse>
          </List>
          <Link href="faq">
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
