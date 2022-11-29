import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { Box, Typography } from "@mui/material";
import { styles } from "./style";


const Picturecarousel = () => {
  return (
    <Box style={{ paddingTop: "100px" }}>
      <Carousel autoPlay interval={2000} transitionTime={2000} className="carousal">
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
      </Carousel>
    </Box>
  );
};

export default Picturecarousel;
