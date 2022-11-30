import React from "react";
import { Grid, Typography } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";

const Pointofpurchase = () => {
  return (
    <CustomContainer>
      <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.MainGrid}>
        <Grid item xs={12} sm={12} md={12} lg={9}>
          <Typography textTransform={"none"} fontSize={"54px"} sx={styles.heading}>
            Create moments of inspiration closer to the point of purchase
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          gap={15}
          style={{ justifyContent: "space-evenly", padding: "20px" }}
        >
          <Grid item xs={12} sm={5.5} md={5} lg={2.8} sx={styles.GridBox}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingBottom: "10px" }}>
              <img src="/hassle-icon1.png" alt="hassle1" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"}>
                Increase Sales and Brand Exposure
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"}>
                Let our creators promote and sell your products for you.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5.5} md={5} lg={2.8} sx={styles.GridBox}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingBottom: "20px" }}>
              <img src="/hassle-icon2.png" alt="hassle2" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"}>
                Set and forget
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"}>
                All stock easily integrated in under two minutes. Fulfil orders as normal.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5.5} md={5} lg={2.8} sx={styles.GridBox}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingBottom: "10px" }}>
              <img src="/hassle-icon3.png" alt="hassle3" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"}>
                Free to join, only pay commission on sales
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"}>
                Free, forever. Only pay commission on sales creators make.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5.5} md={5} lg={2.8} sx={styles.GridBox}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingBottom: "10px" }}>
              <img src="/hassle-icon4.png" alt="hassle4" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"}>
                People trust people
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"}>
                Deepen existing creator relationships or find new, lucrative partnerships.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Pointofpurchase;
