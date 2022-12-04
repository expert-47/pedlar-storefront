import { Grid, Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";

const Storefree = () => {
  const [submitform, setSubmitForm] = useState(true);
  const formsubmission = () => setSubmitForm(false);
  return (
    <CustomContainer>
      <Box
        sx={styles.MainBox}
        margin={{ xs: "30px 20px", sm: "30px 30px" }}
        padding={{ xs: "60px 15px 57px", sm: "60px 20px 57px" }}
        style={{ zIndex: "999", position: "relative" }}
      >
        <Grid container item xs={12} sm={12} md={12} lg={12} style={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              textTransform={"none"}
              sx={styles.heading}
              fontSize={{ xs: "48px", sm: "54px" }}
              style={{
                fontFamily:
                  "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
              }}
            >
              Start building your store,{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: "400",
                  fontFamily:
                    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
                }}
              >
                for free
              </span>
            </Typography>
          </Grid>
          {submitform ? (
            <Box style={{ textAlign: "center" }}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography textTransform={"none"} fontSize={"22px"} sx={styles.title}>
                  Fill in the form below and we’ll get in touch with you to begin the process
                </Typography>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                gap={15}
                style={{
                  marginTop: "60px",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
                  <TextField
                    label="First Name"
                    placeholder="Enter Here"
                    required
                    sx={styles.TextFeild}
                    InputLabelProps={{
                      style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
                  <TextField
                    label="Last Name"
                    placeholder="Enter Here"
                    required
                    sx={styles.TextFeild}
                    InputLabelProps={{
                      style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
                  <TextField
                    label="Email"
                    placeholder="Enter Here"
                    required
                    sx={styles.TextFeild}
                    InputLabelProps={{
                      style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
                  <TextField
                    label="City"
                    placeholder="Enter Here"
                    required
                    sx={styles.TextFeild}
                    InputLabelProps={{
                      style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
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
                </Grid>
                <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
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
                </Grid>
              </Grid>
              <Button sx={styles.Button} onClick={formsubmission}>
                <Typography textTransform={"none"} fontSize={"22px"}>
                  Get in touch
                </Typography>
              </Button>
            </Box>
          ) : (
            <Box style={{ justifyContent: "center", textAlign: "center", padding: "50px" }}>
              <Box style={{ paddingBottom: "20px" }}>
                <Typography fontSize={"48px"} fontWeight={700}>
                  Thank you!
                </Typography>
              </Box>
              <Grid style={{ paddingBottom: "40px", color: "#49454F" }}>
                <Typography fontSize={"22px"} fontWeight={600} style={{ opacity: "0.74" }}>
                  A member of our team will
                </Typography>
                <Typography fontSize={"22px"} fontWeight={600} style={{ opacity: "0.74" }}>
                  contact you shortly.
                </Typography>
              </Grid>
            </Box>
          )}
          <Grid item xs={12} sm={12} md={12} style={{ textAlign: "center", color: "#49454F" }}>
            <Typography textTransform={"none"} fontSize={"16px"} fontWeight={400}>
              We will communicate with you about the information requested and other Pedlar services.
            </Typography>
            <Typography textTransform={"none"} fontSize={"16px"} fontWeight={400}>
              The use of your information is goverened by Pedlar’s Privacy Policy
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Storefree;
