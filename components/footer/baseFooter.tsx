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
        xs={10}
        sm={8.5}
        md={11}
        lg={10}
        paddingX={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
        paddingY={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
      >
        <Grid item xs={12} sm={12} md={7.5} lg={7}>
          <Typography sx={styles.baseFootTypoheading}>Help & Support</Typography>
          <Typography sx={styles.baseFootTypotext}>Shipping & Returns</Typography>
          <Typography sx={styles.baseFootTypotext}>FAQ</Typography>
          <Typography sx={styles.baseFootTypotext}>Terms & Condition</Typography>
          <Typography sx={styles.baseFootTypotext}>Privacy Policy</Typography>
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
            Contact us at support@pedlar.com and out customer service team will be in touch.
          </Typography>
        </Grid>
      </Grid>
    </CustomGrid>
  );
};

export default BaseFooter;
