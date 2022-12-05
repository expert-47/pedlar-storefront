import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import Image from "next/image";
import CreatorBanner from "../../../public/creator-benner.png";
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
        gap={50}
        sx={styles.MainBox}
        style={{ position: "relative" }}
        justifyContent={{ sm: "left" }}
        paddingX={{ xs: theme.spacing(15), sm: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30) }}
      >
        <Grid sx={styles.GridBox} padding={{ sm: "40px 40px", xs: "20px 20px" }} style={{ justifyContent: "flex-end" }}>
          <Typography textTransform={"none"} fontSize={{ xs: "34px", sm: "64px" }} sx={styles.heading}>
            Give your audience what they want
          </Typography>
          <Typography
            textTransform={"none"}
            fontSize={"22px"}
            sx={styles.title}
            marginBottom={{ xs: "20px", sm: "0px" }}
          >
            Followers love your style. Give them what they want with a personalised store of products from top brands.
          </Typography>
          <Button sx={styles.Button}>
            <ScrollLink to="StoreFreeForm" spy={true} smooth={true} offset={-100} duration={500}>
              <Typography textTransform={"none"} fontSize={"22px"}>
                Get access - <span style={{ fontStyle: "italic", fontWeight: "400" }}>for free</span>
              </Typography>
            </ScrollLink>
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
