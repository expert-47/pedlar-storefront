import {
  AppBar,
  Box,
  Button,
  Dialog,
  Drawer,
  Grid,
  IconButton,
  Slide,
  Typography,
  useScrollTrigger,
  SwipeableDrawer,
  useTheme,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { styles } from "./style";
import { TransitionProps } from "@mui/material/transitions";
import Creatorpopup from "../popup-dialog/creatorpopup";
import Brandspopup from "../popup-dialog/brandspopup";
import Image from "next/image";
import headerlogo from "../../public/header-logo.svg";
import MenuIcon from "../../public/menu-icon.png";
import PedlarImage from "components/pedlarImage";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ResponsiveHeader = () => {
  const router = useRouter();
  const theme = useTheme();
  const [opendrawer, setOpenDrawar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const openPopup = () => setOpenDialog(true);
  const closePopup = () => {
    setSuccessModalShow(true);
    setOpenDialog(false);
  };
  const handleClose = () => {
    setSuccessModalShow(true);

    setOpenDialog(false);
  };
  // const handleClose = () => setOpenDialog(false);
  const [userType, setUserType] = useState(true);
  const onChangeCreator = () => setUserType(true);
  const onChangeBrand = () => setUserType(false);
  const [sucessModalshow, setSuccessModalShow] = useState(true);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 15,
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

  const onClickDrawer = () => {
    setOpenDrawar(true);
  };

  const onCloseDrawer = () => {
    setOpenDrawar(false);
  };

  const paperStyle = {
    width: { xs: "100%", sm: "50%", md: "35%" },
    boxShadow: "none",
    backgroundColor: "#f9f6f2",
  };
  const isSecondModalActive = (value: boolean) => {
    setSuccessModalShow(value);
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        ...styles.Respheader,
        backgroundColor: trigger ? "#f9f6f2" : "transparent",
        transition: trigger ? "0.2s" : "0.4s",
      }}
    >
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={styles.RespoMainGrid}
        paddingX={{ xs: theme.spacing(20), sm: theme.spacing(30), md: theme.spacing(30), lg: theme.spacing(35) }}
      >
        <Grid item xs={11} sm={11.5} md={11.5}>
          <Image
            src={headerlogo}
            alt="pedlar-logo"
            height={75}
            width={230}
            onClick={openStorePage}
            style={{ cursor: "pointer" }}
            priority
          />
        </Grid>
        <Grid item xs={0.5} sm={0.5} md={0.5}>
          <Drawer
            anchor="right"
            open={opendrawer}
            PaperProps={{
              sx: paperStyle,
            }}
          >
            <Grid container style={{ alignItems: "center", justifyContent: "space-between", paddingBottom: "15px" }}>
              <Box style={{ width: "192px", margin: "15px 0 0 19px" }}>
                <Image
                  src={headerlogo}
                  alt="header-logo"
                  style={{ height: "62px", width: "192px", cursor: "pointer", paddingTop: "10px" }}
                  onClick={openStorePage}
                />
              </Box>
              <IconButton onClick={onCloseDrawer}>
                <CloseIcon style={{ height: "35px", width: "35px", color: "black", marginTop: "-20px" }} />
              </IconButton>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12} style={{ display: "flex", flexDirection: "column" }}>
              <Grid>
                <Grid sx={styles.ResponButtonCreator} onClick={openCreators}>
                  <Typography
                    textTransform="none"
                    sx={{
                      ...styles.ButtonRTypo,
                      textDecorationLine: router.pathname == "/for-creator" && "underline",
                      color: router.pathname == "/for-creator" && "rgba(28,27,31,.64)",
                    }}
                  >
                    For Creators
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
                <Grid sx={styles.ResponButtonBrands} onClick={openBrands}>
                  <Typography
                    textTransform="none"
                    sx={{
                      ...styles.ButtonRTypo,
                      textDecorationLine: router.pathname == "/for-brands" && "underline",
                      color: router.pathname == "/for-brands" && "rgba(28,27,31,.64)",
                    }}
                  >
                    For Brands
                  </Typography>
                </Grid>
              </Grid>
              <Grid style={{ textAlign: "center" }}>
                <Grid>
                  <Button sx={styles.GetAccess1} onClick={openPopup}>
                    <Typography textTransform="none" sx={styles.ButtonRTypo}>
                      Get Access
                    </Typography>
                  </Button>
                </Grid>
                <Grid>
                  <Button sx={styles.Login1} onClick={openPopup}>
                    <Typography textTransform="none" sx={styles.ButtonRTypo}>
                      Log in
                    </Typography>
                  </Button>
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
                          <Typography style={{ color: "rgb(73,69,79)" }} >
                            {" The use of your information is governed by Pedlar’s Privacy Policy."}
                          </Typography>
                        </>
                      ) : null}
                    </Grid>
                  </SwipeableDrawer>
                </Grid>
              </Grid>
            </Grid>
          </Drawer>

          {/* <MenuIcon /> */}
          <Box
            style={{
              height: "30px",
              width: "30px",
              color: "black",
            }}
            onClick={onClickDrawer}
          >
            <PedlarImage src={MenuIcon} alt="Menu Icon" />
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default ResponsiveHeader;
