import React from "react";
import Grid from "@mui/material/Grid";
import { CustomContainer } from "../../layout";
import { useMediaQuery, useTheme, Box } from "@mui/material";
import TextBox from "./textBox";
import PedlarImage from "components/pedlarImage";

const BannerImg = (props: any) => {
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
        justifyContent={{ lg: "center", md: "center", sm: "center", xs: "center" }}
        lg={11}
      >
        <Grid item xs={11} md={4} lg={4}>
          <Box sx={{ width: isMatch ? "100%" : 476, height: isMatch ? 415 : 595 }}>
            <PedlarImage
              src={props?.headerData?.storefrontImageUrl ? props?.headerData?.storefrontImageUrl : ""}
              alt="headerimage"
            />
          </Box>
        </Grid>
        <Grid item container xs={10.5} md={7} lg={7} marginTop={{ lg: "0%", md: "0%", sm: "-20%", xs: "-30%" }}>
          <TextBox headerData={props?.headerData} style={{}} />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default BannerImg;
