import { Grid, Toolbar, Typography, useTheme, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/navbar";
import React, { useState } from "react";
import PedlarDrawer from "./components/padlarDrawer";
import CartDrawer from "components/cartDrawer/cartDrawer";
import { Box } from "@mui/system";

export const ResponsiveNavbar = () => {
  const theme = useTheme();
  const [openDrawer, toggleDrawer] = useState(false);
  const [openCart, toggleCart] = useState(false);

  const onClickDrawer = () => {
    toggleDrawer(!openDrawer);
  };

  const onClickCart = () => {
    toggleCart(!openCart);
  };

  return (
    <React.Fragment>
      <Toolbar>
        <PedlarDrawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
        <Grid container item xs={12} alignItems={"center"} display={"flex"} paddingX={{ xs: theme.spacing(10) }}>
          <Box sx={styles.menuIcon}>
            {" "}
            <Image src="/menuIcon.png" alt="No Image Found" onClick={onClickDrawer} width={20} height={15} />
          </Box>
          <Link href="/">
            <Image src="/pedlar.png" alt="No Image Found" width={80} height={25} />
          </Link>
          <Typography sx={styles.responsiveTypography}>Hannah Juneva</Typography>
        </Grid>
        <IconButton onClick={onClickCart} sx={styles.shoppingCartIcon}>
          <img src="/cart.png" height="19.48px" width="19.48px" />
        </IconButton>
        <CartDrawer openDrawer={openCart} toggleDrawer={toggleCart} />
      </Toolbar>
    </React.Fragment>
  );
};
