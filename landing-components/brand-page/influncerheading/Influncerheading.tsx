import React from "react";
import { Grid, Typography } from "@mui/material";
import { styles } from "./style";
import { CustomContainer } from "../../landinglayout";
import { useTheme } from "@mui/material";

const Influncerheading = () => {
  const theme = useTheme();
  return (
    <CustomContainer>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
      >
        <Typography
          fontSize={{ xs: "48px", sm: "54px" }}
          sx={styles.heading}
          width={{ xs: "100%", sm: "85%", md: "60%" }}
          paddingX={{ xs: theme.spacing(5), sm: theme.spacing(25), md: theme.spacing(20), lg: theme.spacing(30) }}
        >
          Work with the world’s most talented influencers
        </Typography>
      </Grid>
    </CustomContainer>
  );
};

export default Influncerheading;
