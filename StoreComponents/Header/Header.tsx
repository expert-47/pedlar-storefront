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

const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const [open, setOpen] = useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);
  const handleClose = () => setOpen(false);
  const [selected, setSelected] = useState(true);
  const onChangeCreator = () => setSelected(true);
  const onChangeBrand = () => setSelected(false);

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
      <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.MainGrid}>
        {isMatch ? (
          <>
            <ResponsiveHeader />
          </>
        ) : (
          <>
            <Grid item xs={12} sm={12} md={12} lg={4} style={{ paddingLeft: "70px" }}>
              <Image src="/header-logo.svg" alt="header-logo" height={75} width={250} onClick={openStorePage} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} gap={1} style={{ textAlign: "center" }}>
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
            <Grid item xs={12} sm={12} md={12} lg={4} gap={1} style={{ textAlign: "right", paddingRight: "75px" }}>
              <Button sx={styles.Login} onClick={openPopup}>
                <Typography textTransform="none" sx={styles.LoginTypo}>
                  Log in
                </Typography>
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <Box
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
                    {selected ? (
                      <Typography style={{ fontSize: "36px", paddingBottom: "15px" }}>Join the waitlist!</Typography>
                    ) : (
                      <Typography style={{ fontSize: "36px", paddingBottom: "15px" }}>{"Let’s talk growth"}</Typography>
                    )}
                    <IconButton onClick={closePopup}>
                      <CloseIcon style={{ color: "black" }} />
                    </IconButton>
                  </Grid>
                  <Tabs sx={styles.TabSelector}>
                    <Tab label="I'm a Creater" onClick={onChangeCreator} />
                    <Tab label="I'm a Brand" onClick={onChangeBrand} />
                  </Tabs>
                  {selected ? (
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
              <Button sx={styles.GetAccess} onClick={openPopup}>
                <Typography textTransform="none" sx={styles.GetAccessTypo}>
                  Get Access
                </Typography>
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </AppBar>
  );
};

export default Header;
