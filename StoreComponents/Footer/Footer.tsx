import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";
// import InstagramIcon from "@mui/icons-material/Instagram";
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
          paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
        >
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Box sx={styles.footerLogo}>
              <img src="/footer-logo.svg" alt="" />
            </Box>
            <Typography sx={styles.footerText}>We’re always here to help.</Typography>
            <Typography sx={styles.footerText} style={{ margin: "0 auto 0 0", maxWidth: "435px" }}>
              Contact us at hello@pedlar.store and our team will be in touch.
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={6} md={6} lg={6} sx={styles.footerMobcol}>
            <Grid item xs={12} sm={12} md={12} lg={7} sx={styles.footersocialRow}>
              <Box sx={styles.footerMoblink}>
                <Link href="#" sx={styles.footerLink}>
                  FAQs
                </Link>
                <Link href="/landing/returnpolicy" sx={styles.footerLink}>
                  Shipping & Returns
                </Link>
                <Link href="/landing/creatorterms" sx={styles.footerLink}>
                  Creator Terms & Conditions
                </Link>
                <Link href="/landing/brandterms" sx={styles.footerLink}>
                  Brands Terms & Conditions
                </Link>
                <Link href="/landing/privacypolicy" sx={styles.footerLink}>
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5}>
              <Box style={{ display: "flex", alignItems: "center" }}>
                {/* <InstagramIcon style={{ color: "#fff", fontSize: "32px" }} /> */}
                <Link href="#" sx={styles.footersocial}>
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
