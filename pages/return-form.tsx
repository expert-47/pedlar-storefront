import React from "react";
import { Formik } from "formik";
import { Typography, Box, Button } from "@mui/material";
import * as Yup from "yup";
import Link from "next/link";

const SignupSchema = Yup.object().shape({
  fname: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  lname: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  pNumber: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  orderNumber: Yup.number().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
const ReturnForm = () => (
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
          initialValues={{ fname: "", lname: "", email: "", orderNumber: "", pNumber: "", choice: "" }}
          // validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
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
            <form onSubmit={handleSubmit}>
              <Box sx={{ margin: "2rem" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box>
                    <input
                      type="text"
                      name="orderNumber"
                      onChange={handleChange}
                      value={values.orderNumber}
                      onBlur={handleBlur}
                      placeholder="Order Number"
                      required
                      style={{
                        width: "350px",
                        height: "50px",
                        borderRadius: "40px",
                        border: "1px solid #BEBEBE",
                        paddingLeft: "25px",
                        marginBottom: "30px",
                        fontSize: "15px",
                      }}
                    />
                    {/* {errors.orderNumber && touched.orderNumber ? (
                      <Box sx={{ color: "red" }}>{errors.orderNumber}</Box>
                    ) : null} */}
                  </Box>
                  <Box>
                    <select
                      name="choice"
                      value={values.choice}
                      required
                      style={{
                        width: "380px",
                        height: "50px",
                        borderRadius: "40px",
                        border: "1px solid #BEBEBE",
                        paddingLeft: "25px",
                        marginBottom: "30px",
                        color: "#808080",
                        fontSize: "15px",
                      }}
                    >
                      <option value="first" selected>
                        Reasons for return
                      </option>
                      <option value="first">Size was too small</option>
                      <option value="second">Size was too big</option>
                      <option value="third">Change of mind</option>
                      <option value="first">Item not as described</option>
                      <option value="second">Received the wrong item</option>
                      <option value="third">Damaged or defective</option>
                      <option value="third">Other</option>
                    </select>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box>
                    <input
                      type="text"
                      name="fname"
                      value={values.fname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="First Name"
                      required
                      style={{
                        width: "350px",
                        height: "50px",
                        borderRadius: "40px",
                        border: "1px solid #BEBEBE",
                        paddingLeft: "25px",
                        marginBottom: "30px",
                        fontSize: "15px",
                      }}
                    />
                    {/* {errors.fname && touched.fname ? <div>{errors.fname}</div> : null} */}
                  </Box>
                  <Box>
                    <input
                      type="text"
                      name="lname"
                      value={values.lname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Last Name"
                      required
                      style={{
                        width: "350px",
                        height: "50px",
                        borderRadius: "40px",
                        border: "1px solid #BEBEBE",
                        paddingLeft: "25px",
                        marginBottom: "30px",
                        fontSize: "15px",
                      }}
                    />
                    {/* {errors.lname && touched.lname ? <div>{errors.lname}</div> : null} */}
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Email Address"
                      required
                      style={{
                        width: "350px",
                        height: "50px",
                        borderRadius: "40px",
                        border: "1px solid #BEBEBE",
                        paddingLeft: "25px",
                        marginBottom: "30px",
                        fontSize: "15px",
                      }}
                    />
                    {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
                  </Box>
                  <Box>
                    <input
                      type="text"
                      name="pNumber"
                      value={values.pNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Phone Number"
                      style={{
                        width: "350px",
                        height: "50px",
                        borderRadius: "40px",
                        border: "1px solid #BEBEBE",
                        paddingLeft: "25px",
                        marginBottom: "30px",
                        fontSize: "15px",
                      }}
                    />
                    {/* {errors.pNumber && touched.pNumber ? <div>{errors.pNumber}</div> : null} */}
                  </Box>
                </Box>
              </Box>

              {/* {errors.email && touched.email && errors.email}
          <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button> */}
              <Typography sx={{ fontSize: "20px", fontWeight: "300", marginTop: "2rem", marginLeft: "2rem" }}>
                Our customer support team will be in contact with you to assist in completing your return.
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Link href="thankyou-return">
                  <Button
                    type="submit"
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
                </Link>
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
      <Box sx={{ margin: "2rem" }}>
        <Box>
          <input
            type="email"
            name="email"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.email}
            placeholder="Order Number"
            required
            style={{
              width: "350px",
              height: "50px",
              borderRadius: "40px",
              border: "1px solid #BEBEBE",
              paddingLeft: "25px",
              marginBottom: "30px",
              fontSize: "15px",
            }}
          />
        </Box>
        <Box>
          <select
            name="choice"
            required
            style={{
              width: "380px",
              height: "50px",
              borderRadius: "40px",
              border: "1px solid #BEBEBE",
              paddingLeft: "25px",
              marginBottom: "30px",
              color: "#808080",
              fontSize: "15px",
            }}
          >
            <option value="first" selected>
              Reasons for return
            </option>
            <option value="first">Size was too small</option>
            <option value="second">Size was too big</option>
            <option value="third">Change of mind</option>
            <option value="first">Item not as described</option>
            <option value="second">Received the wrong item</option>
            <option value="third">Damaged or defective</option>
            <option value="third">Other</option>
          </select>
        </Box>
        <Box>
          <input
            type="text"
            name="fname"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.email}
            placeholder="First Name"
            required
            style={{
              width: "350px",
              height: "50px",
              borderRadius: "40px",
              border: "1px solid #BEBEBE",
              paddingLeft: "25px",
              marginBottom: "30px",
              fontSize: "15px",
            }}
          />
        </Box>
        <Box>
          <input
            type="text"
            name="lname"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.email}
            placeholder="Last Name"
            required
            style={{
              width: "350px",
              height: "50px",
              borderRadius: "40px",
              border: "1px solid #BEBEBE",
              paddingLeft: "25px",
              marginBottom: "30px",
              fontSize: "15px",
            }}
          />
        </Box>

        <Box>
          <input
            type="email"
            name="email"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.email}
            placeholder="Email Address"
            required
            style={{
              width: "350px",
              height: "50px",
              borderRadius: "40px",
              border: "1px solid #BEBEBE",
              paddingLeft: "25px",
              marginBottom: "30px",
              fontSize: "15px",
            }}
          />
        </Box>
        <Box>
          <input
            type="text"
            name="pNumber"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.email}
            placeholder="Phone Number"
            style={{
              width: "350px",
              height: "50px",
              borderRadius: "40px",
              border: "1px solid #BEBEBE",
              paddingLeft: "25px",
              marginBottom: "30px",
              fontSize: "15px",
            }}
          />
        </Box>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "20px", fontWeight: "300", marginTop: "2rem", marginLeft: "2rem", width: "100%" }}>
          Our customer support team will be in contact with you to assist in completing your return.
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", paddingLeft: "2rem" }}>
        <Link href="/thankyou-return">
          <Button
            href="/thankyou-return"
            sx={{
              width: "380px",
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
        </Link>
      </Box>
    </Box>
  </>
);

export default ReturnForm;
