import React from "react";
import { Box, Grid, Typography} from "@mui/material";
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styles } from "./style";
import { Container } from "@mui/system";

const Footer = () => {
  return (
    <Box sx={styles.staticFooter}>
    <Container>
      <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.footerRow}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box sx={styles.footerLogo}>
              <img src="/footer-logo.svg" alt="" />
            </Box>
            <Typography sx={styles.footerText}>We’re always here to help.</Typography>
            <Typography sx={styles.footerText} style={{margin: '0 auto 0 0',  maxWidth: '435px'}}>Contact us at hello@pedlar.store and our team will be in touch.</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box sx={styles.footersocialRow}>
              <Box sx={styles.footerMoblink}>
                <Link href="#" sx={styles.footerLink}>FAQs</Link>
                <Link href="#" sx={styles.footerLink}>Shipping & Returns</Link>
                <Link href="#" sx={styles.footerLink}>Creator Terms & Conditions</Link>
                <Link href="#" sx={styles.footerLink}>Brands Terms & Conditions</Link>
                <Link href="#" sx={styles.footerLink}>Privacy Policy</Link>
              </Box>

              <Box style={{display:"flex", alignItems:'center'}}>
                <InstagramIcon style={{color:"#fff",fontSize:"32px"}} />
                <Link href="#" sx={styles.footersocial}>Instagram</Link>
              </Box>
            </Box>
        </Grid>
      </Grid>
    </Container>
    </Box>

  );
};

export default Footer;
