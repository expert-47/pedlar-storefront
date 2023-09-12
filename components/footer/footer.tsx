import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Divider, useTheme } from "@mui/material";
import { styles } from "styles/footer";
import Text from "components/customText";

import { NextImage } from "components/pedlarImage";
const Footer = () => {
  const theme = useTheme();

  return (
    <Box>
      <Divider />
      <Grid
        container
        direction={{ xs: "column-reverse", lg: "row", md: "column-reverse" }}
        justifyContent={{ lg: "space-between", sm: "center", md: "center" }}
        sx={styles.container}
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
            <Text fontSize="16px" sx={styles.footerText}>
              Powered by
              <a href="https://pedlar.store/" target="_blank" rel="noopener noreferrer">
                <NextImage
                  src="/pedlar.png"
                  layout="default"
                  fill={false}
                  width={50}
                  height={24}
                  alt="pedlar logo"
                  style={{ marginBottom: "-4px", height: "16px", cursor: "pointer", marginLeft: "5px" }}
                />
              </a>
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
          <NextImage
            fill={false}
            layout="default"
            src="/amex.png"
            alt="amex"
            style={styles.footerImage}
            width={35}
            height={24}
          />
          <NextImage
            src="/applePay.png"
            fill={false}
            layout="default"
            style={styles.footerImage}
            alt="applePay"
            width={35}
            height={24}
          />
          <NextImage
            src="/mastercard.png"
            fill={false}
            layout="default"
            style={styles.footerImage}
            alt="mastercard"
            width={35}
            height={24}
          />
          <NextImage
            src="/paypal.png"
            layout="default"
            fill={false}
            style={styles.footerImage}
            alt="paypal"
            width={35}
            height={24}
          />
          <NextImage
            src="/shopPay.png"
            layout="default"
            fill={false}
            style={styles.footerImage}
            alt="shopPay"
            width={35}
            height={24}
          />
          <NextImage
            src="/visa.png"
            layout="default"
            fill={false}
            style={styles.footerImage}
            alt="visa"
            width={35}
            height={24}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
