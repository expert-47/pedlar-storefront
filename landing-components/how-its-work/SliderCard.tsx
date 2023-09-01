//package imports
import React from "react";
import { StaticImageData } from "next/image";
import { Box, Typography } from "@mui/material";
//componets imports
import { NextImage } from "components/pedlarImage";
//style imports
import { styles } from "./style";
interface Props {
  title: string;
  image: StaticImageData;
}

const SliderCard = ({ title, image }: Props) => {
  return (
    <Box
      sx={{
        justifyContent: "center",
      }}
    >
      <Box sx={styles.ResponsText}>
        <Typography
          fontSize={{ xs: "27px", sm: "40px" }}
          fontWeight={600}
          lineHeight="normal"
          textAlign={{ xs: "center", sm: "left" }}
          width={{ xs: "100%", sm: "70%", md: "100%" }}
        >
          {title}
        </Typography>
      </Box>
      <Box sx={styles.imageSize}>
        <NextImage src={image} alt="Sticky Section Images" style={{ borderRadius: "16px", objectFit: "contain" }} />
      </Box>
    </Box>
  );
};

export default SliderCard;
