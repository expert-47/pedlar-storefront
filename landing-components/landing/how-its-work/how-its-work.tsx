import React from "react";
import { styles } from "./style";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import Responsivehowitworks from "./responsive-how-it-works";
import purpleGradient from "../../../public/purple-gradient.png";
import Scrollspy from "react-scrollspy";
import Image from "next/image";
import firstStep from "../../../public/step1.png";
import secondStep from "../../../public/step2.png";
import thirdStep from "../../../public/step3.png";
import fourthStep from "../../../public/step4.png";
import orangepinkmesh from "../../../public/mesh-pink-orange.png";
const Howitswork = () => {
  const theme = useTheme();
  const isResponsive = useMediaQuery("(max-width:1023px)");

  return (
    <CustomContainer>
      <Box style={{ position: "absolute", right: "0", width: "auto", zIndex: "0", bottom: "44px" }}>
        <Image src={orangepinkmesh} alt="orange pink meshes" loading={"lazy"} />
      </Box>
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
                          <Box display={"flex"} alignItems={"flex-start"} mb={"30px"}>
                            <Typography sx={styles.number} className="activeCount">
                              1
                            </Typography>
                            <Typography fontSize={{ md: "32px", lg: "40px", xl: "40px" }} sx={styles.stickyText}>
                              Top Aussie brands sync their store to the Pedlar platform{" "}
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="hs5-ib-sbr-img">
                          <Image src={firstStep} alt="Picture of the author" loading="lazy" placeholder="blur" />
                        </Box>
                      </Grid>
                      <Grid>
                        <Box>
                          <Box display={"flex"} alignItems={"flex-start"} mb={"30px"}>
                            <Typography sx={styles.number} className="activeCount">
                              2
                            </Typography>
                            <Typography fontSize={{ md: "32px", lg: "40px", xl: "40px" }} sx={styles.stickyText}>
                              Creators select products from brands they love
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="hs5-ib-sbr-img">
                          <Image src={secondStep} alt="step 2" loading="lazy" placeholder="blur" />
                        </Box>
                      </Grid>
                      <Grid>
                        <Box>
                          <Box display={"flex"} alignItems={"flex-start"} mb={"30px"}>
                            <Typography sx={styles.number} className="activeCount">
                              3
                            </Typography>
                            <Typography fontSize={{ md: "32px", lg: "40px", xl: "40px" }} sx={styles.stickyText}>
                              Creators personalise their store to match their style
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="hs5-ib-sbr-img">
                          <Image src={thirdStep} alt="Picture of the author" loading="lazy" placeholder="blur" />
                        </Box>
                      </Grid>
                      <Grid>
                        <Box>
                          <Box display={"flex"} alignItems={"flex-start"}>
                            <Typography sx={styles.number} className="activeCount">
                              4
                            </Typography>
                            <Typography
                              fontSize={{ sm: "30px", md: "32px", lg: "40px", xl: "40px" }}
                              sx={styles.stickyText}
                            >
                              Creators share their store with their followers and make sales
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="hs5-ib-sbr-img">
                          <Image src={fourthStep} alt="Picture of the author" loading="lazy" placeholder="blur" />
                        </Box>
                      </Grid>
                    </Scrollspy>
                    <div className="hs5-ib-slider-box-right">
                      <Box id="section-1">
                        <Box className="hs5-ib-sbr-img">
                          <Image src={firstStep} alt="step1" loading="lazy" placeholder="blur" />
                        </Box>
                      </Box>
                      <Box id="section-2">
                        <Box className="hs5-ib-sbr-img">
                          <Image src={secondStep} alt="step2" loading="lazy" placeholder="blur" />
                        </Box>
                      </Box>
                      <Box id="section-3">
                        <Box className="hs5-ib-sbr-img">
                          <Image src={thirdStep} alt="step3" loading="lazy" placeholder="blur" />
                        </Box>
                      </Box>
                      <Box id="section-4">
                        <Box className="hs5-ib-sbr-img">
                          <Image src={fourthStep} alt="step4" loading="lazy" placeholder="blur" />
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
    </CustomContainer>
  );
};

export default Howitswork;
