import { Grid, Typography, Button, Drawer, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import CheckoutOrder from "components/checkoutOrder/checkoutOrder";
import styles from "styles/checkout";
import { useEffect, useState } from "react";
import { getCartProducts } from "api/graphql/grapgql";
import { checkoutCartDetails } from "../../api/graphql/grapgql";
import { addProductToCart } from "store/slice/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { cartDrawerToggle } from "store/slice/appSlice";
import { useRouter } from "next/router";
import Link from "next/link";
import * as gtmEvents from "utils/gtm";

const CartDrawer = () => {
  const cartId = useSelector((data: any) => data.app.cartId);
  const cartProducts = useSelector((data: any) => data.app.products);
  const { showCart } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState("");
  const router = useRouter();
  const slug = router?.query;
  const [loading, setLoading] = useState(false);
  const apiForCheckout = async () => {
    const response = await checkoutCartDetails(cartId);
    window.open(response?.data?.cart?.checkoutUrl, "_self");
    gtmEvents.beginCheckout(cartProducts);
    dispatch(cartDrawerToggle(false));
  };
  const shopnowRoute = () => {
    router.push("/products");
  };

  const getCartList = async () => {
    if (cartId) {
      try {
        setLoading(true);
        let response = await getCartProducts(cartId);
        let cartProducts = response?.data?.cart?.lines?.nodes || [];
        dispatch(addProductToCart(cartProducts));
        gtmEvents.viewCart(cartProducts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    if (cartProducts?.length > 0) {
      if (cartProducts?.length == 1) {
        let price = Number(cartProducts[0].merchandise?.price?.amount) * Number(cartProducts[0].quantity);
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
      xs: "100%",
    },
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-between",

    maxHeight: "100%",
  };

  const onCloseCart = () => {
    dispatch(cartDrawerToggle(false));
  };

  return (
    <Drawer
      anchor="right"
      open={showCart}
      onClose={onCloseCart}
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
            {cartProducts?.length ? `Cart(${cartProducts?.length || ""})` : "Cart"}
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
          sx={styles.cartDrawerSlider}
        >
          {loading && <CircularProgress color="secondary" />}
          {cartProducts?.map((item: any, index: any) => {
            console.log("item", item);

            return (
              <CheckoutOrder
                key={index}
                //  title={item?.merchandise?.name || ""}
                image={item?.merchandise?.image?.url || ""}
                name={item?.merchandise?.title || ""}
                price={item?.merchandise?.price?.amount || 0}
                CurrencyCode={item?.merchandise?.price?.currencyCode || "$"}
                quantity={item?.quantity}
                itemData={item}
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
          alignItems={"flex-end"}
          sx={{ paddingRight: "20px", paddingLeft: "20px", paddingBottom: "150px" }}
        >
          <Grid
            container
            item
            style={{
              display: "flex",
              padding: "5px",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "15px",
            }}
          >
            <Grid item style={{ display: "flex", justifyContent: "between" }}>
              <Typography sx={styles.totalText}>Total</Typography>
              <Typography fontSize="12px" sx={styles.taxStyle}>
                Incl. Taxes
              </Typography>
            </Grid>

            <Typography sx={styles.paymentTotal}>{totalPrice ? `$${totalPrice}` : ""}</Typography>
          </Grid>
          <Link href={{ pathname: "/products", query: { slug: slug.slug } }} as={`/${slug.slug}/products`}>
            <Button
              // href={checkoutData?.data?.cart?.checkoutUrl}
              // disabled={cartData?.length > 0 ? false : true}
              sx={styles.checkoutButton}
              onClick={apiForCheckout}
            >
              Checkout
            </Button>
          </Link>
          {/* <Link href="/checkout">
          <Button sx={styles.checkoutButton} >Checkout</Button>
        </Link> */}
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
          sx={{ paddingRight: "20px", paddingLeft: "20px", paddingBottom: "150px" }}
        >
          <Grid
            container
            item
            style={{
              display: "flex",
              padding: "5px",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "15px",
            }}
          >
            <Grid item style={{ display: "flex", justifyContent: "between" }}>
              <Typography sx={styles.totalText}>Your cart is empty</Typography>
              {/* <Typography fontSize="12px" sx={styles.taxStyle}>
              Incl. VAT & Taxes
            </Typography> */}
            </Grid>

            <Typography sx={styles.paymentTotal}>{totalPrice ? `$${totalPrice}` : ""}</Typography>
          </Grid>
          <Link href={{ pathname: "/products", query: { slug: slug.slug } }} as={`/${slug.slug}/products`}>
            <Button
              // href={checkoutData?.data?.cart?.checkoutUrl}
              // disabled={cartData?.length > 0 ? false : true}
              sx={styles.checkoutButton}
              // onClick={apiForCheckout}
              onClick={onCloseCart}
            >
              Shop now
            </Button>
          </Link>
          {/* <Link href="/checkout">
          <Button sx={styles.checkoutButton} >Checkout</Button>
        </Link> */}
        </Grid>
      )}
    </Drawer>
  );
};

export default CartDrawer;
