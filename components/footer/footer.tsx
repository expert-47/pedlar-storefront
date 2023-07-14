import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Divider, useTheme } from "@mui/material";
import { styles } from "styles/footer";
import Text from "components/customText";
import Image from "next/image";
import Link from "next/link";
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
              <a href="https://pedlar.store/" target="_blank" rel="noopener noreferrer"  >
                
              <img src="/pedlar.png" style={{ marginBottom: "-4px", height: "16px" , cursor:"pointer" , marginLeft:"5px" }} />
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
          <Image src="/amex.png" style={styles.footerImage} width="35px" height="24px" />
          <Image src="/applePay.png" style={styles.footerImage} width="35px" height="24px" />
          <Image src="/mastercard.png" style={styles.footerImage} width="35px" height="24px" />
          <Image src="/paypal.png" style={styles.footerImage} width="35px" height="24px" />
          <Image src="/shopPay.png" style={styles.footerImage} width="35px" height="24px" />
          <Image src="/visa.png" style={styles.footerImage} width="35px" height="24px" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
