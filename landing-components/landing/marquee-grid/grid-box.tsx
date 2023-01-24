import { Typography, Grid, Dialog, IconButton, Button, Slide, useMediaQuery, SwipeableDrawer } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { useTheme } from "@mui/material";
import Image from "next/image";
import firstGrid from "../../../public/firstGrid.png";
import secondGrid from "../../../public/secondGrid.png";
import thirdGrid from "../../../public/thirdGrid.png";
import glow from "../../../public/glow.svg";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import Creatorpopup from "../../popup-dialog/creatorpopup";
import Brandspopup from "../../popup-dialog/brandspopup";
import { TransitionProps } from "@mui/material/transitions";
import PedlarImage from "components/pedlarImage";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Gridbox = () => {
  const popupScreen = useMediaQuery("(min-width:600px)");
  const [openDialog, setOpenDialog] = useState(false);
  const openPopup = () => setOpenDialog(true);
  const closePopup = () => {
    setSuccessModalShow(true);
    setOpenDialog(false);
  };
  const handleClose = () => {
    setSuccessModalShow(true);

    setOpenDialog(false);
  };
  const [sucessModalshow, setSuccessModalShow] = useState(true);
  const [userType, setUserType] = useState(true);
  const onChangeCreator = () => setUserType(true);
  const onChangeBrand = () => setUserType(false);
  const isSecondModalActive = (value: boolean) => {
    setSuccessModalShow(value);
  };
  const theme = useTheme();
  return (
    <CustomContainer>
      <Grid
        paddingX={{ xs: theme.spacing(25), sm: theme.spacing(35), md: theme.spacing(30), lg: theme.spacing(35) }}
        style={{ position: "relative" }}
      >
        <Marquee direction="right" speed={1.3} gradient={false} style={{ overflow: "hidden" }} className="marq-left">
          <Typography
            fontWeight={"700"}
            fontSize={{ xs: "24px", sm: "36px" }}
            style={{ wordSpacing: "18px", paddingLeft: "30px" }}
          >
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
            Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
        <Marquee direction="right" speed={45} gradient={false} style={{ overflow: "hidden" }}>
          <Typography fontWeight={"700"} fontSize={{ xs: "24px", sm: "36px" }} sx={styles.marqueetop}>
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
            Pedlar Pedlar
          </Typography>
        </Marquee>

        <Box sx={styles.mainGrid} height={{ xs: "1100px", sm: "1100px", md: "950px", lg: "600px", xl: "600px" }}>
          <Typography
            sx={styles.gridboxText}
            fontSize={{ lg: "54px", md: "54px", sm: "54px", xs: "30px" }}
            fontWeight={"700"}
            paddingX={{ xs: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30), xl: theme.spacing(45) }}
            paddingBottom={{ xs: "55px" }}
          >
            Build personalised storefronts to sell the brands you love directly to your audience
          </Typography>
          <Grid
            gap={5}
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            paddingX={{ xs: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30), xl: theme.spacing(45) }}
          >
            <Grid
              gap={3}
              container
              item
              xs={12}
              sm={12}
              md={12}
              lg={7.3}
              xl={6.5}
              justifyContent={{ sm: "space-around", lg: "space-around" }}
            >
              <Grid item xs={12} sm={8} md={6.5} lg={8.2} xl={8.2}>
                <Image src={firstGrid} alt="First Image" />
              </Grid>
              <Grid
                gap={12}
                item
                xs={12}
                sm={3.4}
                md={5}
                lg={3.57}
                xl={3.6}
                style={{ display: "flex" }}
                flexDirection={{ sm: "column" }}
              >
                <Grid item xs={5.9} sm={12} md={12} lg={12} xl={12}>
                  <Image src={secondGrid} alt="Second Image" />
                </Grid>
                <Grid item xs={5.9} sm={12} md={12} lg={12} xl={12}>
                  <Image src={thirdGrid} alt="Second Image" />
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={4.6} xl={5.4}>
              <Box
                style={{ display: "flex", justifyContent: "space-around" }}
                marginBottom={{ xs: "15px", sm: "15px", md: "20px", lg: "-70px" }}
              >
                <Box marginTop={"5px"} width={"46px"}>
                  <Image src={glow} alt="Glow Star" loading="lazy" />
                </Box>
                <Box paddingLeft={{ xs: "5px", sm: "0px", md: "0px", lg: "2px" }}>
                  <Typography sx={styles.gridinnereText} fontWeight={"600"} fontSize={{ xs: "22px", xl: "22px" }}>
                    More money. Less problems
                  </Typography>
                  <Typography
                    sx={styles.gridinnerPara}
                    fontWeight={"600"}
                    fontSize={{ xs: "18px", lg: "22px", xl: "22px" }}
                  >
                    Track performance overtime. Create value for creators, brands and shoppers.
                  </Typography>
                </Box>
              </Box>
              <Box
                style={{ display: "flex", justifyContent: "space-around" }}
                marginBottom={{ xs: "15px", sm: "15px", md: "20px", lg: "-70px" }}
              >
                <Box marginTop={"5px"} width={"46px"}>
                  <Image src={glow} alt="Glow Star" loading="lazy" />
                </Box>
                <Box paddingLeft={{ xs: "5px", sm: "0px", md: "0px", lg: "2px", xl: "2px" }}>
                  <Typography sx={styles.gridinnereText} fontWeight={"600"} fontSize={{ xs: "22px", xl: "22px" }}>
                    Simple and free
                  </Typography>
                  <Typography
                    sx={styles.gridinnerPara}
                    fontWeight={"600"}
                    fontSize={{ xs: "18px", lg: "22px", xl: "22px" }}
                  >
                    Creators and brands get set up in under two minutes. Start selling instantly!
                  </Typography>
                </Box>
              </Box>
              <Box
                style={{ display: "flex", justifyContent: "space-around" }}
                marginBottom={{ xs: "15px", sm: "15px", md: "20px", lg: "-70px" }}
              >
                <Box marginTop={"5px"} width={"46px"}>
                  <Image src={glow} alt="Glow Star" loading="lazy" />
                </Box>
                <Box paddingLeft={{ xs: "5px", sm: "6px", md: "0px", lg: "8px", xl: "2px" }}>
                  <Typography sx={styles.gridinnereText} fontWeight={"600"} fontSize={{ xs: "22px", xl: "22px" }}>
                    Business as usual
                  </Typography>
                  <Typography
                    sx={styles.gridinnerPara}
                    fontWeight={"600"}
                    fontSize={{ xs: "18px", lg: "22px", xl: "22px" }}
                  >
                    Creators get paid more to do what they love. Brands integrate their Shopify then set and forget.
                  </Typography>
                </Box>
              </Box>
              <Box paddingLeft={{ xs: "20px", sm: "40px", md: "46px", lg: "20px", xl: "25px" }}>
                <Typography
                  onClick={openPopup}
                  sx={styles.creator}
                  fontFamily={"Inter"}
                  fontSize={{ xs: "18px", lg: "22px", xl: "22px" }}
                  fontWeight={"600"}
                >
                  Creators and Brands, Get Started →
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Marquee direction="left" speed={45} gradient={false}>
          <Typography
            fontWeight={"700"}
            fontSize={{ xs: "24px", sm: "36px" }}
            sx={styles.marqueebottom}
            marginTop={{ xs: "-12px", sm: "-18px" }}
          >
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
            Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
        <Marquee direction="right" speed={1.3} gradient={false} className="marq-right">
          <Typography
            fontWeight={"700"}
            fontSize={{ xs: "24px", sm: "36px" }}
            style={{ wordSpacing: "18px", paddingLeft: "30px" }}
          >
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
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
              <Grid container style={{ alignItems: "center", justifyContent: "space-between", paddingBottom: "15px" }}>
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
              <Grid container style={{ alignItems: "center", justifyContent: "space-between", paddingBottom: "15px" }}>
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
                  <Typography
                    style={{ paddingTop: "10px", color: "rgb(73,69,79)" }}
                    textAlign={{ xs: "left", lg: "left" }}
                  >
                    {"We will communicate with you about the information requested and other Pedlar services."}
                  </Typography>
                  <Typography style={{ color: "rgb(73,69,79)" }} textAlign={{ xs: "left", lg: "left" }}>
                    {" The use of your information is governed by Pedlar’s Privacy Policy."}
                  </Typography>
                </>
              ) : null}
            </Grid>
          </SwipeableDrawer>
        )}
      </Grid>
    </CustomContainer>
  );
};

export default Gridbox;
