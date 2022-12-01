import React, { useState } from "react";
import { Grid, Typography, Button, Dialog, IconButton, Box } from "@mui/material";
import { styles } from "./style";
import { CustomContainer } from "../../landinglayout";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material";
import Creatorpopup from "../../popup-dialog/creatorpopup";
import Brandspopup from "../../popup-dialog/brandspopup";

const Company = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [userType, setUserType] = useState(true);
  const openPopup = () => setOpenDialog(true);
  const onChangeCreator = () => setUserType(true);
  const onChangeBrand = () => setUserType(false);
  const handleClose = () => setOpenDialog(false);
  const closePopup = () => setOpenDialog(false);
  const theme = useTheme();
  return (
    <CustomContainer>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{ display: "flex", flexDirection: "column" }}
        paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          paddingX={{ xs: theme.spacing(0), sm: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30) }}
        >
          <Typography
            fontSize={{ xs: "48px", sm: "54px" }}
            fontWeight={"700"}
            paddingBottom={"40px"}
            sx={styles.heading}
          >
            You're in good company
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          lg={8}
          paddingX={{ xs: theme.spacing(0), sm: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30) }}
        >
          <Typography fontSize={{ xs: "30px", sm: "40px" }} sx={styles.Typography}>
            Join hundreds of creators and influencers selling their favourite Australian brands directly to their
            audience.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          lg={2.5}
          paddingX={{ xs: theme.spacing(0), md: theme.spacing(20), lg: theme.spacing(30) }}
        >
          <Button sx={styles.creator} onClick={openPopup}>
            <Typography textTransform="none" fontSize={"22px"}>
              I’m a creator
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
                  <Typography style={{ fontSize: "36px", paddingBottom: "15px" }}>{"Let’s talk growth"}</Typography>
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
              <Button style={{ backgroundColor: "black", borderRadius: "30px", padding: "10px" }}>
                <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"}>
                  Get in touch
                </Typography>
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
    </CustomContainer>
  );
};

export default Company;
