import React, { FC, Fragment, useState } from "react";
import { Typography, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
// components
import { CustomGrid } from "components/layout";
import BottomSheet from "landing-components/BottomSheet";
import LoginDialog from "landing-components/BottomSheet/LoginDialog";
// styles
import styles from "styles/home";

const Bar: FC = (): JSX.Element => {
  const theme = useTheme();
  const popupScreen = useMediaQuery("(min-width:600px)");

  const [openDialog, setOpenDialog] = useState(false);
  const [sucessModalshow, setSuccessModalShow] = useState(true);

  const openPopup = () => setOpenDialog(true);

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
          xs={11.4}
          sm={11.9}
          md={11.7}
          lg={11.8}
          xl={12}
          display={"flex"}
          alignItems={"center"}
          height={{ xs: "unset", lg: "104px" }}
          paddingX={{ xs: theme.spacing(20), md: theme.spacing(10), lg: theme.spacing(20) }}
          paddingY={{ xs: theme.spacing(40), md: theme.spacing(10), lg: theme.spacing(0) }}
          style={{ backgroundColor: "black" }}
        >
          <Grid item xs={12} sm={8} md={8.8} lg={8.8}>
            <Typography
              sx={styles.bartext}
              fontWeight={"bold"}
              fontSize={{ lg: "24px", md: "24px", sm: "20px", xs: "20px" }}
            >
              Love Fashion? Have your own style? Share it with your community.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3.2} lg={3.2} sx={{ marginTop: "10px" }}>
            <Button sx={styles.btn} onClick={openPopup}>
              <Typography fontSize={"16px"} fontWeight={"600"}>
                Sign up for free
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </CustomGrid>
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
            userType
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
    </>
  );
};

export default Bar;
