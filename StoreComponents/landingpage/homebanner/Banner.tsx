import { Box, Grid, Typography, Dialog, Tabs, Tab, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { styles } from "./style";
import Typed from "react-typed";
import CloseIcon from "@mui/icons-material/Close";
import { CustomContainer } from "StoreComponents/Landinglayout";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import Creatorpopup from "StoreComponents/popupdialog/creatorpopup";
import Brandspopup from "StoreComponents/popupdialog/brandspopup";
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
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ position: "relative" }}>
          {isSmall ? (
            <img src="/bannerMob.png" alt="home banner" style={{ width: "100%", paddingTop: "100px" }} />
          ) : (
            <img src="/home-banner1.png" alt="home banner" style={{ width: "100%", paddingTop: "100px" }} />
          )}
          <Grid sx={styles.bannerText}>
            <Typography sx={styles.FirstList}>We put fashion</Typography>
            <Box style={{ display: "flex" }} sx={styles.animateRow}>
              <Typed
                strings={["Creatore", "Influencers", "Curators"]}
                loop
                typeSpeed={150}
                backSpeed={100}
                style={{
                  color: "#1C1B1F",
                  fontFamily: "Inter",
                  fontWeight: "900",
                  fontSize: isSmall ? "42px" : isMedium ? "28px" : isMatch ? "39px" : "48px",
                }}
              />
              <Typography
                style={{
                  color: "#1C1B1F",
                  fontFamily: "Inter",
                  fontWeight: "900",
                  fontSize: isSmall ? "42px" : isMedium ? "28px" : isMatch ? "39px" : "48px",
                }}
              >
                in business
              </Typography>
            </Box>
            <Typography sx={styles.FirstPara}>
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
                <Box
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
                  <Typography>
                    {
                      "We will communicate with you about the information requested and other Pedlar services. The use of your information is governed by Pedlar’s Privacy Policy."
                    }
                  </Typography>
                </Box>
              </Dialog>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Banner;
