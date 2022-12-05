import { AppBar, Box, Button, Dialog, Drawer, Grid, IconButton, Slide, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { styles } from "./style";
import { TransitionProps } from "@mui/material/transitions";
import Creatorpopup from "../popup-dialog/creatorpopup";
import Brandspopup from "../popup-dialog/brandspopup";
import headerlogo from "../../public/header-logo.svg";

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
  const closePopup = () => setOpenDialog(false);
  const handleClose = () => setOpenDialog(false);
  const [userType, setUserType] = useState(true);
  const onChangeCreator = () => setUserType(true);
  const onChangeBrand = () => setUserType(false);

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
    width: "auto",
    boxShadow: "none",
    backgroundColor: "#f9f6f2",
  };
  return (
    <AppBar elevation={0} sx={styles.Respheader}>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={styles.RespoMainGrid}
        paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
      >
        <Grid item xs={11} sm={11.5} md={11.5}>
          <Image
            src={headerlogo}
            alt="pedlar-logo"
            height={75}
            width={230}
            onClick={openStorePage}
            style={{ cursor: "pointer" }}
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
            <Grid container style={{ alignItems: "center", justifyContent: "space-between", paddingBottom: "32px" }}>
              <img
                src="/header-logo.svg"
                alt="header-logo"
                style={{ height: "62px", width: "192px", paddingLeft: "18px", cursor: "pointer" }}
                onClick={openStorePage}
              />
              <IconButton onClick={onCloseDrawer}>
                <CloseIcon style={{ height: "40px", width: "40px", marginRight: "19px", color: "black" }} />
              </IconButton>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12} style={{ display: "flex", flexDirection: "column" }}>
              <Grid>
                <Grid sx={styles.ButtonR} onClick={openCreators}>
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
                <Grid sx={styles.ButtonR} onClick={openBrands}>
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
                      <Grid container style={{ alignItems: "center", justifyContent: "space-between" }}>
                        {userType ? (
                          <Typography style={{ fontSize: "36px", paddingBottom: "15px" }}>
                            Join the waitlist!
                          </Typography>
                        ) : (
                          <Typography style={{ fontSize: "36px", paddingBottom: "15px" }}>
                            {"Let’s talk growth"}
                          </Typography>
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
                            borderRadius: "10px",
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
                            borderRadius: "10px",
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
                      <Button style={{ backgroundColor: "black", borderRadius: "30px", padding: "10px" }}>
                        <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"}>
                          Get in touch
                        </Typography>
                      </Button>
                      <Typography style={{ paddingTop: "10px", textAlign: "center" }}>
                        {
                          "We will communicate with you about the information requested and other Pedlar services. The use of your information is governed by Pedlar’s Privacy Policy."
                        }
                      </Typography>
                    </Grid>
                  </Dialog>
                </Grid>
              </Grid>
            </Grid>
          </Drawer>
          <IconButton aria-label="Drawer" onClick={onClickDrawer} style={{ color: "black", paddingRight: "40px" }}>
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default ResponsiveHeader;
