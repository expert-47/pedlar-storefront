import React from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./style";
import { CustomContainer } from "../../landinglayout";
import { useTheme } from "@mui/material";

const Influncerheading = () => {
  const theme = useTheme();
  return (
    <CustomContainer>
      <Box
        paddingX={{
          xs: theme.spacing(15),
          sm: theme.spacing(30),
          md: theme.spacing(50),
          lg: theme.spacing(90),
          xl: theme.spacing(100),
        }}
      >
        <Typography
          fontSize={{ xs: "48px", sm: "54px" }}
          sx={styles.heading}
          width={{ xs: "100%", sm: "100%", md: "65%", lg: "70%" }}
        >
          {"Work with the world’s most talented influencers"}
        </Typography>
      </Box>
    </CustomContainer>
  );
};

export default Influncerheading;
