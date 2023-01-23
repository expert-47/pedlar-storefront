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
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
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
              <Image src={rightArrow} style={{ height: "68px", width: "68px" }} />
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
                      <>
                        <Typography
                          style={{ paddingTop: "10px", color: "rgb(73,69,79)" }}
                        >
                          {"We will communicate with you about the information requested and other Pedlar services."}
                        </Typography>
                        <Typography style={{ color: "rgb(73,69,79)" }}>
                          {" The use of your information is governed by Pedlar’s Privacy Policy."}
                        </Typography>
                      </>
                    ) : null}
                  </Grid>
                </Dialog>
              ) : (
                <SwipeableDrawer
                  ModalProps={{ keepMounted: true }}
                  anchor="bottom"
                  sx={{ height: "150px" }}
                  open={openDialog}
                  onClose={handleClose}
                  PaperProps={{
                    sx: {
                      // Since overflow is visible here and not 'auto' or 'scroll', the scrolling needs to happen in a nested div
                      overflow: "visible",
                      height: `calc(90% - 13px)`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 4,
                      backgroundColor: "#bdbdbd",
                      borderRadius: 3,
                      alignSelf: "center",
                      marginTop: 8,
                    }}
                  />
                  <Box sx={styles.RespBox}>
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
                        <CloseIcon style={{ color: "black", height: "14px", width: "14px" }} />
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
                  </Box>
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
                    {userType ? (
                      <Creatorpopup isSecondModalActive={isSecondModalActive} />
                    ) : (
                      <Brandspopup isSecondModalActive={isSecondModalActive} />
                    )}
                    {sucessModalshow ? (
                      <>
                        <Typography
                          style={{ paddingTop: "10px", color: "rgb(73,69,79)" }}
                        >
                          {"We will communicate with you about the information requested and other Pedlar services."}
                        </Typography>
                        <Typography style={{ color: "rgb(73,69,79)" }}>
                          {" The use of your information is governed by Pedlar’s Privacy Policy."}
                        </Typography>
                      </>
                    ) : null}
                  </Grid>
                </SwipeableDrawer>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default EarlyAcess;
