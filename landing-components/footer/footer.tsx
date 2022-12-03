import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Image from "next/image";
import footerLogo from "../../public/footer-logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import { styles } from "./style";
import { CustomContainer } from "../landinglayout";
import { useTheme } from "@mui/material";
const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={styles.staticFooter} paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}>
      <CustomContainer>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={styles.footerRow}
          flexDirection={{ xs: "column-reverse", sm: "unset" }}
          paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
        >
          <Grid item xs={12} sm={5} md={5} lg={5} sx={styles.footerLogocol}>
            <Link href="/">
              <Image src={footerLogo} alt="footer logo" />
            </Link>
            <Typography sx={styles.footerText} fontSize={"22px"} fontWeight={"500"} paddingTop={"40px"}>
              We’re always here to help.
            </Typography>
            <Typography
              sx={styles.footerText}
              fontSize={"22px"}
              fontWeight={"500"}
              style={{ margin: "0 auto 0 0", maxWidth: "435px" }}
            >
              Contact us at hello@pedlar.store and our team will be in touch.
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={styles.footerMobcol}
            flexDirection={{ xs: "column-reverse", sm: "unset" }}
          >
            <Grid item xs={12} sm={12} md={12} lg={7}>
              <Box marginBottom={{ xs: "50px", sm: "0px" }}>
                <Link href="/faq" target={"FAQs"} sx={styles.footerLink}>
                  FAQs
                </Link>
                <Link href="/return-policy" target={"Shipping & Returns"} sx={styles.footerLink}>
                  Shipping & Returns
                </Link>
                <Link href="/creator-terms" target={"Creator Terms & Conditions"} sx={styles.footerLink}>
                  Creator Terms & Conditions
                </Link>
                <Link href="/brand-terms" target={"Brands Terms & Conditions"} sx={styles.footerLink}>
                  Brands Terms & Conditions
                </Link>
                <Link href="/privacy-policy" target={"Privacy Policy"} sx={styles.footerLink}>
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5}>
              <Box style={{ display: "flex", alignItems: "center", paddingBottom: "16px" }}>
                <InstagramIcon style={{ color: "#fff", fontSize: "32px" }} />
                <Link href="https://www.instagram.com/pedlar.official/" target="blank" sx={styles.footersocial}>
                  Instagram
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
