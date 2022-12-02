import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import Image from "next/image";
import CreatorBanner from "../../../public/creator-benner.png";
import { useTheme } from "@mui/material";

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
        gap={50}
        sx={styles.MainBox}
        style={{ position:"relative" }}
        justifyContent={{ sm: "left" }}
        paddingX={{ xs: theme.spacing(15), sm: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30) }}
      >
       
        <Grid sx={styles.GridBox} padding={{md:'40px 40px',xs:'20px 20px'}} style={{ justifyContent: "flex-end" }}>
          <Typography textTransform={"none"} fontSize={{xs:'34px',sm:'64px'}} sx={styles.heading}>
            Give your audience what they want
          </Typography>
          <Typography textTransform={"none"} fontSize={"22px"} sx={styles.title}>
            Followers love your style. Give them what they want with a personalised store of products from top brands.
          </Typography>
          <Button sx={styles.Button}>
            <Typography textTransform={"none"} fontSize={"22px"}>
              Get access - <span style={{ fontStyle: "italic", fontWeight: "400" }}>for free</span>
            </Typography>
          </Button>
        </Grid>
        <Grid sx={styles.brandImg}>
          <Image src={CreatorBanner} alt={"Creator banner"} />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Banner;
