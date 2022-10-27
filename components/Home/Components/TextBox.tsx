import React from "react";
import { useStyles } from "../Style";
import Text from "../../CustomText/index";
import Grid from "@mui/material/Grid";
import { Button, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const TextBox = () => {
  const { classes, cx } = useStyles();
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        boxShadow: 1,
      }}
      className={cx(classes.typotext)}
    >
      <Text fontSize="24px" fontWeight="700">
        {
          "Hi honeys! I’ve worked closely with some of my fave brands to curate my own store! All items are shipped out directly from each brand. I hope you love what I've put together."
        }
      </Text>
      <Grid container item xs={12} sm={12} md={12} lg={12} style={{ display: "flex", flexDirection: "column" }}>
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
          <Button variant="contained" fontSize="16px" className={cx(classes.shopbutton)}>
            Shop now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TextBox;
