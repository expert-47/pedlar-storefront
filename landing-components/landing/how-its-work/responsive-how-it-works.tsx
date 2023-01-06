import React, { useRef, useState } from "react";
import { styles } from "./style";
import { Box, Grid, Typography } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import Image from "next/image";
import HomeSecImage1 from "../../../public/home-sec5-img1.png";
import HomeSecImage2 from "../../../public/home-sec5-img2.png";
import HomeSecImage3 from "../../../public/home-sec5-img3.png";
import HomeSecImage4 from "../../../public/home-sec5-img4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Responsivehowitworks = () => {
  const [updatedata, setUpdateData] = useState(1);
  const ref = useRef();
  const [swiper, setSwiper] = useState(null);

  const slideTo = (index) => {
    swiper.slideTo(index);
  };

  return (
    <CustomContainer>
      <Box sx={styles.ResponsMainBox}>
        <Grid container item xs={12} sm={12} style={{ zIndex: "999", position: "relative", justifyContent: "center" }}>
          <Grid item xs={12} sm={12} sx={styles.ResponsHeading} textAlign={{ xs: "center" }}>
            <Typography fontWeight={700} fontSize={{ xs: "40px", sm: "40px" }}>
              How it works
            </Typography>
          </Grid>
          <Grid container gap={1} item xs={12} sm={6} style={{ justifyContent: "space-between", paddingTop: "20px" }}>
            <Grid item xs={2.2} sm={1.8} onClick={() => slideTo(0)}>
              <Typography
                sx={{
                  ...styles.Respocirclecount,
                  backgroundColor: updatedata === 1 ? "white" : "tranparent",
                  color: updatedata === 1 ? "#1c1b1f" : "white",
                }}
                fontWeight={600}
              >
                1
              </Typography>
            </Grid>
            <Grid item xs={2.2} sm={1.8} onClick={() => slideTo(1)}>
              <Typography
                sx={{
                  ...styles.Respocirclecount,
                  backgroundColor: updatedata === 2 ? "white" : "tranparent",
                  color: updatedata === 2 ? "#1c1b1f" : "white",
                }}
                fontWeight={600}
              >
                2
              </Typography>
            </Grid>
            <Grid item xs={2.2} sm={1.8} onClick={() => slideTo(2)}>
              <Typography
                sx={{
                  ...styles.Respocirclecount,
                  backgroundColor: updatedata === 3 ? "white" : "tranparent",
                  color: updatedata === 3 ? "#1c1b1f" : "white",
                }}
                fontWeight={600}
              >
                3
              </Typography>
            </Grid>
            <Grid item xs={2.2} sm={1.8} onClick={() => slideTo(3)}>
              <Typography
                sx={{
                  ...styles.Respocirclecount,
                  backgroundColor: updatedata === 4 ? "white" : "tranparent",
                  color: updatedata === 4 ? "#1c1b1f" : "white",
                }}
                fontWeight={600}
              >
                4
              </Typography>
            </Grid>
          </Grid>
          <Swiper
            onSwiper={setSwiper}
            modules={[Navigation]}
            onSlideChange={(index) => {
              setUpdateData(index.activeIndex + 1);
            }}
          >
            <SwiperSlide style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Grid item xs={12} sm={12} sx={styles.ResponsText} textAlign={{ xs: "center" }}>
                <Typography
                  fontSize={{ xs: "25px", sm: "40px" }}
                  fontWeight={600}
                  lineHeight={{ xs: "30px", sm: "50px" }}
                >
                  Top Aussie brands sync their store to the Pedlar platform
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} style={{ paddingTop: "30px" }}>
                <Image
                  src={HomeSecImage1}
                  alt="home-sec5-img1"
                  style={{ borderRadius: "16px" }}
                  loading="lazy"
                  placeholder="blur"
                />
              </Grid>
            </SwiperSlide>

            <SwiperSlide style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Grid item xs={12} sm={12} sx={styles.ResponsText} textAlign={{ xs: "center" }}>
                <Typography
                  fontSize={{ xs: "25px", sm: "40px" }}
                  fontWeight={600}
                  lineHeight={{ xs: "30px", sm: "50px" }}
                >
                  Creators select products from brands they love
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} style={{ paddingTop: "30px" }}>
                <Image
                  src={HomeSecImage2}
                  alt="home-sec5-img2"
                  style={{ borderRadius: "16px" }}
                  loading="lazy"
                  placeholder="blur"
                />
              </Grid>
            </SwiperSlide>

            <SwiperSlide style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Grid item xs={12} sm={12} sx={styles.ResponsText} textAlign={{ xs: "center" }}>
                <Typography
                  fontSize={{ xs: "25px", sm: "40px" }}
                  fontWeight={600}
                  lineHeight={{ xs: "30px", sm: "50px" }}
                >
                  Creators personalise their store to match their style
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} style={{ paddingTop: "30px" }}>
                <Image
                  src={HomeSecImage3}
                  alt="home-sec5-img3"
                  style={{ borderRadius: "16px" }}
                  loading="lazy"
                  placeholder="blur"
                />
              </Grid>
            </SwiperSlide>

            <SwiperSlide style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Grid item xs={12} sm={12} sx={styles.ResponsText} textAlign={{ xs: "center" }}>
                <Typography
                  fontSize={{ xs: "25px", sm: "40px" }}
                  fontWeight={600}
                  lineHeight={{ xs: "30px", sm: "50px" }}
                >
                  Creators share their store with their followers and make sales
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} style={{ paddingTop: "30px" }}>
                <Image
                  src={HomeSecImage4}
                  alt="home-sec5-img4"
                  style={{ borderRadius: "16px" }}
                  loading="lazy"
                  placeholder="blur"
                />
              </Grid>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Responsivehowitworks;
