import React from "react";
import { Box } from "@mui/system";
import { Divider, Grid, Typography } from "@mui/material";
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { CustomContainer } from "../layout";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';

import Layout from "../layout";
import Options from "./components/options";
import Action from "./components/action";
import styles from "styles/product";
import ProductHeader from "components/home/components/productHeader";
import { useStyles } from "styles/home";
import BaseFooter from "components/footer/baseFooter";


const buttonStyle = {
  display: "none"
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}></button>,
  nextArrow: <button style={{ ...buttonStyle }}></button>
}

const Cart = () => {
  const { classes, cx } = useStyles();
  const images = [
    "/grid-img1.png",
    "/grid-img1.png",
    "/grid-img1.png",
    "/grid-img1.png",];
  return (
    <Layout>

      <CustomContainer>
        <Box sx={styles.mainContainer}>
          <Grid container item md={12} lg={12}>
            <Grid container item xs={12} sm={12} md={6} lg={7} sx={{display: "flex", justifyContent: "center", textAlign: "center", paddingTop: "26px" }}>
              <Grid item xs={12} sx={{ display: { lg: "none", md: "none", sm: "none" } }}>
                <Grid>
                  <Slide {...properties} indicators={true}>
                    <Box className="each-slide-effect">
                      <Box sx={styles.eachSlideEffect} style={{ 'backgroundImage': `url(${images[0]})` }}>
                      </Box>
                    </Box>
                    <Box className="each-slide-effect">
                      <Box sx={styles.eachSlideEffect} style={{ 'backgroundImage': `url(${images[1]})` }}>
                      </Box>
                    </Box>
                    <Box className="each-slide-effect">
                      <Box sx={styles.eachSlideEffect} style={{ 'backgroundImage': `url(${images[2]})` }}>
                      </Box>
                    </Box>
                    <Box className="each-slide-effect">
                      <Box sx={styles.eachSlideEffect} style={{ 'backgroundImage': `url(${images[2]})` }}>
                      </Box>
                    </Box>
                  </Slide>
                </Grid>
              </Grid>
              <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
                <img src="/grid-img1.png"></img>
              </Grid>
              <Grid item sx={{ display: { xs: "none", sm: "block", paddingTop: "25px" } }}>
                <img src="/grid-img1.png"></img>
              </Grid>
              <Grid item sx={{ display: { xs: "none", sm: "block", paddingTop: "25px" } }}>
                <img src="/grid-img1.png"></img>
              </Grid>
            </Grid>

            <Grid container item xs={12} sm={12} md={6} lg={4.5} justifyContent="center">
              <Grid item xs={11} sm={6} md={10} lg={10} textAlign="center" paddingTop="40px">
                <Grid>
                  <Typography sx={styles.heading}>LOW CLASSIC</Typography>
                  <Typography sx={styles.description}>
                    Green Polyster <br></br> Blazer
                  </Typography>
                  <Grid container item xs={12} sm={12} md={12} lg={12} justifyContent="center">
                    <Typography style={styles.price}>$365</Typography>
                  </Grid>

                  <Options></Options>
                  <Action></Action>

                  <Typography sx={styles.mainDescription}>All Orders Shipped Directly From Each Brand </Typography>
                  <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.descriptionGrid}>
                    <Typography style={styles.bottomHeading}>Description</Typography>
                    <Divider sx={styles.divider} />
                    <RemoveIcon sx={styles.sign} ></RemoveIcon>
                  </Grid>
                  <Typography sx={styles.descriptionTypography}>
                    {
                      " Hi honeys! I’ve worked closely with some of my fave brands to curate my own store! All items are shipped out directly from each brand. I hope you love what I've put together."
                    }
                    <br></br>
                    <br></br>
                    {
                      "Hi honeys! I’ve worked closely with some of my fave brands to curate my own store! All items are shipped out directly from each  brand. I hope you love what I've put together."
                    }
                  </Typography>
                  <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.accordianGrid}>
                    <Accordion elevation={0}>
                      <AccordionSummary />
                      <AccordionDetails />
                    </Accordion>
                    <Accordion elevation={0}>
                      <AccordionSummary expandIcon={<AddIcon />}>
                        <Typography sx={styles.accordianTypography}>Shipping</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                          amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={0}>
                      <AccordionSummary expandIcon={<AddIcon />}>
                        <Typography sx={styles.accordianTypography}>Returns</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
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
          <Grid container item xs={11} sm={9} md={11.4} lg={8.4} paddingTop="30px">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography sx={styles.text}>You might like</Typography>
            </Grid>
            {[0, 0, 0, 0, 0, 0].map((item, index) => {
              return (
                <Grid key={index} item xs={6} sm={6} md={2.4} lg={2.4} paddingBottom="50px">
                  <img style={{ width: "90%", height: "70%" }} src="/grid-img3.png"></img>
                  <Typography variant="body1">SISLEY PARIS</Typography>
                  <Typography variant="subtitle2">Eye Contour Mask</Typography>
                  <Typography variant="subtitle2">$42</Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </CustomContainer>
      <Divider className={cx(classes.footerDivider)} />
      <BaseFooter />
    </Layout>
  );
};

export default Cart;
