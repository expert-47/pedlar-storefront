import { Box, Button, InputAdornment, Modal, TextField, Typography } from "@mui/material";
import { styles } from "./style";
import Image from "next/image";
import React, { useCallback, useState } from "react";

const Popups = () => {
  const [open, setOpen] = useState(false);
  const handleClose = useCallback(() => {
    setOpen(!open);
  }, []);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.LoginBox}>
        <Typography style={{ fontSize: "36px", paddingBottom: "15px" }}>Join the waitlist!</Typography>
        <TextField label="First Name *" variant="outlined" sx={styles.TextFeild} />
        <TextField label="Last Name *" variant="outlined" sx={styles.TextFeild} />
        <TextField label="Email Address *" variant="outlined" sx={styles.TextFeild} />
        <TextField label="City *" variant="outlined" sx={styles.TextFeild} />
        <TextField
          label="TextField"
          sx={styles.TextFeilds}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image src="/insta-icon.svg" alt="insta" height={20} width={20} />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <TextField
          label="TextField"
          sx={styles.TextFeilds}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image src="/tiktok-icon.svg" alt="insta" height={20} width={20} />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Button style={{ backgroundColor: "black", borderRadius: "20px" }}>Get in Touch</Button>
        <Typography>
          We will communicate with you about the information requested and other Pedlar services. The use of your
          information is governed by Pedlar’s Privacy Policy.
        </Typography>
      </Box>
    </Modal>
  );
};

export default Popups;
