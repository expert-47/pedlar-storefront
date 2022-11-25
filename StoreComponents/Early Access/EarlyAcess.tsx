import { Box, Button, Dialog, Grid, IconButton, InputAdornment, Tab, Tabs, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { styles } from "./Style";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomContainer } from "StoreComponents/Layout";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
const EarlyAcess = () => {
  const [open, setOpen] = useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);
  const handleClose = () => setOpen(false);
  const [userType, setUserType] = useState(true);
  const onChangeCreator = () => setUserType(true);
  const onChangeBrand = () => setUserType(false);
  const theme = useTheme();
  const isMatch = useMediaQuery('(max-width:800px)');
  const isMob = useMediaQuery('(max-width:767px)');
  return (
    <CustomContainer>
      <Box
       paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
       paddingY={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
      >
      <Box sx={styles.Box}>
        <Grid container item xs={12} sm={12} md={12} lg={12} style={{ alignItems: "center" }}
          paddingX={{ xs: theme.spacing(25), md: theme.spacing(20), lg: theme.spacing(30) }}
        >
          <Grid item xs={12} sm={12} md={4} lg={5}>
            <Typography style={{fontSize: isMob? "48px" : "54px" }}>Get early access</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}
            style={{display: isMatch? "none" : "block", textAlign: "center"}}
          >
            <ArrowForwardIcon style={{ height: "77px", width: "50px" }} />
          </Grid>
          <Grid container item xs={12} sm={12} md={6} lg={5} style={{ textAlign: isMatch ? "left" : "center", marginTop : isMatch ? '20px' : "0px"}}>
            <Grid item xs={12} sm={4} md={6} lg={6}>
              <Button sx={styles.creator} onClick={openPopup}>
                <Typography textTransform="none" fontSize={"22px"}>
                  I’m a creator
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={6}>
              <Button sx={styles.brands} onClick={openPopup}>
                <Typography textTransform="none" fontSize={"22px"}>
                  I’m a brand
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
      </Box>
    </Box>
    </CustomContainer>
  );
};

export default EarlyAcess;
