import React, { useState } from "react";
import { styles } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Grid, IconButton, Tab, Dialog, Tabs, Typography, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Image from "next/image";
import { useRouter } from "next/router";
import ResponsiveHeader from "./responsiveheader";
import { CustomContainer } from "../landinglayout";
import Creatorpopup from "../popupdialog/creatorpopup";
import Brandspopup from "../popupdialog/brandspopup";
import headerlogo from "../../public/header-logo.svg";

const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const [openDialog, setOpenDialog] = useState(false);
  const openPopup = () => setOpenDialog(true);
  const closePopup = () => setOpenDialog(false);
  const handleClose = () => setOpenDialog(false);
  const [userType, setUserType] = useState(true);
  const onChangeCreator = () => setUserType(true);
  const onChangeBrand = () => setUserType(false);

  const openStorePage = () => {
    router.push("/landing");
  };
  const openCreators = () => {
    router.push("/landing/creator");
  };
  const openBrands = () => {
    router.push("/landing/brands");
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
          paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
        >
          {isMatch ? (
            <>
              <ResponsiveHeader />
            </>
          ) : (
            <>
              <Grid item xs={12} sm={12} md={12} lg={3.5}>
                <Image
                  src={headerlogo}
                  alt="header-logo"
                  height={85}
                  width={250}
                  onClick={openStorePage}
                  style={{ cursor: "pointer" }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={5} gap={1} style={{ textAlign: "center" }}>
                <Button sx={styles.Button} onClick={openCreators}>
                  <Typography textTransform="none" sx={styles.Button}>
                    For Creators
                  </Typography>
                </Button>
                <Button sx={styles.Button} onClick={openBrands}>
                  <Typography textTransform="none" sx={styles.Button}>
                    For Brands
                  </Typography>
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={3.5}
                gap={5}
                style={{ textAlign: "right", display: "flex", justifyContent: "flex-end" }}
              >
                <Grid item xs={12} sm={12} md={12} lg={4}>
                  <Button sx={styles.Login} onClick={openPopup}>
                    <Typography textTransform="none" sx={styles.LoginTypo}>
                      Log in
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={5}>
                  <Button sx={styles.GetAccess} onClick={openPopup}>
                    <Typography textTransform="none" sx={styles.GetAccessTypo}>
                      Get Access
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
              <Dialog open={openDialog} onClose={handleClose}>
              <Grid container item xs={12} sm={12} md={12} lg={12}
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
                  <Tabs sx={styles.TabSelector}>
                    <Button>
                      <Tab
                        style={{
                          textTransform: "none",
                          color: "black",
                          fontSize: "16px",
                          fontWeight: "700",
                          borderRadius: "15px",
                        }}
                        sx={{
                          backgroundColor: userType == true ? "#a696cc" : "transparent",
                        }}
                        label="I'm a Creater"
                        onClick={onChangeCreator}
                      />
                    </Button>
                    <Button>
                      <Tab
                        style={{
                          textTransform: "none",
                          color: "black",
                          fontSize: "16px",
                          fontWeight: "700",
                          borderRadius: "15px",
                        }}
                        sx={{
                          backgroundColor: userType == false ? "#a696cc" : "transparent",
                        }}
                        label="I'm a Brand"
                        onClick={onChangeBrand}
                      />
                    </Button>
                  </Tabs>
                  {userType ? <Creatorpopup /> : <Brandspopup />}
                  <Button style={{ backgroundColor: "black", borderRadius: "20px" }}>Get in Touch</Button>
                  <Typography>
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
