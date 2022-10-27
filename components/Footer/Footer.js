import * as React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useState } from "react";
import { CustomContainer } from "components/Layout/layout";
import { useStyles } from "./Styles";

const Footer = () => {
  const { classes, cx } = useStyles();
  const [date] = useState(new Date());

  return (
    <CustomContainer>
      <Grid container item xs={12} sm={12} md={12} lg={12} className={cx(classes.gridstyle)}>
        <Grid item xs={12} sm={7} md={8} lg={9.5} spacing={4}>
          <Typography varaint="h5" style={{ fontSize: "16px", fontWeight: "400" }}>
            &copy; {`${date.getFullYear()} pedlar PTY/LTD. Powered by`}
            <img src="/pedlar.png" style={{ marginBottom: "-5px", height: "16px" }} />
          </Typography>
        </Grid>
        
        <Grid item xs={12} sm={5} md={4} lg={2.5}>
          <img src="/amex.png" style={{ height: "44px", marginRight: "15px" }}></img>
          <img src="/apple-pay.png" style={{ height: "44px", marginRight: "15px" }}></img>
          <img src="/mastercard.png" style={{ height: "44px", marginRight: "15px" }}></img>
          <img src="/paypal.png" style={{ height: "44px", marginRight: "15px" }}></img>
          <img src="/visa.png" style={{ height: "44px" }}></img>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Footer;
