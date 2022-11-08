import { Grid, Toolbar, Typography, useTheme, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/navbar";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PedlarDrawer from "./components/padlarDrawer";

export const ResponsiveNavbar = () => {
  const theme = useTheme();
  const [openDrawer, toggleDrawer] = useState(false);

  const onClickDrawer = () => {
    toggleDrawer(!openDrawer);
  };

  return (
    <React.Fragment>
      <Toolbar
        // style={{
        //   paddingLeft: theme.spacing(10),
        //   paddingRight: theme.spacing(20),
        // }}
      >
        <PedlarDrawer toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
        <Grid container item xs={12} alignItems={"center"} display={"flex"} paddingX={{ xs: theme.spacing(5) }}>
          <MenuIcon onClick={onClickDrawer} sx={styles.menuIcon} />
          <Link href="/">
            <Image src="/pedlar.png" alt="No Image Found" width={80} height={25} />
          </Link>
          <Typography sx={styles.responsiveTypography}>
            Hannah Juneva
          </Typography>
        </Grid>
        <IconButton
          style={{
            maxWidth: "20px",
          }}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </React.Fragment>
  );
};
