import React, { useState } from "react";
import { styles } from "./style";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Modal,
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
  const openLogin = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const openStorePage = () => {
    router.push("/store/storeIndex");
  };
  const openCreators = () => {
    router.push("/store/forcreator");
  };
  const openBrands = () => {
    router.push("/store/forbrands");
  };
  const openGetAccess = () => {
    //router.push("/store/storeIndex");
    console.log("Get Access clicked");
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
            <Grid item xs={12} sm={12} md={12} lg={4} style={{ paddingLeft: "30px" }}>
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
            <Grid item xs={12} sm={12} md={12} lg={4} gap={1} style={{ textAlign: "right", paddingRight: "50px" }}>
              <Button sx={styles.Login} onClick={openLogin}>
                <Typography textTransform="none" sx={styles.LoginTypo}>
                  Log in
                </Typography>
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={styles.LoginBox}>
                  <Typography style={{ fontSize: "36px", paddingBottom: "15px" }}>Join the waitlist!</Typography>
                  <TextField label="First Name *" variant="outlined" sx={styles.TextFeild} />
                  <TextField label="Last Name *" variant="outlined" sx={styles.TextFeild} />
                  <TextField label="Email Address *" variant="outlined" sx={styles.TextFeild} />
                  <TextField label="City *" variant="outlined" sx={styles.TextFeild} />
                  <TextField
                    label="TextField"
                    sx={styles.TextFeilds}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Image src="/insta-icon.svg" alt="insta" height={20} width={20} />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <TextField
                    label="TextField"
                    sx={styles.TextFeilds}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Image src="/tiktok-icon.svg" alt="insta" height={20} width={20} />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <Button style={{ backgroundColor: "black", borderRadius: "20px" }}>Get in Touch</Button>
                  <Typography>
                    We will communicate with you about the information requested and other Pedlar services. The use of
                    your information is governed by Pedlar’s Privacy Policy.
                  </Typography>
                </Box>
              </Modal>
              <Button sx={styles.GetAccess} onClick={openGetAccess}>
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
