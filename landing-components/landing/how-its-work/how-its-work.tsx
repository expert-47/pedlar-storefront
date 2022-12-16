import React, { useRef } from "react";
import { styles } from "./style";
import { Box, Grid, Typography, List, useTheme, useMediaQuery } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import { Scrollspy } from "@makotot/ghostui";
import Content from "./content.json";
import Images from "./images.json";
import Responsivehowitworks from "./responsive-how-it-works";
import purpleGradient from "../../../public/purple-gradient.png";
import Image from "next/image";

const Howitswork = () => {
  const theme = useTheme();
  const isResponsive = useMediaQuery("(max-width:1023px)");

  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  return (
    <CustomContainer>
      <Box
        paddingX={{ xs: theme.spacing(20), sm: theme.spacing(30), md: theme.spacing(30), lg: theme.spacing(35) }}
        style={{
          marginTop: "105px",
          display: "block",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={styles.MainBox}>
          <Box style={{ position: "absolute", right: " 0", top: "0", zIndex: "0" }}>
            <Image src={purpleGradient} alt="purple gradient" />
          </Box>
          {isResponsive ? (
            <>
              <Responsivehowitworks />
            </>
          ) : (
            <>
              <Grid sx={styles.Heading}>
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
                              <Grid item xs={9} sm={9} md={11} lg={10} style={{ padding: "0px 0 0 28px" }}>
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
              </Box>
            </>
          )}
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default Howitswork;
