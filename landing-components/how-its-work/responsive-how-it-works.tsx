//package imports
import { Navigation } from "swiper";
import SliderCard from "./SliderCard";
import React, { useState } from "react";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Grid, Typography } from "@mui/material";
//component imports
import { CustomContainer } from "../landinglayout";
//style
import { styles } from "./style";

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
interface SwiperType {
  slideTo: (index: any) => void;
}
const arrayToIterateTetxt = [1, 2, 3, 4];

const Responsivehowitworks = ({ title1, title2, title3, title4, image1, image2, image3, image4 }: Props) => {
  const [updatedata, setUpdateData] = useState(1);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const slideTo = (index: any) => {
    if (swiper) {
      swiper.slideTo(index);
    }
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
            {arrayToIterateTetxt?.map((itemNumber, index) => {
              return (
                <Grid item xs={2.2} sm={1.8} onClick={() => slideTo(index)} key={`howItWorks ${itemNumber}`}>
                  <Typography
                    sx={{
                      ...styles.Respocirclecount,
                      backgroundColor: updatedata === itemNumber ? "white" : "tranparent",
                      color: updatedata === itemNumber ? "#1c1b1f" : "white",
                    }}
                    fontWeight={600}
                  >
                    {itemNumber}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
          <Swiper
            onSwiper={setSwiper}
            modules={[Navigation]}
            onSlideChange={(index) => {
              setUpdateData(index.activeIndex + 1);
            }}
            spaceBetween={1}
          >
            <SwiperSlide>
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
