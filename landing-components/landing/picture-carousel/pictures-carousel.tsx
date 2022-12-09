import React from "react";
import SwiperCore, { Virtual, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styles } from "./style";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Demoo from "../../../public/demoo.png";
import Debbi from "../../../public/debbi.png";
import Rename from "../../../public/rename.png";
import Stephen from "../../../public/stephen.png";
import Image from "next/image";

SwiperCore.use([Virtual, Navigation, Pagination]);

const Picturecarousel = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  return (
    <Box style={{ paddingTop: "100px" }}>
      <Swiper
        slidesPerView={isMatch ? 1 : 4.3}
        centeredSlides={false}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{ backgroundColor: "transparent" }}
      >
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Demoo} alt="Mora Ruby" loading="lazy" placeholder="blur" />
            <Typography sx={styles.cardText}>Mora Ruby</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Debbi} alt="Debbi Heart" loading="lazy" placeholder="blur" />
            <Typography sx={styles.cardText}>Debbi Heart</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Rename} alt="Rename" loading="lazy" placeholder="blur" />
            <Typography sx={styles.cardText}>Rename</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Stephen} alt="Stephen" loading="lazy" placeholder="blur" />
            <Typography sx={styles.cardText}>Stephen Dan</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Demoo} alt="Mora Ruby" loading="lazy" placeholder="blur" />
            <Typography sx={styles.cardText}>Mora Ruby</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Debbi} alt="Debbi Heart" loading="lazy" placeholder="blur" />
            <Typography sx={styles.cardText}>Debbi Heart</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Rename} alt="Rename" loading="lazy" placeholder="blur" />
            <Typography sx={styles.cardText}>Shadow</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Stephen} alt="Stephen" loading="lazy" placeholder="blur" />
            <Typography sx={styles.cardText}>Stephen Dan Smith</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Demoo} alt="Mora Ruby" loading="lazy" placeholder="blur" />
            <Typography sx={styles.cardText}>Mora Ruby</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Debbi} alt="Debbi Heart" loading="lazy" placeholder="blur" />
            <Typography sx={styles.cardText}>Debbi Heart</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Rename} alt="Rename" loading="lazy" placeholder="blur" />
            <Typography sx={styles.cardText}>Rename</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Stephen} alt="Stephen" loading="lazy" placeholder="blur" />
            <Typography sx={styles.cardText}>Stephen Dan</Typography>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Picturecarousel;
