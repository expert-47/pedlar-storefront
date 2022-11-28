import { Grid, Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { CustomContainer } from "StoreComponents/Landinglayout";
import { styles } from "./style";

const Storefree = () => {
  return (
    <CustomContainer>
      <Box sx={styles.MainBox}>
        <Grid container item xs={12} sm={12} md={12} lg={12} style={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography textTransform={"none"} fontSize={"54px"} sx={styles.heading}>
              Start building your store,
              <span style={{ fontStyle: "italic" }}>for free</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography textTransform={"none"} fontSize={"22px"} sx={styles.title}>
              Fill in the form below and we’ll get in touch with you to begin the process
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            gap={15}
            style={{
              marginTop: "60px",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
              <TextField
                label="First Name"
                placeholder="Enter Here"
                required
                sx={styles.TextFeild}
                InputLabelProps={{
                  style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
              <TextField
                label="Last Name"
                placeholder="Enter Here"
                required
                sx={styles.TextFeild}
                InputLabelProps={{
                  style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
              <TextField
                label="Email"
                placeholder="Enter Here"
                required
                sx={styles.TextFeild}
                InputLabelProps={{
                  style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
              <TextField
                label="City"
                placeholder="Enter Here"
                required
                sx={styles.TextFeild}
                InputLabelProps={{
                  style: { color: "#49454F", borderColor: "#49454F", fontSize: "16px", fontWeight: "400" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
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
            </Grid>
            <Grid item xs={12} sm={5.5} md={5.5} lg={4.5}>
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
          </Grid>
          <Button sx={styles.Button}>
            <Typography textTransform={"none"} fontSize={"22px"}>
              Get in touch
            </Typography>
          </Button>
          <Grid item xs={12} sm={12} md={12} style={{ textAlign: "center", color: "#49454F", lineHeight: "24px" }}>
            <Typography textTransform={"none"} fontSize={"16px"}>
              We will communicate with you about the information requested and other Pedlar services.
            </Typography>
            <Typography textTransform={"none"} fontSize={"16px"}>
              The use of your information is goverened by Pedlar’s Privacy Policy
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Storefree;
