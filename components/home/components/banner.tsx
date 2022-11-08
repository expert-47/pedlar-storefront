import React from "react";

import Grid from "@mui/material/Grid";
import { CustomContainer } from "../../layout";
import { useMediaQuery, useTheme } from "@mui/material";
import TextBox from "./textBox";

const BannerImg = () => {
  const theme = useTheme();
const isMatch= useMediaQuery( theme.breakpoints.between("xs","sm"))
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
      item
        alignItems="center"
        justifyContent={{ lg: "center", md: "center", sm: "center", xs: "center" }}
      lg={11}
        >
        <Grid item  xs={11.5} md={4} lg={4}>
          <img
            src="/hannah.png"
            alt="headerimage"
            style={{
              marginTop: "2px",
              width: "100%",
              height:isMatch ? "415px" : "595px",
            }}
          ></img>
        </Grid>
        <Grid
          item
          container
          xs={10.5}
          md={7}
          lg={7}
          marginLeft={{ lg: "-4%", md: "-4%" }}
          marginTop={{ lg: 0, md: 0, sm: "-20%", xs: "-20%" }}
        >
          <TextBox />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default BannerImg;
