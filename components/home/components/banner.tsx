import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { CustomContainer } from "../../layout";
import { useMediaQuery, useTheme, Box, Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import TextBox from "./textBox";
import PedlarImage from "components/pedlarImage";
import placeholder from "public/Placeholder.jpg";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BannerImg = (props: any) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const screen320 = useMediaQuery("(max-width:320px)");
  const screen375 = useMediaQuery("(max-width:375px)");

  const [open, setOpen] = useState(true);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <CustomContainer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        item
        alignItems={"center"}
        paddingX={{ lg: theme.spacing(10) }}
        justifyContent={{ lg: "center", md: "center", sm: "center", xs: "center" }}
        lg={11}
      >
        <Grid item xs={11.5} md={4} lg={4}>
          <Box
            sx={{
              width: isMatch ? "100%" : 476,
              height: isMatch ? 415 : 595,
              minHeight: screen320 ? 415 : screen375 ? 480 : 500,
            }}
          >
            <PedlarImage
              src={props?.headerData?.storefrontImageUrl ? props?.headerData?.storefrontImageUrl : ""}
              alt="headerimage"
              placeholder={placeholder}
              objectFit="contain"
            />
          </Box>
        </Grid>
        <Grid
          item
          container
          xs={10.5}
          md={7}
          lg={7}
          marginLeft={{ lg: "-0.7%", md: "4%", xl: "-2%" }}
          marginTop={{ lg: "0%", md: "0%", sm: "-20%", xs: "-30%" }}
        >
          <Snackbar
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            sx={{
              "& .MuiAlert-icon": {
                display: "none",
              },
            }}
            style={{
              top: "112px",
              right: "1px",
              zIndex: "2",
            }}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{
                width: "193PX",
                padding: "2px 10px 0px 10px",
                height: "48px",
                fontSize: "12px",
                fontWeight: "400px",
                lineHeight: "16px",
                backgroundColor: "#21005D",
                color: "F9F6F2",

                "& .MuiIconButton-root": {
                  paddingTop: "10px",
                },
              }}
            >
              SPECIAL OFFER! Use code <strong>PEDLAR20</strong> for 20% off
            </Alert>
          </Snackbar>
          <TextBox headerData={props?.headerData} style={{}} />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default BannerImg;
