import { Box, Grid, Typography, Dialog, Tabs, Tab, IconButton, TextField, InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { styles } from "./style";
//import Typed from "react-typed";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { CustomContainer } from "StoreComponents/Layout";
import useMediaQuery from '@mui/material/useMediaQuery';

const Banner = () => {
 
  const isMatch = useMediaQuery('(max-width:1145px)');
  const isMedium = useMediaQuery('(max-width:850px)');
  const isSmall = useMediaQuery('(max-width:767px)');
  const [open, setOpen] = useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);
  const handleClose = () => setOpen(false);
  const [userType, setUserType] = useState(true);
  const onChangeCreator = () => setUserType(true);
  const onChangeBrand = () => setUserType(false);

  return (
    <CustomContainer>
      <Box>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ position: "relative" }}>
<<<<<<< HEAD
          <img src="/home-banner1.png" alt="home banner" style={{ width: "100%", paddingTop: "108px" }}></img>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.bannerText}>
=======
          <img src="/home-banner1.png" alt="home banner" style={{ width: "100%", paddingTop: "100px" }}></img>
          <Grid sx={styles.bannerText}>
>>>>>>> 869ba0a16ac5bae8d32e462a23143572d2b41bca
            <Typography sx={styles.FirstList}>We put fashion</Typography>
            <Box style={{ display: "flex", alignItems: "center" }}>
              {/* <Typed
                strings={["Creatore", "Influencers", "Curators"]}
                loop
                typeSpeed={150}
                backSpeed={100}
<<<<<<< HEAD
                style={{ fontSize: "48px", color: "#1C1B1F", fontFamily: "Inter", fontWeight: "900" }}
              /> */}
              <Typography style={{ fontSize: "48px", color: "#1C1B1F", fontFamily: "Inter", fontWeight: "900" }}>
=======
                style={{
                  color: "#1C1B1F", fontFamily: "Inter", fontWeight: "900" ,
                  fontSize: isMedium? "28px":( isMatch ? "40px" : "48px")
                }}
              />
              <Typography style={{
                  color: "#1C1B1F", fontFamily: "Inter", fontWeight: "900" ,
                  fontSize: isMedium? "28px":( isMatch ? "40px" : "48px")
                }}>
>>>>>>> 869ba0a16ac5bae8d32e462a23143572d2b41bca
                in business
              </Typography>
            </Box>
            <Typography sx={styles.FirstPara}>
              Simplified creator commerce. Sell directly to your followers through customisable storefronts.
            </Typography>
            <Grid>
              <Button sx={styles.creator} onClick={openPopup}>
                I’m a creator
              </Button>
              <Button sx={styles.brands} onClick={openPopup}>
                I’m a brand
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
    </CustomContainer>
  );
};

export default Banner;
