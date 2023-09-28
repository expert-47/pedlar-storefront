import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import BrandBanner from "../../../public/forbrand-sec1-img1.png";
import { useTheme } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { NextImage } from "components/pedlarImage";

const Banner = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      gap={10}
      sx={styles.MainBox}
      style={{ alignItems: "center", position: "relative" }}
      justifyContent={{ sm: "left" }}
      paddingX={{ xs: theme.spacing(20), sm: theme.spacing(30), md: theme.spacing(30), lg: theme.spacing(35) }}
    >
      <CustomContainer>
        <Grid sx={styles.GridImg}>
          <Box
            sx={{
              width: { xs: "100%", sm: "620px", md: "950px", lg: "630px", xl: "610px" },
              height: { xs: 330, sm: 570, md: 670, lg: 570 },
            }}
            paddingLeft={{ xl: "30px" }}
          >
            <NextImage zIndex={0} style={{ borderRadius: "10px" }} src={BrandBanner} alt={"brand banner"} priority />
          </Box>
        </Grid>
      </CustomContainer>

      <Grid sx={styles.GridBox} style={{ justifyContent: "flex-end" }} padding={{ xs: "20px", sm: "40px" }}>
        <Typography textTransform={"none"} fontSize={{ xs: "34px", sm: "64px", md: "64px" }} sx={styles.heading}>
          Find new audience for your brand
        </Typography>
        <Typography
          textTransform={"none"}
          fontSize={"22px"}
          sx={styles.title}
          padding={{ xs: "20px 0 30px", sm: "20px 0 30px", md: "20px 0 10px" }}
        >
          Sell directly to Aussie shoppers with customised storefronts curated by social media creators.
        </Typography>
        <ScrollLink to="ScheduleCalleForm" spy={true} smooth={true} offset={-150} duration={1000}>
          <Button sx={styles.Button}>
            <Typography textTransform={"none"} fontSize={"22px"}>
              Schedule a call
            </Typography>
          </Button>
        </ScrollLink>
      </Grid>
    </Grid>
  );
};

export default Banner;
