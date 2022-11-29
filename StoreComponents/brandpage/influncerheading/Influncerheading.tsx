import React from "react";
import { Grid, Typography } from "@mui/material";
import { styles } from "./style";
import { CustomContainer } from "../../landinglayout";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
const Influncerheading = () => {
  const isTab = useMediaQuery("(max-width:800px)");
  const theme = useTheme();
  return (
    <CustomContainer>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{ margin: "30px" }}
        paddingX={{ xs: theme.spacing(15), sm: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30) }}
      >
        <Typography style={{ fontSize: isTab ? "46px" : "54px" }} sx={styles.heading}>
          Work with the world’s most talented influencers
        </Typography>
      </Grid>
    </CustomContainer>
  );
};

export default Influncerheading;
