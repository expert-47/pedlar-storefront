import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { styles } from "./style";
import { CustomContainer } from "StoreComponents/Layout";

const Company = () => {
  return (
    <CustomContainer>
      <Grid container item xs={12} sm={12} md={12} lg={12} style={{ display: "flex", flexDirection: "column" }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontSize={"54px"} sx={styles.heading}>
            You're in good company
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={8}>
          <Typography fontSize={"40px"} sx={styles.Typography}>
            Join hundreds of creators and influencers selling their favourite Australian brands directly to their
            audience.
          </Typography>
        </Grid>
        <Grid item xs={8} sm={3} md={3} lg={2}>
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
