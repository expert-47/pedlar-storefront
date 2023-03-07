import React, { useState } from "react";
import styles from "styles/home";
import { Typography, Button, Grid, useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { CustomContainer } from "components/layout";
import { CustomGrid } from "components/layout";
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
      <CustomGrid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Grid
          container
          item
          xs={11}
          sm={11.9}
          md={11.7}
          lg={11.8}
          xl={12}
          display={"flex"}
          alignItems={"center"}
          // justifyContent={{ xs: "flex-end", sm: "flex-start" }}
          // paddingLeft={{ xs: "20px", sm: "10px" }}
          height={{ xs: "unset", lg: "104px" }}
          paddingX={{ xs: theme.spacing(20), md: theme.spacing(10), lg: theme.spacing(20) }}
          paddingY={{ xs: theme.spacing(40), md: theme.spacing(10), lg: theme.spacing(0) }}
          style={{ backgroundColor: "black" }}
        >
          <Grid item xs={12} sm={8} md={9.7} lg={9.5}>
            <Typography
              sx={styles.bartext}
              fontWeight={"bold"}
              fontSize={{ lg: "24px", md: "24px", sm: "20px", xs: "20px" }}
            >
              Love Fashion? Have your own style? Share it with your community.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={2.3} lg={2.5} sx={{ paddingLeft: { xs: "25%", sm: "90px", lg: "40px" } }}>
            <Button sx={styles.btn} onClick={openPopup}>
              <Typography fontSize={"16px"} fontWeight={"600"}>
                Sign up for free
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </CustomGrid>
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
