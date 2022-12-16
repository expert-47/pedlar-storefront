import React from "react";
import { styles } from "./style";
import { Box, Grid, Typography } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import Image from "next/image";
//import { Scrollspy } from "@makotot/ghostui";
import HomeSecImage1 from "../../../public/work1.png";
import HomeSecImage2 from "../../../public/work2.png";
import HomeSecImage3 from "../../../public/work3.png";
import HomeSecImage4 from "../../../public/work4.png";
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
            <Grid item xs={2.2} sm={1.8}>
              <Typography sx={styles.Respocirclecount} fontSize={{ sx: "30px", sm: "30px" }} fontWeight={600}>
                1
              </Typography>
            </Grid>
            <Grid item xs={2.2} sm={1.8}>
              <Typography
                sx={styles.Respocirclecount}
                fontSize={{ sx: "30px", sm: "30px", md: "30px", lg: "30px" }}
                fontWeight={600}
              >
                2
              </Typography>
            </Grid>
            <Grid item xs={2.2} sm={1.8}>
              <Typography
                sx={styles.Respocirclecount}
                fontSize={{ sx: "30px", sm: "30px", md: "30px", lg: "30px" }}
                fontWeight={600}
              >
                3
              </Typography>
            </Grid>
            <Grid item xs={2.2} sm={1.8}>
              <Typography
                sx={styles.Respocirclecount}
                fontSize={{ sx: "30px", sm: "30px", md: "30px", lg: "30px" }}
                fontWeight={600}
              >
                4
              </Typography>
            </Grid>
          </Grid>
          <Swiper modules={[Pagination]}>
            <SwiperSlide style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Grid item xs={12} sm={8} sx={styles.ResponsText} textAlign={{ xs: "center", sm: "left" }}>
                <Typography fontSize={{ xs: "30px", sm: "40px" }} fontWeight={600} style={{ lineHeight: "normal" }}>
                  Select products from your favourite brands
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} style={{ paddingTop: "40px" }}>
                <Image src={HomeSecImage1} alt="home-sec5-img1" style={{ borderRadius: "16px" }} />
              </Grid>
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Grid item xs={12} sm={8} sx={styles.ResponsText} textAlign={{ xs: "center", sm: "left" }}>
                <Typography fontSize={{ xs: "30px", sm: "40px" }} fontWeight={600} style={{ lineHeight: "normal" }}>
                  Personalise your store to represent your aesthetic
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} style={{ paddingTop: "40px" }}>
                <Image src={HomeSecImage2} alt="home-sec5-img2" style={{ borderRadius: "16px" }} />
              </Grid>
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Grid item xs={12} sm={8} sx={styles.ResponsText} textAlign={{ xs: "center", sm: "left" }}>
                <Typography fontSize={{ xs: "30px", sm: "40px" }} fontWeight={600} style={{ lineHeight: "normal" }}>
                  Share with your community, wherever they are
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} style={{ paddingTop: "40px" }}>
                <Image src={HomeSecImage3} alt="home-sec5-img3" style={{ borderRadius: "16px" }} />
              </Grid>
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Grid item xs={12} sm={8} sx={styles.ResponsText} textAlign={{ xs: "center", sm: "left" }}>
                <Typography fontSize={{ xs: "30px", sm: "40px" }} fontWeight={600} style={{ lineHeight: "normal" }}>
                  Sit back and earn. Pedlar handles customer support, shipping and inventory
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
