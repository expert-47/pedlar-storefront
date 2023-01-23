import { Box, Grid, Typography, Dialog, IconButton, Slide, SwipeableDrawer } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import Image from "next/image";
import mobileBanner from "../../../public/mobBanner.png";
import desktopBanner from "../../../public/desktopBanner.png";
import largeBanner from "../../../public/largeBanner.png";
import tabBanner from "../../../public/TabletBanner.png";
import { styles } from "./style";
import Creatorpopup from "../../popup-dialog/creatorpopup";
import Brandspopup from "../../popup-dialog/brandspopup";
import { CustomContainer } from "../../landinglayout";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Banner = () => {
  const isMedium = useMediaQuery("(max-width:850px)");
  const isSmall = useMediaQuery("(max-width:767px)");
  const isdektop = useMediaQuery("(max-width:1451px)");
  const popupScreen = useMediaQuery("(min-width:600px)");
  const [openDialog, setOpenDialog] = useState(false);
  const closePopup = () => {
    setSuccessModalShow(true);
    setOpenDialog(false);
  };
  const handleClose = () => {
    setSuccessModalShow(true);
    setOpenDialog(false);
  };
  const [userType, setUserType] = useState(true);
  const onChangeCreator = () => setUserType(true);
  const onChangeBrand = () => setUserType(false);
  const openPopup = (value: string) => {
    if (value === "creator") {
      setUserType(true);
    }
    if (value === "brand") {
      setUserType(false);
    }
    setOpenDialog(true);
  };
  const theme = useTheme();

  const [sucessModalshow, setSuccessModalShow] = useState(true);
  const isSecondModalActive = (value: boolean) => {
    setSuccessModalShow(value);
  };

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
          style={{ position: "relative", zIndex: "9" }}
          marginY={{ xs: theme.spacing(75), sm: theme.spacing(75), md: theme.spacing(75), lg: theme.spacing(75) }}
        >
          {isSmall ? (
            <Image src={mobileBanner} alt="Mobile banner" style={{ width: "100%" }} priority />
          ) : isMedium ? (
            <Image src={tabBanner} alt="tab banner" priority />
          ) : isdektop ? (
            <Image src={desktopBanner} alt="desktop banner" priority placeholder="blur" />
          ) : (
            <Image src={largeBanner} alt="Large banner" priority placeholder="blur" />
          )}
          <Grid sx={styles.bannerText}>
            <Typography
              sx={styles.fashionText}
              fontSize={{ xs: "34px", sm: "42px", md: "38px", lg: "42px", xl: "54px" }}
              fontWeight={"700"}
              lineHeight={"normal"}
              color={"#1C1B1F"}
            >
              We put fashion
            </Typography>
            <Box style={{ display: "flex" }} sx={styles.animateRow}>
              <Typewriter
                options={{
                  strings: ["Creators", "Influencers", "Curators"],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: true,
                  wrapperClassName: "Typewriter__wrapper",
                }}
              />
              <Typography
                fontWeight={"700"}
                color={"#1C1B1F"}
                sx={styles.fashionText}
                lineHeight={"unset"}
                fontSize={{ xs: "34px", sm: "42px", md: "38px", lg: "42px", xl: "54px" }}
              >
                in business
              </Typography>
            </Box>
            <Typography sx={styles.FirstPara} fontSize={{ xs: "18px", md: "20px", lg: "22px" }} fontWeight={600}>
              Simplified creator commerce. Sell directly to your followers through customisable storefronts.
            </Typography>
            <Grid>
              <Button sx={styles.creator} onClick={() => openPopup("creator")}>
                I’m a creator
              </Button>
              <Button sx={styles.brands} onClick={() => openPopup("brand")}>
                I’m a brand
              </Button>
              {popupScreen ? (
                <Dialog
                  open={openDialog}
                  onClose={(handleClose, reason) => {
                    if (reason !== "backdropClick") {
                      onClose(handleClose, reason);
                    }
                  }}
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
                    <Grid
                      container
                      style={{ alignItems: "center", justifyContent: "space-between", paddingBottom: "15px" }}
                    >
                      {userType ? (
                        <Typography fontSize={{ xs: "22px", sm: "22px", md: "36px", lg: "36px" }}>
                          {sucessModalshow ? "Join the waitlist!" : null}
                        </Typography>
                      ) : (
                        <Typography fontSize={{ xs: "22px", sm: "22px", md: "36px", lg: "36px" }}>
                          {sucessModalshow ? "Let’s talk growth" : null}
                        </Typography>
                      )}
                      <IconButton onClick={closePopup}>
                        <CloseIcon style={{ color: "black" }} />
                      </IconButton>
                    </Grid>
                    {sucessModalshow ? (
                      <Box sx={styles.BoxSelector}>
                        <Button
                          style={{
                            textTransform: "none",
                            color: "#49454F",
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
                          <Typography fontSize={{ xs: "13px", sm: "13px", md: "16px", lg: "16px" }}></Typography>
                          I'm a creator
                        </Button>
                        <Button
                          style={{
                            textTransform: "none",
                            color: "#49454F",
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
                    ) : null}
                    {userType ? (
                      <Creatorpopup isSecondModalActive={isSecondModalActive} />
                    ) : (
                      <Brandspopup isSecondModalActive={isSecondModalActive} />
                    )}
                    {sucessModalshow ? (
                      <>
                        <Typography style={{ paddingTop: "10px", color: "rgb(73,69,79)" }}>
                          {"We will communicate with you about the information requested and other Pedlar services."}
                        </Typography>
                        <Typography style={{ color: "rgb(73,69,79)" }}>
                          {" The use of your information is governed by Pedlar’s Privacy Policy."}
                        </Typography>
                      </>
                    ) : null}
                  </Grid>
                </Dialog>
              ) : (
                <SwipeableDrawer
                  ModalProps={{ keepMounted: true }}
                  anchor="bottom"
                  sx={{ height: "150px" }}
                  open={openDialog}
                  onClose={handleClose}
                  PaperProps={{
                    sx: {
                      // Since overflow is visible here and not 'auto' or 'scroll', the scrolling needs to happen in a nested div
                      overflow: "visible",
                      height: `calc(90% - 13px)`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 4,
                      backgroundColor: "#bdbdbd",
                      borderRadius: 3,
                      alignSelf: "center",
                      marginTop: 8,
                    }}
                  />
                  <Box sx={styles.RespBox}>
                    <Grid
                      container
                      style={{ alignItems: "center", justifyContent: "space-between", paddingBottom: "15px" }}
                    >
                      {userType ? (
                        <Typography fontSize={{ xs: "22px", sm: "22px", md: "36px", lg: "36px" }}>
                          {sucessModalshow ? "Join the waitlist!" : null}
                        </Typography>
                      ) : (
                        <Typography fontSize={{ xs: "22px", sm: "22px", md: "36px", lg: "36px" }}>
                          {sucessModalshow ? "Let’s talk growth" : null}
                        </Typography>
                      )}
                      <IconButton onClick={closePopup}>
                        <CloseIcon style={{ color: "black", height: "14px", width: "14px" }} />
                      </IconButton>
                    </Grid>
                    {sucessModalshow ? (
                      <Box sx={styles.BoxSelector}>
                        <Button
                          style={{
                            textTransform: "none",
                            color: "#49454F",
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
                          <Typography fontSize={{ xs: "13px", sm: "13px", md: "16px", lg: "16px" }}></Typography>
                          I'm a creator
                        </Button>
                        <Button
                          style={{
                            textTransform: "none",
                            color: "#49454F",
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
                    ) : null}
                  </Box>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    sx={[
                      styles.RespLoginBox,
                      {
                        overflow: "scroll",
                        "&::-webkit-scrollbar": {
                          display: "none",
                        },
                      },
                    ]}
                  >
                    {userType ? (
                      <Creatorpopup isSecondModalActive={isSecondModalActive} />
                    ) : (
                      <Brandspopup isSecondModalActive={isSecondModalActive} />
                    )}
                    {sucessModalshow ? (
                      <>
                        <Typography style={{ paddingTop: "10px", color: "rgb(73,69,79)" }}>
                          {"We will communicate with you about the information requested and other Pedlar services."}
                        </Typography>
                        <Typography style={{ color: "rgb(73,69,79)" }}>
                          {" The use of your information is governed by Pedlar’s Privacy Policy."}
                        </Typography>
                      </>
                    ) : null}
                  </Grid>
                </SwipeableDrawer>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Banner;
