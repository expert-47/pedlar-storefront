//package imports

import Link from "next/link";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import React, { FC, Fragment, useState } from "react";
import { AppBar, Box, Button, Drawer, Grid, IconButton, Typography, useScrollTrigger, useTheme } from "@mui/material";
//components
import { NextImage } from "components/pedlarImage";
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
        sx={styles.RespoMainGrid}
        paddingX={{ xs: theme.spacing(20), sm: theme.spacing(30), md: theme.spacing(30), lg: theme.spacing(35) }}
      >
        <Grid item xs={11} sm={11.5} md={11.5}>
          <Box style={{ height: 70, width: 230 }} onClick={openStorePage}>
            <NextImage
              src={headerlogo}
              fill={false}
              layout="default"
              alt="pedlar-logo"
              height={75}
              width={230}
              style={{ cursor: "pointer", objectFit: "cover" }}
            />
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
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "15px",
              }}
            >
              <Box style={{ height: 62, width: "192px", margin: "15px 0 0 19px" }} onClick={openStorePage}>
                <NextImage src={headerlogo} alt="pedlar-logo" style={{ cursor: "pointer", objectFit: "cover" }} />
              </Box>
              <IconButton onClick={onCloseDrawer}>
                <CloseIcon style={{ height: "35px", width: "35px", color: "black", marginTop: "-20px" }} />
              </IconButton>
            </Box>
            <Box sx={styles.ResponButtonCreator}>
              <Link
                href={"/for-creator"}
                style={{
                  color: router.pathname == "/for-creator" ? "rgba(28,27,31,.64)" : "black",
                  textDecoration: "none",
                }}
              >
                <Typography
                  textTransform="none"
                  sx={{
                    ...styles.ButtonRTypo,
                    textDecorationLine: router.pathname == "/for-creator" ? "underline" : "initial",
                    color: router.pathname == "/for-creator" ? "rgba(28,27,31,.64)" : "black",
                  }}
                >
                  For Creators
                </Typography>
              </Link>
            </Box>

            <Box sx={styles.ResponButtonBrands}>
              <Link
                href={"/for-brands"}
                style={{
                  color: router.pathname == "/for-creator" ? "rgba(28,27,31,.64)" : "black",
                  textDecoration: "none",
                }}
              >
                <Typography
                  textTransform="none"
                  sx={{
                    ...styles.ButtonRTypo,
                    textDecorationLine: router.pathname === "/for-brands" ? "underline" : "initial",
                    color: router.pathname == "/for-brands" ? "rgba(28,27,31,.64)" : "black",
                  }}
                >
                  For Brands
                </Typography>
              </Link>
            </Box>

            <Box sx={{ textAlign: "center" }}>
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
            </Box>
          </Drawer>

          <Box
            style={{
              height: "30px",
              width: "30px",
              color: "black",
            }}
            onClick={onClickDrawer}
          >
            <NextImage src={MenuIcon} alt="Menu Icon" />
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default ResponsiveHeader;
