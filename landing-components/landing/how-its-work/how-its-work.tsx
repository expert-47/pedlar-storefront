import React from "react";
import { styles } from "./style";
import { useTheme } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import { Link as ScrollText } from "react-scroll";
import Image from "next/image";
import HomeSecImg1 from "../../../public/home-sec5-img1.png";
import HomeSecImg2 from "../../../public/home-sec5-img2.png";
import HomeSecImg3 from "../../../public/home-sec5-img3.png";
import HomeSecImg4 from "../../../public/home-sec5-img4.png";

const Howitswork = () => {
  const theme = useTheme();

  return (
    <CustomContainer>
      <Box
        paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
        paddingY={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
      >
        <Box sx={styles.MainBox} style={{ marginTop: "105px" }}>
          <Grid sx={styles.Heading}>
            <Typography fontWeight={700} fontSize={{ xs: "40px", sm: "40px", md: "54px", lg: "54px" }}>
              How it works
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={12} md={12} lg={12}>
            <Grid item xs={12} sm={12} md={12} lg={8.5}>
              <ScrollText to={"section-1"} spy={true} smooth={true} offset={-100} duration={500}>
                <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.Texts}>
                  <Grid item xs={0.7} sm={0.7} md={0.7} lg={0.7} sx={styles.circlecount}>
                    <Typography fontSize={{ sx: "30px", sm: "30px", md: "40px", lg: "40px" }} fontWeight={600}>
                      1
                    </Typography>
                  </Grid>
                  <Grid item xs={9} sm={9} md={9} lg={9} style={{ padding: "0px 0 0 28px" }}>
                    <Typography fontSize={{ sx: "30px", sm: "30px", md: "40px", lg: "40px" }} fontWeight={600}>
                      Top Aussie brands sync their store to the Pedlar platform
                    </Typography>
                  </Grid>
                </Grid>
              </ScrollText>
              <ScrollText to={"section-2"} spy={true} smooth={true} offset={-100} duration={500}>
                <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.Texts}>
                  <Grid item xs={0.7} sm={0.7} md={0.7} lg={0.7} sx={styles.circlecount}>
                    <Typography fontSize={{ sx: "30px", sm: "30px", md: "40px", lg: "40px" }} fontWeight={600}>
                      2
                    </Typography>
                  </Grid>
                  <Grid item xs={9} sm={9} md={9} lg={9} style={{ padding: "0px 0 0 28px" }}>
                    <Typography fontSize={{ sx: "30px", sm: "30px", md: "40px", lg: "40px" }} fontWeight={600}>
                      Creators select products from brands they love
                    </Typography>
                  </Grid>
                </Grid>
              </ScrollText>
              <ScrollText to={"section-3"} spy={true} smooth={true} offset={-100} duration={500}>
                <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.Texts}>
                  <Grid item xs={0.7} sm={0.7} md={0.7} lg={0.7} sx={styles.circlecount}>
                    <Typography fontSize={{ sx: "30px", sm: "30px", md: "40px", lg: "40px" }} fontWeight={600}>
                      3
                    </Typography>
                  </Grid>
                  <Grid item xs={9} sm={9} md={9} lg={9} style={{ padding: "0px 0 0 28px" }}>
                    <Typography fontSize={{ sx: "30px", sm: "30px", md: "40px", lg: "40px" }} fontWeight={600}>
                      Creators personalise their store to match their style
                    </Typography>
                  </Grid>
                </Grid>
              </ScrollText>
              <ScrollText to={"section-3"} spy={true} smooth={true} offset={-100} duration={500}>
                <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.Texts}>
                  <Grid item xs={0.7} sm={0.7} md={0.7} lg={0.7} sx={styles.circlecount}>
                    <Typography fontSize={{ sx: "30px", sm: "30px", md: "40px", lg: "40px" }} fontWeight={600}>
                      4
                    </Typography>
                  </Grid>
                  <Grid item xs={9} sm={9} md={9} lg={9} style={{ padding: "0px 0 0 28px" }}>
                    <Typography fontSize={{ sx: "30px", sm: "30px", md: "40px", lg: "40px" }} fontWeight={600}>
                      Creators share their store with their followers and make sales
                    </Typography>
                  </Grid>
                </Grid>
              </ScrollText>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3} sx={styles.images}>
              <Grid id="section-1">
                <Image src={HomeSecImg1} alt="home-sec5-img1" style={{ borderRadius: "16px" }} />
              </Grid>
              <Grid id="section-2">
                <Image src={HomeSecImg2} alt="home-sec5-img2" style={{ borderRadius: "16px" }} />
              </Grid>
              <Grid id="section-3">
                <Image src={HomeSecImg3} alt="home-sec5-img3" style={{ borderRadius: "16px" }} />
              </Grid>
              <Grid id="section-4">
                <Image src={HomeSecImg4} alt="home-sec5-img4" style={{ borderRadius: "16px" }} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default Howitswork;
