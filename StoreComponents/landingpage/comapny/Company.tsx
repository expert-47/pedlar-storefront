import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { styles } from "./style";
import { CustomContainer } from "StoreComponents/Landinglayout";
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
        style={{ display: "flex", flexDirection: "column" }}
        paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          paddingX={{ xs: theme.spacing(15), sm: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30) }}
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
          paddingX={{ xs: theme.spacing(15), sm: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30) }}
        >
          <Typography style={{ fontSize: isTab ? "30px" : "40px" }} sx={styles.Typography}>
            Join hundreds of creators and influencers selling their favourite Australian brands directly to their
            audience.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          lg={2.5}
          paddingX={{ xs: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30) }}
        >
          <Button sx={styles.creator}>
            <Typography textTransform="none" fontSize={"22px"}>
              I’m a creator
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Company;
