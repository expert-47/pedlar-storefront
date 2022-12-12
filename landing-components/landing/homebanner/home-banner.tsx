import { Box, Grid, Typography, Dialog, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import Image from "next/image";
import mobileBanner from "../../../public/mobBanner.png";
import desktopBanner from "../../../public/DesktopBanner.png";
import largeBanner from "../../../public/largeBanner.png";
import tabBanner from "../../../public/TabletBanner.png";
import { styles } from "./style";
import Creatorpopup from "../../popup-dialog/creatorpopup";
import Brandspopup from "../../popup-dialog/brandspopup";
import { CustomContainer } from "../../landinglayout";

const Banner = () => {
  const isMedium = useMediaQuery("(max-width:850px)");
  const isSmall = useMediaQuery("(max-width:767px)");
  const isdektop = useMediaQuery("(max-width:1400px)");
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
      sx={styles.MainBox}
        paddingX={{ xs: theme.spacing(20), sm: theme.spacing(30), md: theme.spacing(30), lg: theme.spacing(35) }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{ position: "relative" }}
          marginY={{ xs: theme.spacing(96), sm: theme.spacing(96), md: theme.spacing(95), lg: theme.spacing(75) }}
        >
          {isSmall ? (
            <Image src={mobileBanner} alt="Mobile banner" style={{ width: "100%", borderRadius: "27px" }} priority />
          ) : isMedium ? (
            <Image src={tabBanner} alt="tab banner" priority />
          ) : isdektop ? (
            <Image src={desktopBanner} alt="desktop banner" priority placeholder="blur" />
          ) : (
            <Image src={largeBanner} alt="Large banner" priority placeholder="blur" />
          )}
          <Grid sx={styles.bannerText}>
            <Typography
              fontSize={{ xs: "34px", sm: "42px", md: "40px", lg: "48px", xl: "48px" }}
              fontWeight={"700"}
              lineHeight={"unset"}
              color={"#1C1B1F"}
            >
              We put fashion
            </Typography>
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
                fontWeight={"700"}
                color={"#1C1B1F"}
                lineHeight={"unset"}
                fontSize={{ xs: "34px", sm: "42px", md: "40px", lg: "48px", xl: "48px" }}
              >
                in business
              </Typography>
            </Box>
            <Typography sx={styles.FirstPara} fontSize={{ xs: "18px", md: "22px" }}>
              Simplified creator commerce. Sell directly to your followers through customisable storefronts.
            </Typography>
            <Grid>
              <Button sx={styles.creator} onClick={openPopup}>
                I’m a creator
              </Button>
              <Button sx={styles.brands} onClick={openPopup}>
                I’m a brand
              </Button>
              <Dialog
                open={openDialog}
                onClose={handleClose}
                sx={{
                  ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
                    borderRadius: "16px",
                  },
                }}
              >
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
                  <Box sx={styles.BoxSelector}>
                    <Button
                      style={{
                        textTransform: "none",
                        color: "#49454F",
                        fontSize: "16px",
                        borderRadius: "5px",
                        padding: "2px 7px",
                      }}
                      sx={{
                        backgroundColor: userType == true ? "#d0bcff" : "transparent",
                        fontWeight: userType == true ? "700" : "400",
                        "&:hover": {
                          backgroundColor: userType == true ? "#d0bcff" : "transparent",
                        },
                      }}
                      onClick={onChangeCreator}
                    >
                      I'm a creater
                    </Button>
                    <Button
                      style={{
                        textTransform: "none",
                        color: "#49454F",
                        fontSize: "16px",
                        borderRadius: "5px",
                        padding: "2px 7px",
                      }}
                      sx={{
                        backgroundColor: userType == false ? "#d0bcff" : "transparent",
                        fontWeight: userType == false ? "700" : "400",

                        "&:hover": {
                          backgroundColor: userType == false ? "#d0bcff" : "transparent",
                        },
                      }}
                      onClick={onChangeBrand}
                    >
                      I'm a brand
                    </Button>
                  </Box>
                  {userType ? <Creatorpopup /> : <Brandspopup />}
                  <Button style={{ backgroundColor: "black", borderRadius: "30px", padding: "10px" }}>
                    <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"}>
                      Get in touch
                    </Typography>
                  </Button>
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
