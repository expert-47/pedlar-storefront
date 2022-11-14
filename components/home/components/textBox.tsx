import React from "react";
import styles from "styles/home";
import Text from "../../customText/index";
import Grid from "@mui/material/Grid";
import { Button, Box, useTheme, Typography } from "@mui/material";
import Link from "next/link";

const TextBox = () => {
  const theme = useTheme();
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
      }}
      paddingX={{ xs: theme.spacing(20), md: theme.spacing(30), lg: theme.spacing(40) }}
      paddingY={{ xs: theme.spacing(20), md: theme.spacing(30), lg: theme.spacing(40) }}
    >
      <Typography sx={styles.bannerText}>
        "Hi honeys! I’ve worked closely with some of my fave brands to curate my own store! All items are shipped out
        directly from each brand. I hope you love what I've put together."
      </Typography>
      <Grid container item xs={10} sm={10} md={10} lg={12} style={{ display: "flex", flexDirection: "column" }}>
        <Grid
          style={{
            display: "flex",
            justifyContent: "flex-start",
            paddingTop: "20px",
            alignItems: "center",
          }}
        >
          <img src="/instagram.png" height="16px" width="16px" />
          <Text fontSize={"16px"} sx={styles.boxtext}>
            elinorcharlotte
          </Text>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "flex-start",
            paddingTop: "8px",
            alignItems: "center",
          }}
        >
          <img src="tiktok.png" />
          <Text fontSize={"16px"} sx={styles.boxtext}>
            elridge
          </Text>
        </Grid>
        <Link href={"/checkout"}>
          <Grid
            style={{
              paddingTop: "20px",
            }}
          >
            <Button sx={styles.shopbutton}>Shop now</Button>
          </Grid>
        </Link>
      </Grid>
    </Box>
  );
};

export default TextBox;
