import React, { useState } from "react";
import { styles } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  IconButton,
  Tab,
  Dialog,
  Tabs,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Image from "next/image";
import { useRouter } from "next/router";
import ResponsiveHeader from "./ResponsiveHeader";
import { CustomContainer } from "StoreComponents/Layout";
const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
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

  return (
    <AppBar elevation={0} sx={styles.header}>
      <CustomContainer>
        <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.MainGrid}
         paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
      
        >
          {isMatch ? (
            <>
              <ResponsiveHeader />
            </>
          ) : (
            <>
              <Grid item xs={12} sm={12} md={12} lg={3.5}>
                <Image src="/header-logo.svg" alt="header-logo" height={75} width={230} onClick={openStorePage} />
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
              <Dialog open={open} onClose={handleClose}>
                <Grid
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
                      <Typography style={{ fontSize: "32px", fontWeight: "600", paddingBottom: "15px" }}>
                        Join the waitlist!
                      </Typography>
                    ) : (
                      <Typography style={{ fontSize: "32px", fontWeight: "600" }}>{"Let’s talk growth"}</Typography>
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
                  {userType ? (
                    <Box>
                      <TextField
                        label="First Name"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                        }}
                      />
                      <TextField
                        label="Last Name"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                        }}
                      />
                      <TextField
                        label="Email Address"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                        }}
                      />
                      <TextField
                        label="City"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                        }}
                      />
                      <TextField
                        label="Instagram Username"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Image src="/insta-icon.svg" alt="insta" height={20} width={20} />
                            </InputAdornment>
                          ),
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
                          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
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
                          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                        }}
                      />
                      <TextField
                        label="Last Name"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                        }}
                      />
                      <TextField
                        label="Company Name"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                        }}
                      />
                      <TextField
                        label="Email Address"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                        }}
                      />
                      <TextField
                        label="Phone Number (+61)"
                        placeholder="Enter Here"
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                        }}
                      />
                      <TextField
                        label="Brand Website"
                        placeholder="Enter Here"
                        required
                        sx={styles.TextFeild}
                        InputLabelProps={{
                          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
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
