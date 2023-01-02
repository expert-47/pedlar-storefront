import React, { useState } from "react";
import styles from "styles/home";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Typography, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import { CustomContainer } from "components/layout";
import CloseIcon from "@mui/icons-material/Close";

const Bar = () => {
  const theme = useTheme();
  // const trigger = useScrollTrigger({ threshold: 710, disableHysteresis: true });
  const [stickybar, setStickyBar] = useState(true);
  const closePopup = () => setStickyBar(false);

  return (
    <>
      {stickybar ? (
        <CustomContainer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "sticky",
            top: "100px",
          }}
        >
          <Grid
            container
            item
            xs={11.5}
            sm={11.5}
            md={11.5}
            lg={11.5}
            sx={styles.mainbargrid}
            justifyContent={{ lg: "space-between", md: "center", sm: "center", xs: "center" }}
            paddingX={{ xs: theme.spacing(5), md: theme.spacing(10), lg: theme.spacing(10) }}
            paddingY={{ xs: theme.spacing(5), md: theme.spacing(10), lg: theme.spacing(10) }}
          >
            <Grid
              container
              item
              xs={11}
              md={10}
              lg={11}
              alignItems={"center"}
              style={{ height: "104px", width: "1340px" }}
              paddingX={{ xs: theme.spacing(8), md: theme.spacing(5), lg: theme.spacing(25) }}
              paddingY={{ xs: theme.spacing(8), md: theme.spacing(5), lg: theme.spacing(5) }}
            >
              <Typography
                sx={styles.bartext}
                fontWeight={"bold"}
                fontSize={{ lg: "24px", md: "24px", sm: "20px", xs: "20px" }}
              >
                Love Fashion? Have your own style? Share it with your community.
              </Typography>
              <Button sx={styles.btn}>
                <Typography fontSize={"16px"} fontWeight={"600"}>
                  Sign up for free
                </Typography>
              </Button>
            </Grid>
            <Grid
              container
              item
              xs={1}
              md={2}
              lg={1}
              justifyContent={{ xs: "flex-end", sm: "flex-end" }}
              alignItems={{ xs: "flex-start", sm: "flex-start" }}
            >
              <CloseIcon sx={styles.closeIcon} onClick={closePopup} />
            </Grid>
          </Grid>
        </CustomContainer>
      ) : (
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
            xs={11.5}
            sm={11.5}
            md={11.5}
            lg={11.5}
            sx={styles.mainbargrid}
            justifyContent={{ lg: "space-between", md: "center", sm: "center", xs: "center" }}
            paddingX={{ xs: theme.spacing(5), md: theme.spacing(10), lg: theme.spacing(10) }}
            paddingY={{ xs: theme.spacing(5), md: theme.spacing(10), lg: theme.spacing(10) }}
          >
            <Grid
              container
              item
              xs={11}
              md={10}
              lg={11}
              alignItems={"center"}
              style={{ height: "104px", width: "1340px" }}
              paddingX={{ xs: theme.spacing(8), md: theme.spacing(5), lg: theme.spacing(25) }}
              paddingY={{ xs: theme.spacing(8), md: theme.spacing(5), lg: theme.spacing(5) }}
            >
              <Typography
                sx={styles.bartext}
                fontWeight={"bold"}
                fontSize={{ lg: "24px", md: "24px", sm: "20px", xs: "20px" }}
              >
                Love Fashion? Have your own style? Share it with your community.
              </Typography>
              <Button sx={styles.btn}>
                <Typography fontSize={"16px"} fontWeight={"600"}>
                  Sign up for free
                </Typography>
              </Button>
            </Grid>
            <Grid
              container
              item
              xs={1}
              md={2}
              lg={1}
              justifyContent={{ xs: "flex-end", sm: "flex-end" }}
              alignItems={{ xs: "flex-start", sm: "flex-start" }}
            >
              <CloseIcon sx={styles.closeIcon} />
            </Grid>
          </Grid>
        </CustomContainer>
      )}
    </>
  );
};

export default Bar;
