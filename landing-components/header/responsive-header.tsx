import { AppBar, Button, Dialog, Drawer, Grid, IconButton, Slide, Tab, Tabs, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { styles } from "./style";
import { TransitionProps } from "@mui/material/transitions";
import Creatorpopup from "../popup-dialog/creatorpopup";
import Brandspopup from "../popup-dialog/brandspopup";

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
  const [opendrawer, setOpenDrawar] = useState(false);
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
    router.push("/for-creator");
  };
  const openBrands = () => {
    router.push("//for-brands");
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
      <Image
        src="/header-logo.svg"
        alt="header-logo"
        height={75}
        width={250}
        onClick={openStorePage}
        style={{ cursor: "pointer" }}
      />
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
            <Button sx={styles.ButtonR} onClick={openCreators}>
              <Typography textTransform="none" sx={styles.ButtonRTypo}>
                For Creators
              </Typography>
            </Button>
          </Grid>
          <Grid>
            <Button sx={styles.ButtonR} onClick={openBrands}>
              <Typography textTransform="none" sx={styles.ButtonRTypo}>
                For Brands
              </Typography>
            </Button>
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
    </AppBar>
  );
};

export default ResponsiveHeader;
