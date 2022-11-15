import React from "react";
import { Grid, Typography, InputBase, Button } from "@mui/material";
import styles from "styles/checkout";
import { CustomGrid } from "components/layout";

const CheckoutInformation = () => {
  return (
    <Grid container item xs={12} sm={12} md={12} lg={7} >
      
     <CustomGrid>     
      
      <Grid item container xs={12} lg={12} sx={styles.mainContainer}>
        <Typography sx={styles.headingStyle}>Personal Information</Typography>

        <Grid container spacing={1} sm={12} lg={11}>
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
        <Grid container spacing={1} sm={12} lg={11}>
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
          <Grid container item sm={12} md={11.85} lg={11.8}>
            <Button sx={styles.paymentButton}>Go to payment</Button>
          </Grid>
        </Grid>
      </Grid>
      </CustomGrid>

    </Grid>
  );
};

export default CheckoutInformation;
