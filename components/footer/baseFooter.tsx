import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, useTheme } from "@mui/material";
import styles from "styles/home";
import { CustomGrid } from "components/layout";
import Link from "next/link";

const BaseFooter = () => {
  const theme = useTheme();

  return (
    <CustomGrid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        item
        xs={10}
        sm={8.5}
        md={11}
        lg={10}
        paddingX={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
        paddingY={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
      >
        <Grid item xs={12} sm={12} md={7.5} lg={7}>
          <Typography sx={styles.baseFootTypoheading}>Help & Support</Typography>
          <Link href="/return-policy">
            <Typography sx={styles.baseFootTypotext}>Shipping & Returns</Typography>
          </Link>
          <Link href="/frequently-ask-question">
            <Typography sx={styles.baseFootTypotext}>FAQ</Typography>
          </Link>
          <Link href="/terms-and-condition">
            <Typography sx={styles.baseFootTypotext}>Terms & Condition</Typography>
          </Link>
          <Link href="/privacy-policy">
            <Typography sx={styles.baseFootTypotext}>Privacy Policy</Typography>
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3.8}
          container
          paddingY={{ xs: theme.spacing(30), md: theme.spacing(80), lg: theme.spacing(80) }}
        >
          <Typography sx={styles.baseFootTypopara}>
            We're always here to help.
            <br />
            Contact us at{" "}
            <a href="hello@pedlar.store" style={{ textDecoration: "none", color: "black" }}>
              hello@pedlar.store
            </a>{" "}
            and out customer service team will be in touch.
          </Typography>
        </Grid>
      </Grid>
    </CustomGrid>
  );
};

export default BaseFooter;
