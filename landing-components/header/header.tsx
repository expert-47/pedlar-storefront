import React, { useState } from "react";
import { styles } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Grid, IconButton, Dialog, Typography, useMediaQuery, useTheme, Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Image from "next/image";
import { useRouter } from "next/router";
import ResponsiveHeader from "./responsive-header";
import { CustomContainer } from "../landinglayout";
import Creatorpopup from "../popup-dialog/creatorpopup";
import Brandspopup from "../popup-dialog/brandspopup";
import headerlogo from "../../public/header-logo.svg";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PedlarImage from "components/pedlarImage";

const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  const openPopup = () => setOpenDialog(true);
  const closePopup = () => {
    setSuccessModalShow(true);
    setOpenDialog(false);
  };
  const handleClose = () => {
    setSuccessModalShow(true);

    setOpenDialog(false);
  };
  const onChangeBrand = () => setUserType(false);
  const [userType, setUserType] = useState(true);
  const [sucessModalshow, setSuccessModalShow] = useState(true);

  const onChangeCreator = () => setUserType(true);
  const [openDialog, setOpenDialog] = useState(false);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const Scrolltrigger = useScrollTrigger({ threshold: 22, disableHysteresis: true });
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 22,
  });

  const openStorePage = () => {
    router.push("/");
  };
  const openCreators = () => {
    router.push("/for-creator");
  };
  const openBrands = () => {
    router.push("/for-brands");
  };
  const isSecondModalActive = (value: boolean) => {
    setSuccessModalShow(value);
  };
  return (
    <AppBar
      elevation={0}
      sx={{
        ...styles.header,
        backgroundColor: trigger ? "#f9f6f2" : "transparent",
        // transition: trigger ? "0.2s" : "0.4s",
      }}
    >
      <CustomContainer>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={styles.MainGrid}
          paddingX={{ xs: theme.spacing(30), sm: theme.spacing(30), md: theme.spacing(15), lg: theme.spacing(35) }}
        >
          {isMatch ? (
            <>
              <ResponsiveHeader />
            </>
          ) : (
            <>
              <Grid item xs={12} sm={12} md={3.5}>
                {Scrolltrigger || router.pathname != "/" ? (
                  <Box onClick={openStorePage} sx={{ height: 75, width: 230, cursor: "pointer" }}>
                    <PedlarImage src={headerlogo} alt="pedlar-logo" />
                  </Box>
                ) : (
                  <Box sx={{ height: 85, width: 300, marginTop: "43px", cursor: "pointer" }}>
                    <Image src={headerlogo} alt="pedlar-logo" onClick={openStorePage} priority />
                  </Box>
                )}
              </Grid>
              <Grid container item xs={12} sm={12} md={5} lg={5} gap={40} style={{ justifyContent: "center" }}>
                <Grid onClick={openCreators}>
                  <Typography
                    textTransform="none"
                    fontSize={"16px"}
                    fontWeight={600}
                    sx={{
                      ...styles.Button,
                      textDecorationLine: router.pathname == "/for-creator" && "underline",
                      color: router.pathname == "/for-creator" && "rgba(28,27,31,.64)",
                    }}
                  >
                    For Creators
                  </Typography>
                </Grid>
                <Grid onClick={openBrands}>
                  <Typography
                    textTransform="none"
                    fontSize={"16px"}
                    fontWeight={600}
                    sx={{
                      ...styles.Button,
                      textDecorationLine: router.pathname == "/for-brands" && "underline",
                      color: router.pathname == "/for-brands" && "rgba(28,27,31,.64)",
                    }}
                  >
                    For Brands
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={3.5} style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={openPopup}>
                  <Typography textTransform="none" sx={styles.LoginButton}>
                    Log in
                  </Typography>
                </Button>
                <Button onClick={openPopup}>
                  <Typography textTransform="none" sx={styles.GetAccessTypo}>
                    Get Access
                  </Typography>
                </Button>
              </Grid>

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
                      <Typography style={{ paddingTop: "10px", color: "rgb(73,69,79)" }}>
                        {"We will communicate with you about the information requested and other Pedlar services."}
                      </Typography>
                      <Typography style={{ color: "rgb(73,69,79)" }}>
                        {" The use of your information is governed by Pedlar’s Privacy Policy."}
                      </Typography>
                    </>
                  ) : null}
                </Grid>
              </Dialog>
            </>
          )}
        </Grid>
      </CustomContainer>
    </AppBar>
  );
};

export default Header;
