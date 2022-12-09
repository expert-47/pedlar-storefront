import React from "react";
import { Grid, Typography } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import { useTheme } from "@mui/material";
import Image from "next/image";
import SalesBrand from "../../../public/sales-brand1.png";
import SetForgot from "../../../public/set-forgot.png";
import FreeJoin from "../../../public/free-join.png";
import PropleTrustPeople from "../../../public/people-trust-people.png";

const Pointofpurchase = () => {
  const theme = useTheme();
  return (
    <CustomContainer>
      <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.MainGrid}>
        <Grid item xs={12} sm={12} md={12} lg={10}>
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
              <Image src={SalesBrand} alt="hassle1" height={"69px"} width={"69px"} loading="lazy" placeholder="blur" />
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
              <Image src={SetForgot} alt="hassle1" height={"69px"} width={"69px"} loading="lazy" placeholder="blur" />
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
              <Image src={FreeJoin} alt="hassle1" height={"69px"} width={"69px"} loading="lazy" placeholder="blur" />
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
              <Image
                src={PropleTrustPeople}
                alt="hassle1"
                height={"69px"}
                width={"69px"}
                loading="lazy"
                placeholder="blur"
              />
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
