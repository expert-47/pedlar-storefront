import React from "react";
import { useStyles } from "styles/home";
import Text from "../../CustomText/index";
import Grid from "@mui/material/Grid";
import { Button, Box, useTheme } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const TextBox = () => {
  const { classes, cx } = useStyles();
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
      <Text fontSize="24px" fontWeight="700">
        "Hi honeys! I’ve worked closely with some of my fave brands to curate my own store! All items are shipped out
        directly from each brand. I hope you love what I've put together."
      </Text>
      <Grid container item xs={10} sm={10} md={10} lg={12} style={{ display: "flex", flexDirection: "column" }}>
        <Grid
          style={{
            display: "flex",
            justifyContent: "flex-start",
            paddingTop: "20px",
            alignItems: "center",
          }}
        >
          <InstagramIcon />
          <Text fontSize={"16px"} className={cx(classes.boxtext)}>
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
          <InstagramIcon />
          <Text fontSize={"16px"} className={cx(classes.boxtext)}>
            elridge
          </Text>
        </Grid>
        <Grid
          style={{
            paddingTop: "20px",
          }}
        >
          <Button fontSize="16px" className={cx(classes.shopbutton)}>
            Shop now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TextBox;
