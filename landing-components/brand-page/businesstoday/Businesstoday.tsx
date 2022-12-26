import { Grid, Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import { Field, Form, Formik } from "formik";
import { brandvalidation } from "../../add-validation/brand-validation";

const Businesstoday = () => {
  const [submitform, setSubmitForm] = useState(true);
  const formsubmission = () => setSubmitForm(false);
  const submitHandler = () => {
    console.log("clicked");
  };
  return (
    <CustomContainer>
      <Box
        id="ScheduleCalleForm"
        sx={styles.MainBox}
        margin={{ xs: "30px 20px", sm: "30px 33px" }}
        padding={{ xs: "60px 15px 57px", sm: "60px 20px 57px" }}
        style={{ zIndex: "999", position: "relative", marginTop: "100px", marginBottom: "100px" }}
      >
        <Grid container item xs={12} sm={12} md={12} lg={12} style={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography textTransform={"none"} fontSize={{ xs: "48px", sm: "54px" }} sx={styles.heading}>
              Grow your business today
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
                  companyName: "",
                  brandWebsite: "",
                }}
                validationSchema={brandvalidation}
                onSubmit={submitHandler}
                dirty={true}
                isValid={true}
              >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
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
                      <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
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
                      <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
                        <Field
                          as={TextField}
                          type="text"
                          name="companyName"
                          label="Company Name"
                          placeholder="Enter Here"
                          required
                          value={values?.companyName}
                          error={touched?.companyName && Boolean(errors?.companyName)}
                          helperText={touched?.companyName && errors?.companyName}
                          sx={styles.TextFeild}
                          InputLabelProps={{
                            style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
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
                      <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
                        <TextField
                          label="Phone Number (+61)"
                          placeholder="Enter Here"
                          sx={styles.TextFeild}
                          InputLabelProps={{
                            style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
                        <Field
                          as={TextField}
                          type="url"
                          name="brandWebsite"
                          label="Brand Website"
                          placeholder="Enter Here"
                          required
                          value={values?.brandWebsite}
                          error={touched?.brandWebsite && Boolean(errors?.brandWebsite)}
                          helperText={touched?.brandWebsite && errors?.brandWebsite}
                          sx={styles.TextFeild}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Image src="/globe.svg" alt="insta" height={20} width={20} />
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
                      disabled={
                        Object.keys(errors).length > 0
                          ? true
                          : !(
                              values?.firstName &&
                              values?.lastName &&
                              values?.email &&
                              values?.companyName &&
                              values?.brandWebsite
                            )
                          ? true
                          : false
                      }
                    >
                      <Typography textTransform={"none"} fontSize={"22px"}>
                        Schedule a call
                      </Typography>
                    </Button>
                  </Form>
                )}
              </Formik>
            </Box>
          ) : (
            <Box style={{ textAlign: "center", alignItems: "center", padding: "140px" }}>
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

export default Businesstoday;
