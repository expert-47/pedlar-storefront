//package imports
import {
  Box,
  Grid,
  Button,
  Dialog,
  AppBar,
  useTheme,
  Typography,
  IconButton,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
//components
import { NextImage } from "components/pedlarImage";
import ResponsiveHeader from "./responsive-header";
import { CustomContainer } from "../landinglayout";
import Brandspopup from "../popup-dialog/brandspopup";
import headerlogo from "../../public/header-logo.svg";
import Creatorpopup from "../popup-dialog/creatorpopup";
//style
import { styles } from "./style";
const Header: FC = (): JSX.Element => {
  const theme = useTheme();
  const router = useRouter();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const Scrolltrigger = useScrollTrigger({ threshold: 22, disableHysteresis: true });
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 22,
  });

  //states
  const [userType, setUserType] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [sucessModalshow, setSuccessModalShow] = useState(true);

  const onChangeBrand = () => setUserType(false);
  const openStorePage = () => {
    router.push("/");
  };
  const onChangeCreator = () => setUserType(true);
  const openPopup = () => setOpenDialog(true);
  const closePopup = () => {
    setSuccessModalShow(true);
    setOpenDialog(false);
  };

  const isSecondModalActive = (value: boolean) => {
    setSuccessModalShow(value);
  };
  const handleClick = () => {
    router.push("https://portal.pedlar.store");
  };

  if (isMatch) {
    return <ResponsiveHeader />;
  }
  return (
    <AppBar
      elevation={0}
      sx={{
        ...styles.header,
        backgroundColor: trigger ? "#f9f6f2" : "transparent",
      }}
    >
      <CustomContainer>
        <Grid
          container
          sx={styles.MainGrid}
          paddingX={{ xs: theme.spacing(25), sm: theme.spacing(35), md: theme.spacing(30), lg: theme.spacing(35) }}
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
                    <NextImage src={headerlogo} alt="pedlar-logo" style={{ objectFit: "contain" }} priority />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      height: { md: 75, lg: 98 },
                      width: { md: 230, lg: 300 },
                      marginTop: { lg: 50 },
                      cursor: "pointer",
                      position: { md: "absolute", lg: "relative" },
                      left: { md: 40, lg: 0 },
                      bottom: { md: 0 },
                    }}
                  >
                    <NextImage src={headerlogo} alt="pedlar-logo" onClick={openStorePage} priority />
                  </Box>
                )}
              </Grid>
              <Grid container item xs={12} sm={12} md={5} lg={5} gap={40} style={{ justifyContent: "center" }}>
                <Grid>
                  <Link
                    href={"/for-creator"}
                    style={{
                      textDecoration: "none",
                      color: router.pathname == "/for-creator" ? "rgba(28,27,31,.64)" : "black",
                    }}
                  >
                    <Typography
                      textTransform="none"
                      fontSize={"16px"}
                      fontWeight={600}
                      sx={{
                        ...styles.Button,
                        textDecorationLine: router.pathname == "/for-creator" ? "underline" : undefined,
                        color: router.pathname == "/for-creator" ? "rgba(28,27,31,.64)" : undefined,
                      }}
                    >
                      For Creators
                    </Typography>
                  </Link>
                </Grid>
                <Grid>
                  <Link
                    href={"/for-brands"}
                    style={{
                      textDecoration: "none",
                      color: router.pathname == "/for-brands" ? "rgba(28,27,31,.64)" : "black",
                    }}
                  >
                    <Typography
                      textTransform="none"
                      fontSize={"16px"}
                      fontWeight={600}
                      sx={{
                        ...styles.Button,
                        textDecorationLine: router.pathname == "/for-brands" ? "underline" : undefined,
                        color: router.pathname == "/for-brands" ? "rgba(28,27,31,.64)" : undefined,
                      }}
                    >
                      For Brands
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={3.5} style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={handleClick}>
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
                        I&apos;m a creator
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
                        I&apos;m a brand
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
