import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import Image from "next/image";
import BrandBanner from "../../../public/forbrand-sec1-img1.png";

const Banner = () => {
  return (
    <CustomContainer>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        gap={50}
        sx={styles.MainBox}
        style={{ alignItems: "center" }}
        justifyContent={{ sm: "left" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Image src={BrandBanner} alt={"brand banner"} />
        </Grid>
        <Grid item xs={12} sm={10.3} md={7.7} lg={5} sx={styles.GridBox} style={{ justifyContent: "flex-end" }}>
          <Typography textTransform={"none"} fontSize={"64px"} sx={styles.heading}>
            Find new audience for your brand
          </Typography>
          <Typography textTransform={"none"} fontSize={"22px"} sx={styles.title}>
            Sell directly to Aussie shoppers with customised storefronts curated by social media creators.
          </Typography>
          <Button sx={styles.Button}>
            <Typography textTransform={"none"} fontSize={"22px"}>
              Schedule a call
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Banner;
