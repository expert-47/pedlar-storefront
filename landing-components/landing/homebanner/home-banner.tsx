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
import BottomSheet from "landing-components/BottomSheet";
import LoginDialog from "landing-components/BottomSheet/LoginDialog";

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
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Banner;
