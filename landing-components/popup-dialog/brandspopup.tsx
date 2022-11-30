import { Box, TextField } from "@mui/material";
import React from "react";
import { styles } from "./styles";

const Brandspopup = () => {
  return (
    <Box>
      <TextField
        label="First Name"
        placeholder="Enter Here"
        required
        sx={styles.TextFeild}
        InputLabelProps={{
          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
        }}
      />
      <TextField
        label="Last Name"
        placeholder="Enter Here"
        required
        sx={styles.TextFeild}
        InputLabelProps={{
          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
        }}
      />
      <TextField
        label="Company Name"
        placeholder="Enter Here"
        required
        sx={styles.TextFeild}
        InputLabelProps={{
          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
        }}
      />
      <TextField
        label="Email Address"
        placeholder="Enter Here"
        required
        sx={styles.TextFeild}
        InputLabelProps={{
          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
        }}
      />
      <TextField
        label="Phone Number (+61)"
        placeholder="Enter Here"
        sx={styles.TextFeild}
        InputLabelProps={{
          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
        }}
      />
      <TextField
        label="Brand Website"
        placeholder="Enter Here"
        required
        sx={styles.TextFeild}
        InputLabelProps={{
          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
        }}
      />
    </Box>
  );
};

export default Brandspopup;
