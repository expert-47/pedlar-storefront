import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { Grid, Typography, Button, Dialog, IconButton, Box } from "@mui/material";

import Creatorpopup from "landing-components/popup-dialog/creatorpopup";
import Brandspopup from "landing-components/popup-dialog/brandspopup";

import { styles } from "./styles";
interface Props {
  openDialog: boolean;
  handleClose: () => void;
  setOpenDialog: (value: boolean) => void;
  closePopup: () => void;
  isSecondModalActive: (val: boolean) => void;
  sucessModalshow: boolean;
  userType?: boolean;
}

const LoginDialog = ({
  openDialog,
  closePopup,
  isSecondModalActive,
  sucessModalshow,
  userType: user_type = false,
}: Props) => {
  const [userType, setUserType] = useState(true);

  const onChangeCreator = () => setUserType(true);
  const onChangeBrand = () => setUserType(false);

  useEffect(() => {
    setUserType(user_type);
  }, [user_type, openDialog]);

  return (
    <Dialog
      open={openDialog}
      sx={{
        ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
          borderRadius: "16px",
        },
      }}
    >
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={[
          styles.LoginBox,
          {
            overflow: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        ]}
      >
        <Grid container style={{ alignItems: "center", justifyContent: "space-between", paddingBottom: "15px" }}>
          {userType ? (
            <Typography fontSize={{ xs: "22px", sm: "22px", md: "36px", lg: "36px" }}>
              {sucessModalshow ? "Join the waitlist!" : null}
            </Typography>
          ) : (
            <Typography fontSize={{ xs: "22px", sm: "22px", md: "36px", lg: "36px" }}>
              {sucessModalshow ? "Let’s talk growth" : null}
            </Typography>
          )}
          <IconButton onClick={closePopup}>
            <CloseIcon style={{ color: "black" }} />
          </IconButton>
        </Grid>
        {sucessModalshow ? (
          <Box sx={styles.BoxSelector}>
            <Button
              style={{
                textTransform: "none",
                color: "#49454F",
                borderRadius: "5px",
                padding: "2px 7px",
              }}
              sx={{
                backgroundColor: userType == true ? "#d0bcff" : "transparent",
                fontWeight: userType == true ? "700" : "400",
                "&:hover": {
                  backgroundColor: userType == true ? "#d0bcff" : "transparent",
                },
              }}
              onClick={onChangeCreator}
            >
              <Typography fontSize={{ xs: "13px", sm: "13px", md: "16px", lg: "16px" }}></Typography>
              I&apos;m a creator
            </Button>
            <Button
              style={{
                textTransform: "none",
                color: "#49454F",
                borderRadius: "5px",
                padding: "2px 7px",
              }}
              sx={{
                backgroundColor: userType == false ? "#d0bcff" : "transparent",
                fontWeight: userType == false ? "700" : "400",

                "&:hover": {
                  backgroundColor: userType == false ? "#d0bcff" : "transparent",
                },
              }}
              onClick={onChangeBrand}
            >
              {"I'm a brand"}
            </Button>
          </Box>
        ) : null}
        {userType ? (
          <Creatorpopup isSecondModalActive={isSecondModalActive} />
        ) : (
          <Brandspopup isSecondModalActive={isSecondModalActive} />
        )}
        {sucessModalshow ? (
          <>
            <Typography style={{ paddingTop: "10px", color: "rgb(73,69,79)" }}>
              {"We will communicate with you about the information requested and other Pedlar services."}
            </Typography>
            <Typography style={{ color: "rgb(73,69,79)" }}>
              {" The use of your information is governed by Pedlar’s Privacy Policy."}
            </Typography>
          </>
        ) : null}
      </Grid>
    </Dialog>
  );
};

export default LoginDialog;
