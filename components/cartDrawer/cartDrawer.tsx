import { Grid, Typography, Button, Drawer, CircularProgress, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import CheckoutOrder from "components/checkoutOrder/checkoutOrder";
import styles from "styles/checkout";
import { useEffect, useState } from "react";
import { getCartProducts } from "apis/graphql/grapgql";
import { checkoutCartDetails } from "../../apis/graphql/grapgql";
import { addProductToCart } from "store/slice/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { cartDrawerToggle } from "store/slice/appSlice";
import { useRouter } from "next/router";
import Link from "next/link";
import * as gtmEvents from "utils/gtm";

const CartDrawer = () => {
  const storeName = useSelector((data: any) => data.app.storeName);

  const cartId = useSelector((data: any) => data.app.cartId[storeName]);
  const cartProducts = useSelector((data: any) => data.app.products[storeName]) || [];
  const { showCart } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState("");
  const router = useRouter();
  const slug = router?.query;
  const [loading, setLoading] = useState(false);
  const apiForCheckout = async () => {
    gtmEvents.beginCheckout(cartProducts);

    const response = await checkoutCartDetails(cartId);

    dispatch(cartDrawerToggle(false));

    window.open(response?.data?.cart?.checkoutUrl, "_self");
  };

  const getCartList = async () => {
    if (cartId) {
      try {
        setLoading(true);
        const response = await getCartProducts(cartId);
        const cartProducts = response?.data?.cart?.lines?.nodes || [];
        dispatch(addProductToCart({ products: cartProducts, showCart: true }));
        gtmEvents.viewCart(cartProducts);
      } catch (error) {
        console.log("error");
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    if (!Array.isArray(cartProducts)) {
      return;
    }
    if (cartProducts?.length > 0) {
      if (cartProducts?.length == 1) {
        const price = Number(cartProducts[0].merchandise?.price?.amount) * Number(cartProducts[0].quantity);
        setTotalPrice(price);
        return;
      }
      const price = cartProducts.reduce((total: any, item: any) => {
        return typeof total == "object"
          ? Number(total.merchandise?.price?.amount) * Number(total.quantity) +
              Number(item?.merchandise.price?.amount) * Number(item.quantity)
          : total + Number(item?.merchandise.price?.amount) * Number(item.quantity);
      });

      setTotalPrice(price);
    } else {
      setTotalPrice("");
    }
  }, [cartProducts]);
  useEffect(() => {
    if (showCart) {
      getCartList();
    }
  }, [showCart]);

  const paperStyle = {
    color: "black",
    width: {
      lg: "25%",
      md: "35%",
      sm: "100%",
      xs: "90%",
    },
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-between",
  };

  const onCloseCart = () => {
    dispatch(cartDrawerToggle(false));
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
    <Drawer
      anchor="right"
      open={showCart}
      onClose={onCloseCart}
      transitionDuration={500}
      PaperProps={{
        sx: paperStyle,
      }}
    >
      <Grid container sx={{ padding: "20px" }}>
        <Grid
          container
          item
          xs={12}
          md={12}
          lg={12}
          display={"flex"}
          maxHeight="30px"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography sx={styles.cartDrawerTypo}>
            {cartProducts?.length ? `Cart(${totalProductLength != 0 ? totalProductLength : ""})` : "Cart"}
          </Typography>
          <CloseIcon onClick={onCloseCart} style={{ cursor: "pointer" }} />
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={12}
          lg={12}
          justifyContent={"center"}
          alignItems={"center"}
          paddingY={"40px"}
          paddingBottom="140px"
          sx={styles.cartDrawerSlider}
        >
          {loading && <CircularProgress color="secondary" />}
          {Array.isArray(cartProducts) &&
            cartProducts?.map((item: any, index: any) => {
              return (
                <CheckoutOrder
                  key={index}
                  vendor={item?.merchandise?.product?.vendor || ""}
                  title={item?.merchandise?.product?.title || ""}
                  image={item?.merchandise?.image?.url || ""}
                  name={(item?.merchandise?.title != "Default Title" && item?.merchandise?.title) || ""}
                  price={item?.merchandise?.price?.amount || 0}
                  CurrencyCode={item?.merchandise?.price?.currencyCode || "$"}
                  quantity={item?.quantity}
                  itemData={item}
                  index={index}
                />
              );
            })}
        </Grid>
      </Grid>

      {cartProducts?.length > 0 ? (
        <Grid
          item
          container
          xs={12}
          md={12}
          lg={12}
          direction={"column"}
          justifyContent={"center"}
          sx={{
            paddingRight: "20px",
            paddingLeft: "20px",
            backgroundColor: "white",
            position: "fixed",
            bottom: "0px",
            cursor: "pointer",
            zIndex: "9999999",
            width: { xs: "100%", sm: "100%", md: "35%", lg: "25%" },
          }}
        >
          <Grid
            container
            item
            sx={{
              display: "flex",
              padding: "5px",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "15px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "between" }}>
              <Typography sx={styles.totalText}>Total</Typography>
              <Typography fontSize="12px" sx={styles.taxStyle}>
                Incl. Taxes
              </Typography>
            </Box>
            <Typography sx={styles.paymentTotal}>{totalPrice ? `$${totalPrice?.toFixed(2)}` : ""}</Typography>
          </Grid>
          <Button sx={styles.checkoutButton} onClick={apiForCheckout}>
            Checkout
          </Button>
        </Grid>
      ) : (
        <Grid
          item
          container
          xs={12}
          md={12}
          lg={12}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"flex-end"}
          sx={{ paddingBottom: "150px" }}
        >
          <Grid
            container
            style={{
              display: "flex",
              padding: "5px",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "15px",
            }}
          >
            <Grid xs={12} item style={{ display: "flex", justifyContent: "center" }}>
              <Typography sx={styles.totalText}>Your cart is empty</Typography>
            </Grid>
            <Typography sx={styles.paymentTotal}>{totalPrice ? `$${totalPrice}` : ""}</Typography>
            <Link
              href={`/${slug.slug}/products`}
              style={{ display: "flex", width: "100%", justifyContent: "center", textDecoration: "none" }}
            >
              <Button sx={styles.checkoutButton} onClick={onCloseCart}>
                Shop now
              </Button>
            </Link>
          </Grid>
        </Grid>
      )}
    </Drawer>
  );
};

export default CartDrawer;
