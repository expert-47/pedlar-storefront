import { Grid, Toolbar, Typography, useTheme, IconButton, Badge } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/navbar";
import React, { useState } from "react";
import PedlarDrawer from "./components/padlarDrawer";
import CartDrawer from "components/cartDrawer/cartDrawer";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

interface Props {
  storefrontName: string;
}

export const ResponsiveNavbar = (props: Props) => {
  const { storefrontName } = props;
  const theme = useTheme();
  const [openDrawer, toggleDrawer] = useState(false);
  const [openCart, toggleCart] = useState(false);
  const cartProducts = useSelector((data) => data.app.products);
  const onClickDrawer = () => {
    toggleDrawer(!openDrawer);
  };

  const onClickCart = () => {
    toggleCart(!openCart);
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ paddingTop: 4 }}>
        <PedlarDrawer openDrawer={openDrawer} storefrontName={storefrontName} toggleDrawer={toggleDrawer} />
        <Grid container item xs={12} alignItems={"center"} display={"flex"} paddingX={{ xs: theme.spacing(10) }}>
          <Box sx={styles.menuIcon}>
            <Image src="/menuIcon.png" alt="No Image Found" onClick={onClickDrawer} width={20} height={15} />
          </Box>
          <Link href={`/${props?.slugs}`}>
            <Image src="/pedlar.png" alt="No Image Found" width={80} height={25} />
          </Link>
          <Typography sx={styles.responsiveTypography}>{storefrontName ? storefrontName : ""}</Typography>
        </Grid>
        <Badge badgeContent={cartProducts.length} color="secondary" sx={{ right: 10 }}>
          <IconButton onClick={onClickCart} sx={styles.iconColor}>
            <Image src="/cart.png" height="19.48px" width="19.48px" />
          </IconButton>
        </Badge>
        <CartDrawer openDrawer={openCart} toggleDrawer={toggleCart} />
      </Toolbar>
    </React.Fragment>
  );
};
