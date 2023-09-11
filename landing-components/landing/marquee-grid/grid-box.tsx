//package imports
import Marquee from "react-fast-marquee";
import React, { FC, Fragment, useState } from "react";
import { Typography, Grid, useMediaQuery, Box, useTheme } from "@mui/material";
//components imports
import TextBox from "./textBox";
import { NextImage } from "components/pedlarImage";
import firstGrid from "../../../public/firstGrid.png";
import thirdGrid from "../../../public/thirdGrid.png";
import { CustomContainer } from "../../landinglayout";
import secondGrid from "../../../public/secondGrid.png";
import BottomSheet from "landing-components/BottomSheet";
import LoginDialog from "landing-components/BottomSheet/LoginDialog";
//style imports
import { styles } from "./style";

// textboxes data
const testBoxesdata = [
  {
    title: "More money. Less problems",
    description: "Track performance over time. Create value for creators, brands and shoppers.",
  },
  {
    title: "Simple and free",
    description: "Creators and brands get set up in under two minutes. Start selling instantly!",
  },
  {
    title: "Business as usual",
    description: "Creators get paid more to do what they love. Brands integrate their Shopify then set and forget.",
  },
];

const Gridbox: FC = (): JSX.Element => {
  const theme = useTheme();
  const popupScreen = useMediaQuery("(min-width:600px)");

  const [openDialog, setOpenDialog] = useState(false);
  const [sucessModalshow, setSuccessModalShow] = useState(true);

  const closePopup = () => {
    setSuccessModalShow(true);
    setOpenDialog(false);
  };

  const handleClose = () => {
    setSuccessModalShow(true);

    setOpenDialog(false);
  };

  const isSecondModalActive = (value: boolean) => {
    setSuccessModalShow(value);
  };

  return (
    <CustomContainer
      sx={{
        width: "100%",
        paddingLeft: { xs: theme.spacing(25), sm: theme.spacing(35), md: theme.spacing(30), lg: theme.spacing(35) },
        paddingRight: { xs: theme.spacing(25), sm: theme.spacing(35), md: theme.spacing(30), lg: theme.spacing(35) },
        position: "relative",
      }}
    >
      <div className="marq-left">
        <Marquee direction="right" speed={1.3} gradient={false} style={{ overflow: "hidden" }}>
          <Typography
            fontWeight={"700"}
            fontSize={{ xs: "24px", sm: "36px" }}
            style={{ wordSpacing: "18px", paddingLeft: "30px" }}
          >
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
            Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
      </div>

      <Marquee direction="right" speed={45} gradient={false} style={{ overflow: "hidden" }}>
        <Typography
          fontWeight={"700"}
          fontSize={{ xs: "24px", sm: "36px" }}
          sx={styles.marqueetop}
          marginBottom={{ xs: "-7px", sm: "0px" }}
        >
          Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          Pedlar Pedlar
        </Typography>
      </Marquee>

      <Grid sx={styles.mainGrid} container paddingBottom={{ xs: "15px", sm: "15px" }}>
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
                <NextImage
                  src={firstGrid}
                  alt="First Image"
                  fill={true}
                  style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "100%" }}
                />
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
                <NextImage src={secondGrid} alt="Second Image" style={{ borderRadius: "8px", objectFit: "cover" }} />
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", sm: "100%", md: "50%", lg: "100%" },
                  height: { lg: "50%", sm: "50%", xs: "125px" },
                  marginTop: { xs: "20px", sm: "0px", lg: "10px" },
                }}
              >
                <NextImage src={thirdGrid} alt="Second Image" style={{ borderRadius: "8px", objectFit: "cover" }} />
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
            {testBoxesdata?.map((item) => {
              return <TextBox key={item.title} title={item?.title} description={item?.description} />;
            })}

            <Box paddingLeft={{ xs: "30px", sm: "30px", md: "30px", lg: "40px", xl: "40px" }}>
              <Typography
                onClick={() => setOpenDialog(true)}
                sx={styles.creator}
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
          marginTop={{ xs: "-18px", sm: "-15px" }}
        >
          Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          Pedlar Pedlar Pedlar Pedlar
        </Typography>
      </Marquee>
      <div className="marq-right">
        <Marquee direction="right" speed={1.3} gradient={false}>
          <Typography
            fontWeight={"700"}
            fontSize={{ xs: "24px", sm: "36px" }}
            style={{ wordSpacing: "18px", paddingLeft: "30px" }}
          >
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
      </div>
      {openDialog ? (
        popupScreen ? (
          <LoginDialog
            handleClose={handleClose}
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            closePopup={closePopup}
            isSecondModalActive={isSecondModalActive}
            sucessModalshow={sucessModalshow}
            userType
          />
        ) : (
          <BottomSheet
            handleClose={handleClose}
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            closePopup={closePopup}
            isSecondModalActive={isSecondModalActive}
            sucessModalshow={sucessModalshow}
            userType
          />
        )
      ) : (
        <Fragment />
      )}
    </CustomContainer>
  );
};

export default Gridbox;
