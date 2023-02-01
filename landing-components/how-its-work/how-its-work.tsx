import React from "react";
import { styles } from "./style";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { CustomContainer } from "../landinglayout";
import Responsivehowitworks from "./responsive-how-it-works";
import purpleGradient from "../../public/purple-gradient.png";
import Scrollspy from "react-scrollspy";
import Image, { StaticImageData } from "next/image";
import orangepinkmesh from "../../public/mesh-pink-orange.png";
import PedlarImage from "components/pedlarImage";

interface Props {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  image4: StaticImageData;
}
const Howitswork = ({ title1, title2, title3, title4, image1, image2, image3, image4 }: Props) => {
  const theme = useTheme();
  const isResponsive = useMediaQuery("(max-width:1023px)");

  return (
    <CustomContainer>
      <Box style={{ position: "absolute", right: "0", width: "auto", zIndex: "0", bottom: "44px" }}>
        <PedlarImage src={orangepinkmesh} alt="orange pink meshes" loading={"lazy"} />
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
        <Box
          sx={{
            position: "absolute",
            right: " 0",
            top: "0",
            zIndex: "0",
            height: isResponsive ? 950 : "unset",
            width: isResponsive ? "100%" : "unset",
          }}
        >
          {isResponsive ? (
            <PedlarImage src={purpleGradient} alt="purple gradient" layout={"fill"} style={{ borderRadius: "16px" }} />
          ) : (
            <PedlarImage
              src={purpleGradient}
              alt="purple gradient"
              layout={"intrinsic"}
              style={{ borderRadius: "16px" }}
            />
          )}
        </Box>
        <Box sx={styles.MainBox}>
          {isResponsive ? (
            <>
              <Responsivehowitworks
                title1={title1}
                title2={title2}
                title3={title3}
                title4={title4}
                image1={image1}
                image2={image2}
                image3={image3}
                image4={image4}
              />
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
                              {title1}
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="hs5-ib-sbr-img">
                          <PedlarImage
                            src={image1}
                            alt="Picture of the author"
                            style={{ borderRadius: "16px" }}
                            objectFit="contain"
                          />
                        </Box>
                      </Grid>
                      <Grid>
                        <Box>
                          <Box display={"flex"} alignItems={"flex-start"} mb={"30px"}>
                            <Typography sx={styles.number} className="activeCount">
                              2
                            </Typography>
                            <Typography fontSize={{ md: "32px", lg: "40px", xl: "40px" }} sx={styles.stickyText}>
                              {title2}
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="hs5-ib-sbr-img">
                          <PedlarImage src={image2} alt="step 2" style={{ borderRadius: "16px" }} objectFit="contain" />
                        </Box>
                      </Grid>
                      <Grid>
                        <Box>
                          <Box display={"flex"} alignItems={"flex-start"} mb={"30px"}>
                            <Typography sx={styles.number} className="activeCount">
                              3
                            </Typography>
                            <Typography fontSize={{ md: "32px", lg: "40px", xl: "40px" }} sx={styles.stickyText}>
                              {title3}
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="hs5-ib-sbr-img">
                          <PedlarImage
                            src={image3}
                            alt="Picture of the author"
                            style={{ borderRadius: "16px" }}
                            objectFit="contain"
                          />
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
                              {title4}
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="hs5-ib-sbr-img">
                          <PedlarImage
                            src={image4}
                            alt="Picture of the author"
                            style={{ borderRadius: "16px" }}
                            objectFit="contain"
                          />
                        </Box>
                      </Grid>
                    </Scrollspy>
                    <div className="hs5-ib-slider-box-right">
                      <Box id="section-1">
                        <Box className="hs5-ib-sbr-img">
                          <Image src={image1} alt="step1" style={{ borderRadius: "16px" }} objectFit="contain" />
                        </Box>
                      </Box>
                      <Box id="section-2">
                        <Box className="hs5-ib-sbr-img">
                          <Image src={image2} alt="step2" style={{ borderRadius: "16px" }} objectFit="contain" />
                        </Box>
                      </Box>
                      <Box id="section-3">
                        <Box className="hs5-ib-sbr-img">
                          <Image src={image3} alt="step3" style={{ borderRadius: "16px" }} objectFit="contain" />
                        </Box>
                      </Box>
                      <Box id="section-4">
                        <Box className="hs5-ib-sbr-img">
                          <Image src={image4} alt="step4" style={{ borderRadius: "16px" }} objectFit="contain" />
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
