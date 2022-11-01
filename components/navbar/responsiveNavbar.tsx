import { Grid, Toolbar, Typography, useTheme, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useStyles } from "styles/navbar";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { PedlarDrawer } from "./components/PedlarDrawer";

export const ResponsiveNavbar = () => {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  const onClickDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <React.Fragment>
      <Toolbar
        style={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <PedlarDrawer />
        <Grid container item xs={12} alignItems={"center"} display={"flex"} paddingX={{ xs: theme.spacing(5) }}>
          <MenuIcon onClick={onClickDrawer} className={cx(classes.menuIcon)} />
          <Link href="/">
            <Image src="/pedlar.png" alt="No Image Found" width={80} height={25} />
          </Link>
          <Typography sx={{ flexGrow: 1 }} style={{ fontSize: "22px" }} className={cx(classes.responsiveTypography)}>
            Hannah Juneva
          </Typography>
          <IconButton
            style={{
              maxWidth: "20px",
            }}
          >
            <ShoppingCartIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    </React.Fragment>
  );
};
