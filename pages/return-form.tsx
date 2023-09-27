import React, { useRef } from "react";
import { Formik, ErrorMessage } from "formik";
import { Typography, Box, Button, useMediaQuery, Theme } from "@mui/material";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";

const SubmitSchema = Yup.object().shape({
  Order_Number: Yup.string().required("Order number is required!"),
  Reason_For_Return: Yup.string().required("Reason is required!"),
  First_Name: Yup.string().required("First Name is required!"),
  Last_Name: Yup.string().required("Last Name is required!"),
  Email_Address: Yup.string().required("This field is required").email("Invalid Email Address"),
});

const ReturnForm = () => {
  const router = useRouter();
  const forms = useRef<HTMLFormElement>(null);
  const forms2 = useRef<HTMLFormElement>(null);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <>
      {!isMobile ? (
        <Box sx={{ width: "100%", display: { xs: "none", sm: "block" } }}>
          <Link href={"/return-policy"}>
            <Box sx={{ margin: "1rem" }}>
              <img src="/backArrow.png" alt="back arrow pedlar" />
            </Box>
          </Link>
          <Box sx={{ width: "60%", margin: "auto" }}>
            <Box sx={{ width: "246px", marginTop: "1rem" }}>
              <Typography variant="h1" sx={{ fontSize: "26px", fontWeight: "600px" }}>
                Returns form
              </Typography>
            </Box>
            <Box sx={{ width: "700px" }}>
              <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "1.5rem", color: "#1C1B1F" }}>
                We want you to be completely satisfied with your purchases; if for any reason you change your mind,
                we’re happy to refund all full-priced items. Please fill in the below form.
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
              onSubmit={() => {
                emailjs
                  .sendForm(
                    "service_2y5c7s5",
                    "template_lwj4t3j",
                    forms2.current ? forms2.current : "",
                    "eE9W4Thiy_5GA_B4N",
                  )
                  .then(
                    (result) => {
                      console.log("success", result.text);
                      router.push("/thankyou-return");
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

                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit} ref={forms2}>
                  <Box sx={{ marginTop: "1.5rem" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "20px",
                        gap: "20px",
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
                            width: "320px",
                            height: "44px",
                            borderRadius: "40px",
                            border: "1px solid #BEBEBE",
                            paddingLeft: "25px",
                            fontSize: "16px",
                            fontWeight: 400,
                          }}
                        />
                        <Box sx={{ color: "red", fontSize: "16px", fontWeight: 400 }}>
                          <ErrorMessage component="div" name="Order_Number" />
                        </Box>
                      </Box>
                      <Box>
                        <select
                          name="Reason_For_Return"
                          onChange={handleChange}
                          style={{
                            width: "350px",
                            height: "48px",
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
                        <Box sx={{ color: "red", fontSize: "16px", fontWeight: 400 }}>
                          <ErrorMessage component="div" name="Reason_For_Return" />
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "20px",
                        gap: "20px",
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
                            width: "320px",
                            height: "44px",
                            borderRadius: "40px",
                            border: "1px solid #BEBEBE",
                            paddingLeft: "25px",
                            fontSize: "15px",
                          }}
                        />
                        <Box sx={{ color: "red", fontSize: "16px", fontWeight: 400 }}>
                          <ErrorMessage component="div" name="First_Name" />
                        </Box>
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
                            width: "320px",
                            height: "44px",
                            borderRadius: "40px",
                            border: "1px solid #BEBEBE",
                            paddingLeft: "25px",
                            fontSize: "15px",
                          }}
                        />
                        <Box sx={{ color: "red", fontSize: "16px", fontWeight: 400 }}>
                          <ErrorMessage component="div" name="Last_Name" />
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "20px",
                        gap: "20px",
                      }}
                    >
                      <Box>
                        <input
                          type="email"
                          name="Email_Address"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          value={values.Email_Address}
                          placeholder="Email Address"
                          style={{
                            width: "320px",
                            height: "44px",
                            borderRadius: "40px",
                            border: "1px solid #BEBEBE",
                            paddingLeft: "25px",
                            fontSize: "15px",
                          }}
                        />
                        <Box sx={{ color: "red", fontSize: "16px", fontWeight: 400 }}>
                          <ErrorMessage component="div" name="Email_Address" />
                        </Box>
                      </Box>
                      <Box>
                        <input
                          type="number"
                          name="Phone_Number"
                          value={values.Phone_Number}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Phone Number"
                          style={{
                            width: "320px",
                            height: "44px",
                            borderRadius: "40px",
                            border: "1px solid #BEBEBE",
                            paddingLeft: "25px",
                            fontSize: "15px",
                          }}
                        />
                        <Box sx={{ color: "red", fontSize: "16px", fontWeight: 400 }}>
                          <ErrorMessage component="div" name="Phone_Number" />
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "2rem", color: "#1C1B1F" }}>
                    Our customer support team will be in contact with you to assist in completing your return.
                  </Typography>
                  <Box sx={{ textAlign: "center" }}>
                    <Button
                      type="submit"
                      disabled={Object.keys(errors).length > 0 ? true : !values?.Email_Address.length ? true : false}
                      sx={{
                        width: "335px",
                        height: "46px",
                        color: values ? "White !important" : "#1C1B1F",
                        backgroundColor:
                          Object.keys(errors).length > 0
                            ? "#808080"
                            : !values?.Email_Address.length
                            ? "#808080"
                            : "#1C1B1F",
                        boxShadow: errors ? "unset" : "",
                        borderRadius: "666px",
                        fontWeight: 600,
                        textTransform: "none",
                        padding: "10px 32.5px",
                        marginTop: "40px",
                        marginBottom: "50px",
                        fontSize: "16px",
                        "&:hover": {
                          backgroundColor: "#1C1B1F",
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
      ) : (
        <Box sx={{ width: "100%", display: { xs: "block", sm: "none" } }}>
          <Link href={"/return-policy"}>
            <Box sx={{ margin: "1rem" }}>
              <img src="/backArrow.png" />
            </Box>
          </Link>
          <Box sx={{ marginLeft: "1rem", marginTop: "2rem" }}>
            <Typography variant="h1">Returns form</Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: "300", marginTop: "1rem", width: "335px" }}>
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
            onSubmit={() => {
              emailjs
                .sendForm(
                  "service_2y5c7s5",
                  "template_lwj4t3j",
                  forms.current ? forms.current : "",
                  "eE9W4Thiy_5GA_B4N",
                )
                .then(
                  (result) => {
                    console.log("success", result.text);
                    router.push("/thankyou-return");
                  },
                  (error) => {
                    console.log("Faild...", error.text);
                  },
                );
            }}
          >
            {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit} ref={forms}>
                <Box sx={{ padding: "1rem", paddingRight: "1rem", marginTop: "2rem" }}>
                  <Box sx={{ marginBottom: "20px" }}>
                    <input
                      type="text"
                      name="Order_Number"
                      onChange={handleChange}
                      value={values.Order_Number}
                      onBlur={handleBlur}
                      placeholder="Order Number"
                      style={{
                        width: "335px",
                        height: "44px",
                        borderRadius: "40px",
                        border: "1px solid #BEBEBE",
                        paddingLeft: "25px",
                        fontSize: "15px",
                        marginRight: "1rem",
                      }}
                    />
                    <Box sx={{ color: "red", fontFamily: "Inter" }}>
                      <ErrorMessage component="div" name="Order_Number" />
                    </Box>
                  </Box>
                  <Box sx={{ marginBottom: "20px" }}>
                    <select
                      name="Reason_For_Return"
                      onChange={handleChange}
                      style={{
                        width: "364px",
                        height: "48px",
                        borderRadius: "40px",
                        border: "1px solid #BEBEBE",
                        paddingLeft: "25px",
                        color: "#808080",
                        fontSize: "15px",
                        marginRight: "1rem",
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
                    <Box sx={{ color: "red", fontFamily: "Inter" }}>
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
                        width: "335px",
                        height: "44px",
                        borderRadius: "40px",
                        border: "1px solid #BEBEBE",
                        paddingLeft: "25px",
                        fontSize: "15px",
                        marginRight: "1rem",
                      }}
                    />
                    <Box sx={{ color: "red", fontFamily: "Inter" }}>
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
                        width: "335px",
                        height: "44px",
                        borderRadius: "40px",
                        border: "1px solid #BEBEBE",
                        paddingLeft: "25px",
                        fontSize: "15px",
                        marginRight: "1rem",
                      }}
                    />
                    <Box sx={{ color: "red", fontFamily: "Inter" }}>
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
                        width: "335px",
                        height: "44px",
                        borderRadius: "40px",
                        border: "1px solid #BEBEBE",
                        paddingLeft: "25px",
                        fontSize: "15px",
                        marginRight: "1rem",
                      }}
                    />
                    <Box sx={{ color: "red", fontFamily: "Inter" }}>
                      <ErrorMessage component="div" name="Email_Address" />
                    </Box>
                  </Box>
                  <Box sx={{ marginBottom: "20px" }}>
                    <input
                      type="number"
                      name="Phone_Number"
                      value={values.Phone_Number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Phone Number"
                      style={{
                        width: "335px",
                        height: "44px",
                        borderRadius: "40px",
                        border: "1px solid #BEBEBE",
                        paddingLeft: "25px",
                        fontSize: "15px",
                        marginRight: "1rem",
                      }}
                    />
                    <Box sx={{ color: "red", fontFamily: "Inter" }}>
                      <ErrorMessage component="div" name="Phone_Number" />
                    </Box>
                  </Box>
                </Box>
                <Typography
                  sx={{ fontSize: "16px", fontWeight: "400", marginTop: "2rem", marginLeft: "1rem", width: "335px" }}
                >
                  Our customer support team will be in contact with you to assist in completing your return.
                </Typography>
                <Box sx={{ margin: "1rem" }}>
                  <Button
                    type="submit"
                    disabled={Object.keys(errors).length > 0 ? true : !values?.Email_Address.length ? true : false}
                    sx={{
                      width: "363px",
                      height: "46px",
                      color: values ? "White !important" : "#1C1B1F",
                      backgroundColor:
                        Object.keys(errors).length > 0
                          ? "#808080"
                          : !values?.Email_Address.length
                          ? "#808080"
                          : "#1C1B1F",
                      boxShadow: errors ? "unset" : "",
                      borderRadius: "666px",
                      fontWeight: 600,
                      textTransform: "none",
                      padding: "10px 32.5px",
                      marginTop: "40px",
                      marginBottom: "50px",
                      fontSize: "16px",
                      "&:hover": {
                        backgroundColor: "#1C1B1F",
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
      )}
    </>
  );
};

export default ReturnForm;
