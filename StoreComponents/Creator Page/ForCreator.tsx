import React from "react";
import { Grid, Box } from "@mui/material";
import { CustomContainer } from "StoreComponents/Layout";
import { styles } from "./style";
import Image from "next/image";

const ForCreator = () => {
  return (
    <CustomContainer>
      <Box sx={styles.MainBox}>
        <Grid container item xs={12} sm={12} md={12} lg={12}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Image src={"/creator-benner.png"} alt={"Creator banner"} height={550} width={550} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default ForCreator;
