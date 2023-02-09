import React, { useRef } from "react";
import { Formik, ErrorMessage } from "formik";
import { Typography, Box, Button } from "@mui/material";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const SubmitSchema = Yup.object().shape({
  Order_Number: Yup.string().required("Order number is required!"),
  Reason_For_Return: Yup.string().required("Reason is required!"),
  First_Name: Yup.string().required("First Name is required!"),
  Last_Name: Yup.string().required("Last Name is required!"),
  Email_Address: Yup.string().required("Email is required!"),
});

const ReturnForm = () => {
  const forms = useRef();
  console.log("");

  return (
    <>
      {/* desktop view */}
      <Box sx={{ width: "100%", display: { xs: "none", sm: "block" } }}>
        <Box sx={{ margin: "1rem" }}>
          <img src="/backArrow.png" />
        </Box>
        <Box sx={{ width: "55%", margin: "auto" }}>
          <Box sx={{ marginLeft: "2rem", marginTop: "2rem" }}>
            <Typography variant="h1">Returns form</Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: "300", marginTop: "2rem" }}>
              We want you to be completely satisfied with your purchases; if for any reason you change your mind, we’re
              happy to refund all full-priced items. Please fill in the below form.
            </Typography>
          </Box>
          <Formik
            initialValues={{
              First_Name: "",
              Last_Name: "",
              Email_Address: "",
              Order_Number: "",
              Phone_Number: "",
              Reason_For_Return: "",
            }}
            validationSchema={SubmitSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log("values", values);
              emailjs.sendForm("service_2y5c7s5", "template_lwj4t3j", forms.current, "eE9W4Thiy_5GA_B4N").then(
                (result) => {
                  console.log("success", result.text);
                },
                (error) => {
                  console.log("Faild...", error.text);
                },
              );
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} ref={forms}>
                <Box sx={{ margin: "2rem" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "40px",
                    }}
                  >
                    <Box>
                      <input
                        type="text"
                        name="Order_Number"
                        onChange={handleChange}
                        value={values.Order_Number}
                        onBlur={handleBlur}
                        placeholder="Order Number"
                        style={{
                          width: "350px",
                          height: "50px",
                          borderRadius: "40px",
                          border: "1px solid #BEBEBE",
                          paddingLeft: "25px",
                          // marginBottom: "30px",
                          fontSize: "15px",
                        }}
                      />
                      <Box sx={{ color: "red" }}>
                        <ErrorMessage component="div" name="Order_Number" />
                      </Box>
                      {/* {errors.orderNumber && touched.orderNumber ? (
                        <Box sx={{ color: "red" }}>{errors.orderNumber}</Box>
                      ) : null} */}
                    </Box>
                    <Box>
                      <select
                        name="Reason_For_Return"
                        onChange={handleChange}
                        style={{
                          width: "380px",
                          height: "50px",
                          borderRadius: "40px",
                          border: "1px solid #BEBEBE",
                          paddingLeft: "25px",
                          // marginBottom: "30px",
                          color: "#808080",
                          fontSize: "15px",
                        }}
                      >
                        <option value={values.Reason_For_Return} selected>
                          Reasons for return
                        </option>
                        <option value="Size was too small">Size was too small</option>
                        <option value="Size was too big">Size was too big</option>
                        <option value="Change of mind">Change of mind</option>
                        <option value="Item not as described">Item not as described</option>
                        <option value="Received the wrong item">Received the wrong item</option>
                        <option value="Damaged or defective">Damaged or defective</option>
                        <option value="Other">Other</option>
                      </select>
                      <Box sx={{ color: "red" }}>
                        <ErrorMessage component="div" name="Reason_For_Return" />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Box>
                      <input
                        type="text"
                        name="First_Name"
                        value={values.First_Name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="First Name"
                        style={{
                          width: "350px",
                          height: "50px",
                          borderRadius: "40px",
                          border: "1px solid #BEBEBE",
                          paddingLeft: "25px",
                          fontSize: "15px",
                        }}
                      />
                      <Box sx={{ color: "red" }}>
                        <ErrorMessage component="div" name="First_Name" />
                      </Box>
                      {/* {errors.fname && touched.fname ? <div>{errors.fname}</div> : null} */}
                    </Box>
                    <Box>
                      <input
                        type="text"
                        name="Last_Name"
                        value={values.Last_Name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Last Name"
                        style={{
                          width: "350px",
                          height: "50px",
                          borderRadius: "40px",
                          border: "1px solid #BEBEBE",
                          paddingLeft: "25px",
                          fontSize: "15px",
                        }}
                      />
                      <Box sx={{ color: "red" }}>
                        <ErrorMessage component="div" name="Last_Name" />
                      </Box>
                      {/* {errors.lname && touched.lname ? <div>{errors.lname}</div> : null} */}
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Box>
                      <input
                        type="email"
                        name="Email_Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Email_Address}
                        placeholder="Email Address"
                        style={{
                          width: "350px",
                          height: "50px",
                          borderRadius: "40px",
                          border: "1px solid #BEBEBE",
                          paddingLeft: "25px",
                          fontSize: "15px",
                        }}
                      />
                      <Box sx={{ color: "red" }}>
                        <ErrorMessage component="div" name="Email_Address" />
                      </Box>
                      {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
                    </Box>
                    <Box>
                      <input
                        type="text"
                        name="Phone_Number"
                        value={values.Phone_Number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Phone Number"
                        style={{
                          width: "350px",
                          height: "50px",
                          borderRadius: "40px",
                          border: "1px solid #BEBEBE",
                          paddingLeft: "25px",
                          fontSize: "15px",
                        }}
                      />
                      <Box sx={{ color: "red" }}>
                        <ErrorMessage component="div" name="Phone_Number" />
                      </Box>
                      {/* {errors.pNumber && touched.pNumber ? <div>{errors.pNumber}</div> : null} */}
                    </Box>
                  </Box>
                </Box>

                <Typography sx={{ fontSize: "20px", fontWeight: "300", marginTop: "2rem", marginLeft: "2rem" }}>
                  Our customer support team will be in contact with you to assist in completing your return.
                </Typography>
                <Box sx={{ textAlign: "center" }}>
                  <Button
                    type="submit"
                    href="thankyou-return"
                    disabled={
                      Object.keys(errors).length === 0 ? (values?.Email_Address.length > 0 ? false : true) : true
                    }
                    sx={{
                      width: "400px",
                      backgroundColor: "primary.dark",
                      color: "primary.main",
                      borderRadius: "666px",
                      fontWeight: "600",
                      textTransform: "none",
                      padding: "10px 32.5px",
                      marginTop: "40px",
                      marginBottom: "50px",
                      fontSize: "16px",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
      {/* mobile view */}

      <Box sx={{ width: "100%", display: { xs: "block", sm: "none" } }}>
        <Box sx={{ margin: "1rem" }}>
          <img src="/backArrow.png" />
        </Box>
        <Box sx={{ marginLeft: "2rem", marginTop: "2rem" }}>
          <Typography variant="h1">Returns form</Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: "300", marginTop: "1rem" }}>
            We want you to be completely satisfied with your purchases; if for any reason you change your mind, we’re
            happy to refund all full-priced items. Please fill in the below form.
          </Typography>
        </Box>

        <Formik
          initialValues={{
            First_Name: "",
            Last_Name: "",
            Email_Address: "",
            Order_Number: "",
            Phone_Number: "",
            Reason_For_Return: "",
          }}
          validationSchema={SubmitSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("values", values);
            emailjs.sendForm("service_2y5c7s5", "template_lwj4t3j", forms.current, "eE9W4Thiy_5GA_B4N").then(
              (result) => {
                console.log("success", result.text);
              },
              (error) => {
                console.log("Faild...", error.text);
              },
            );
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} ref={forms}>
              <Box sx={{ margin: "2rem" }}>
                <Box sx={{ marginBottom: "20px" }}>
                  <input
                    type="text"
                    name="Order_Number"
                    onChange={handleChange}
                    value={values.Order_Number}
                    onBlur={handleBlur}
                    placeholder="Order Number"
                    style={{
                      width: "350px",
                      height: "50px",
                      borderRadius: "40px",
                      border: "1px solid #BEBEBE",
                      paddingLeft: "25px",
                      fontSize: "15px",
                    }}
                  />
                  <Box sx={{ color: "red" }}>
                    <ErrorMessage component="div" name="Order_Number" />
                  </Box>
                </Box>
                <Box sx={{ marginBottom: "20px" }}>
                  <select
                    name=" Reason_For_Return"
                    onChange={handleChange}
                    style={{
                      width: "380px",
                      height: "50px",
                      borderRadius: "40px",
                      border: "1px solid #BEBEBE",
                      paddingLeft: "25px",
                      color: "#808080",
                      fontSize: "15px",
                    }}
                  >
                    <option value={values.Reason_For_Return} selected>
                      Reasons for return
                    </option>
                    <option value="Size was too small">Size was too small</option>
                    <option value="Size was too big">Size was too big</option>
                    <option value="Change of mind">Change of mind</option>
                    <option value="Item not as described">Item not as described</option>
                    <option value="Received the wrong item">Received the wrong item</option>
                    <option value="Damaged or defective">Damaged or defective</option>
                    <option value="Other">Other</option>
                  </select>
                  <Box sx={{ color: "red" }}>
                    <ErrorMessage component="div" name="Reason_For_Return" />
                  </Box>
                </Box>
                <Box sx={{ marginBottom: "20px" }}>
                  <input
                    type="text"
                    name="First_Name"
                    value={values.First_Name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="First Name"
                    style={{
                      width: "350px",
                      height: "50px",
                      borderRadius: "40px",
                      border: "1px solid #BEBEBE",
                      paddingLeft: "25px",
                      fontSize: "15px",
                    }}
                  />
                  <Box sx={{ color: "red" }}>
                    <ErrorMessage component="div" name="First_Name" />
                  </Box>
                </Box>
                <Box sx={{ marginBottom: "20px" }}>
                  <input
                    type="text"
                    name="Last_Name"
                    value={values.Last_Name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Last Name"
                    style={{
                      width: "350px",
                      height: "50px",
                      borderRadius: "40px",
                      border: "1px solid #BEBEBE",
                      paddingLeft: "25px",
                      fontSize: "15px",
                    }}
                  />
                  <Box sx={{ color: "red" }}>
                    <ErrorMessage component="div" name="Last_Name" />
                  </Box>
                </Box>

                <Box sx={{ marginBottom: "20px" }}>
                  <input
                    type="email"
                    name="Email_Address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Email_Address}
                    placeholder="Email Address"
                    style={{
                      width: "350px",
                      height: "50px",
                      borderRadius: "40px",
                      border: "1px solid #BEBEBE",
                      paddingLeft: "25px",
                      fontSize: "15px",
                    }}
                  />
                  <Box sx={{ color: "red" }}>
                    <ErrorMessage component="div" name="Email_Address" />
                  </Box>
                </Box>
                <Box sx={{ marginBottom: "20px" }}>
                  <input
                    type="text"
                    name="Phone_Number"
                    value={values.Phone_Number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Phone Number"
                    style={{
                      width: "350px",
                      height: "50px",
                      borderRadius: "40px",
                      border: "1px solid #BEBEBE",
                      paddingLeft: "25px",
                      fontSize: "15px",
                    }}
                  />
                  <Box sx={{ color: "red" }}>
                    <ErrorMessage component="div" name="Phone_Number" />
                  </Box>
                </Box>
              </Box>

              <Typography sx={{ fontSize: "20px", fontWeight: "300", marginTop: "2rem", marginLeft: "2rem" }}>
                Our customer support team will be in contact with you to assist in completing your return.
              </Typography>
              <Box>
                <Button
                  type="submit"
                  href="thankyou-return"
                  disabled={Object.keys(errors).length === 0 ? (values?.Email_Address.length > 0 ? false : true) : true}
                  sx={{
                    width: "400px",
                    backgroundColor: "primary.dark",
                    color: "primary.main",
                    borderRadius: "666px",
                    fontWeight: "600",
                    textTransform: "none",
                    padding: "10px 32.5px",
                    marginTop: "40px",
                    marginBottom: "50px",
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default ReturnForm;
