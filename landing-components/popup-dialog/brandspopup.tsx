import { Button, Grid, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { addvalidation } from "../add-validation/addvalidation";
import React from "react";
import { styles } from "./styles";

const Brandspopup = () => {
    const submitHandler = () => {
      console.log("clicked");
    };
  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          companyName: "",
          brandWebsite: "",
        }}
        validationSchema={addvalidation}
        onSubmit={submitHandler}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
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
              onClick={submitHandler}
              sx={{
                ...styles.Button,
                color: errors ? "White !important" : "black",
                opacity: errors ? "0.4" : "",
              }}
              disabled={
                errors?.firstName && errors?.lastName && errors?.email && errors?.companyName && errors?.brandWebsite
                  ? false
                  : true
              }
            >
              <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"}>
                Get in touch
              </Typography>
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default Brandspopup;
