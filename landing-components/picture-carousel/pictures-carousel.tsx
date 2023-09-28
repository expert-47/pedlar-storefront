//package imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { FC } from "react";
import { isIOS } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import SwiperCore, { Virtual, Navigation, Pagination, Autoplay } from "swiper";

//images imports
import Shadow from "public/Shadow.png";
import Lauren from "public/Lauren.png";
import MoraRuby from "public/demoo.png";
import JacobMax from "public/JacobMax.png";
import DebbiHeart from "public/DebbiHeart.png";
import StephenDan from "public/StephenDan.png";

//style imports
import { styles } from "./style";
import { NextImage } from "components/pedlarImage";

SwiperCore.use([Virtual, Navigation, Pagination]);

//swiper data
const swiperSlidedata = [
  {
    src: MoraRuby,
    altText: "Mora Ruby",
  },
  {
    src: DebbiHeart,
    altText: "Debbi Heart",
  },
  {
    src: JacobMax,
    altText: "Jacob Max",
  },
  {
    src: StephenDan,
    altText: "Stephen Dan",
  },
  {
    src: Shadow,
    altText: "Shadow",
  },
  {
    src: Lauren,
    altText: "Lauren",
  },
];

const Picturecarousel: FC = (): JSX.Element => {
  const theme = useTheme();
  const islarge = useMediaQuery(theme.breakpoints.up("lg"));
  const isMatch = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isIOSDevice = isIOS;

  return (
    <Box sx={{ paddingTop: { xs: "50px", md: "100px" } }}>
      <Swiper
        slidesPerView={isMatch ? 1.3 : islarge ? 4.8 : 3.6}
        centeredSlides={false}
        spaceBetween={15}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{
          paddingTop: "15px",
          paddingBottom: "15px",
          zIndex: "9",
          position: "relative",
        }}
      >
        {swiperSlidedata?.map((item) => {
          return (
            <SwiperSlide style={styles.slide} key={item?.altText}>
              <Box sx={styles.cardBox}>
                <Box>
                  <NextImage
                    layout="default"
                    src={item?.src}
                    fill={false}
                    alt={item?.altText}
                    style={{ height: 250, width: isIOSDevice ? 220 : "auto" }}
                  />
                </Box>
                <Typography sx={styles.cardText}>{item?.altText}</Typography>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Picturecarousel;
