import { Grid, InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import { styles } from "./styles";
import { useForm } from "react-hook-form";

const Creatorpopup = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <form>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <TextField
          label="First Name"
          placeholder="Enter Here"
          required
          sx={styles.TextFeild}
          InputLabelProps={{
            style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
          }}
          {...register("UserName", { required: true, maxLength: 10 })}
        />
        {errors?.UserName?.type === "required" && <p>This field is required</p>}
        {errors?.UserName?.type === "maxLength" && <p>UserName cannot exceed 10 characters</p>}
        {errors?.UserName?.type === "pattern" && <p>Alphabetical characters only</p>}
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
          type={"email"}
          required
          sx={styles.TextFeild}
          InputLabelProps={{
            style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
          }}
          {...register("email", { required: true, maxLength: 35 })}
        />
        {errors?.email?.type === "required" && <p>This field is required</p>}
        {errors?.email?.type === "maxLength" && <p>Email cannot exceed 35 characters</p>}
        {errors?.email?.type === "pattern" && <p>Alphabetical characters only</p>}
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
      </Grid>
    </form>
  );
};

export default Creatorpopup;
