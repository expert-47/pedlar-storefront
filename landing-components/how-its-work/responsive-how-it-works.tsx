import React, { useRef, useState } from "react";
import { styles } from "./style";
import { Box, Grid, Typography } from "@mui/material";
import { CustomContainer } from "../landinglayout";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SliderCard from "./SliderCard";

interface Props {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  image4: StaticImageData;
}
const Responsivehowitworks = ({ title1, title2, title3, title4, image1, image2, image3, image4 }: Props) => {
  const [updatedata, setUpdateData] = useState(1);
  const ref = useRef();
  const [swiper, setSwiper] = useState(null);

  const slideTo = (index: any) => {
    swiper.slideTo(index);
  };

  return (
    <CustomContainer>
      <Box sx={styles.ResponsMainBox}>
        <Grid container item xs={12} sm={12} style={{ zIndex: "999", position: "relative" }}>
          <Grid item xs={12} sm={12} sx={styles.ResponsHeading} textAlign={{ xs: "center", sm: "left", md: "center" }}>
            <Typography
              fontWeight={700}
              fontSize={{ xs: "48px", sm: "48px" }}
              lineHeight="normal"
              letterSpacing={"normal"}
            >
              How it works
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={6} style={{ justifyContent: "space-around", marginTop: "20px" }}>
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
            spaceBetween={1}
          >
            <SwiperSlide style={{ backgroundColor: "red" }}>
              <SliderCard title={title1} image={image1} />
            </SwiperSlide>

            <SwiperSlide>
              <SliderCard title={title2} image={image2} />
            </SwiperSlide>

            <SwiperSlide>
              <SliderCard title={title3} image={image3} />
            </SwiperSlide>

            <SwiperSlide>
              <SliderCard title={title4} image={image4} />
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Responsivehowitworks;
