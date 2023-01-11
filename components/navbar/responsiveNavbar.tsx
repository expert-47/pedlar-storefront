import { Grid, Toolbar, Typography, useTheme, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/navbar";
import React, { useState } from "react";
import PedlarDrawer from "./components/padlarDrawer";
import CartDrawer from "components/cartDrawer/cartDrawer";
import { Box } from "@mui/system";

interface Props {
  storefrontName: string;
}

export const ResponsiveNavbar = (props: Props) => {
  const { storefrontName } = props;
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
        <PedlarDrawer openDrawer={openDrawer} storefrontName={storefrontName} toggleDrawer={toggleDrawer} />
        <Grid container item xs={12} alignItems={"center"} display={"flex"} paddingX={{ xs: theme.spacing(10) }}>
          <Box sx={styles.menuIcon}>
            {" "}
            <Image src="/menuIcon.png" alt="No Image Found" onClick={onClickDrawer} width={20} height={15} />
          </Box>
          <Link href="/">
            <Image src="/pedlar.png" alt="No Image Found" width={80} height={25} />
          </Link>
          <Typography sx={styles.responsiveTypography}>{storefrontName ? storefrontName : ""}</Typography>
        </Grid>
        <IconButton onClick={onClickCart} sx={styles.iconColor}>
          <Image src="/cart.png" height="19.48px" width="19.48px" />
        </IconButton>
        <CartDrawer openDrawer={openCart} toggleDrawer={toggleCart} />
      </Toolbar>
    </React.Fragment>
  );
};
