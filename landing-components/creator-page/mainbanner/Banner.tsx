import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import CreatorBanner from "../../../public/creatorbanner.png";
import { Link as ScrollLink } from "react-scroll";
import PedlarImage from "components/pedlarImage";

const Banner = () => {
  return (
    <Box sx={styles.MainBox}>
      <Box
        sx={{
          width: { xs: "95%", sm: "705px", md: "660px", lg: "45%", xl: "45%" },
          height: { xs: "355px", sm: "580px", md: "600px", lg: "560px", xl: "585px" },
        }}
      >
        <PedlarImage zIndex={0} style={{ borderRadius: "0 20px 20px 0" }} src={CreatorBanner} alt={"Creator banner"} />
      </Box>
      <Box sx={styles.GridBox}>
        <Grid item xs={12} sm={12} md={12} lg={12} padding={{ sm: "40px 40px", xs: "20px 20px" }}>
          <Typography textTransform={"none"} fontSize={{ xs: "34px", sm: "64px" }} sx={styles.heading}>
            Give your audience what they want
          </Typography>
          <Typography
            textTransform={"none"}
            fontSize={"22px"}
            sx={styles.title}
            marginBottom={{ xs: "20px", sm: "0px" }}
          >
            Followers love your style. Give them what they want with a personalised store of products from top brands.
          </Typography>
          <ScrollLink to="StoreFreeForm" spy={true} smooth={true} offset={-100} duration={500}>
            <Button sx={styles.Button}>
              <Typography textTransform={"none"} fontSize={"22px"} lineHeight={"normal"}>
                Get access - <span style={{ fontStyle: "italic", fontWeight: "400" }}>for free</span>
              </Typography>
            </Button>
          </ScrollLink>
        </Grid>
      </Box>
    </Box>
  );
};

export default Banner;
