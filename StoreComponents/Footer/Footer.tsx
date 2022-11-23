import React from "react";
import { Box, Grid, Typography} from "@mui/material";
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styles } from "./style";

const Footer = () => {
  return (
    
    <Box sx={styles.staticFooter}>
      <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.footerRow}>
        <Grid item xs={12} sm={12} md={12} lg={5}>
            <Box>
              <img src="/footer-logo.svg" alt="" />
            </Box>
            <Typography sx={styles.footerText}>We’re always here to help.</Typography>
            <Typography sx={styles.footerText} style={{margin: '0 auto 0 0',  maxWidth: '435px'}}>Contact us at hello@pedlar.store and our team will be in touch.</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
            <Link href="#" sx={styles.footerLink}>FAQs</Link>
            <Link href="#" sx={styles.footerLink}>Shipping & Returns</Link>
            <Link href="#" sx={styles.footerLink}>Creator Terms & Conditions</Link>
            <Link href="#" sx={styles.footerLink}>Brands Terms & Conditions</Link>
            <Link href="#" sx={styles.footerLink}>Privacy Policy</Link>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Box style={{display:"flex", alignItems:'center'}}>
            <InstagramIcon style={{color:"#fff",fontSize:"32px"}} />
            <Link href="#" sx={styles.footersocial}>Instagram</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
