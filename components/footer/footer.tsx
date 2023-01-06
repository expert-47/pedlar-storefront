import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Divider, useTheme } from "@mui/material";
import { useState } from "react";
import { useStyles } from "styles/footer";
import Text from "components/customText";
import Image from "next/image";
const Footer = () => {
  const { classes, cx } = useStyles();
  const [date] = useState(new Date());
  const theme = useTheme();

  return (
    <Box>
      <Divider />
      <Grid
        container
        direction={{ xs: "column-reverse", lg: "row", md: "column-reverse" }}
        justifyContent={{ lg: "space-between", sm: "center", md: "center" }}
        className={cx(classes.container)}
      >
        <Grid
          item
          lg={6}
          md={12}
          sm={12}
          container
          direction={{ xs: "column", md: "column", lg: "row" }}
          justifyContent={{ xs: "center", md: "center", lg: "flex-start" }}
          alignItems={{ xs: "center", md: "center" }}
          paddingTop={{ xs: theme.spacing(10), md: theme.spacing(10) }}
          paddingBottom={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
        >
          <Grid
            paddingTop={{ md: theme.spacing(10), xs: theme.spacing(10) }}
            paddingBottom={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
          >
            <Text fontSize="16px" className={cx(classes.footerText)}>
              &copy; {`${date.getFullYear()} pedlar PTY/LTD.`}
            </Text>
          </Grid>
          <Grid
            paddingTop={{ md: theme.spacing(10), xs: theme.spacing(10) }}
            paddingBottom={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
          >
            <Text fontSize="16px" className={cx(classes.footerText)}>
              Powered by <img src="/pedlar.png" style={{ marginBottom: "-4px", height: "16px" }} />
            </Text>
          </Grid>
        </Grid>
        <Grid
          item
          lg={6}
          md={12}
          container
          justifyContent={{ lg: "flex-end", md: "center", xs: "center" }}
          alignItems={{ lg: "flex-end", md: "center", xs: "center" }}
          paddingTop={{ md: theme.spacing(10), xs: theme.spacing(10) }}
          paddingBottom={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
        >
          <Image src="/amex.png" className={cx(classes.footerImage)} width="35px" height="24px" />
          <Image src="/applePay.png" className={cx(classes.footerImage)} width="35px" height="24px" />
          <Image src="/mastercard.png" className={cx(classes.footerImage)} width="35px" height="24px" />
          <Image src="/paypal.png" className={cx(classes.footerImage)} width="35px" height="24px" />
          <Image src="/shopPay.png" className={cx(classes.footerImage)} width="35px" height="24px" />
          <Image src="/visa.png" className={cx(classes.footerImage)} width="35px" height="24px" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
