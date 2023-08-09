import { Box, Grid, Typography, IconButton, SwipeableDrawer } from "@mui/material";
import Button from "@mui/material/Button";
import React, { memo, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { styles } from "./styles";
import Creatorpopup from "landing-components/popup-dialog/creatorpopup";
import Brandspopup from "landing-components/popup-dialog/brandspopup";

interface Props {
  openDialog: boolean;
  handleClose: () => void;
  setOpenDialog: (value: boolean) => void;
  closePopup: () => void;
  isSecondModalActive: (val: boolean) => void;
  sucessModalshow: boolean;
  userType?: boolean;
}

const BottomSheet = ({
  handleClose,
  openDialog,
  closePopup,
  isSecondModalActive,
  sucessModalshow,
  userType: user_type = false,
}: Props) => {
  const [userType, setUserType] = useState(user_type);
  const onChangeCreator = () => setUserType(true);
  const onChangeBrand = () => setUserType(false);

  useEffect(() => {
    setUserType(user_type);
  }, [user_type, openDialog]);
  return (
    <SwipeableDrawer
      // ModalProps={{ keepMounted: true }}
      onOpen={() => {}}
      anchor="bottom"
      sx={{ height: "150px" }}
      open={openDialog}
      onClose={handleClose}
      disableSwipeToOpen
      PaperProps={{
        sx: {
          // Since overflow is visible here and not 'auto' or 'scroll', the scrolling needs to happen in a nested div
          overflow: "visible",
          height: "calc(94% - 13px)",
        },
      }}
    >
      <Box
        sx={{
          width: 50,
          height: 4,
          backgroundColor: "#bdbdbd",
          borderRadius: 3,
          alignSelf: "center",
          marginTop: 10,
          marginBottom: 20,
        }}
      />
      <Box sx={styles.RespBox}>
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
            <CloseIcon style={{ color: "black", height: "14px", width: "14px" }} />
          </IconButton>
        </Grid>
        {sucessModalshow ? (
          <Box sx={styles.BoxSelector}>
            <Button
              style={{
                textTransform: "none",
                color: "#49454F",
                borderRadius: "5px",
                padding: "5px 7px",
                width: "50%",
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
              <Typography fontSize={"16px"} fontWeight={userType == true ? "600" : "400"}>
                I&apos;m a creator
              </Typography>
            </Button>
            <Button
              style={{
                textTransform: "none",
                color: "#49454F",
                borderRadius: "5px",
                padding: "5px 7px",
                width: "50%",
              }}
              sx={{
                backgroundColor: userType == false ? "#d0bcff" : "transparent",

                "&:hover": {
                  backgroundColor: userType == false ? "#d0bcff" : "transparent",
                },
              }}
              onClick={onChangeBrand}
            >
              <Typography fontSize={"16px"} fontWeight={userType == false ? "600" : "400"}>
                I&apos;m a brand
              </Typography>
            </Button>
          </Box>
        ) : null}
      </Box>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={[
          styles.RespLoginBox,
          {
            overflow: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        ]}
      >
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
    </SwipeableDrawer>
  );
};

export default memo(BottomSheet);
