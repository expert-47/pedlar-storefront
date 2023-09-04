//package imports
import React, { FC, Fragment, useState } from "react";
import { Box, Button, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
// componets imports
import { NextImage } from "components/pedlarImage";
import { CustomContainer } from "../../landinglayout";
import BottomSheet from "landing-components/BottomSheet";
import LoginDialog from "landing-components/BottomSheet/LoginDialog";
//assets imports
import rightArrow from "../../../public/right-arrow.svg";
//style
import { styles } from "./style";

const EarlyAcess: FC = (): JSX.Element => {
  const theme = useTheme();
  //states
  const [userType, setUserType] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [sucessModalshow, setSuccessModalShow] = useState(true);
  //media quries
  const isTab = useMediaQuery("(max-width:767px)");
  const isMatch = useMediaQuery("(max-width:800px)");
  const popupScreen = useMediaQuery("(min-width:600px)");
  //methods
  const closePopup = () => {
    setSuccessModalShow(true);
    setOpenDialog(false);
  };
  const handleClose = () => {
    setSuccessModalShow(true);
    setOpenDialog(false);
  };
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
      <Box paddingX={{ xs: theme.spacing(20), sm: theme.spacing(30), md: theme.spacing(30), lg: theme.spacing(35) }}>
        <Box sx={styles.Box}>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{ alignItems: "center" }}
            paddingX={{ xs: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(50) }}
            paddingY={{ xs: theme.spacing(40), md: theme.spacing(40), lg: theme.spacing(55) }}
          >
            <Grid item xs={12} sm={12} md={4} lg={5.8}>
              <Typography fontSize={{ md: "54px", xs: "48px" }} fontWeight={"700"} lineHeight={"normal"}>
                Get early access
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={2}
              lg={1}
              style={{ display: isMatch ? "none" : "block", textAlign: "center" }}
            >
              <Box style={{ height: 47, width: 50 }}>
                <NextImage src={rightArrow} alt="pedlar righ arrow" />
              </Box>
            </Grid>

            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={5}
              style={{
                textAlign: isMatch ? "left" : "right",
                marginTop: isMatch ? "30px" : "0px",
                justifyContent: isMatch ? "flex-start" : "flex-end",
              }}
            >
              <Box style={{ display: isTab ? "unset" : "flex" }}>
                <Button sx={styles.CreatorButton} onClick={() => openPopup("creator")}>
                  <Typography textTransform="none" fontSize={"22px"} fontWeight={"600"} lineHeight={"normal"}>
                    I&apos;m a creator
                  </Typography>
                </Button>
                <Button sx={styles.BrandsButton} onClick={() => openPopup("brand")}>
                  <Typography textTransform="none" fontSize={"22px"} fontWeight={"600"} lineHeight={"normal"}>
                    I&apos;m a brand
                  </Typography>
                </Button>
              </Box>

              {openDialog ? (
                popupScreen ? (
                  <LoginDialog
                    userType
                    closePopup={closePopup}
                    openDialog={openDialog}
                    handleClose={handleClose}
                    setOpenDialog={setOpenDialog}
                    sucessModalshow={sucessModalshow}
                    isSecondModalActive={isSecondModalActive}
                  />
                ) : (
                  <BottomSheet
                    userType={userType}
                    closePopup={closePopup}
                    openDialog={openDialog}
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
          </Grid>
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default EarlyAcess;
