import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import mobileBanner from "../../../public/mobBanner.png";
import desktopBanner from "../../../public/desktopBanner.png";
import largeBanner from "../../../public/largeBanner.png";
import mediumBanner from "../../../public/TabletBanner.png";
import { styles } from "./style";
import { CustomContainer } from "../../landinglayout";
import BottomSheet from "landing-components/BottomSheet";
import LoginDialog from "landing-components/BottomSheet/LoginDialog";
import PedlarImage from "components/pedlarImage";

const Banner = () => {
  const isSmall = useMediaQuery("(max-width:767px)");
  const isMedium = useMediaQuery("(max-width:850px)");
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
            <PedlarImage layout="intrinsic" src={mobileBanner} alt="Mobile banner" priority style={{ width: "100%" }} />
          ) : isMedium ? (
            <PedlarImage layout="intrinsic" src={mediumBanner} alt="tab banner" priority />
          ) : isdektop ? (
            <PedlarImage layout="intrinsic" src={desktopBanner} alt="desktop banner" priority />
          ) : (
            <PedlarImage layout="intrinsic" src={largeBanner} alt="Large banner" priority />
          )}
          <Box sx={styles.bannerText}>
            <Typography
              sx={styles.fashionText}
              fontSize={{ xs: "34px", sm: "42px", md: "40px", lg: "42px", xl: "54px" }}
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
                fontSize={{ xs: "34px", sm: "42px", md: "40px", lg: "42px", xl: "54px" }}
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
                <LoginDialog
                  handleClose={handleClose}
                  openDialog={openDialog}
                  setOpenDialog={setOpenDialog}
                  closePopup={closePopup}
                  isSecondModalActive={isSecondModalActive}
                  sucessModalshow={sucessModalshow}
                  userType={userType}
                />
              ) : (
                <BottomSheet
                  handleClose={handleClose}
                  openDialog={openDialog}
                  setOpenDialog={setOpenDialog}
                  closePopup={closePopup}
                  isSecondModalActive={isSecondModalActive}
                  sucessModalshow={sucessModalshow}
                  userType={userType}
                />
              )}
            </Grid>
          </Box>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Banner;
