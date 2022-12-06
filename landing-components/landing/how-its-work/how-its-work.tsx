import React, { useRef } from "react";
import { styles } from "./style";
import { List, ListItem, useTheme } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import { Scrollspy } from "@makotot/ghostui";
import Content from "./content.json";
import Images from "./images.json";

const Howitswork = () => {
  const theme = useTheme();
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  return (
    <CustomContainer>
      <Box
        paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
        style={{
          marginTop: "105px",
          display: "block",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={styles.MainBox}>
          <Grid sx={styles.Heading}>
            <Typography fontWeight={700} fontSize={{ xs: "40px", sm: "40px", md: "54px", lg: "54px" }}>
              How it works
            </Typography>
          </Grid>

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
                <Grid item xs={8} sm={8} md={8} lg={8} data-cy="section-wrapper">
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
                      <ListItem
                        id={`section-${key}`}
                        key={key}
                        data-cy={`section-item`}
                        ref={sectionRefs[key]}
                        container
                        item
                        md={12}
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
                          <Typography fontSize={{ sx: "30px", sm: "30px", md: "30px", lg: "30px" }} fontWeight={600}>
                            {content.id}
                          </Typography>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9} style={{ padding: "0px 0 0 28px" }}>
                          <Typography fontSize={{ sx: "30px", sm: "30px", md: "40px", lg: "40px" }} fontWeight={600}>
                            {content.text}
                          </Typography>
                        </Grid>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} data-cy="nav-wrapper">
                  {Images.map((image, i) => {
                    console.log(currentElementIndexInViewport);
                    if (currentElementIndexInViewport == i) {
                      return (
                        <Grid md={6} data-cy={`nav-item`}>
                          <img src={image.img} alt="home-sec5-img1" style={{ borderRadius: "16px" }} />
                        </Grid>
                      );
                    }
                  })}
                </Grid>
              </Grid>
            )}
          </Scrollspy>
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default Howitswork;
