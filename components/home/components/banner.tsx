import React from "react";

import Grid from "@mui/material/Grid";
import { CustomContainer } from "../../layout";
import { useMediaQuery, useTheme } from "@mui/material";
import TextBox from "./textBox";
import Image from "next/image";


const BannerImg = (props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.between("xs", "sm"));
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
        alignItems={"center"}
        paddingX={{ xs: theme.spacing(10) }}
        justifyContent={{ lg: "center", md: "center", sm: "center", xs: "center" }}
        lg={11}
      >
        <Grid item xs={11.5} md={4} lg={4}>
          <img
            // src="/hannah.png"
            
            src={props?.HeaderData?.storefrontImageUrl ? props?.HeaderData?.storefrontImageUrl : "/hannah.png" }
            alt="headerimage"
            style={{
              width: isMatch ? "100%" : "476px",
              height: isMatch ? "415px" : "595px",
            }}
          ></img>

          {/* <Image priority  src={props?.HeaderData?.storefrontImageUrl } alt="headerimage"  width={isMatch ? "100%" : "476px"} height={isMatch ? "415px" : "595px"} 
          
          
          />  */}
        </Grid>
        <Grid
          item
          container
          xs={10.5}
          md={7}
          lg={7}
          marginLeft={{ lg: "-4%", md: "-4%" }}
          marginTop={{ lg: "0%", md: "0%", sm: "-20%", xs: "-30%" }}
        >
          <TextBox headerData={props?.HeaderData} />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default BannerImg;
