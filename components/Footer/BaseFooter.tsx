import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useStyles } from "./Styles";

const BaseFooter = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container item xs={12} sm={12} md={12} lg={12} style={{ alignItems: "center" }}>
      <Grid item xs={12} sm={8} md={8} lg={8.5}>
        <Typography fontSize={"22px"} className={cx(classes.typoheading)}>
          Help & Support
        </Typography>
        <Typography fontSize={"20px"} className={cx(classes.typopara)}>
          Shipping & Returns
        </Typography>
        <Typography fontSize={"20px"} className={cx(classes.typotext)}>
          International Shipping
        </Typography>
        <Typography fontSize={"20px"} className={cx(classes.typotext)}>
          Contact
        </Typography>
        <Typography fontSize={"20px"} className={cx(classes.typotext)}>
          Terms & Condition
        </Typography>
        <Typography fontSize={"20px"} className={cx(classes.typotext)}>
          Privacy Policy
        </Typography>
        <Typography fontSize={"20px"} className={cx(classes.typotext)}>
          FAQ
        </Typography>
      </Grid>

      <Grid item xs={11} sm={4} md={4} lg={3.5}>
        <Typography style={{ fontWeight: "600", fontSize: "20px" }}>
          We're always here to help.
          <br />
          Contact us at support@pedlar.com and out customer service team will be in touch.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BaseFooter;
