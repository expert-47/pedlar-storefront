import React from "react";

import { Typography, Box, useMediaQuery, Theme, useTheme } from "@mui/material";
import BaseFooter from "components/footer/baseFooter";
import Divider from "@mui/material/Divider";
import styles from "styles/home";
import Footer from "components/footer/footer";

const ThankyouReturn = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <>
      {!isMobile ? (
        <Box sx={{ width: "100%", display: { xs: "none", sm: "block" } }}>
          <Box sx={{ width: "50%", margin: "auto", marginTop: "10%", marginBottom: "15%" }}>
            <Typography sx={{ fontSize: "35px", fontWeight: "450", marginBottom: "2rem" }}>Thank you.</Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: "380", marginBottom: "1rem" }}>
              Thank you for completing your returns form.
            </Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: "380" }}>
              We have received your form and a member of our team will be in contact shortly to continue the returns
              process.
            </Typography>
          </Box>
          <Divider sx={styles.footerDivider} />
          <BaseFooter />
          <Footer />
        </Box>
      ) : (
        <Box sx={{ width: "100%", display: { xs: "block", sm: "none" } }}>
          <Box sx={{ margin: "2rem", marginTop: "10%", marginBottom: "15%" }}>
            <Typography sx={{ fontSize: "35px", fontWeight: "450", marginBottom: "2rem" }}>Thank you.</Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: "380", marginBottom: "1rem" }}>
              Thank you for completing your returns form.
            </Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: "380" }}>
              We have received your form and a member of our team will be in contact shortly to continue the returns
              process.
            </Typography>
          </Box>
          <Divider sx={styles.footerDivider} />
          <BaseFooter />
          <Footer />
        </Box>
      )}
    </>
  );
};

export default ThankyouReturn;
