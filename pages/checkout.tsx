import { Grid } from "@mui/material";
import CheckoutHeader from "components/checkoutOrder/checkoutHeader";
import CheckoutInformation from "components/checkoutOrder/checkoutInformation";
import OrderInformation from "components/checkoutOrder/orderInformation";

const Checkout = () => {
  return (
    <Grid container display={"flex"}>
      <CheckoutHeader />
      <CheckoutInformation />
      <OrderInformation />
    </Grid>
  );
};

export default Checkout;
