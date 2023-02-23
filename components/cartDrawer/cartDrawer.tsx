import { Grid, Typography, Button, Drawer } from "@mui/material";
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

const CartDrawer = () => {
  const cartId = useSelector((data: any) => data.app.cartId);
  const cartProducts = useSelector((data: any) => data.app.products);
  const { showCart } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState("");

  const apiForCheckout = async () => {
    const response = await checkoutCartDetails(cartId);
    window.open(response?.data?.cart?.checkoutUrl, "_self");
    dispatch(cartDrawerToggle(false));
  };

  const getCartList = async () => {
    if (cartId) {
      try {
        let response = await getCartProducts(cartId);
        let cartProducts = response?.data?.cart?.lines?.nodes || [];
        dispatch(addProductToCart(cartProducts));
      } catch (error) {
        console.log(error);
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
    getCartList();
  }, []);

  useEffect(() => {});

  const paperStyle = {
    color: "black",
    width: {
      lg: "25%",
      md: "30%",
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
          <CloseIcon onClick={onCloseCart} />
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
          {cartProducts?.map((item: any, index: any) => {
            return (
              <CheckoutOrder
                key={index}
                title={item?.merchandise?.name || ""}
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

      <Grid
        item
        container
        xs={12}
        md={12}
        lg={12}
        direction={"column"}
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
        sx={{ paddingRight: "20px", paddingLeft: "20px" }}
      >
        <Grid
          container
          item
          style={{ display: "flex", padding: "5px", justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={styles.totalText}>Total</Typography>
            <Typography fontSize="12px" sx={styles.taxStyle}>
              Incl. VAT & Taxes
            </Typography>
          </Grid>

          <Typography sx={styles.paymentTotal}>{totalPrice ? `$${totalPrice}` : ""}</Typography>
        </Grid>

        <Button
          // href={checkoutData?.data?.cart?.checkoutUrl}
          // disabled={cartData?.length > 0 ? false : true}
          sx={styles.checkoutButton}
          onClick={apiForCheckout}
        >
          Checkout
        </Button>

        {/* <Link href="/checkout">
          <Button sx={styles.checkoutButton} >Checkout</Button>
        </Link> */}
      </Grid>
    </Drawer>
  );
};

export default CartDrawer;
