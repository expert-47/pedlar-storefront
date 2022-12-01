import { Box, Button, Dialog, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { styles } from "./style";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomContainer } from "../../landinglayout";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Creatorpopup from "../../popup-dialog/creatorpopup";
import Brandspopup from "../../popup-dialog/brandspopup";

const EarlyAcess = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const openPopup = () => setOpenDialog(true);
  const closePopup = () => setOpenDialog(false);
  const handleClose = () => setOpenDialog(false);
  const [userType, setUserType] = useState(true);
  const onChangeCreator = () => setUserType(true);
  const onChangeBrand = () => setUserType(false);
  const theme = useTheme();
  const isMatch = useMediaQuery("(max-width:800px)");

  return (
    <CustomContainer>
      <Box
        paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
        paddingY={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
      >
        <Box sx={styles.Box}>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{ alignItems: "center" }}
            paddingX={{ xs: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30) }}
            paddingY={{ xs: theme.spacing(40), md: theme.spacing(40), lg: theme.spacing(55) }}
          >
            <Grid item xs={12} sm={12} md={4} lg={5}>
              <Typography fontSize={{ md: "54px", xs: "48px" }} fontWeight={"700"} lineHeight={"unset"}>
                Get early access
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={2}
              lg={2}
              style={{ display: isMatch ? "none" : "block", textAlign: "center" }}
            >
              <ArrowForwardIcon style={{ height: "77px", width: "50px" }} />
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={5}
              style={{ textAlign: isMatch ? "left" : "right", marginTop: isMatch ? "20px" : "0px" }}
            >
              <Grid item xs={12} sm={4} md={6} lg={6}>
                <Button sx={styles.creator} onClick={openPopup}>
                  <Typography textTransform="none" fontSize={"22px"} padding={"10px 20px"}>
                    I’m a creator
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={4} md={6} lg={5}>
                <Button sx={styles.brands} onClick={openPopup}>
                  <Typography textTransform="none" fontSize={"22px"} padding={"10px 20px"}>
                    I’m a brand
                  </Typography>
                </Button>
                <Dialog open={openDialog} onClose={handleClose}>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
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
                          fontWeight: "700",
                          borderRadius: "10px",
                        }}
                        sx={{
                          backgroundColor: userType == true ? "#d0bcff" : "transparent",
                        }}
                        onClick={onChangeCreator}
                      >
                        I'm a Creater
                      </Button>
                      <Button
                        style={{
                          textTransform: "none",
                          color: "#49454F",
                          fontSize: "16px",
                          fontWeight: "700",
                          borderRadius: "10px",
                        }}
                        sx={{
                          backgroundColor: userType == false ? "#d0bcff" : "transparent",
                        }}
                        onClick={onChangeBrand}
                      >
                        I'm a Brand
                      </Button>
                    </Box>
                    {userType ? <Creatorpopup /> : <Brandspopup />}
                    <Button style={{ backgroundColor: "black", borderRadius: "20px" }}>
                      <Typography textTransform={"none"}>Get in Touch</Typography>{" "}
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
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default EarlyAcess;
