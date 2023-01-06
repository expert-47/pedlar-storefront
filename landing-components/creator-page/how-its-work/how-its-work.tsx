import React from "react";
import { styles } from "./style";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import Responsivehowitworks from "./responsive-how-it-works";
import purpleGradient from "../../../public/purple-gradient.png";
import Scrollspy from "react-scrollspy";
import Image from "next/image";
import firstStep from "../../../public/work1.png";
import secondStep from "../../../public/work2.png";
import thirdStep from "../../../public/work3.png";
import fourthStep from "../../../public/work4.png";
import bluemeshbrand from "../../../public/blueMesh-brand.png";

const Howitswork = () => {
  const theme = useTheme();
  const isResponsive = useMediaQuery("(max-width:1023px)");

  return (
    <CustomContainer>
      <Box
        paddingX={{ xs: theme.spacing(20), sm: theme.spacing(30), md: theme.spacing(30), lg: theme.spacing(35) }}
        marginX={{ xs: theme.spacing(20), sm: theme.spacing(30), md: theme.spacing(30), lg: theme.spacing(35) }}
        style={{
          marginTop: "105px",
          position: "relative",
          overflow: "unset",
          backgroundColor: "#1c1b1f",
          borderRadius: "16px",
        }}
      >
        <Box style={{ position: "absolute", right: " 0", top: "0", zIndex: "0" }}>
          <Image src={purpleGradient} alt="purple gradient" style={{ borderRadius: "16px" }} />
        </Box>
        <Box sx={styles.MainBox}>
          {isResponsive ? (
            <>
              <Responsivehowitworks />
            </>
          ) : (
            <>
              <Box sx={styles.homesec5}>
                <Box style={{ position: "relative" }}>
                  <Grid sx={styles.Heading}>
                    <Typography fontWeight={700} fontSize={{ xs: "40px", sm: "40px", md: "54px", lg: "54px" }}>
                      How it works
                    </Typography>
                  </Grid>
                  <Box className="hs5-ib-slider-box">
                    <Scrollspy
                      items={["section-1", "section-2", "section-3", "section-4"]}
                      className="hs5-ib-slider-box-left"
                      currentClassName="is-current"
                    >
                      <Grid>
                        <Box>
                          <Box display={"flex"} alignItems={"flex-start"} mb={"40px"}>
                            <Typography sx={styles.number} className="activeCount">
                              1
                            </Typography>
                            <Typography fontSize={{ md: "32px", lg: "38px" }} sx={styles.stickyText}>
                              Select products from your favourite brands
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="hs5-ib-sbr-img">
                          <Image src={firstStep} alt="Picture of the author" />
                        </Box>
                      </Grid>
                      <Grid>
                        <Box>
                          <Box display={"flex"} alignItems={"flex-start"} mb={"40px"}>
                            <Typography sx={styles.number} className="activeCount">
                              2
                            </Typography>
                            <Typography fontSize={{ md: "32px", lg: "38px" }} sx={styles.stickyText}>
                              Personalise your store to represent your aesthetic
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="hs5-ib-sbr-img">
                          <Image src={secondStep} alt="step 2" />
                        </Box>
                      </Grid>
                      <Grid>
                        <Box>
                          <Box display={"flex"} alignItems={"flex-start"} mb={"40px"}>
                            <Typography sx={styles.number} className="activeCount">
                              3
                            </Typography>
                            <Typography fontSize={{ md: "32px", lg: "38px" }} sx={styles.stickyText}>
                              Share with your community, wherever they are
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="hs5-ib-sbr-img">
                          <Image src={thirdStep} alt="Picture of the author" />
                        </Box>
                      </Grid>
                      <Grid>
                        <Box>
                          <Box display={"flex"} alignItems={"flex-start"}>
                            <Typography sx={styles.number} className="activeCount">
                              4
                            </Typography>
                            <Typography fontSize={{ sm: "30px", md: "32px", lg: "38px" }} sx={styles.stickyText}>
                              Sit back and earn. Pedlar handles customer support, shipping and inventory
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="hs5-ib-sbr-img">
                          <Image src={fourthStep} alt="Picture of the author" />
                        </Box>
                      </Grid>
                    </Scrollspy>
                    <div className="hs5-ib-slider-box-right">
                      <Box id="section-1">
                        <Box className="hs5-ib-sbr-img">
                          <Image src={firstStep} alt="step1" />
                        </Box>
                      </Box>
                      <Box id="section-2">
                        <Box className="hs5-ib-sbr-img">
                          <Image src={secondStep} alt="step2" />
                        </Box>
                      </Box>
                      <Box id="section-3">
                        <Box className="hs5-ib-sbr-img">
                          <Image src={thirdStep} alt="step3" />
                        </Box>
                      </Box>
                      <Box id="section-4">
                        <Box className="hs5-ib-sbr-img">
                          <Image src={fourthStep} alt="step4" />
                        </Box>
                      </Box>
                    </div>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Box
        style={{ position: "absolute", left: "0", width: "auto", zIndex: "0" }}
        bottom={{ xs: "640px", sm: "249px" }}
      >
        <Image src={bluemeshbrand} alt="orang brand meshes" />
      </Box>
    </CustomContainer>
  );
};

export default Howitswork;
