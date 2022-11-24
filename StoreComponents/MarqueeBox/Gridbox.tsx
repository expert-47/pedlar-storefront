import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Marquee from "react-fast-marquee";
import { CustomContainer } from "StoreComponents/Layout";
import { styles } from "./Style";

const Gridbox = () => {
  return (
    <CustomContainer>
      <Grid style={{ paddingTop: "40px" }}>
        <Marquee direction="right" speed={40} gradient={false}>
          <Typography fontWeight={"600"} fontSize={"34px"} sx={styles.marqueetop}>
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
        <Marquee direction="right" speed={40} gradient={false}>
          <Typography fontWeight={"600"} fontSize={"34px"} sx={styles.marqueeright}>
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
        <Box sx={styles.mainGrid}>
          <Typography sx={styles.gridboxText}>
            Build personalised storefronts to sell the brands you love directly to your audience
          </Typography>
          <Grid container item gap={16} sm={12} md={12} lg={12} xs={12}>
            <Grid item xs={12} sm={7} md={7} lg={4.95}>
              <img src="/home-sec2-img1.png" alt="Picture of the author" style={{ width: "100%", height: "100%" }} />
            </Grid>
            <Grid item xs={12} sm={3} md={2.5} lg={2.4}>
              <Grid sx={styles.gridimgBox}>
                <Grid>
                  <img src="/home-sec2-img2.png" alt="Picture of the author" style={{ width: "100%" }} />
                </Grid>
                <Grid sx={styles.gridimgBoxInner}>
                  <img src="/home-sec2-img3.png" alt="Picture of the author" style={{ width: "100%" }} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Grid style={{ display: "flex", alignItems: "flex-start", marginBottom: "13px" }}>
                <Box style={{ marginTop: "7px" }}>
                  <img src="/glow.svg" alt="Picture of the author" />
                </Box>
                <Box style={{ marginLeft: "10px" }}>
                  <Typography sx={styles.gridinnereText}>More money. Less problems</Typography>
                  <Typography sx={styles.gridinnerPara}>
                    Track performance overtime. Create value for creator, brands and shoppers.
                  </Typography>
                </Box>
              </Grid>
              <Grid style={{ display: "flex", alignItems: "flex-start", marginBottom: "13px" }}>
                <Box style={{ marginTop: "7px" }}>
                  <img src="/glow.svg" alt="Picture of the author" />
                </Box>
                <Box style={{ marginLeft: "10px" }}>
                  <Typography sx={styles.gridinnereText}>Simple and free</Typography>
                  <Typography sx={styles.gridinnerPara}>
                    Creators and brands get set up in under two minutes. Start selling instantly!
                  </Typography>
                </Box>
              </Grid>
              <Grid style={{ display: "flex", alignItems: "flex-start", marginBottom: "13px" }}>
                <Box style={{ marginTop: "7px" }}>
                  <img src="/glow.svg" alt="Picture of the author" />
                </Box>
                <Box style={{ marginLeft: "10px" }}>
                  <Typography sx={styles.gridinnereText}>Business as usual</Typography>
                  <Typography sx={styles.gridinnerPara}>
                    Creators get paid more to do what they love. Brands integrate their Shopify then set and forget.
                  </Typography>
                </Box>
              </Grid>
              <Grid>
                <Typography sx={styles.creator}>Creators and Brands, Get Started →</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Marquee direction="left" speed={40} gradient={false}>
          <Typography fontWeight={"600"} fontSize={"34px"} sx={styles.marqueeleft}>
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
        <Marquee direction="left" speed={40} gradient={false}>
          <Typography fontWeight={"600"} fontSize={"34px"} sx={styles.marqueebottom}>
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
      </Grid>
    </CustomContainer>
  );
};

export default Gridbox;
