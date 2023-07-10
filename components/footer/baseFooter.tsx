import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, useTheme, Link, Box } from "@mui/material";
import styles from "styles/home";
import { CustomGrid } from "components/layout";
import { useRouter } from "next/router";

const BaseFooter = () => {
  const route = useRouter();
  const path = route.asPath.split("/")[1];
  const theme = useTheme();

  return (
    <CustomGrid
      style={{
        display: "flex",
        justifyContent: "flex-satrt",
        alignItems: "center",
        paddingLeft: "15px",
      }}
    >
      <Grid
        container
        item
        xs={11}
        sm={8.5}
        md={11}
        lg={10}
        paddingX={{ xs: theme.spacing(0), md: theme.spacing(20), lg: theme.spacing(40) }}
        paddingY={{ xs: theme.spacing(0), md: theme.spacing(20), lg: theme.spacing(40) }}
      >
        <Grid item xs={12} sm={12} md={7.5} lg={7}>
          <Typography sx={styles.baseFootTypoheading}>Help & Support</Typography>
          <Link href={`/${path}/return-policy`} target={"blank"}>
            <Typography sx={styles.baseFootTypotext}>Shipping & Returns</Typography>
          </Link>
          <Link href={`/${path}/faq`} target={"blank"}>
            <Typography sx={styles.baseFootTypotext}>FAQ</Typography>
          </Link>
          <Link href={`/${path}/terms-and-conditions`} target={"blank"}>
            <Typography sx={styles.baseFootTypotext}>Terms & Conditions</Typography>
          </Link>
          <Link href={`/${path}/privacy-policy`} target={"blank"}>
            <Typography sx={styles.baseFootTypotext}>Privacy Policy</Typography>
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={5}
          container
          paddingY={{ xs: theme.spacing(30), md: theme.spacing(80), lg: theme.spacing(80) }}
        >
          <Typography sx={styles.baseFootTypopara}>
            We're always here to help.
            <br />
            <Box>
              Contact us at{" "}
              <a href="mailto:hello@pedlar.store" style={{ color: "black", textDecoration: "underline" }}>
                hello@pedlar.store
              </a>{" "}
            </Box>
            and our customer service team will be in touch.
          </Typography>
        </Grid>
      </Grid>
    </CustomGrid>
  );
};

export default BaseFooter;
