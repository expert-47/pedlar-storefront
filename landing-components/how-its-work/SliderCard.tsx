import React from "react";
import { styles } from "./style";
import { Box, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import PedlarImage from "components/pedlarImage";

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
          fontSize={{ xs: "30px", sm: "40px" }}
          fontWeight={600}
          lineHeight="normal"
          textAlign={{ xs: "center", sm: "left" }}
        >
          {title}
        </Typography>
      </Box>
      <Box sx={styles.imageSize}>
        <PedlarImage src={image} alt="Sticky Section Images" style={{ borderRadius: "16px" }} objectFit="contain" />
      </Box>
    </Box>
  );
};

export default SliderCard;
