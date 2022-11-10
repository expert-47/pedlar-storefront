import { Grid, Toolbar, Typography, useTheme, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/navbar";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PedlarDrawer from "./components/padlarDrawer";
import CartDrawer from "components/cartDrawer/cartDrawer";


export const ResponsiveNavbar = () => {
  const theme = useTheme();
  const [openDrawer, toggleDrawer] = useState(false);

  const onClickDrawer = () => {
    toggleDrawer(!openDrawer);
  };
  return (
    <React.Fragment>
      <Toolbar>
        <PedlarDrawer toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
        <Grid container item xs={12} alignItems={"center"} display={"flex"} paddingX={{ xs: theme.spacing(10) }}>
          <MenuIcon onClick={onClickDrawer} sx={styles.menuIcon} />
          <Link href="/">
            <Image src="/pedlar.png" alt="No Image Found" width={80} height={25} style={{ padding: "10px" }} />
          </Link>
          <Typography sx={styles.responsiveTypography}>Hannah Juneva</Typography>
        </Grid>
        <IconButton sx={styles.shoppingCartIcon}>
          <ShoppingCartOutlinedIcon onClick={onClickDrawer} />
        </IconButton>
        <CartDrawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />

      </Toolbar>
    </React.Fragment>
  );
};
