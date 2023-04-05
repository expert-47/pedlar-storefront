import React from "react";
import { Grid, Typography } from "@mui/material";
import CheckoutOrder from "components/checkoutOrder/checkoutOrder";
import styles from "styles/checkout";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { data } from "./data";

const OrderDetailCollapsible = () => {
  return (
    <Grid container item xs={12} lg={5} sx={styles.mainContainer}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>You are ordering</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid sm={12} lg={12}>
            <Typography sx={styles.headingStyle}>You are ordering</Typography>
          </Grid>

          <Grid container item justifyContent={"center"}>
            {data.map((item) => (
              <CheckoutOrder image={item.image} name={item.name} price={item.price} />
            ))}
          </Grid>

          <Grid container style={{ display: "flex", padding: "5px", justifyContent: "space-between" }} sm={12} lg={7}>
            <Grid style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={styles.totalText}>Total</Typography>
              <Typography fontSize="12px" sx={styles.taxStyle}>
                Incl. Taxes
              </Typography>
            </Grid>
            <Typography sx={styles.paymentTotal}>$320</Typography>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};
export default OrderDetailCollapsible;
