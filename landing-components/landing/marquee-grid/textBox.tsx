import { Box, Typography } from "@mui/material";
import { BoxProps } from "@mui/system";
import { NextImage } from "components/pedlarImage";
import React from "react";
import glow from "../../../public/glow.svg";
import { styles } from "./style";
interface Props extends BoxProps {
  title: string;
  description: string;
}
const Gridtext = ({ title, description, style }: Props) => {
  return (
    <Box
      style={{ display: "flex", flexDirection: "row", ...style }}
      marginBottom={{ xs: "22px", sm: "22px", md: "20px", lg: "25px" }}
    >
      <Box width={{ xs: "33px", xl: "33px" }} height={{ xs: "25px", xl: "23px" }}>
        <NextImage src={glow} alt="Glow Star" style={{ objectFit: "contain" }} />
      </Box>
      <Box width={"100%"} paddingLeft={{ xs: "5px", sm: "0px", md: "0px", lg: "10px", xl: "10px" }}>
        <Typography sx={styles.gridinnereText} fontWeight={"600"} fontSize={"22px"} paddingBottom={"5px"}>
          {title}
        </Typography>
        <Typography
          sx={styles.gridinnerPara}
          fontWeight={"600"}
          fontSize={{ xs: "18px", sm: "18px", md: "18px", lg: "22px" }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Gridtext;
