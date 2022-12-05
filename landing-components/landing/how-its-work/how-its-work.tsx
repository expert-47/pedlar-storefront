import React from "react";
import { styles } from "./style";
import { Box, Grid, Typography } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import { Link as ScrollText } from "react-scroll";

const Howitswork = () => {
  return (
    <CustomContainer>
      <Box sx={styles.MainBox} style={{ marginTop: "150px" }}>
        <Grid sx={styles.Heading}>
          <Typography fontWeight={700} fontSize={{ xs: "40px", sm: "40px", md: "54px", lg: "54px" }}>
            How it works
          </Typography>
        </Grid>
        <ScrollText
          to="[section-1, section-2, section-3, section-4]"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <Grid container item xs={12} sm={12} md={12} lg={12}>
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.Texts}>
                <Grid item xs={0.7} sm={0.7} md={0.7} lg={0.7}>
                  <Typography fontSize={"30px"} fontWeight={600}>
                    1
                  </Typography>
                </Grid>
                <Grid item xs={5} sm={5} md={5} lg={5}>
                  <Typography fontSize={"30px"} fontWeight={600}>
                    Top Aussie brands sync their store to the Pedlar platform
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.Texts}>
                <Grid item xs={0.7} sm={0.7} md={0.7} lg={0.7}>
                  <Typography fontSize={"30px"} fontWeight={600}>
                    2
                  </Typography>
                </Grid>
                <Grid item xs={5} sm={5} md={5} lg={5}>
                  <Typography fontSize={"30px"} fontWeight={600}>
                    Creators select products from brands they love
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.Texts}>
                <Grid item xs={0.7} sm={0.7} md={0.7} lg={0.7}>
                  <Typography fontSize={"30px"} fontWeight={600}>
                    3
                  </Typography>
                </Grid>
                <Grid item xs={5} sm={5} md={5} lg={5}>
                  <Typography fontSize={"30px"} fontWeight={600}>
                    Creators personalise their store to match their style
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.Texts}>
                <Grid item xs={0.7} sm={0.7} md={0.7} lg={0.7}>
                  <Typography fontSize={"30px"} fontWeight={600}>
                    4
                  </Typography>
                </Grid>
                <Grid item xs={5} sm={65} md={5} lg={5}>
                  <Typography fontSize={"30px"} fontWeight={600}>
                    Creators share their store with their followers and make sales
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Grid id="section-1">csdcsdvcdsc</Grid>
              <Grid id="section-2">sdsafsdfsd</Grid>
              <Grid id="section-3">dxnjhjnh</Grid>
              <Grid id="section-4">g gnfgbhrhrth</Grid>
            </Grid>
          </Grid>
        </ScrollText>
      </Box>
    </CustomContainer>
  );
};

export default Howitswork;
