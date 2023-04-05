import { Grid, Typography } from "@mui/material";
import CheckoutHeader from "components/checkoutOrder/checkoutHeader";
import CheckoutInformation from "components/checkoutOrder/checkoutInformation";
import OrderInformation from "components/checkoutOrder/orderInformation";
import styles from "styles/checkout";

const Checkout = () => {
  return (
    <Grid container display={"flex"}>
      <CheckoutHeader />
      <Grid xs={12} lg={12} sx={styles.checkoutContainer}>
        <Typography sx={styles.checkoutText}>Checkout</Typography>
      </Grid>
      <CheckoutInformation />
      <OrderInformation />
    </Grid>
  );
};

export default Checkout;
