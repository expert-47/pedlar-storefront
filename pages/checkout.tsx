import { Grid, Typography, InputBase, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import CheckoutOrder from "components/checkoutOrder/checkoutOrder";
import styles from "styles/checkout";
const Checkout = () => {
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
        <Grid
          container
          lg={12}
          md={12}
          sm={12}
          xs={12}
          spacing={3}
          padding="20px 20px"
          direction={{ xs: "column-reverse", sm: "row", md: "row", lg: "row" }}
        >
          <Grid item xs>
            <Typography sx={styles.headerText1}>Cart - Information - Payment</Typography>
          </Grid>
          <Grid item xs={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Link href="/">
              <Image src="/pedlar.png" alt="No Image Found" width={68} height={22} />
            </Link>
            <Typography variant="h5" component="div" sx={styles.headerText2}>
              Hannah Juneva
            </Typography>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Grid>

      <Grid xs={12} lg={12} sx={styles.checkoutContainer}>
        <Typography sx={styles.checkoutText}>
          Checkout
        </Typography>
      </Grid>

      <Grid item container xs={12} md={7} lg={7} sx={styles.mainContainer}>
          <Typography sx={styles.headingStyle}>Personal Information</Typography>

          <Grid container spacing={1} sm={12} lg={10}>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={styles.inputBaseGrid}>
              <InputBase placeholder="First Name" sx={styles.inputStyle} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={styles.inputBaseGrid}>
              <InputBase placeholder="Last Name" sx={styles.inputStyle} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={styles.inputBaseGrid}>
              <InputBase placeholder="Email" sx={styles.inputStyle} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={styles.inputBaseGrid}>
              <InputBase placeholder="Phone Number" sx={styles.inputStyle} />
            </Grid>
          </Grid>
          <Typography sx={styles.headingStyle}>Delivery Information</Typography>
          <Grid container spacing={1} sm={12} lg={10}>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={styles.inputBaseGrid}>
              <InputBase placeholder="Address" sx={styles.inputStyle} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={styles.inputBaseGrid}>
              <InputBase placeholder="Apartment" sx={styles.inputStyle} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={styles.inputBaseGrid}>
              <InputBase placeholder="City" sx={styles.inputStyle} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={styles.inputBaseGrid}>
              <InputBase placeholder="State/Territory" sx={styles.inputStyle} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={styles.inputBaseGrid}>
              <InputBase placeholder="Country" sx={styles.inputStyle} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={styles.inputBaseGrid}>
              <InputBase placeholder="Postcode" sx={styles.inputStyle} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Button sx={styles.paymentButton}>Go to payment</Button>              
            </Grid>
          </Grid>
      </Grid>
      {/* YOU ARE ORDERING */}
      <Grid container item xs={12} md={5} lg={5} sx={styles.mainContainer}>
        <Grid sm={12} lg={12}>
          <Typography sx={styles.headingStyle}>You are ordering</Typography>
        </Grid>
        <CheckoutOrder />
        <CheckoutOrder />
        <CheckoutOrder />

        <Grid container style={{ display: "flex", padding: "5px", justifyContent: "space-between" }} sm={12} lg={7}>
          <Grid style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={styles.totalText}>Total</Typography>
            <Typography fontSize="12px" sx={styles.taxStyle}>
              Incl. VAT & Taxes
            </Typography>
          </Grid>
          <Typography sx={styles.paymentTotal}>$320</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Checkout;
