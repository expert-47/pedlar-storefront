import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { CustomContainer } from "../landinglayout";
import { styles } from "./style";
import { useTheme } from "@mui/material";
import { NextImage } from "components/pedlarImage";
import { StaticImageData } from "next/image";

interface Props {
  heading: string;
  icon1: StaticImageData;
  icon2: StaticImageData;
  icon3: StaticImageData;
  icon4: StaticImageData;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  para1: string;
  para2: string;
  para3: string;
  para4: string;
}

const CardBox = ({
  heading,
  icon1,
  icon2,
  icon3,
  icon4,
  title1,
  title2,
  title3,
  title4,
  para1,
  para2,
  para3,
  para4,
}: Props) => {
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
        paddingTop={{ xs: "100px", sm: "100px", md: "100px", lg: "100px" }}
        style={{ position: "relative" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={10.5} xl={8.5}>
          <Typography
            textTransform={"none"}
            fontSize={{ xs: "40px", md: "54px" }}
            sx={styles.heading}
            paddingX={{ xs: theme.spacing(15), sm: theme.spacing(40), md: theme.spacing(50), lg: theme.spacing(50) }}
          >
            {heading}
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
              <Box sx={{ height: 79, width: 79 }}>
                <NextImage
                  src={icon1}
                  fill={false}
                  alt={"hassle 1"}
                  layout={"default"}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"} fontWeight={"600"} lineHeight={"normal"}>
                {title1}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} lineHeight={"normal"}>
                {para1}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5.5} md={5.7} lg={2.8} sx={styles.GridBox}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingBottom: "10px" }}>
              <Box sx={{ height: 79, width: 79 }}>
                <NextImage
                  src={icon2}
                  fill={false}
                  alt={"hassle 2"}
                  layout={"default"}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"} fontWeight={"600"} lineHeight={"normal"}>
                {title2}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} lineHeight={"normal"}>
                {para2}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5.5} md={5.7} lg={2.8} sx={styles.GridBox}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingBottom: "10px" }}>
              <Box sx={{ height: 79, width: 79 }}>
                <NextImage
                  src={icon3}
                  fill={false}
                  alt={"hassle 3"}
                  layout={"default"}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"} fontWeight={"600"} lineHeight={"normal"}>
                {title3}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} lineHeight={"normal"}>
                {para3}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5.5} md={5.7} lg={2.8} sx={styles.GridBox}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingBottom: "10px" }}>
              <Box sx={{ height: 79, width: 79 }}>
                <NextImage
                  src={icon4}
                  fill={false}
                  alt={"hassle 4"}
                  layout={"default"}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.title}>
              <Typography textTransform={"none"} fontSize={"22px"} fontWeight={"600"} lineHeight={"normal"}>
                {title4}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.para}>
              <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} lineHeight={"normal"}>
                {para4}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default CardBox;
