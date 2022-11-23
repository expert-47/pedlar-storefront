import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./Style";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const EarlyAcess = () => {
  return (
    <>
      <Box sx={styles.Box}>
        <Grid container item xs={12} sm={12} md={12} lg={12} style={{ alignItems: "center" }}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Typography fontSize={"54px"}>Get early access</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <ArrowForwardIcon style={{ height: "150px" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Button>
              <Typography textTransform="none">I'm a Creater</Typography>
            </Button>
            <Button>
              <Typography textTransform="none">I'm a Brand</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EarlyAcess;
