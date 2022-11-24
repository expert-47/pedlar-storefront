import * as React from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./style";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { CustomContainer } from "StoreComponents/Layout";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const demo = require("jQuery");
if (typeof window !== "undefined") {
  window.demo = window.jQuery = require("jquery");
}

const Cardslider = () => {
  const Responsive = {
    0: {
      items: 1,
      stagePadding: 80,
    },
    600: {
      items: 3,
      stagePadding: 80,
    },
    800: {
      items: 3,
      stagePadding: 80,
    },
    1000: {
      items: 4,
    },
  };
  return (
    <CustomContainer>
      <Box style={{ paddingTop: "100px" }}>
        <OwlCarousel responsive={Responsive} margin={15} loop stagePadding={100} autoplay={true} autoplayTimeout={2000}>
          <Box className="item" style={{ padding: "10px 0" }}>
            <Box sx={styles.cardBox}>
              <img src="/demoo.png" />
              <Typography sx={styles.cardText}>Mora Ruby</Typography>
            </Box>
          </Box>
          <Box className="item" style={{ padding: "10px 0" }}>
            <Box sx={styles.cardBox}>
              <img src="/debbi.png" />
              <Typography sx={styles.cardText}>Debbi Heart</Typography>
            </Box>
          </Box>
          <Box className="item" style={{ padding: "10px 0" }}>
            <Box sx={styles.cardBox}>
              <img src="/rename.png" />
              <Typography sx={styles.cardText}>Shadow</Typography>
            </Box>
          </Box>
          <Box className="item" style={{ padding: "10px 0" }}>
            <Box sx={styles.cardBox}>
              <img src="/stephen.png" />
              <Typography sx={styles.cardText}>Stephen Dan Smith</Typography>
            </Box>
          </Box>
        </OwlCarousel>
      </Box>
    </CustomContainer>
  );
};

export default Cardslider;
