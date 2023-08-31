import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import styles from "styles/checkout";
import PedlarImage from "components/pedlarImage";

const CheckoutHeader = () => {
  return (
    <Grid container padding={"20px"} direction={{ xs: "column-reverse", sm: "row", md: "row", lg: "row" }}>
      <Grid item xs style={{ display: "flex", alignItems: "center" }}>
        <Typography sx={styles.headerText1}>Cart - Information - Payment</Typography>
      </Grid>
      <Grid item xs={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Link href="/" legacyBehavior>
          <Box sx={{ width: 68, height: 22, cursor: "pointer" }}>
            <PedlarImage src="/pedlar.png" alt="No Image Found" />
          </Box>
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
