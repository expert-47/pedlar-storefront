import React from "react";
import { Box } from "@mui/system";
import { Divider, Grid, Typography } from "@mui/material";
import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { CustomContainer } from "../layout";
import AddIcon from "@mui/icons-material/Add";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";
import Layout from "../layout";
import Options from "./components/options";
import Action from "./components/action";
import styles from "styles/product";
import BaseFooter from "components/footer/baseFooter";
import { useMediaQuery, useTheme } from "@mui/material";

const buttonStyle = {
  display: "none",
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}></button>,
  nextArrow: <button style={{ ...buttonStyle }}></button>,
};

const Cart = (props) => {
  const { newAdditionData } = props;
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const isMatch = useMediaQuery(theme.breakpoints.between("xs", "md"));

  console.log("newAdditionDatadotdor", newAdditionData);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  const images = ["/grid-img1.png", "/grid-img1.png", "/grid-img1.png", "/grid-img1.png"];
  return (
    <Layout>
      <CustomContainer>
        <Box sx={styles.mainContainer}>
          <Grid container item md={11} lg={9} xl={9}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: isMatch ? "center" : "start",
                textAlign: "center",
                paddingTop: "26px",
              }}
            >
              <Grid item xs={10} sx={{ display: { lg: "none", md: "none", sm: "none" } }}>
                <Grid>
                  <Slide {...properties} indicators={true}>
                    <Box className="each-slide-effect">
                      <Box sx={styles.eachSlideEffect} style={{ backgroundImage: `url(${images[0]})` }}></Box>
                    </Box>
                    <Box className="each-slide-effect">
                      <Box sx={styles.eachSlideEffect} style={{ backgroundImage: `url(${images[1]})` }}></Box>
                    </Box>
                    <Box className="each-slide-effect">
                      <Box sx={styles.eachSlideEffect} style={{ backgroundImage: `url(${images[2]})` }}></Box>
                    </Box>
                    <Box className="each-slide-effect">
                      <Box sx={styles.eachSlideEffect} style={{ backgroundImage: `url(${images[2]})` }}></Box>
                    </Box>
                  </Slide>
                </Grid>
              </Grid>
              <ImageList
                cols={1}
                sx={{
                  height: "240vh",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": { display: "none" },
                  display: { xs: "none", sm: "block" },
                }}
              >
                <ImageListItem sx={{ paddingBottom: "25px" }}>
                  <img
                    src={newAdditionData?.featuredImage?.url}
                    // srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
            </Grid>

            <Grid container item xs={12} sm={12} md={6} lg={6} justifyContent="center">
              <Grid item xs={11} sm={6} md={10} lg={10} textAlign="center" paddingTop="40px">
                <Grid
                  style={{
                    position: "sticky",
                    top: "110px",
                  }}
                >
                  <Typography fontSize={"16px"} fontWeight={"600"}>
                    LOW CLASSIC
                  </Typography>
                  <Typography sx={styles.description}>{newAdditionData?.title}</Typography>
                  <Grid container item xs={12} sm={12} md={12} lg={12} justifyContent="center">
                    <Typography style={styles.price} fontSize={"24px"} fontWeight={"600"}>
                      {`${newAdditionData?.priceRange?.minVariantPrice?.amount} ${newAdditionData?.priceRange?.minVariantPrice?.currencyCode}`}
                    </Typography>
                  </Grid>

                  <Options newAdditionData={newAdditionData} />
                  <Action newAdditionData={newAdditionData} />

                  <Typography sx={styles.mainDescription}>All Orders Shipped Directly From Each Brand </Typography>
                  <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.accordianGrid}>
                    <Accordion elevation={0}>
                      <AccordionSummary />
                      <AccordionDetails />
                    </Accordion>
                    <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} elevation={0}>
                      <AccordionSummary expandIcon={expanded === "panel1" ? <RemoveIcon /> : <AddIcon />}>
                        <Typography sx={styles.accordianTypography} fontWeight={"bold"}>
                          Description
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={styles.descriptionTypography}>{newAdditionData?.description}</Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} elevation={0}>
                      <AccordionSummary expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}>
                        <Typography sx={styles.accordianTypography} fontWeight={"bold"}>
                          Shipping
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={styles.descriptionTypography}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                          amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} elevation={0}>
                      <AccordionSummary expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}>
                        <Typography sx={styles.accordianTypography} fontWeight={"bold"}>
                          Returns
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={styles.descriptionTypography}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                          amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={0}>
                      <AccordionSummary></AccordionSummary>
                      <AccordionDetails></AccordionDetails>
                    </Accordion>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={4} sx={styles.bottomContainer}>
          <Grid container item xs={11.5} sm={9} md={11.2} lg={9.2} xl={9.2} paddingTop="30px">
            <Grid item xs={12} sm={12} md={12} lg={12} paddingLeft="10px">
              <Typography sx={styles.text} fontSize={"24px"} fontWeight={"bold"}>
                You might like
              </Typography>
            </Grid>
            {[0, 0, 0, 0, 0].map((item, index) => {
              return (
                <Grid key={index} item xs={6} sm={6} md={2.4} lg={2.4} paddingLeft="10px" paddingBottom="50px">
                  <Image width={"211"} height={199} src={newAdditionData?.featuredImage?.url} />
                  <Typography variant="body1">SISLEY PARIS</Typography>
                  <Typography variant="subtitle2">Eye Contour Mask</Typography>
                  <Typography variant="subtitle2">$42</Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </CustomContainer>
      <Divider sx={styles.footerDivider} />
      <BaseFooter />
    </Layout>
  );
};

export default Cart;
