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
import headerlogo from "../../public/headerlogo.png";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  const openPopup = () => setOpenDialog(true);
  const closePopup = () => setOpenDialog(false);
  const handleClose = () => setOpenDialog(false);
  const onChangeBrand = () => setUserType(false);
  const [userType, setUserType] = useState(true);
  const onChangeCreator = () => setUserType(true);
  const [openDialog, setOpenDialog] = useState(false);
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const Scrolltrigger = useScrollTrigger({ threshold: 10, disableHysteresis: true });

  const openStorePage = () => {
    router.push("/");
  };
  const openCreators = () => {
    router.push("/for-creator");
  };
  const openBrands = () => {
    router.push("/for-brands");
  };
  const submitHandler = () => {
    console.log("clicked");
  };
  return (
    <AppBar elevation={0} sx={styles.header}>
      <CustomContainer>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={styles.MainGrid}
          paddingX={{ xs: theme.spacing(30), sm: theme.spacing(30), md: theme.spacing(30), lg: theme.spacing(35) }}
        >
          {isMatch ? (
            <>
              <ResponsiveHeader />
            </>
          ) : (
            <>
              <Grid item xs={12} sm={12} md={12} lg={3.5}>
                {Scrolltrigger || router.pathname != "/" ? (
                  <Image
                    src={headerlogo}
                    alt="pedlar-logo"
                    height={75}
                    width={230}
                    onClick={openStorePage}
                    style={{ cursor: "pointer" }}
                    priority
                  />
                ) : (
                  <Box style={{ cursor: "pointer", marginTop: "65px", width: "85%" }}>
                    <Image src={headerlogo} alt="pedlar-logo" onClick={openStorePage} priority />
                  </Box>
                )}
              </Grid>
              <Grid container item xs={12} sm={12} md={12} lg={5} gap={40} style={{ justifyContent: "center" }}>
                <Grid onClick={openCreators}>
                  <Typography
                    textTransform="none"
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
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={3.5}
                style={{ textAlign: "right", display: "flex", justifyContent: "flex-end" }}
              >
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
                onClose={handleClose}
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
                  <Grid container style={{ alignItems: "center", justifyContent: "space-between" }}>
                    {userType ? (
                      <Typography style={{ fontSize: "36px", paddingBottom: "15px" }}>Join the waitlist!</Typography>
                    ) : (
                      <Typography style={{ fontSize: "36px", paddingBottom: "15px" }}>{"Let’s talk growth"}</Typography>
                    )}
                    <IconButton onClick={closePopup}>
                      <CloseIcon style={{ color: "black" }} />
                    </IconButton>
                  </Grid>
                  <Box sx={styles.BoxSelector}>
                    <Button
                      style={{
                        textTransform: "none",
                        color: "#49454F",
                        fontSize: "16px",
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
                      I'm a creater
                    </Button>
                    <Button
                      style={{
                        textTransform: "none",
                        color: "#49454F",
                        fontSize: "16px",
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
                  {userType ? <Creatorpopup /> : <Brandspopup />}

                  <Typography style={{ paddingTop: "10px", textAlign: "center" }}>
                    {
                      "We will communicate with you about the information requested and other Pedlar services. The use of your information is governed by Pedlar’s Privacy Policy."
                    }
                  </Typography>
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
