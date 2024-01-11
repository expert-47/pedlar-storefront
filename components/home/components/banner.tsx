import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { CustomContainer } from "../../layout";
import { useMediaQuery, useTheme, Box, Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import TextBox from "./textBox";
import { NextImage } from "components/pedlarImage";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BannerImg = (props: any) => {
  const { isMobile } = props;
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const screen375 = useMediaQuery("(max-width:375px)");
  const isMatchMobile = useMediaQuery(theme.breakpoints.up("sm"));

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
              width: isMobile ? "100%" : 476,
              height: screen375 ? 480 : isMobile ? 500 : 595,
              minHeight: screen375 ? 430 : isMobile ? 470 : 500,
            }}
          >
            <NextImage
              src={props?.headerData?.storefrontImageUrl ? props?.headerData?.storefrontImageUrl : "/Placeholder.jpg"}
              alt="headerimage"
              style={{ objectFit: "contain" }}
              priority
              quality={100}
              showPlaceHolder={true}
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
              top: !isMatchMobile ? "114px" : "122px",
              right: "-2px",
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
                borderRadius: "4px",

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
