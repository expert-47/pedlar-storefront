import { Box, Grid, Typography, Dialog, Tabs, Tab, IconButton, responsiveFontSizes } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import Image from 'next/image'
import desktopBanner from '../../../public/home-banner1.png';
import tabBanner from '../../../public/bannerMd.png';
import mobileBanner from '../../../public/bannerMob.png';
// import Typed from "react-typed";
import { styles } from "./style";
import Creatorpopup from "../../popup-dialog/creatorpopup";
import Brandspopup from "../../popup-dialog/brandspopup";
import { CustomContainer } from "../../landinglayout";

const Banner = () => {
  const isMatch = useMediaQuery("(max-width:1145px)");
  const isMedium = useMediaQuery("(max-width:850px)");
  const isSmall = useMediaQuery("(max-width:767px)");
  const [openDialog, setOpenDialog] = useState(false);
  const openPopup = () => setOpenDialog(true);
  const closePopup = () => setOpenDialog(false);
  const handleClose = () => setOpenDialog(false);
  const [userType, setUserType] = useState(true);
  const onChangeCreator = () => setUserType(true);
  const onChangeBrand = () => setUserType(false);
  const theme = useTheme();
  return (
    <CustomContainer>
      <Box
        paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
        paddingY={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ position: "relative" }}
        
          marginY={{ xs: theme.spacing(96), sm: theme.spacing(96), md: theme.spacing(95), lg: theme.spacing(75) }}
        >
          {isSmall ? (
            <Image
              src={mobileBanner}
              alt="Picture of the author"
              style={{width:'100%'}}
            />
          ) : 
          isMedium ? (
            <Image
              src={tabBanner}
              alt="Picture of the author"
            />
          )
          :
          (
            <Image
              src={desktopBanner}
              alt="Picture of the author"
            />
          )}
          <Grid sx={styles.bannerText}>
            <Typography fontSize={{xs:'34px', sm:'42px',md:'40px',lg:'48px',xl:'48px'}} fontWeight={'700'} lineHeight={'unset'} color={'#1C1B1F'}>We put fashion</Typography>
            <Box style={{ display: "flex" }} sx={styles.animateRow}>
              <Typewriter
                options={{
                  strings: ["Creatore", "Influencers", "Curators"],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: true,
                  wrapperClassName: "Typewriter__wrapper",
                }}
              />
              <Typography
                fontWeight={'700'} color={'#1C1B1F'} lineHeight={'unset'}
                fontSize={{xs:'34px', sm:'42px',md:'40px',lg:'48px',xl:'48px'}}
              >
                in business
              </Typography>
            </Box>
            <Typography sx={styles.FirstPara}
             fontSize={{xs:'18px',md:'22px'}}
            >
              Simplified creator commerce. Sell directly to your followers through customisable storefronts.
            </Typography>
            <Grid>
              <Button sx={styles.creator} onClick={openPopup}>
                I’m a creator
              </Button>
              <Button sx={styles.brands} onClick={openPopup}>
                I’m a brand
              </Button>
              <Dialog open={openDialog} onClose={handleClose}>
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={[
                    styles.LoginBox,
                    {
                      overflow: "scroll",
                      "&::-webkit-scrollbar": {
                        display: "none",
                      },
                    },
                  ]}
                >
                  <Grid container style={{ alignItems: "center", justifyContent: "space-between" }}>
                    {userType ? (
                      <Typography style={{ fontSize: "36px", paddingBottom: "15px" }}>Join the waitlist!</Typography>
                    ) : (
                      <Typography style={{ fontSize: "36px", paddingBottom: "15px" }}>{"Let’s talk growth"}</Typography>
                    )}
                    <IconButton onClick={closePopup}>
                      <CloseIcon style={{ color: "black" }} />
                    </IconButton>
                  </Grid>
                  <Tabs sx={styles.TabSelector}>
                    <Button>
                      <Tab
                        style={{
                          textTransform: "none",
                          color: "black",
                          fontSize: "16px",
                          fontWeight: "700",
                          borderRadius: "15px",
                        }}
                        sx={{
                          backgroundColor: userType == true ? "#a696cc" : "transparent",
                        }}
                        label="I'm a Creater"
                        onClick={onChangeCreator}
                      />
                    </Button>
                    <Button>
                      <Tab
                        style={{
                          textTransform: "none",
                          color: "black",
                          fontSize: "16px",
                          fontWeight: "700",
                          borderRadius: "15px",
                        }}
                        sx={{
                          backgroundColor: userType == false ? "#a696cc" : "transparent",
                        }}
                        label="I'm a Brand"
                        onClick={onChangeBrand}
                      />
                    </Button>
                  </Tabs>
                  {userType ? <Creatorpopup /> : <Brandspopup />}
                  <Button style={{ backgroundColor: "black", borderRadius: "20px" }}>Get in Touch</Button>
                  <Typography style={{ paddingTop: "10px", textAlign: "center" }}>
                    {
                      "We will communicate with you about the information requested and other Pedlar services. The use of your information is governed by Pedlar’s Privacy Policy."
                    }
                  </Typography>
                </Grid>
              </Dialog>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Banner;
