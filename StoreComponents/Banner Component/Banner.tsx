import { Box, Grid, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import React from "react";
import { styles } from "./style";
import Typed from "react-typed";

const Banner = () => {
 
  return (
    <Box>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{position:"relative"}}>
        <img src="/home-banner1.png" alt="home banner" style={{ width: "100%", paddingTop: "108px", height:'100vh' }}></img>
          <Grid sx={styles.bannerText}>
            <Typography sx={styles.FirstList}>We put fashion</Typography>
            <Box style={{display:"flex", alignItems:"center"}}>
              <Typed 
                strings={[
                  "Creatore",
                  "Influencers",
                  "Curators",
                ]}
                loop
                typeSpeed={150}
                backSpeed={100}
                style={{fontSize:"48px",color:'#1C1B1F', fontFamily: "Inter", fontWeight: '900'}}
              />
              <Typography style={{fontSize:"48px",color:'#1C1B1F', fontFamily: "Inter", fontWeight: '900'}}>in business</Typography>
            </Box>
            <Typography sx={styles.FirstPara}>Simplified creator commerce. Sell directly to your followers through customisable storefronts.</Typography>
            <Grid>
              <Button sx={styles.creator}>I’m a creator</Button>
              <Button sx={styles.brands}>I’m a brand</Button>
            </Grid>
          </Grid>
      </Grid>
     
    </Box>
  );
};

export default Banner;
