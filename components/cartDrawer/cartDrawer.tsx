import { Grid, Typography, Button, Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import CheckoutOrder from "components/checkoutOrder/checkoutOrder";
import styles from "styles/checkout";

const CartDrawer = (props: { openDrawer: boolean; toggleDrawer: (value: boolean) => void }) => {
  const { openDrawer, toggleDrawer } = props;

  const paperStyle = {
    color: "black",
    width: {
      lg: "20%",
      md: "30%",
    },
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: "20px",
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
      <Grid container xs={12} md={12} lg={12} display={"flex"} maxHeight="30px" justifyContent={"space-between"} alignItems={"center"}>
        <Typography sx={styles.cartDrawerTypo}>Cart (3)</Typography>
        <CloseIcon
          onClick={() => {
            toggleDrawer(false);
          }}
        />
      </Grid>
      <Grid container xs={12} md={12} lg={12} justifyContent={"center"} paddingY={"30px"}>
        <CheckoutOrder />
        <CheckoutOrder />
        <CheckoutOrder />
      </Grid>

      <Grid container xs={12} md={12} lg={12} direction={"column"} marginTop={"40%"}>
        <Grid container style={{ display: "flex", padding: "5px", justifyContent: "space-between" }}>
          <Grid style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={styles.totalText}>Total</Typography>
            <Typography fontSize="12px" sx={styles.taxStyle}>
              Incl. VAT & Taxes
            </Typography>
          </Grid>
          <Typography sx={styles.paymentTotal}>$320</Typography>
        </Grid>
        <Button sx={styles.checkoutButton}>Checkout</Button>
      </Grid>
    </Drawer>
  );
};

export default CartDrawer;
