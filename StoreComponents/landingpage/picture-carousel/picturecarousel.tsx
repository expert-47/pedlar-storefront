import React from "react";
import SwiperCore, { Virtual, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";
import { styles } from "./style";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

const Picturecarousel = () => {
  return (
    <Box style={{ paddingTop: "100px" }}>
      <Swiper
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        virtual
        modules={[Autoplay, Pagination, Navigation]}
        style={{ backgroundColor: "transparent" }}
      >
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <img src="/demoo.png" />
            <Typography sx={styles.cardText}>Mora Ruby</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <img src="/debbi.png" />
            <Typography sx={styles.cardText}>Debbi Heart</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <img src="/rename.png" />
            <Typography sx={styles.cardText}>Shadow</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <img src="/stephen.png" />
            <Typography sx={styles.cardText}>Stephen Dan Smith</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <img src="/demoo.png" />
            <Typography sx={styles.cardText}>Mora Ruby</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <img src="/debbi.png" />
            <Typography sx={styles.cardText}>Debbi Heart</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <img src="/rename.png" />
            <Typography sx={styles.cardText}>Shadow</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <img src="/stephen.png" />
            <Typography sx={styles.cardText}>Stephen Dan Smith</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <img src="/demoo.png" />
            <Typography sx={styles.cardText}>Mora Ruby</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <img src="/debbi.png" />
            <Typography sx={styles.cardText}>Debbi Heart</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <img src="/rename.png" />
            <Typography sx={styles.cardText}>Shadow</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <img src="/stephen.png" />
            <Typography sx={styles.cardText}>Stephen Dan Smith</Typography>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Picturecarousel;
