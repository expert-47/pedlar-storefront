import { Typography, Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { useTheme } from "@mui/material";
import firstGrid from "../../../public/firstGrid.png";
import secondGrid from "../../../public/secondGrid.png";
import thirdGrid from "../../../public/thirdGrid.png";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import PedlarImage from "components/pedlarImage";
import TextBox from "./textBox";
import BottomSheet from "landing-components/BottomSheet";
import LoginDialog from "landing-components/BottomSheet/LoginDialog";

const Gridbox = () => {
  const popupScreen = useMediaQuery("(min-width:600px)");
  const [openDialog, setOpenDialog] = useState(false);
  const openPopup = () => setOpenDialog(true);
  const closePopup = () => {
    setSuccessModalShow(true);
    setOpenDialog(false);
  };
  const handleClose = () => {
    setSuccessModalShow(true);

    setOpenDialog(false);
  };
  const [sucessModalshow, setSuccessModalShow] = useState(true);
  const [userType, setUserType] = useState(true);
  const isSecondModalActive = (value: boolean) => {
    setSuccessModalShow(value);
  };
  const theme = useTheme();
  return (
    <CustomContainer
      sx={{
        width: "100%",
        paddingLeft: { xs: theme.spacing(25), sm: theme.spacing(35), md: theme.spacing(30), lg: theme.spacing(35) },
        paddingRight: { xs: theme.spacing(25), sm: theme.spacing(35), md: theme.spacing(30), lg: theme.spacing(35) },
        position: "relative",
      }}
    >
      <Marquee direction="right" speed={1.3} gradient={false} style={{ overflow: "hidden" }} className="marq-left">
        <Typography
          fontWeight={"700"}
          fontSize={{ xs: "24px", sm: "36px" }}
          style={{ wordSpacing: "18px", paddingLeft: "30px" }}
        >
          Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          Pedlar Pedlar Pedlar Pedlar Pedlar
        </Typography>
      </Marquee>
      <Marquee direction="right" speed={45} gradient={false} style={{ overflow: "hidden" }}>
        <Typography fontWeight={"700"} fontSize={{ xs: "24px", sm: "36px" }} sx={styles.marqueetop}>
          Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          Pedlar Pedlar
        </Typography>
      </Marquee>

      <Grid
        sx={styles.mainGrid}
        width={"100%"}
        container
        paddingBottom={{ xs: "30px", sm: "30px" }}
        paddingTop="40px"
        //  height={{ lg: "620px", xl: "620px" }}
      >
        <Typography
          sx={styles.gridboxText}
          fontSize={{ lg: "54px", md: "54px", sm: "54px", xs: "30px" }}
          fontWeight={"700"}
          paddingX={{ xs: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30), xl: theme.spacing(45) }}
          paddingBottom={{ xs: "55px" }}
        >
          Build personalised storefronts to sell the brands you love directly to your audience
        </Typography>
        <Grid
          gap={5}
          container
          paddingX={{ xs: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30), xl: theme.spacing(45) }}
        >
          <Grid
            gap={{ lg: 13, md: 3 }}
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={7.3}
            xl={6.2}
            justifyContent={{ xs: "space-around", lg: "space-around" }}
          >
            <Grid item xs={12} sm={8} md={6.5} lg={8}>
              <Box sx={{ width: "100%", height: { lg: "450px", sm: "400px", xs: "260px" } }}>
                <PedlarImage src={firstGrid} alt="First Image" style={{ borderRadius: "8px" }} />
              </Box>
            </Grid>
            <Grid
              gap={10}
              item
              xs={12}
              sm={3.4}
              md={5}
              lg={3.57}
              xl={3.6}
              style={{ display: "flex" }}
              flexDirection={{ sm: "column" }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "100%", md: "50%", lg: "100%" },
                  height: { lg: "50%", sm: "50%", xs: "125px" },
                  marginTop: { xs: "20px", sm: "0px" },
                }}
              >
                <PedlarImage src={secondGrid} alt="Second Image" style={{ borderRadius: "8px" }} />
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", sm: "100%", md: "50%", lg: "100%" },
                  height: { lg: "50%", sm: "50%", xs: "125px" },
                  marginTop: { xs: "20px", sm: "0px", lg: "10px" },
                }}
              >
                <PedlarImage src={thirdGrid} alt="Second Image" style={{ borderRadius: "8px" }} />
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={4.6}
            xl={5.7}
            marginTop={{ xs: "20px", sm: "20px", md: "20px", lg: "0px" }}
            paddingLeft={{ sm: "0px", lg: "15px" }}
            fontSize={{ xs: "18px", sm: "18px", md: "18px", lg: "22px" }}
          >
            <TextBox
              title="More money. Less problems"
              description="Track performance over time. Create value for creators, brands and shoppers."
            />

            <TextBox
              title="Simple and free"
              description="Creators and brands get set up in under two minutes. Start selling instantly!"
            />
            <TextBox
              title="Business as usual"
              description="Creators get paid more to do what they love. Brands integrate their Shopify then set and forget."
            />

            <Box paddingLeft={{ xs: "30px", sm: "30px", md: "30px", lg: "40px", xl: "40px" }}>
              <Typography
                onClick={openPopup}
                sx={styles.creator}
                fontFamily={"Inter"}
                fontSize={{ xs: "18px", lg: "22px", xl: "22px" }}
                fontWeight={"600"}
              >
                Creators and Brands, Get Started →
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Marquee direction="left" speed={45} gradient={false}>
        <Typography
          fontWeight={"700"}
          fontSize={{ xs: "24px", sm: "36px" }}
          sx={styles.marqueebottom}
          marginTop={{ xs: "-10px", sm: "-18px" }}
        >
          Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          Pedlar Pedlar Pedlar Pedlar
        </Typography>
      </Marquee>
      <Marquee direction="right" speed={1.3} gradient={false} className="marq-right">
        <Typography
          fontWeight={"700"}
          fontSize={{ xs: "24px", sm: "36px" }}
          style={{ wordSpacing: "18px", paddingLeft: "30px" }}
        >
          Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
        </Typography>
      </Marquee>

      {popupScreen ? (
        <LoginDialog
          handleClose={handleClose}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          closePopup={closePopup}
          isSecondModalActive={isSecondModalActive}
          sucessModalshow={sucessModalshow}
          userType={userType}
        />
      ) : (
        <BottomSheet
          handleClose={handleClose}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          closePopup={closePopup}
          isSecondModalActive={isSecondModalActive}
          sucessModalshow={sucessModalshow}
          userType={userType}
        />
      )}
    </CustomContainer>
  );
};

export default Gridbox;
