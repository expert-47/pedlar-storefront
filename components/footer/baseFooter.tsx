import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, useTheme } from "@mui/material";
import styles from "styles/home";
import { CustomGrid } from "components/layout";

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
        sm={11.5}
        md={10}
        lg={12}
        paddingX={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
        paddingY={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
      >
        <Grid item xs={12} sm={12} md={8} lg={8.5}>
          <Typography fontSize={"22px"} sx={styles.baseFootTypoheading}>
            Help & Support
          </Typography>
          <Typography fontSize={"20px"} sx={styles.baseFootTypotext}>
            Shipping & Returns
          </Typography>
          <Typography fontSize={"20px"} sx={styles.baseFootTypotext}>
            International Shipping
          </Typography>
          <Typography fontSize={"20px"} sx={styles.baseFootTypotext}>
            Contact
          </Typography>
          <Typography fontSize={"20px"} sx={styles.baseFootTypotext}>
            Terms & Condition
          </Typography>
          <Typography fontSize={"20px"} sx={styles.baseFootTypotext}>
            Privacy Policy
          </Typography>
          <Typography fontSize={"20px"} sx={styles.baseFootTypotext}>
            FAQ
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3.5}
          container
          paddingY={{ xs: theme.spacing(30), md: theme.spacing(80), lg: theme.spacing(80) }}
        >
          <Typography fontSize={"20px"} sx={styles.baseFootTypopara}>
            We're always here to help.
            <br />
            Contact us at support@pedlar.com and out customer service team will be in touch.
          </Typography>
        </Grid>
      </Grid>
    </CustomGrid>
  );
};

export default BaseFooter;
