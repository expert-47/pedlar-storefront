import React, { useState } from "react";
import styles from "styles/home";
import { Typography, Button, Grid, useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { CustomContainer } from "components/layout";
import CloseIcon from "@mui/icons-material/Close";
import BottomSheet from "landing-components/BottomSheet";
import LoginDialog from "landing-components/BottomSheet/LoginDialog";

const Bar = () => {
  const theme = useTheme();
  const popupScreen = useMediaQuery("(min-width:600px)");
  const [userType, setUserType] = useState(true);
  const [stickybar, setStickyBar] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [sucessModalshow, setSuccessModalShow] = useState(true);

  const openPopup = () => setOpenDialog(true);

  const onCloseBar = () => {
    setStickyBar(false);
  };
  const closePopup = () => {
    setSuccessModalShow(true);
    setOpenDialog(false);
  };
  const handleClose = () => {
    setSuccessModalShow(true);

    setOpenDialog(false);
  };
  const isSecondModalActive = (value: boolean) => {
    setSuccessModalShow(value);
  };
  return (
    <>
      <CustomContainer
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Grid
          container
          item
          xs={11.6}
          md={11}
          lg={10}
          xl={9.25}
          alignItems={"center"}
          style={{ width: "1116px", backgroundColor: "black" }}
          justifyContent={{ xs: "flex-end", sm: "flex-start", lg: "flex-end" }}
          height={{ xs: "unset", lg: "104px" }}
          paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(30) }}
          paddingY={{ xs: theme.spacing(5), md: theme.spacing(10), lg: theme.spacing(10) }}
        >
          <Grid item xs={12} sm={12} md={12} lg={10}>
            <Typography
              sx={styles.bartext}
              fontWeight={"bold"}
              fontSize={{ lg: "24px", md: "24px", sm: "20px", xs: "20px" }}
            >
              Love Fashion? Have your own style? Share it with your community.
            </Typography>
          </Grid>
          <Box>
            <Button sx={styles.btn} onClick={openPopup}>
              <Typography fontSize={"16px"} fontWeight={"600"}>
                Sign up for free
              </Typography>
            </Button>
          </Box>
        </Grid>
      </CustomContainer>
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
    </>
  );
};

export default Bar;
