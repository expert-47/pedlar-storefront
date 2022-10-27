import {
  Drawer,
  List,
  ListItemText,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  InputBase,
  ListItem,
  MenuItem,
  ListItemButton,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useStyles } from "styles/navbar";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/system";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Marquee from "react-fast-marquee";

export const ResponsiveNavbar = () => {
  const { classes, cx } = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const paperStyle = {
    color: "black",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  };

  const onClickDrawer = () => {
    setOpenDrawer(!openDrawer);
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
    <React.Fragment>
      <Toolbar
        style={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          PaperProps={{
            sx: paperStyle,
          }}
        >
          <Marquee
            style={{ backgroundColor: "black", color: "white", paddingTop: "12px", paddingBottom: "12px" }}
            gradient={false}
          >
            <Typography style={{ fontSize: "14px", fontWeight: "600" }}>
              FREE Returns - FREE Shipping - All Orders Shipped Directly From The Brand - FREE Returns - FREE Shipping -
              All Orders Shipped Directly From The Brand - FREE Returns - FREE Shipping - All Orders Shipped Direc
            </Typography>
          </Marquee>
          <List className={cx(classes.drawerList)}>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={12}
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <CloseIcon onClick={onClickDrawer} />
              <Grid
                item
                xs={10}
                sm={10}
                md={10}
                style={{ display: "flex", textAlign: "center", justifyContent: "center" }}
              >
                <Link href="/">
                  <img src="/pedlar.png" alt="No Image Found" style={{ width: "70px", height: "30px" }} />
                </Link>
                <Typography style={{ fontSize: "22px", fontWeight: "400", paddingLeft: "5px" }}>
                  Hannah Juneva
                </Typography>
              </Grid>
              <ShoppingCartIcon />
            </Grid>
            <Grid style={{ paddingTop: "36px", paddingLeft: "10px", paddingRight: "10px" }}>
              <Box
                style={{
                  paddingLeft: "5px",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "25px",
                  border: "1px solid rgba(0,0,0,0.3)",
                }}
              >
                <SearchIcon className={cx(classes.drawerIcon)} />
                <InputBase placeholder="Search store" type="text" aria-label="search icons"></InputBase>
              </Box>
            </Grid>
            <ListItemText className={cx(classes.drawerText)}>
              <Link href="/">
                <ListItem color="inherit" style={{ fontSize: "16px", fontWeight: "600" }}>
                  Home
                </ListItem>
              </Link>
              <List>
                <ListItemButton onClick={handleClick} style={{ fontSize: "16px", fontWeight: "600", padding: "unset" }}>
                  <ListItem>
                    Brands
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                </ListItemButton>
                <Collapse in={open}>
                  <Grid container item xs={12} sm={12} md={12}>
                    <Grid item xs={6} sm={6}>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Brands Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Brands Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Brands Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Brands Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Brands Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Brands Name</MenuItem>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Brands Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Brands Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Brands Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Brands Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Brands Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px", textDecoration: "none" }}>
                        <Link href="/">
                          <a>View all</a>
                        </Link>
                      </MenuItem>
                    </Grid>
                  </Grid>
                </Collapse>
              </List>
              <List>
                <ListItemButton
                  onClick={handleClicks}
                  style={{ fontSize: "16px", fontWeight: "600", padding: "unset" }}
                >
                  <ListItem>Shops {opens ? <ExpandLess /> : <ExpandMore />}</ListItem>
                </ListItemButton>
                <Collapse in={opens}>
                  <Grid container item xs={12} sm={12} md={12}>
                    <Grid item xs={6} sm={6}>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Shop Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Shop Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Shop Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Shop Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Shop Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Shop Name</MenuItem>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Shop Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Shop Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Shop Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Shop Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px" }}>Shop Name</MenuItem>
                      <MenuItem style={{ color: "black", fontWeight: "600", fontSize: "12px", textDecoration: "none" }}>
                        <Link href="/">
                          <a>View all</a>
                        </Link>
                      </MenuItem>
                    </Grid>
                  </Grid>
                </Collapse>
              </List>
              <Link href="faq">
                <ListItem color="inherit" style={{ fontSize: "16px", fontWeight: "600" }}>
                  Faq
                </ListItem>
              </Link>
            </ListItemText>
          </List>
        </Drawer>
        <MenuIcon onClick={onClickDrawer} />
        <Link href="/">
          <Image src="/pedlar.png" alt="No Image Found" width={80} height={25} />
        </Link>
        <Typography sx={{ flexGrow: 1 }} style={{ fontSize: "22px", fontWeight: "400", padding: "5px" }}>
          Hannah Juneva
        </Typography>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </React.Fragment>
  );
};
