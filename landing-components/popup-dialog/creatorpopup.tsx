import { Button, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { addvalidation } from "../add-validation/addvalidation";
import Image from "next/image";
import React from "react";
import { styles } from "./styles";

const Creatorpopup = () => {
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
          city: "",
          instagramUser: "",
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
              onClick={submitHandler}
              sx={{
                ...styles.Button,
                color: errors ? "White !important" : "black",
                opacity: errors ? "0.4" : "",
              }}
              disabled={
                errors?.firstName && errors?.lastName && errors?.email && errors?.city && errors?.instagramUser
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

export default Creatorpopup;
