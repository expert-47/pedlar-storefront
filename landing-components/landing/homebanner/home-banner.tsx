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
  const isMedium = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const isdektop = useMediaQuery("(min-width:1024px)");
  const popupScreen = useMediaQuery("(min-width:600px)");
  const [openDialog, setOpenDialog] = useState(false);
  const [loadImage, setloadimage] = useState(false);

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
          sx={{ position: "relative", zIndex: "9", height: loadImage === false ? { lg: "670px" } : "" }}
          marginY={{ xs: theme.spacing(75), sm: theme.spacing(75), md: theme.spacing(75), lg: theme.spacing(75) }}
        >
          {isdektop ? (
            <PedlarImage
              onLoad={() => {
                setloadimage(true);
              }}
              layout="intrinsic"
              src={desktopBanner}
              alt="desktop banner"
              priority
            />
          ) : isSmall ? (
            <PedlarImage
              onLoad={() => {
                setloadimage(true);
              }}
              layout="intrinsic"
              src={mobileBanner}
              alt="Mobile banner"
              priority
              style={{ width: "100%" }}
            />
          ) : isMedium ? (
            <PedlarImage
              onLoad={() => {
                setloadimage(true);
              }}
              layout="intrinsic"
              src={mediumBanner}
              alt="tab banner"
              priority
            />
          ) : (
            <PedlarImage
              onLoad={() => {
                setloadimage(true);
              }}
              layout="intrinsic"
              src={largeBanner}
              alt="Large banner"
              priority
            />
          )}

          {loadImage ? (
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
                  fontWeight={"700"}
                  color={"#1C1B1F"}
                  sx={styles.fashionText}
                  lineHeight={"unset"}
                  ml={1}
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
          ) : (
            ""
          )}
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Banner;
