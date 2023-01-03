import React from "react";
import { styles } from "./style";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
// import { Scrollspy } from "@makotot/ghostui";
// import Content from "./content.json";
// import Images from "./images.json";
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

  // const sectionRefs = [
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  // ];
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
          <Image src={purpleGradient} alt="purple gradient" />
        </Box>
        <Box sx={styles.MainBox}>
          {isResponsive ? (
            <>
              <Responsivehowitworks />
            </>
          ) : (
            <>
              {/* <Grid sx={styles.Heading}>
                <Typography fontWeight={700} fontSize={{ xs: "40px", sm: "40px", md: "54px", lg: "54px" }}>
                  How it works
                </Typography>
              </Grid>
              <Box style={{ position: "relative" }}>
                <Scrollspy sectionRefs={sectionRefs} offset={-150}>
                  {({ currentElementIndexInViewport }) => (
                    <Grid
                      style={{
                        display: "flex",
                        zIndex: 4,
                        position: "relative",
                      }}
                      container
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                    >
                      <Grid item xs={12} sm={12} md={8} lg={8} data-cy="section-wrapper">
                        <List
                          sx={{
                            position: "sticky",
                            top: "125px",
                            "& .css-16eg70r-MuiList-root": {
                              position: "sticky",
                              top: "0",
                              width: "100%",
                              mergin: 0,
                            },
                          }}
                          style={{
                            position: "sticky",
                            top: "0",
                            width: "100%",
                          }}
                        >
                          {Content.map((content, key) => (
                            <Grid
                              id={`section-${key}`}
                              key={key}
                              data-cy={`section-item`}
                              ref={sectionRefs[key]}
                              container
                              item
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                              sx={styles.Texts}
                            >
                              <Grid
                                item
                                xs={0.7}
                                sm={0.7}
                                md={0.7}
                                lg={0.7}
                                sx={[
                                  styles.circlecount,
                                  {
                                    backgroundColor: currentElementIndexInViewport == key ? "white" : "tranparent",
                                    color: currentElementIndexInViewport == key ? "#1c1b1f" : "white",
                                    opacity: currentElementIndexInViewport == key ? "" : "0.4",
                                  },
                                ]}
                              >
                                <Typography
                                  fontSize={{ sx: "30px", sm: "30px", md: "30px", lg: "30px" }}
                                  fontWeight={600}
                                >
                                  {content.id}
                                </Typography>
                              </Grid>
                              <Grid
                                item
                                xs={9}
                                sm={9}
                                md={11}
                                lg={10}
                                style={{ padding: "0px 0 0 28px" }}
                                sx={{ opacity: currentElementIndexInViewport == key ? "" : "0.4" }}
                              >
                                <Typography
                                  fontSize={{ sx: "30px", sm: "30px", md: "40px", lg: "40px" }}
                                  fontWeight={600}
                                >
                                  {content.text}
                                </Typography>
                              </Grid>
                            </Grid>
                          ))}
                        </List>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={4} data-cy="nav-wrapper">
                        {Images.map((image, i) => {
                          if (currentElementIndexInViewport == i) {
                            return (
                              <img
                                src={image.img}
                                alt="how-its-work-img"
                                style={{ borderRadius: "16px", height: "600px", width: "300px" }}
                              />
                            );
                          }
                        })}
                      </Grid>
                    </Grid>
                  )}
                </Scrollspy>
              </Box> */}
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
                            <Typography fontSize={{ md: "32px", lg: "40px", xl: "42px" }} sx={styles.stickyText}>
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
                            <Typography fontSize={{ md: "32px", lg: "40px", xl: "42px" }} sx={styles.stickyText}>
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
                            <Typography fontSize={{ md: "32px", lg: "40px", xl: "42px" }} sx={styles.stickyText}>
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
                              fontSize={{ sm: "30px", md: "32px", lg: "40px", xl: "42px" }}
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
