import React from "react";
import { styles } from "./style";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import Responsivehowitworks from "./responsive-how-it-works";
import purpleGradient from "../../../public/purple-gradient.png";
import Scrollspy from "react-scrollspy";
import Image from "next/image";
import firstStep from "../../../public/step1.png";
import secondStep from "../../../public/work1.png";
import thirdStep from "../../../public/work4.png";
import fourthStep from "../../../public/cartList.png";
import PedlarImage from "components/pedlarImage";

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
                              Sync your Shopify store to Pedlar in two minutes
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="hs5-ib-sbr-img">
                          <Image src={firstStep} alt="Picture of the author" />
                          {/* <PedlarImage src={firstStep} alt="Picture of the author" /> */}
                          {/* <Box sx={{ height: 700, width: 400, borderRadius: "16px" }}>
                            <PedlarImage src={firstStep} alt="Picture of the author" />
                          </Box> */}
                        </Box>
                      </Grid>
                      <Grid>
                        <Box>
                          <Box display={"flex"} alignItems={"flex-start"} mb={"40px"}>
                            <Typography sx={styles.number} className="activeCount">
                              2
                            </Typography>
                            <Typography fontSize={{ md: "32px", lg: "38px" }} sx={styles.stickyText}>
                              Creators add your products to their stores
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
                              When sales are made, you ship the products directly to customers
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
                              Only pay commision on sales made
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
    </CustomContainer>
  );
};

export default Howitswork;
