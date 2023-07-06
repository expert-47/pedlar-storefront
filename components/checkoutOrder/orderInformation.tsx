import React from "react";
import { Grid, Typography } from "@mui/material";
import CheckoutOrder from "components/checkoutOrder/checkoutOrder";
import styles from "styles/checkout";
import { data } from "./data";

const OrderInformation = () => {
  return (
    <Grid container item xs={12} lg={5} sx={styles.mainContainer}>
      <Grid sm={12} lg={12}>
        <Typography sx={styles.headingStyle}>You are ordering</Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={8}
        lg={10}
        sx={{
          overflow: "scroll",
          // height: "75vh",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {data.map((item) => (
          <CheckoutOrder key={item?.name} image={item.image} name={item.name} price={item.price} />
        ))}
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={8}
        lg={10}
        style={{ display: "flex", padding: "5px", justifyContent: "space-between" }}
      >
        <Grid style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={styles.totalText}>Total</Typography>
          <Typography fontSize="12px" sx={styles.taxStyle}>
            Incl. Taxes
          </Typography>
        </Grid>
        <Typography sx={styles.paymentTotal}>$320</Typography>
      </Grid>
    </Grid>
  );
};

export default OrderInformation;
