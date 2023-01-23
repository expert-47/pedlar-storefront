import React, { useState } from "react";
import { Grid, Typography, Button, Dialog, IconButton, Box, Slide, useMediaQuery } from "@mui/material";
import { styles } from "./style";
import { CustomContainer } from "../../landinglayout";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material";
import Creatorpopup from "../../popup-dialog/creatorpopup";
import Brandspopup from "../../popup-dialog/brandspopup";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Company = () => {
  const popupScreen = useMediaQuery("(min-width:600px)");
  const [openDialog, setOpenDialog] = useState(false);
  const [userType, setUserType] = useState(true);
  // const openPopup = () => setOpenDialog(true);
  const openPopup = (value: string) => {
    if (value == "creator") {
      setUserType(true);
    }
    setOpenDialog(true);
  };
  const onChangeCreator = () => setUserType(true);
  const onChangeBrand = () => setUserType(false);
  const handleClose = () => {
    setSuccessModalShow(true);
    setOpenDialog(false);
  };
  const closePopup = () => {
    setSuccessModalShow(true);
    setOpenDialog(false);
  };
  const theme = useTheme();
  const [sucessModalshow, setSuccessModalShow] = useState(true);
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
            You're in good company
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={10}
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
          paddingX={{ xs: theme.spacing(0), md: theme.spacing(20), lg: theme.spacing(30) }}
        >
          <Button sx={styles.CreatorButton} onClick={() => openPopup("creator")}>
            <Typography textTransform="none" fontSize={"22px"} lineHeight={"normal"}>
              I’m a creator
            </Typography>
          </Button>
          {popupScreen ? (
            <Dialog
              open={openDialog}
              onClose={(handleClose, reason) => {
                if (reason !== "backdropClick") {
                  onClose(handleClose, reason);
                }
              }}
              sx={{
                ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
                  borderRadius: "16px",
                },
              }}
            >
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={[
                  styles.LoginBox,
                  {
                    overflow: "scroll",
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                  },
                ]}
              >
                <Grid
                  container
                  style={{ alignItems: "center", justifyContent: "space-between", paddingBottom: "15px" }}
                >
                  {userType ? (
                    <Typography fontSize={{ xs: "22px", sm: "22px", md: "36px", lg: "36px" }}>
                      {sucessModalshow ? "Join the waitlist!" : null}
                    </Typography>
                  ) : (
                    <Typography fontSize={{ xs: "22px", sm: "22px", md: "36px", lg: "36px" }}>
                      {sucessModalshow ? "Let’s talk growth" : null}
                    </Typography>
                  )}
                  <IconButton onClick={closePopup}>
                    <CloseIcon style={{ color: "black" }} />
                  </IconButton>
                </Grid>
                {sucessModalshow ? (
                  <Box sx={styles.BoxSelector}>
                    <Button
                      style={{
                        textTransform: "none",
                        color: "#49454F",
                        borderRadius: "5px",
                        padding: "2px 7px",
                      }}
                      sx={{
                        backgroundColor: userType == true ? "#d0bcff" : "transparent",
                        fontWeight: userType == true ? "700" : "400",
                        "&:hover": {
                          backgroundColor: userType == true ? "#d0bcff" : "transparent",
                        },
                      }}
                      onClick={onChangeCreator}
                    >
                      <Typography fontSize={{ xs: "13px", sm: "13px", md: "16px", lg: "16px" }}></Typography>
                      I'm a creator
                    </Button>
                    <Button
                      style={{
                        textTransform: "none",
                        color: "#49454F",
                        borderRadius: "5px",
                        padding: "2px 7px",
                      }}
                      sx={{
                        backgroundColor: userType == false ? "#d0bcff" : "transparent",
                        fontWeight: userType == false ? "700" : "400",

                        "&:hover": {
                          backgroundColor: userType == false ? "#d0bcff" : "transparent",
                        },
                      }}
                      onClick={onChangeBrand}
                    >
                      I'm a brand
                    </Button>
                  </Box>
                ) : null}
                {userType ? (
                  <Creatorpopup isSecondModalActive={isSecondModalActive} />
                ) : (
                  <Brandspopup isSecondModalActive={isSecondModalActive} />
                )}
                {sucessModalshow ? (
                  <Typography style={{ paddingTop: "10px", textAlign: "center", color: "rgb(73,69,79)" }}>
                    {
                      "We will communicate with you about the information requested and other Pedlar services. The use of your information is governed by Pedlar’s Privacy Policy."
                    }
                  </Typography>
                ) : null}
              </Grid>
            </Dialog>
          ) : (
            <Dialog fullScreen open={openDialog} onClose={handleClose} TransitionComponent={Transition}>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={[
                  styles.RespLoginBox,
                  {
                    overflow: "scroll",
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                  },
                ]}
              >
                <Grid
                  container
                  style={{ alignItems: "center", justifyContent: "space-between", paddingBottom: "15px" }}
                >
                  {userType ? (
                    <Typography fontSize={{ xs: "22px", sm: "22px", md: "36px", lg: "36px" }}>
                      {sucessModalshow ? "Join the waitlist!" : null}
                    </Typography>
                  ) : (
                    <Typography fontSize={{ xs: "22px", sm: "22px", md: "36px", lg: "36px" }}>
                      {sucessModalshow ? "Let’s talk growth" : null}
                    </Typography>
                  )}
                  <IconButton onClick={closePopup}>
                    <CloseIcon style={{ color: "black" }} />
                  </IconButton>
                </Grid>
                {sucessModalshow ? (
                  <Box sx={styles.BoxSelector}>
                    <Button
                      style={{
                        textTransform: "none",
                        color: "#49454F",
                        borderRadius: "5px",
                        padding: "2px 7px",
                      }}
                      sx={{
                        backgroundColor: userType == true ? "#d0bcff" : "transparent",
                        fontWeight: userType == true ? "700" : "400",
                        "&:hover": {
                          backgroundColor: userType == true ? "#d0bcff" : "transparent",
                        },
                      }}
                      onClick={onChangeCreator}
                    >
                      <Typography fontSize={{ xs: "13px", sm: "13px", md: "16px", lg: "16px" }}></Typography>
                      I'm a creator
                    </Button>
                    <Button
                      style={{
                        textTransform: "none",
                        color: "#49454F",
                        borderRadius: "5px",
                        padding: "2px 7px",
                      }}
                      sx={{
                        backgroundColor: userType == false ? "#d0bcff" : "transparent",
                        fontWeight: userType == false ? "700" : "400",

                        "&:hover": {
                          backgroundColor: userType == false ? "#d0bcff" : "transparent",
                        },
                      }}
                      onClick={onChangeBrand}
                    >
                      I'm a brand
                    </Button>
                  </Box>
                ) : null}
                {userType ? (
                  <Creatorpopup isSecondModalActive={isSecondModalActive} />
                ) : (
                  <Brandspopup isSecondModalActive={isSecondModalActive} />
                )}
                {sucessModalshow ? (
                  <Typography style={{ paddingTop: "10px", textAlign: "center", color: "rgb(73,69,79)" }}>
                    {
                      "We will communicate with you about the information requested and other Pedlar services. The use of your information is governed by Pedlar’s Privacy Policy."
                    }
                  </Typography>
                ) : null}
              </Grid>
            </Dialog>
          )}
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Company;
