import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Box, Typography } from "@mui/material";
import { styles } from "./style";
import "swiper/css";

const Picturecarousel = () => {
  return (
    <Box style={{ paddingTop: "100px" }}>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide style={{ margin: "10px" }}>
          <Box className="item" style={{ padding: "10px 0" }}>
            <Box sx={styles.cardBox}>
              <img src="/demoo.png" />
              <Typography sx={styles.cardText}>Mora Ruby</Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ margin: "10px" }}>
          <Box className="item" style={{ padding: "10px 0" }}>
            <Box sx={styles.cardBox}>
              <img src="/debbi.png" />
              <Typography sx={styles.cardText}>Debbi Heart</Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ margin: "10px" }}>
          <Box className="item" style={{ padding: "10px 0" }}>
            <Box sx={styles.cardBox}>
              <img src="/rename.png" />
              <Typography sx={styles.cardText}>Shadow</Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ margin: "10px" }}>
          <Box className="item" style={{ padding: "10px 0" }}>
            <Box sx={styles.cardBox}>
              <img src="/stephen.png" />
              <Typography sx={styles.cardText}>Stephen Dan Smith</Typography>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Picturecarousel;
