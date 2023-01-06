import { Grid, Typography, Button, Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import CheckoutOrder from "components/checkoutOrder/checkoutOrder";
import styles from "styles/checkout";
import { data } from "components/checkoutOrder/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCartProducts } from "api/grapgql";
import { checkoutCartDetails } from "../../api/grapgql";

const CartDrawer = (props: { openDrawer: boolean; toggleDrawer: (value: boolean) => void }) => {
  const { openDrawer, toggleDrawer } = props;
  const [cartid, setCartid] = useState<string | null>("");

  const [cartData, setCartData] = useState([]);

  const [checkoutData, setCheckoutData] = useState();
  const apiForCheckout = async () => {
    if (typeof window !== "undefined") {
      const createdCartID = localStorage.getItem("cartID");
      let response = await checkoutCartDetails(createdCartID);

      setCheckoutData(response);
    }
  };

  useEffect(() => {
    apiForCheckout();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartID = localStorage.getItem("cartID");

      setCartid(cartID);

      const res = getCartProducts(cartID).then((response) => {
        // setCartData(response?.data?.cart?.lines?.nodes[0].merchandise);
        setCartData(response?.data?.cart?.lines?.nodes);
      });

      // }
    }
  }, []);
  // getting cart products

  const paperStyle = {
    color: "black",
    width: {
      lg: "25%",
      md: "30%",
    },
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: "20px",
    maxHeight: "100%",
  };

  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={() => toggleDrawer(false)}
      PaperProps={{
        sx: paperStyle,
      }}
    >
      <Grid container>
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
          <Typography sx={styles.cartDrawerTypo}>Cart ({cartData?.length})</Typography>
          <CloseIcon
            onClick={() => {
              toggleDrawer(false);
            }}
          />
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
          {/* {data.map((item) => ( */}

          {cartData?.map((item, index) => {
            return (
              <CheckoutOrder
                key={index}
                image={item?.merchandise?.image?.url}
                name={item?.merchandise?.title}
                price={"default = 50$"}
                quantity={item?.quantity}
              />
            );
          })}
          {/* <CheckoutOrder image={cartData?.image?.url} name={cartData?.title} price={"default = 50$"}  /> */}
          {/* price={item.price} */}
          {/* // ))} */}
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
          <Typography sx={styles.paymentTotal}>$320</Typography>
        </Grid>
        <Link href="/">
          <Button href={checkoutData?.data?.cart?.checkoutUrl} sx={styles.checkoutButton} target="_blank">
            Checkout
          </Button>
        </Link>
      </Grid>
    </Drawer>
  );
};

export default CartDrawer;
