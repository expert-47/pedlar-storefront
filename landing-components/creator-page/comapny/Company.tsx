import React from "react";
import { Grid, Typography } from "@mui/material";
import { styles } from "./style";
import { CustomContainer } from "../../landinglayout";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
const Company = () => {
  const isTab = useMediaQuery("(max-width:800px)");
  const theme = useTheme();
  return (
    <CustomContainer>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{ display: "flex", flexDirection: "column",zIndex:'999', position:'relative' }}
        paddingX={{ xs: theme.spacing(15), sm: theme.spacing(40), md: theme.spacing(40), lg: theme.spacing(60) }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Typography style={{ fontSize: isTab ? "46px" : "54px" }} sx={styles.heading}>
            You're in good company
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          lg={8}
        >
          <Typography style={{ fontSize: isTab ? "30px" : "40px" }} sx={styles.Typography}
          >
            Join hundreds of creators and influencers selling their favourite Australian brands directly to their
            audience.
          </Typography>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Company;
