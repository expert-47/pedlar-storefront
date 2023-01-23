import { Box, Button, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { creatorvalidation } from "../add-validation/creator-validation";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { styles } from "./styles";
import emailjs from "@emailjs/browser";

const Creatorpopup = (props: any) => {
  const [submitform, setSubmitForm] = useState(true);
  const form = useRef();
  const formsubmission = (e: any) => {
    setSubmitForm(false);
    props?.isSecondModalActive(false);
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
  const submitHandler = () => {
    console.log("clicked");
  };

  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      {submitform ? (
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
          {({ values, errors, touched, handleSubmit }) => (
            <Form onSubmit={handleSubmit} ref={form}>
              <Field
                as={TextField}
                type="text"
                name="firstName"
                variant="outlined"
                label="First Name"
                placeholder="Enter Here"
                required
                value={values?.firstName}
                error={touched?.firstName && Boolean(errors?.firstName)}
                helperText={touched?.firstName && errors?.firstName}
                sx={styles.TextFeild}
                InputLabelProps={{
                  style: { color: "#49454F", fontSize: "16px", fontWeight: "400" },
                }}
              />
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
                  style: { color: "#49454F", fontSize: "16px", fontWeight: "400" },
                }}
              />
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
                  style: {
                    color: "#49454F",
                    fontSize: "16px",
                    fontWeight: "400",
                  },
                }}
              />
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
                  style: { color: "#49454F", fontSize: "16px", fontWeight: "400" },
                }}
              />
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
                  style: { color: "#49454F", fontSize: "16px", fontWeight: "400" },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Image src="/insta-icon.svg" alt="insta" height={20} width={20} />
                    </InputAdornment>
                  ),
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
                  style: { color: "#49454F", fontSize: "16px", fontWeight: "400" },
                }}
              />
              <Button
                sx={{
                  ...styles.Button,
                  color: values ? "White !important" : "#1C1B1F",
                  backgroundColor: errors ? "#1C1B1F" : "",
                  boxShadow: errors ? "unset" : "",
                }}
                variant="contained"
                onClick={formsubmission}
                value="Send"
                disabled={
                  Object.keys(errors).length > 0
                    ? true
                    : !(values?.firstName && values?.lastName && values?.email && values?.city && values?.instagramUser)
                    ? true
                    : false
                }
              >
                <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"}>
                  Get in touch
                </Typography>
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <Box style={{ textAlign: "center", alignItems: "center" }}>
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
    </Grid>
  );
};

export default Creatorpopup;
