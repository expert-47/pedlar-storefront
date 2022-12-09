import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import { useTheme } from "@mui/material";
// import Image from "next/image";
// import SalesBrand from "../../../public/sales-brand1.svg";
// import SetForgot from "../../../public/set-forgot.svg";
// import FreeJoin from "../../../public/free-join.svg";
// import PropleTrustPeople from "../../../public/people-trust-people.svg";

const styless = {
  imageshahdow: {
    position: "relative",
    "&::before": {
      backgroundImage: "url(/imgback.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      bottom: "-.5px",
      content: `""`,
      height: "79px",
      left: "-5px",
      position: "absolute",
      width: "79px",
      zIndex: "0",
    },
  },
};

const Pointofpurchase = () => {
  const theme = useTheme();
  return (
    <CustomContainer>
      <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.MainGrid}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            textTransform={"none"}
            fontSize={{ xs: "48px", md: "54px" }}
            sx={styles.heading}
            paddingX={{ xs: theme.spacing(15), sm: theme.spacing(40), md: theme.spacing(50), lg: theme.spacing(60) }}
          >
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
          gap={5}
          style={{ justifyContent: "space-evenly", padding: "20px" }}
        >
          <Grid item xs={12} sm={5.5} md={5.7} lg={2.8} sx={styles.GridBox}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingBottom: "10px" }}>
              <Box sx={styless.imageshahdow}>
                <img
                  src="/sales-brand1.svg"
                  alt="sales brand"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "100px",
                    height: " 69px",
                    objectFit: "scale-down",
                    width: " 69px",
                    zIndex: " 99",
                    position: "relative",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"} fontWeight={"600"} style={{ lineHeight: "normal" }}>
                Increase Sales and Brand Exposure
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} style={{ lineHeight: "normal" }}>
                Let our creators promote and sell your products for you.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5.5} md={5.7} lg={2.8} sx={styles.GridBox}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingBottom: "10px" }}>
              <Box sx={styless.imageshahdow}>
                <img
                  src="/set-forgot.svg"
                  alt="set forgot"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "100px",
                    height: " 69px",
                    objectFit: "scale-down",
                    width: " 69px",
                    zIndex: " 99",
                    position: "relative",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"} fontWeight={"600"} style={{ lineHeight: "normal" }}>
                Set and forget
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} style={{ lineHeight: "normal" }}>
                All stock easily integrated in under two minutes. Fulfil orders as normal.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5.5} md={5.7} lg={2.8} sx={styles.GridBox}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingBottom: "10px" }}>
              <Box sx={styless.imageshahdow}>
                <img
                  src="/free-join.svg"
                  alt="free join"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "100px",
                    height: " 69px",
                    objectFit: "scale-down",
                    width: " 69px",
                    zIndex: " 99",
                    position: "relative",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"} fontWeight={"600"} style={{ lineHeight: "normal" }}>
                Free to join, only pay commission on sales
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} style={{ lineHeight: "normal" }}>
                Free, forever. Only pay commission on sales creators make.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5.5} md={5.7} lg={2.8} sx={styles.GridBox}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingBottom: "10px" }}>
              <Box sx={styless.imageshahdow}>
                <img
                  src="/people-trust-people.svg"
                  alt="people trust people"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "100px",
                    height: " 69px",
                    objectFit: "scale-down",
                    width: " 69px",
                    zIndex: " 99",
                    position: "relative",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"} fontWeight={"600"} style={{ lineHeight: "normal" }}>
                People trust people
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} style={{ lineHeight: "normal" }}>
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
