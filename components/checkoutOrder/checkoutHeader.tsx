import React from "react";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/checkout";

const CheckoutHeader = () => {
  return (
    <Grid container padding={"20px"} direction={{ xs: "column-reverse", sm: "row", md: "row", lg: "row" }}>
      <Grid item xs style={{ display: "flex", alignItems: "center" }}>
        <Typography sx={styles.headerText1}>Cart - Information - Payment</Typography>
      </Grid>
      <Grid item xs={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Link href="/">
          <Image src="/pedlar.png" alt="No Image Found" width={68} height={22} style={{ cursor: "pointer" }} />
        </Link>
        <Typography variant="h5" component="div" sx={styles.headerText2}>
          Hannah Juneva
        </Typography>
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
};

export default CheckoutHeader;
