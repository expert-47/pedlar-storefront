import { Box, Button, Dialog, Grid, IconButton, Slide, SwipeableDrawer, Typography } from "@mui/material";
import React, { useState } from "react";
import { styles } from "./style";
import { CustomContainer } from "../../landinglayout";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Creatorpopup from "../../popup-dialog/creatorpopup";
import Brandspopup from "../../popup-dialog/brandspopup";
import Image from "next/image";
import rightArrow from "../../../public/right-arrow.svg";
import BottomSheet from "landing-components/BottomSheet";
import LoginDialog from "landing-components/BottomSheet/LoginDialog";
import PedlarImage from "components/pedlarImage";

const EarlyAcess = () => {
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
  const isMatch = useMediaQuery("(max-width:800px)");
  const isTab = useMediaQuery("(max-width:767px)");
  const [sucessModalshow, setSuccessModalShow] = useState(true);
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
                <PedlarImage src={rightArrow} style={{ height: "68px", width: "68px" }} />
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
                justifyContent: isMatch ? "center" : "flex-end",
              }}
            >
              <Box style={{ display: isTab ? "unset" : "flex" }}>
                <Button sx={styles.CreatorButton} onClick={() => openPopup("creator")}>
                  <Typography textTransform="none" fontSize={"22px"} fontWeight={"600"} lineHeight={"normal"}>
                    I’m a creator
                  </Typography>
                </Button>
                <Button sx={styles.BrandsButton} onClick={() => openPopup("brand")}>
                  <Typography textTransform="none" fontSize={"22px"} fontWeight={"600"} lineHeight={"normal"}>
                    I’m a brand
                  </Typography>
                </Button>
              </Box>
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
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default EarlyAcess;
