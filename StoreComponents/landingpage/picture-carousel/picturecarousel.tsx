import React from "react";
import SwiperCore, { Virtual, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styles } from "./style";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Virtual, Navigation, Pagination]);

const Picturecarousel = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  return (
    <Box style={{ paddingTop: "100px" }}>
      <Swiper
        slidesPerView={isMatch ? 1.2 : 4.2}
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
