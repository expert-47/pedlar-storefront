import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import Image from "next/image";
import BrandBanner from "../../../public/forbrand-sec1-img1.png";
import { useTheme } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const Banner = () => {
  const theme = useTheme();
  return (
    <CustomContainer>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        gap={10}
        sx={styles.MainBox}
        style={{ alignItems: "center" }}
        justifyContent={{ sm: "left" }}
        paddingX={{ xs: theme.spacing(15), sm: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30) }}
      >
        <Grid sx={styles.GridImg}>
          <Image src={BrandBanner} alt={"brand banner"} style={{ borderRadius: "10px" }} priority placeholder="blur" />
        </Grid>
        <Grid sx={styles.GridBox} style={{ justifyContent: "flex-end" }} padding={{ xs: "20px", sm: "40px" }}>
          <Typography textTransform={"none"} fontSize={{ xs: "34px", sm: "54px", md: "64px" }} sx={styles.heading}>
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
          <Button sx={styles.Button}>
            <ScrollLink to="ScheduleCalleForm" spy={true} smooth={true} offset={-100} duration={500}>
              <Typography textTransform={"none"} fontSize={"22px"}>
                Schedule a call
              </Typography>
            </ScrollLink>
          </Button>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Banner;
