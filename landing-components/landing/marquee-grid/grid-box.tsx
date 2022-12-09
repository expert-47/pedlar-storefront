import { Typography, Grid, Dialog, IconButton, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { useTheme } from "@mui/material";
import Image from "next/image";
import firstGrid from "../../../public/home-sec2-img1.png";
import secondGrid from "../../../public/home-sec2-img2.png";
import thirdGrid from "../../../public/home-sec2-img3.png";
import glow from "../../../public/glow.svg";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import Creatorpopup from "../../popup-dialog/creatorpopup";
import Brandspopup from "../../popup-dialog/brandspopup";

const Gridbox = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const openPopup = () => setOpenDialog(true);
  const closePopup = () => setOpenDialog(false);
  const handleClose = () => setOpenDialog(false);
  const [userType, setUserType] = useState(true);
  const onChangeCreator = () => setUserType(true);
  const onChangeBrand = () => setUserType(false);

  const theme = useTheme();
  return (
    <CustomContainer>
      <Grid
        paddingX={{ xs: theme.spacing(30), sm: theme.spacing(30), md: theme.spacing(30), lg: theme.spacing(35) }}
        style={{ position: "relative" }}
      >
        <Marquee direction="right" speed={0.6} gradient={false} className="marq-left">
          <Typography fontWeight={"600"} fontSize={"34px"}>
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
        <Marquee direction="right" speed={40} gradient={false}>
          <Typography fontWeight={"600"} fontSize={"34px"} sx={styles.marqueetop}>
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
        <Box sx={styles.mainGrid}>
          <Typography
            sx={styles.gridboxText}
            fontSize={{ lg: "54px", md: "48px", sm: "54px", xs: "30px" }}
            fontWeight={"700"}
            paddingX={{ xs: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30) }}
            paddingBottom={{ md: "100px", xs: "50px" }}
          >
            Build personalised storefronts to sell the brands you love directly to your audience
          </Typography>
          <Grid
            container
            item
            gap={10}
            sm={12}
            md={12}
            lg={12}
            xs={12}
            paddingX={{ xs: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30) }}
          >
            <Grid item xs={12} sm={8} md={6} lg={4.7}>
              <Image src={firstGrid} alt="Picture of the author" loading="lazy" placeholder="blur" />
            </Grid>
            <Grid container item xs={12} sm={3.55} md={2.65} lg={2.2} style={{ justifyContent: "space-between" }}>
              <Grid item xs={5.8} sm={12} md={12} lg={12}>
                <Image src={secondGrid} alt="Picture of the author" loading="lazy" placeholder="blur" />
              </Grid>
              <Grid item xs={5.8} sm={12} md={12} lg={12}>
                <Image src={thirdGrid} alt="Picture of the author" loading="lazy" placeholder="blur" />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4.5}>
              <Grid style={{ display: "flex", alignItems: "flex-start", marginBottom: "13px" }}>
                <Box marginTop={"7px"} width={"46px"}>
                  <Image src={glow} alt="Glow Star" loading="lazy" />
                </Box>
                <Box style={{ marginLeft: "10px" }}>
                  <Typography sx={styles.gridinnereText} fontWeight={"600"} fontSize={"22px"}>
                    More money. Less problems
                  </Typography>
                  <Typography sx={styles.gridinnerPara} fontWeight={"600"} fontSize={{ xs: "18px", lg: "22px" }}>
                    Track performance overtime. Create value for creator, brands and shoppers.
                  </Typography>
                </Box>
              </Grid>
              <Grid style={{ display: "flex", alignItems: "flex-start", marginBottom: "13px" }}>
                <Box marginTop={"7px"} width={"46px"}>
                  <Image src={glow} alt="Glow Star" loading="lazy" />
                </Box>
                <Box style={{ marginLeft: "10px" }}>
                  <Typography sx={styles.gridinnereText} fontWeight={"600"} fontSize={"22px"}>
                    Simple and free
                  </Typography>
                  <Typography sx={styles.gridinnerPara} fontWeight={"600"} fontSize={{ xs: "18px", lg: "22px" }}>
                    Creators and brands get set up in under two minutes. Start selling instantly!
                  </Typography>
                </Box>
              </Grid>
              <Grid style={{ display: "flex", alignItems: "flex-start", marginBottom: "13px" }}>
                <Box marginTop={"7px"} width={"46px"}>
                  <Image src={glow} alt="Glow Star" loading="lazy" />
                </Box>
                <Box style={{ marginLeft: "10px" }}>
                  <Typography sx={styles.gridinnereText} fontWeight={"600"} fontSize={"22px"}>
                    Business as usual
                  </Typography>
                  <Typography sx={styles.gridinnerPara} fontWeight={"600"} fontSize={{ xs: "18px", lg: "22px" }}>
                    Creators get paid more to do what they love. Brands integrate their Shopify then set and forget.
                  </Typography>
                </Box>
              </Grid>
              <Grid style={{ paddingLeft: "25px" }}>
                <Typography
                  onClick={openPopup}
                  sx={styles.creator}
                  fontFamily={"Inter"}
                  fontSize={{ xs: "18px", lg: "22px" }}
                  fontWeight={"600"}
                >
                  Creators and Brands, Get Started →
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Marquee direction="right" speed={40} gradient={false}>
          <Typography fontWeight={"600"} fontSize={"34px"} sx={styles.marqueebottom}>
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
        <Marquee direction="right" speed={0.6} gradient={false} className="marq-right">
          <Typography fontWeight={"600"} fontSize={"34px"}>
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>

        <Dialog
          open={openDialog}
          onClose={handleClose}
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
            <Grid container style={{ alignItems: "center", justifyContent: "space-between" }}>
              {userType ? (
                <Typography style={{ fontSize: "36px", paddingBottom: "15px" }}>Join the waitlist!</Typography>
              ) : (
                <Typography style={{ fontSize: "36px", paddingBottom: "15px" }}>{"Let’s talk growth"}</Typography>
              )}
              <IconButton onClick={closePopup}>
                <CloseIcon style={{ color: "black" }} />
              </IconButton>
            </Grid>
            <Box sx={styles.BoxSelector}>
              <Button
                style={{
                  textTransform: "none",
                  color: "#49454F",
                  fontSize: "16px",
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
                I'm a creater
              </Button>
              <Button
                style={{
                  textTransform: "none",
                  color: "#49454F",
                  fontSize: "16px",
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
                I'm a brand
              </Button>
            </Box>
            {userType ? <Creatorpopup /> : <Brandspopup />}
            <Button style={{ backgroundColor: "black", borderRadius: "30px", padding: "10px" }}>
              <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"}>
                Get in touch
              </Typography>
            </Button>
            <Typography style={{ paddingTop: "10px", textAlign: "center" }}>
              {
                "We will communicate with you about the information requested and other Pedlar services. The use of your information is governed by Pedlar’s Privacy Policy."
              }
            </Typography>
          </Grid>
        </Dialog>
      </Grid>
    </CustomContainer>
  );
};

export default Gridbox;
