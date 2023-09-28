import { Grid, Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
import React, { useState, useRef } from "react";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import { Field, Form, Formik } from "formik";
import { creatorvalidation } from "../../add-validation/creator-validation";
import emailjs from "@emailjs/browser";
import { NextImage } from "components/pedlarImage";
import InstagramIcon from "@mui/icons-material/Instagram";

const Storefree = () => {
  const [submitform, setSubmitForm] = useState(true);
  const form = useRef();
  const submitHandler = () => {};
  const formsubmission = (e: any) => {
    setSubmitForm(false);
    e.preventDefault();

    emailjs.sendForm("service_2y5c7s5", "template_bjrpdiw", form.current, "eE9W4Thiy_5GA_B4N").then(
      (result) => {
        console.log("success", result.text);
      },
      (error) => {
        console.log("Faild...", error.text);
      },
    );
  };
  return (
    <CustomContainer>
      <Box
        id="StoreFreeForm"
        sx={styles.MainBox}
        margin={{ xs: "30px 20px", sm: "30px 30px" }}
        padding={{ xs: "60px 15px 57px", sm: "60px 20px 57px" }}
        style={{ zIndex: "999", position: "relative", marginTop: "100px", marginBottom: "100px" }}
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
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  city: "",
                  instagramUser: "",
                }}
                validationSchema={creatorvalidation}
                onSubmit={submitHandler}
              >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                  <Form onSubmit={handleSubmit} ref={form}>
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
                      <Grid item xs={12} sm={5.5} md={5.5} lg={4.5} style={{ position: "relative" }}>
                        <Field
                          as={TextField}
                          type="text"
                          name="firstName"
                          label="First Name"
                          placeholder="Enter Here"
                          required
                          value={values?.firstName}
                          error={touched?.firstName && Boolean(errors?.firstName)}
                          helperText={touched?.firstName && errors?.firstName}
                          sx={styles.TextFeild}
                          InputLabelProps={{
                            style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={5.5} md={5.5} lg={4.5} style={{ position: "relative" }}>
                        <Field
                          as={TextField}
                          type="text"
                          name="lastName"
                          label="Last Name"
                          placeholder="Enter Here"
                          required
                          value={values?.lastName}
                          error={touched?.lastName && Boolean(errors?.lastName)}
                          helperText={touched?.lastName && errors?.lastName}
                          sx={styles.TextFeild}
                          InputLabelProps={{
                            style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={5.5} md={5.5} lg={4.5} style={{ position: "relative" }}>
                        <Field
                          as={TextField}
                          type="email"
                          name="email"
                          label="Email Address"
                          placeholder="Enter Here"
                          required
                          value={values?.email}
                          error={touched?.email && Boolean(errors?.email)}
                          helperText={touched?.email && errors?.email}
                          sx={styles.TextFeild}
                          InputLabelProps={{
                            style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={5.5} md={5.5} lg={4.5} style={{ position: "relative" }}>
                        <Field
                          as={TextField}
                          type="text"
                          name="city"
                          label="City"
                          placeholder="Enter Here"
                          required
                          value={values?.city}
                          error={touched?.city && Boolean(errors?.city)}
                          helperText={touched?.city && errors?.city}
                          sx={styles.TextFeild}
                          InputLabelProps={{
                            style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={5.5} md={5.5} lg={4.5} style={{ position: "relative" }}>
                        <Field
                          as={TextField}
                          type="text"
                          name="instagramUser"
                          label="Instagram Username"
                          placeholder="Enter Here"
                          required
                          value={values?.instagramUser}
                          error={touched?.instagramUser && Boolean(errors?.instagramUser)}
                          helperText={touched?.instagramUser && errors?.instagramUser}
                          sx={styles.TextFeild}
                          InputLabelProps={{
                            style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <InstagramIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={5.5} md={5.5} lg={4.5} style={{ position: "relative" }}>
                        <TextField
                          label="Tiktok Username"
                          placeholder="Enter Here"
                          name="tiktokUser"
                          sx={styles.TextFeild}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Box
                                  style={{
                                    height: 20,
                                    width: 20,
                                  }}
                                >
                                  <NextImage src="/tiktok-icon.svg" alt="insta" />
                                </Box>
                              </InputAdornment>
                            ),
                          }}
                          InputLabelProps={{
                            style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Button
                      sx={{
                        ...styles.Button,
                        color: values ? "White !important" : "#1C1B1F",
                        backgroundColor: errors ? "#1C1B1F" : "",
                        boxShadow: errors ? "unset" : "",
                      }}
                      className="creatorSubmit"
                      variant="contained"
                      onClick={formsubmission}
                      value="Send"
                      disabled={
                        Object.keys(errors).length > 0
                          ? true
                          : !(
                              values?.firstName &&
                              values?.lastName &&
                              values?.email &&
                              values?.city &&
                              values?.instagramUser
                            )
                          ? true
                          : false
                      }
                    >
                      <Typography textTransform={"none"} fontSize={"22px"}>
                        Get in touch
                      </Typography>
                    </Button>
                  </Form>
                )}
              </Formik>
            </Box>
          ) : (
            <Box
              style={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center" }}
              paddingTop={{ xs: "66px", sm: "140px" }}
              paddingBottom={{ xs: "66px", sm: "140px" }}
            >
              <Box style={{ paddingBottom: "20px" }}>
                <Typography fontSize={{ xs: "44px", sx: "48px" }} fontWeight={700}>
                  Thank you!
                </Typography>
              </Box>
              <Grid item xs={12} sm={8} style={{ paddingBottom: "40px", color: "#49454F" }}>
                <Typography fontSize={{ xs: "18px", sx: "22px" }} fontWeight={600} sx={{ opacity: "0.74" }}>
                  A member of our team will contact you shortly.
                </Typography>
              </Grid>
            </Box>
          )}
          <Grid item xs={12} sm={12} md={12} style={{ textAlign: "center", color: "rgb(73,69,79)" }}>
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
