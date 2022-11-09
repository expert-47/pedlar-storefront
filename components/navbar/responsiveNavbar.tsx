import { Grid, Toolbar, Typography, useTheme, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/navbar";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
        <Grid container item xs={12} alignItems={"center"} display={"flex"} paddingX={{ xs: theme.spacing(5) }}>
          <Image width={20} height={15} src="/menuIcon.png" onClick={onClickDrawer} sx={styles.menuIcon} />
          <Link href="/">
            <Image src="/pedlar.png" alt="No Image Found" width={80} height={25} />
          </Link>
          <Typography sx={styles.responsiveTypography}>Hannah Juneva</Typography>
        </Grid>
        <IconButton
          style={{
            maxWidth: "20px",
          }}
        >
          <ShoppingCartIcon onClick={onClickDrawer} />
          <CartDrawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
          
        </IconButton>
      </Toolbar>
    </React.Fragment>
  );
};
