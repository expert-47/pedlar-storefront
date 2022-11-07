import React from "react";

import Grid from "@mui/material/Grid";
import { CustomContainer } from "../../layout";
import { useTheme } from "@mui/material";
import TextBox from "./textBox";

const BannerImg = () => {
  const theme = useTheme();

  return (
    <CustomContainer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent={{ lg: "flex-start", md: "center", sm: "center", xs: "center" }}
        paddingX={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(30) }}
      >
        <Grid item container xs={11.5} md={8} lg={8}>
          <img
            src="/bannerImage.png"
            alt="headerimage"
            style={{
              width: "100%",
              height: theme.breakpoints.up("md") ? "595px" : "300px",
            }}
          ></img>
        </Grid>
        <Grid
          item
          container
          xs={10.5}
          md={5}
          lg={4}
          marginLeft={{ lg: "-10%", md: "-10%" }}
          marginTop={{ lg: 0, md: 0, sm: "-10%", xs: "-10%" }}
        >
          <TextBox />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default BannerImg;
