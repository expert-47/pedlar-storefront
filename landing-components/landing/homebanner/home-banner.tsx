// package imports
import Typewriter from "typewriter-effect";
import React, { FC, Fragment, useState } from "react";
import { useTheme, Button, Box, Grid, Typography, useMediaQuery } from "@mui/material";

import { NextImage } from "components/pedlarImage";
import { CustomContainer } from "../../landinglayout";
import BottomSheet from "landing-components/BottomSheet";
import LoginDialog from "landing-components/BottomSheet/LoginDialog";

import largeDesktopBanner from "/public/large desktop.png";
import desktopScreenBanner from "/public/Desktop.png";
import isTablet843 from "/public/tablet(843px wide).png";
import mobileScreenBanner from "/public/Mobile.jpg";

import { styles } from "./style";

const Banner: FC = (): JSX.Element => {
  const theme = useTheme();

  const popupScreen = useMediaQuery("(min-width:600px)");

  const isLargeDesktop = useMediaQuery("(min-width:1782px)");
  const isDesktop = useMediaQuery("(min-width:1024px) and (max-width:1781px)");
  const isIpad843 = useMediaQuery("(min-width:601px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:600px)");

  const [sucessModalshow, setSuccessModalShow] = useState(true);
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
          sx={{ position: "relative", zIndex: "9" }}
          marginY={{ xs: theme.spacing(75), sm: theme.spacing(75), md: theme.spacing(75), lg: theme.spacing(75) }}
        >
          <NextImage
            fill={false}
            placeholder="empty"
            style={{ width: "100%", height: "100%" }}
            quality={100}
            src={
              isLargeDesktop
                ? largeDesktopBanner
                : isDesktop
                ? desktopScreenBanner
                : isIpad843
                ? isTablet843
                : isMobile
                ? mobileScreenBanner
                : largeDesktopBanner
            }
            alt="desktop banner"
            priority
          />

          <Box sx={styles.bannerText}>
            <Typography
              sx={styles.fashionText}
              color={"#1C1B1F"}
              fontWeight={"700"}
              lineHeight={"normal"}
              fontSize={{ xs: "34px", sm: "42px", md: "40px", lg: "42px", xl: "54px" }}
            >
              We put fashion
            </Typography>
            <Box sx={styles.animateRow}>
              <Typewriter
                options={{
                  strings: ["Creators ", "Influencers ", "Curators "],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: true,
                  wrapperClassName: "Typewriter__wrapper",
                }}
              />

              <Typography
                ml={1}
                color={"#1C1B1F"}
                fontWeight={"700"}
                lineHeight={"unset"}
                sx={styles.fashionText}
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
                {"I’m a creator"}
              </Button>
              <Button sx={styles.brands} onClick={() => openPopup("brand")}>
                {"I’m a brand"}
              </Button>
              {openDialog ? (
                popupScreen ? (
                  <LoginDialog
                    userType={userType}
                    openDialog={openDialog}
                    closePopup={closePopup}
                    handleClose={handleClose}
                    setOpenDialog={setOpenDialog}
                    sucessModalshow={sucessModalshow}
                    isSecondModalActive={isSecondModalActive}
                  />
                ) : (
                  <BottomSheet
                    userType={userType}
                    openDialog={openDialog}
                    closePopup={closePopup}
                    handleClose={handleClose}
                    setOpenDialog={setOpenDialog}
                    sucessModalshow={sucessModalshow}
                    isSecondModalActive={isSecondModalActive}
                  />
                )
              ) : (
                <Fragment />
              )}
            </Grid>
          </Box>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Banner;
