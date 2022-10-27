import { Grid, Typography, InputBase } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Text from "components/CustomText";
import { Commonbutton } from "../components/Button/Commonbutton";
import CheckoutOrder from "components/checkoutOrder/CheckoutOrder";
import { useStyles } from "components/checkoutOrder/Style";

const Checkout = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid
      container
      style={{
        display: "flex",
      }}
    >
      <Grid
        container
        style={{
          display: "flex",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs>
            <Text fontSize="12px" m={2}>
              Cart - Information - Payment
            </Text>
          </Grid>
          <Grid item xs={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Link href="/">
              <Image src="/pedlar.png" alt="No Image Found" width={68} height={22} />
            </Link>
            <Typography variant="h5" component="div" style={{ padding: "5px", fontWeight: "400", fontSize: "22px" }}>
              Hannah Juneva
            </Typography>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
        {/* <Grid sm={12} lg={4}>
          <Text fontSize="12px" m={2}>
            Cart - Information - Payment
          </Text>
        </Grid>
        <Grid style={{ display: "flex", alignItems: "center" }} sm={12} lg={8}>
          <Link href="/">
            <Image src="/pedlar.png" alt="No Image Found" width={68} height={22} />
          </Link>
          <Typography variant="h5" component="div" style={{ padding: "5px", fontWeight: "400", fontSize: "22px" }}>
            Hannah Juneva
          </Typography>
        </Grid> */}
      </Grid>

      <Grid lg={12} style={{ paddingLeft: "0px" }}>
        <Text fontSize="26px" className={cx(classes.checkoutText)}>
          Checkout
        </Text>
      </Grid>

      <Grid item container style={{ padding: "50px" }} lg={7}>
      {/* <Grid item container style={{ display: "flex", alignItems: "center" }} lg={7}> */}

        <Grid>
          <Text className={cx(classes.headingStyle)}>Personal Information</Text>

          <Grid container spacing={1} sm={12} lg={10}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <InputBase placeholder="First Name" className={cx(classes.inputStyle)} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <InputBase placeholder="Last Name" className={cx(classes.inputStyle)} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <InputBase placeholder="Email" className={cx(classes.inputStyle)} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <InputBase placeholder="Phone Number" className={cx(classes.inputStyle)} />
            </Grid>
          </Grid>
          <Text className={cx(classes.headingStyle)}>
            Delivery Information
          </Text>
          <Grid container spacing={1} sm={12} lg={10}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <InputBase placeholder="Address" className={cx(classes.inputStyle)} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <InputBase placeholder="Apartment" className={cx(classes.inputStyle)} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <InputBase placeholder="City" className={cx(classes.inputStyle)} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <InputBase placeholder="State/Territory" className={cx(classes.inputStyle)} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <InputBase placeholder="Country" className={cx(classes.inputStyle)} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <InputBase placeholder="Postcode" className={cx(classes.inputStyle)} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Commonbutton
                variant="text"
                label="Go to Payment"
                style={{
                  display: "block",
                  width: "100%",
                  height: "46px",
                  borderRadius: "30px",
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "none",
                  padding: "12px 24px 12px 24px",
                }}
                classname="deliveryBtn"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* YOU ARE ORDERING */}
      <Grid container item sm={12} lg={5} style={{ padding: "50px" }} spacing={1}>
        <Grid sm={12} lg={12}>
          <Text className={cx(classes.headingStyle)}>You are ordering</Text>
        </Grid>
        <CheckoutOrder />
        <CheckoutOrder />
        <CheckoutOrder />

        <Grid container style={{ display: "flex", padding: "5px", justifyContent: "space-between" }} sm={12} lg={7}>
          <Grid style={{ display: "flex", justifyContent: "space-between" }}>
            <Text className={cx(classes.totalText)}>Total</Text>
            <Text fontSize="12px" className={cx(classes.taxStyle)}>
              Incl. VAT & Taxes
            </Text>
          </Grid>
          <Text className={cx(classes.paymentTotal)}>$320</Text>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Checkout;
