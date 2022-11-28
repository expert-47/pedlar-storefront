import { Box, InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import { styles } from "./styles";

const Creatorpopup = () => {
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
        label="Email Address"
        placeholder="Enter Here"
        required
        sx={styles.TextFeild}
        InputLabelProps={{
          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
        }}
      />
      <TextField
        label="City"
        placeholder="Enter Here"
        required
        sx={styles.TextFeild}
        InputLabelProps={{
          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
        }}
      />
      <TextField
        label="Instagram Username"
        placeholder="Enter Here"
        required
        sx={styles.TextFeild}
        InputLabelProps={{
          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
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
          style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
        }}
      />
    </Box>
  );
};

export default Creatorpopup;
