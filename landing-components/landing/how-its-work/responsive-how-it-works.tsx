import React from "react";
import { styles } from "./style";
import { Box, Grid, Typography } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import Image from "next/image";
//import { Scrollspy } from "@makotot/ghostui";
import HomeSecImage1 from "../../../public/home-sec5-img1.png";
import HomeSecImage2 from "../../../public/home-sec5-img2.png";
import HomeSecImage3 from "../../../public/home-sec5-img3.png";
import HomeSecImage4 from "../../../public/home-sec5-img4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const Responsivehowitworks = () => {
  return (
    <CustomContainer>
      <Box sx={styles.ResponsMainBox}>
        <Grid container item xs={12} sm={12}>
          <Grid item xs={12} sm={12} sx={styles.ResponsHeading} textAlign={{ xs: "center", sm: "left" }}>
            <Typography fontWeight={700} fontSize={{ xs: "30px", sm: "40px" }}>
              How it works
            </Typography>
          </Grid>
          <Grid container gap={1} item xs={12} sm={6} style={{ justifyContent: "space-between", paddingTop: "20px" }}>
            <Grid item xs={2.2} sm={1.8} sx={styles.Respocirclecount}>
              <Typography fontSize={{ sx: "30px", sm: "30px" }} fontWeight={600}>
                1
              </Typography>
            </Grid>
            <Grid item xs={2.2} sm={1.8} sx={styles.Respocirclecount}>
              <Typography fontSize={{ sx: "30px", sm: "30px", md: "30px", lg: "30px" }} fontWeight={600}>
                2
              </Typography>
            </Grid>
            <Grid item xs={2.2} sm={1.8} sx={styles.Respocirclecount}>
              <Typography fontSize={{ sx: "30px", sm: "30px", md: "30px", lg: "30px" }} fontWeight={600}>
                3
              </Typography>
            </Grid>
            <Grid item xs={2.2} sm={1.8} sx={styles.Respocirclecount}>
              <Typography fontSize={{ sx: "30px", sm: "30px", md: "30px", lg: "30px" }} fontWeight={600}>
                4
              </Typography>
            </Grid>
          </Grid>
          <Swiper modules={[Pagination]}>
            <SwiperSlide style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Grid item xs={12} sm={8} sx={styles.ResponsText} style={{ textAlign: "left" }}>
                <Typography fontSize={{ xs: "30px", sm: "40px" }} fontWeight={600} style={{ lineHeight: "normal" }}>
                  Top Aussie brands sync their store to the Pedlar platform
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} style={{ paddingTop: "40px" }}>
                <Image src={HomeSecImage1} alt="home-sec5-img1" style={{ borderRadius: "16px" }} />
              </Grid>
            </SwiperSlide>
            <SwiperSlide id="setion2" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Grid item xs={12} sm={8} sx={styles.ResponsText} textAlign={{ xs: "center", sm: "left" }}>
                <Typography fontSize={{ xs: "30px", sm: "40px" }} fontWeight={600} style={{ lineHeight: "normal" }}>
                  Creators select products from brands they love
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} style={{ paddingTop: "40px" }}>
                <Image src={HomeSecImage2} alt="home-sec5-img2" style={{ borderRadius: "16px" }} />
              </Grid>
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Grid item xs={12} sm={8} sx={styles.ResponsText} textAlign={{ xs: "center", sm: "left" }}>
                <Typography fontSize={{ xs: "30px", sm: "40px" }} fontWeight={600} style={{ lineHeight: "normal" }}>
                  Creators personalise their store to match their style
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} style={{ paddingTop: "40px" }}>
                <Image src={HomeSecImage3} alt="home-sec5-img3" style={{ borderRadius: "16px" }} />
              </Grid>
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Grid item xs={12} sm={8} sx={styles.ResponsText} textAlign={{ xs: "center", sm: "left" }}>
                <Typography fontSize={{ xs: "30px", sm: "40px" }} fontWeight={600} style={{ lineHeight: "normal" }}>
                  Creators share their store with their followers and make sales
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} style={{ paddingTop: "40px" }}>
                <Image src={HomeSecImage4} alt="home-sec5-img4" style={{ borderRadius: "16px" }} />
              </Grid>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Responsivehowitworks;
