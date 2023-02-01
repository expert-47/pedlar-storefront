import React from "react";
import SwiperCore, { Virtual, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styles } from "./style";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MoraRuby from "../../../public/demoo.png";
import DebbiHeart from "../../../public/DebbiHeart.png";
import JacobMax from "../../../public/JacobMax.png";
import StephenDan from "../../../public/StephenDan.png";
import Shadow from "../../../public/Shadow.png";
import Lauren from "../../../public/Lauren.png";
import Image from "next/image";

SwiperCore.use([Virtual, Navigation, Pagination]);

const Picturecarousel = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const islarge = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box style={{ paddingTop: "100px" }}>
      <Swiper
        slidesPerView={isMatch ? 1.2 : islarge ? 3.8 : 3.6}
        centeredSlides={false}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{ backgroundColor: "transparent", paddingBottom: "15px", zIndex: "9", position: "relative" }}
      >
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={MoraRuby} alt="Mora Ruby" loading="lazy" placeholder="blur" />

            <Typography sx={styles.cardText}>Mora Ruby</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={DebbiHeart} alt="Debbi Heart" loading="lazy" placeholder="blur" />

            <Typography sx={styles.cardText}>Debbi Heart</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={JacobMax} alt="JacobMax" loading="lazy" placeholder="blur" />

            <Typography sx={styles.cardText}>Jacob Max</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={StephenDan} alt="Stephen" loading="lazy" placeholder="blur" />

            <Typography sx={styles.cardText}>Stephen Dan</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Shadow} alt="Shadow" loading="lazy" placeholder="blur" />

            <Typography sx={styles.cardText}>Shadow</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Lauren} alt="Lauren" loading="lazy" placeholder="blur" />

            <Typography sx={styles.cardText}>Lauren</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={MoraRuby} alt="Mora Ruby" loading="lazy" placeholder="blur" />

            <Typography sx={styles.cardText}>Mora Ruby</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={DebbiHeart} alt="Debbi Heart" loading="lazy" placeholder="blur" />

            <Typography sx={styles.cardText}>Debbi Heart</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={JacobMax} alt="JacobMax" loading="lazy" placeholder="blur" />

            <Typography sx={styles.cardText}>Jacob Max</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={StephenDan} alt="Stephen" loading="lazy" placeholder="blur" />

            <Typography sx={styles.cardText}>Stephen Dan</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Shadow} alt="Shadow" loading="lazy" placeholder="blur" />

            <Typography sx={styles.cardText}>Shadow</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={styles.cardBox}>
            <Image src={Lauren} alt="Lauren" loading="lazy" placeholder="blur" />

            <Typography sx={styles.cardText}>Lauren</Typography>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Picturecarousel;
