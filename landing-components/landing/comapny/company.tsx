//package imports
import React, { FC, Fragment, useState } from "react";
import { Grid, Typography, Button, useMediaQuery, useTheme } from "@mui/material";

// components imports
import { CustomContainer } from "../../landinglayout";
import BottomSheet from "landing-components/BottomSheet";
import LoginDialog from "landing-components/BottomSheet/LoginDialog";

//style import
import { styles } from "./style";

const Company: FC = (): JSX.Element => {
  const theme = useTheme();
  const popupScreen = useMediaQuery("(min-width:600px)");

  //states
  const [userType, setUserType] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [sucessModalshow, setSuccessModalShow] = useState(true);

  //Methods
  const openPopup = (value: string) => {
    if (value == "creator") {
      setUserType(true);
    }
    setOpenDialog(true);
  };

  const handleClose = () => {
    setSuccessModalShow(true);
    setOpenDialog(false);
  };
  const closePopup = () => {
    setSuccessModalShow(true);
    setOpenDialog(false);
  };
  const isSecondModalActive = (value: boolean) => {
    setSuccessModalShow(value);
  };
  return (
    <CustomContainer>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ display: "flex", flexDirection: "column" }}
        paddingX={{ xs: theme.spacing(20), sm: theme.spacing(30), md: theme.spacing(30), lg: theme.spacing(50) }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          paddingX={{ xs: theme.spacing(0), sm: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30) }}
        >
          <Typography
            fontSize={{ xs: "48px", sm: "54px" }}
            fontWeight={"700"}
            paddingBottom={"40px"}
            sx={styles.heading}
          >
            You&apos;re in good company
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={9}
          xl={10}
          paddingX={{ xs: theme.spacing(0), sm: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30) }}
        >
          <Typography fontSize={{ xs: "30px", sm: "40px" }} sx={styles.Typography}>
            Join hundreds of creators and influencers selling their favourite Australian brands directly to their
            audience.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          lg={2.5}
          paddingX={{ xs: theme.spacing(0), md: theme.spacing(20), lg: theme.spacing(20) }}
        >
          <Button sx={styles.CreatorButton} onClick={() => openPopup("creator")}>
            <Typography textTransform="none" fontSize={"22px"} lineHeight={"normal"}>
              I&apos;m a creator
            </Typography>
          </Button>
          {openDialog ? (
            popupScreen ? (
              <LoginDialog
                userType={userType}
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
    </CustomContainer>
  );
};

export default Company;
