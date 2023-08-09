//package imports

import Link from "next/link";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import React, { FC, Fragment, useState } from "react";
import { AppBar, Box, Button, Drawer, Grid, IconButton, Typography, useScrollTrigger, useTheme } from "@mui/material";
//components
import PedlarImage from "components/pedlarImage";
import BottomSheet from "landing-components/BottomSheet";
//assets
import headerlogo from "../../public/header-logo.svg";
import MenuIcon from "../../public/menu-icon.png";
//styles
import { styles } from "./style";

const paperStyle = {
  width: { xs: "100%", sm: "50%", md: "35%" },
  boxShadow: "none",
  backgroundColor: "#f9f6f2",
};

const ResponsiveHeader: FC = (): JSX.Element => {
  const theme = useTheme();
  const router = useRouter();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 15,
  });
  //states
  const [opendrawer, setOpenDrawar] = useState(false);
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
  const openStorePage = () => {
    router.push("/");
  };
  const onClickDrawer = () => {
    setOpenDrawar(true);
  };
  const onCloseDrawer = () => {
    setOpenDrawar(false);
  };

  const isSecondModalActive = (value: boolean) => {
    setSuccessModalShow(value);
  };
  const handleClick = () => {
    router.push("https://portal.pedlar.store");
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
          <Box style={{ height: 70, width: 230 }} onClick={openStorePage}>
            <PedlarImage src={headerlogo} alt="pedlar-logo" height={75} width={230} style={{ cursor: "pointer" }} />
          </Box>
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
              <Box style={{ height: 62, width: "192px", margin: "15px 0 0 19px" }} onClick={openStorePage}>
                <PedlarImage src={headerlogo} alt="header-logo" style={{ cursor: "pointer", paddingTop: "10px" }} />
              </Box>
              <IconButton onClick={onCloseDrawer}>
                <CloseIcon style={{ height: "35px", width: "35px", color: "black", marginTop: "-20px" }} />
              </IconButton>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12} style={{ display: "flex", flexDirection: "column" }}>
              <Grid>
                <Grid sx={styles.ResponButtonCreator}>
                  <Link prefetch={true} href={"/for-creator"}>
                    <Typography
                      textTransform="none"
                      sx={{
                        ...styles.ButtonRTypo,
                        textDecorationLine: router.pathname == "/for-creator" ? "underline" : "initial",
                        color: router.pathname == "/for-creator" ? "rgba(28,27,31,.64)" : "initial",
                      }}
                    >
                      For Creators
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
              <Grid>
                <Grid sx={styles.ResponButtonBrands}>
                  <Link href={"/for-brands"} prefetch={true}>
                    <Typography
                      textTransform="none"
                      sx={{
                        ...styles.ButtonRTypo,
                        textDecorationLine: router.pathname === "/for-brands" ? "underline" : "initial",
                        color: router.pathname == "/for-brands" ? "rgba(28,27,31,.64)" : "initial",
                      }}
                    >
                      For Brands
                    </Typography>
                  </Link>
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
                  <Button sx={styles.Login1} onClick={handleClick}>
                    <Typography textTransform="none" sx={styles.ButtonRTypo}>
                      Log in
                    </Typography>
                  </Button>
                  {openDialog ? (
                    <BottomSheet
                      userType
                      closePopup={closePopup}
                      openDialog={openDialog}
                      handleClose={handleClose}
                      setOpenDialog={setOpenDialog}
                      sucessModalshow={sucessModalshow}
                      isSecondModalActive={isSecondModalActive}
                    />
                  ) : (
                    <Fragment />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Drawer>

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
