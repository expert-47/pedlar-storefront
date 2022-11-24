import {
  AppBar,
  Box,
  Button,
  Dialog,
  Drawer,
  Grid,
  IconButton,
  InputAdornment,
  Slide,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { styles } from "./style";
import { TransitionProps } from "@mui/material/transitions";

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
  const [open, setOpen] = useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);
  const handleClose = () => setOpen(false);
  const [userType, setUserType] = useState(true);
  const onChangeCreator = () => setUserType(true);
  const onChangeBrand = () => setUserType(false);

  const openStorePage = () => {
    router.push("/store/storeIndex");
  };
  const openCreators = () => {
    router.push("/store/forcreator");
  };
  const openBrands = () => {
    router.push("/store/forbrands");
  };

  const onClickDrawer = () => {
    setOpenDrawar(true);
    //console.log("clicked Open");
  };

  const onCloseDrawer = () => {
    setOpenDrawar(false);
    //console.log("clicked close");
  };

  const paperStyle = {
    width: "40%",
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
        style={{ paddingLeft: "38px" }}
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
            style={{ height: "62px", width: "192px", paddingLeft: "18px" }}
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
              <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <Box
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
                    <Tab
                      sx={{
                        backgroundColor: userType == true ? "#d0bcff" : "transparent",
                      }}
                      label="I'm a Creater"
                      onClick={onChangeCreator}
                    />
                    <Tab
                      sx={{
                        backgroundColor: userType == false ? "#d0bcff" : "transparent",
                      }}
                      label="I'm a Brand"
                      onClick={onChangeBrand}
                    />
                  </Tabs>
                  {userType ? (
                    <Box>
                      <TextField
                        label="First Name"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "grey", borderColor: "grey" },
                        }}
                      />
                      <TextField
                        label="Last Name"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "grey", borderColor: "grey" },
                        }}
                      />
                      <TextField
                        label="Email Address"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "grey", borderColor: "grey" },
                        }}
                      />
                      <TextField
                        label="City"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "grey", borderColor: "grey" },
                        }}
                      />
                      <TextField
                        label="Instagram Username"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Image src="/insta-icon.svg" alt="insta" height={20} width={20} />
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{
                          style: { color: "grey", borderColor: "grey" },
                        }}
                      />
                      <TextField
                        label="Tiktok Username"
                        placeholder="Enter Here"
                        sx={styles.TextFeild}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Image src="/tiktok-icon.svg" alt="insta" height={20} width={20} />
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{
                          style: { color: "grey", borderColor: "grey" },
                        }}
                      />
                    </Box>
                  ) : (
                    <Box>
                      <TextField
                        label="First Name"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "grey", borderColor: "grey" },
                        }}
                      />
                      <TextField
                        label="Last Name"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "grey", borderColor: "grey" },
                        }}
                      />
                      <TextField
                        label="Company Name"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "grey", borderColor: "grey" },
                        }}
                      />
                      <TextField
                        label="Email Address"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "grey", borderColor: "grey" },
                        }}
                      />
                      <TextField
                        label="Phone Number (+61)"
                        placeholder="Enter Here"
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "grey", borderColor: "grey" },
                        }}
                      />
                      <TextField
                        label="Brand Website"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "grey", borderColor: "grey" },
                        }}
                      />
                    </Box>
                  )}
                  <Button style={{ backgroundColor: "black", borderRadius: "20px" }}>Get in Touch</Button>
                  <Typography>
                    {
                      "We will communicate with you about the information requested and other Pedlar services. The use of your information is governed by Pedlar’s Privacy Policy."
                    }
                  </Typography>
                </Box>
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
