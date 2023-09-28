import { Grid, Toolbar, Typography, useTheme, IconButton, Badge } from "@mui/material";
import Link from "next/link";
import styles from "styles/navbar";
import React, { useState } from "react";
import PedlarDrawer from "./components/padlarDrawer";
import CartDrawer from "components/cartDrawer/cartDrawer";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { cartDrawerToggle } from "store/slice/appSlice";
import { NextImage } from "components/pedlarImage";

interface Props {
  storefrontName: string;
  slug: string;
  data: any;
  shopList: any;
  loading: any;
  shopListLoading: any;
}

export const ResponsiveNavbar = (props: Props) => {
  const { storefrontName, data, shopList, loading, shopListLoading } = props;
  const theme = useTheme();
  const [openDrawer, toggleDrawer] = useState(false);
  const storeName = useSelector((data: any) => data.app.storeName);
  const cartProducts = useSelector((data: any) => data.app.products[storeName]) || [];
  const dispatch = useDispatch();
  const onClickDrawer = () => {
    toggleDrawer(!openDrawer);
  };

  const onClickCart = () => {
    dispatch(cartDrawerToggle(true));
  };
  const totalProductLength =
    Array.isArray(cartProducts) && cartProducts.length > 1
      ? cartProducts.reduce((total: any, item: any) => {
          return typeof total == "object"
            ? Number(total.quantity) + Number(item.quantity)
            : total + Number(item.quantity);
        })
      : cartProducts.length == 1
      ? Number(cartProducts[0].quantity)
      : 0;
  return (
    <React.Fragment>
      <Toolbar sx={{ paddingTop: 4 }}>
        <PedlarDrawer
          openDrawer={openDrawer}
          storefrontName={storefrontName}
          toggleDrawer={toggleDrawer}
          slug={props?.slugs}
          collectionID={props?.collectionID}
          data={data}
          shopList={shopList}
          loading={loading}
          shopListLoading={shopListLoading}
          totalProductLength={totalProductLength}
        />
        <Grid container item xs={12} alignItems={"center"} display={"flex"} paddingX={{ xs: theme.spacing(0) }}>
          <Box sx={styles.menuIcon}>
            <NextImage
              layout="default"
              fill={false}
              src="/mIcons.png"
              alt="No Image Found"
              onClick={onClickDrawer}
              width={20}
              height={14}
              placeholder="empty"
            />
          </Box>
          <Link href={`/${props?.slugs}`} style={{ display: "flex", alignItems: "center" }}>
            <NextImage
              layout="default"
              fill={false}
              src="/pedlar.png"
              alt="No Image Found"
              width={80}
              height={25}
              placeholder="empty"
            />
          </Link>
          <Typography sx={styles.responsiveTypography}>{storefrontName ? storefrontName : ""}</Typography>
        </Grid>
        <Badge badgeContent={totalProductLength} color="secondary" sx={{ right: "10px" }}>
          <IconButton onClick={onClickCart} sx={styles.iconColor}>
            <NextImage
              layout="default"
              fill={false}
              src="/cart.png"
              alt="cart-image"
              height={19.48}
              width={19.48}
              placeholder="empty"
            />
          </IconButton>
        </Badge>
        <CartDrawer />
      </Toolbar>
    </React.Fragment>
  );
};
