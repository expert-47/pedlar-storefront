import React from "react";
import { Grid, Typography } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import { useTheme } from "@mui/material";
import Image from "next/image";
import HassleIcon1 from "../../../public/hassle-icon1.png";
import HassleIcon2 from "../../../public/hassle-icon2.png";
import HassleIcon3 from "../../../public/hassle-icon3.png";
import HassleIcon4 from "../../../public/hassle-icon4.png";

const Husttle = () => {
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
        paddingTop={{ xs: "85px", sm: "120px" }}
        style={{ zIndex: "999", position: "relative" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            textTransform={"none"}
            fontSize={{ xs: "48px", md: "54px" }}
            sx={styles.heading}
            paddingX={{ xs: theme.spacing(15), sm: theme.spacing(40), md: theme.spacing(50), lg: theme.spacing(60) }}
          >
            A side-hustle without the hassle
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
              <Image src={HassleIcon1} alt="hassle1" height={"69px"} width={"69px"} loading="lazy" placeholder="blur" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"} fontWeight={"600"}>
                20% Commission
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
                A cut above the rest. Earn more for selling products you love.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5.5} md={5.7} lg={2.8} sx={styles.GridBox}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingBottom: "10px" }}>
              <Image src={HassleIcon2} alt="hassle2" height={"69px"} width={"69px"} loading="lazy" placeholder="blur" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"} fontWeight={"600"}>
                Curate and customise
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
                Make it your business. Create a storefront and showcase your personal aesthetic and style.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5.5} md={5.7} lg={2.8} sx={styles.GridBox}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingBottom: "10px" }}>
              <Image src={HassleIcon3} alt="hassle3" height={"69px"} width={"69px"} loading="lazy" placeholder="blur" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"} fontWeight={"600"}>
                Simple and free
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
                Setup your store in two minutes and start selling instantly. Never pay to use Pedlar.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5.5} md={5.7} lg={2.8} sx={styles.GridBox}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingBottom: "10px" }}>
              <Image src={HassleIcon4} alt="hassle4" height={"69px"} width={"69px"} loading="lazy" placeholder="blur" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"} fontWeight={"600"}>
                No hassle
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
                Pedlar handles all the customer support, shipping and inventory.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Husttle;
