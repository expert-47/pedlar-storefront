import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { brandvalidation } from "../add-validation/brand-validation";
import React, { useState, useRef } from "react";
import { styles } from "./styles";
import emailjs from "@emailjs/browser";

const Brandspopup = (props: any) => {
  const [submitform, setSubmitForm] = useState(true);
  const form = useRef();
  const formsubmission = (e: any) => {
    setSubmitForm(false);
    props?.isSecondModalActive(false);
    e.preventDefault();

    emailjs.sendForm("service_2y5c7s5", "template_k8u5oum", form.current, "eE9W4Thiy_5GA_B4N").then(
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
            companyName: "",
            brandWebsite: "",
          }}
          validationSchema={brandvalidation}
          onSubmit={submitHandler}
        >
          {({ values, errors, touched, handleSubmit }) => (
            <Form onSubmit={handleSubmit} ref={form}>
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
                  style: { color: "#49454F", fontSize: "16px", fontWeight: "400" },
                }}
              />
              <TextField
                label="Phone Number (+61)"
                placeholder="Enter Here"
                sx={styles.TextFeild}
                InputLabelProps={{
                  style: { color: "#49454F", fontSize: "16px", fontWeight: "400" },
                }}
              />
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
                        values?.companyName &&
                        values?.brandWebsite
                      )
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

export default Brandspopup;
