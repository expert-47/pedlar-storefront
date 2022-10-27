import React from "react";
import { useStyles } from "../Style";
import Grid from "@mui/material/Grid";
import { CustomContainer } from "../../Layout/layout";
import { useMediaQuery } from "@mui/material";
import TextBox from "./TextBox";

const BannerImg = () => {
  const { classes, cx } = useStyles();
  const isMatch = useMediaQuery("(max-width:780px)");

  return (
    <CustomContainer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        container
        lg={12}
        style={{
          display: "flex",
          justifyContent: isMatch ? "center" : "flex-start",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Grid item container xs={11.5} md={7} lg={8}>
          <img src="/header.png" alt="headerimage" className={cx(classes.img)}></img>
        </Grid>
        <Grid
          item
          container
          xs={10.5}
          md={5}
          lg={4}
          style={{
            marginLeft: isMatch ? 0 : "-10%",
            marginTop: isMatch ? "-10%" : 0,
            backgroundColor: "white",
          }}
        >
          <TextBox />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default BannerImg;
