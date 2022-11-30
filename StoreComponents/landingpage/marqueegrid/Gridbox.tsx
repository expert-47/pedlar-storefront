import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Marquee from "react-fast-marquee";
import { useTheme } from "@mui/material";
import Link from '@mui/material/Link';
import Image from 'next/image';
import firstGrid from '../../../public/home-sec2-img1.png';
import secondGrid from '../../../public/home-sec2-img2.png';
import thirdGrid from '../../../public/home-sec2-img3.png';
import glow from '../../../public/glow.svg';
import { CustomContainer } from "../../landinglayout";
import { styles } from "./Style";


const Gridbox = () => {
  const theme = useTheme();
  return (
    <CustomContainer>
      <Grid
        paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
        paddingY={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
      >
        <Marquee direction="right" speed={40} gradient={false}>
          <Typography fontWeight={"600"} fontSize={"34px"} sx={styles.marqueetop}>
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
        <Marquee direction="right" speed={40} gradient={false}>
          <Typography fontWeight={"600"} fontSize={"34px"} sx={styles.marqueeright}>
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
        <Box sx={styles.mainGrid}>
          <Typography
            sx={styles.gridboxText}
            fontSize={{lg:'54px',md:'48px',sm:'54px',xs:'30px'}}
            fontWeight={'700'}
            paddingX={{ xs: theme.spacing(20), md: theme.spacing(20), lg: theme.spacing(30) }}
            paddingBottom={{md:'100px',xs:'50px'}}
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
            <Grid item xs={12} sm={8} md={6} lg={4.9}>
              <Image
                src={firstGrid}
                alt="Picture of the author"
              />
            </Grid>
            <Grid item xs={12} sm={3.5} md={2.5} lg={2.2}>
              <Grid sx={styles.gridimgBox}>
                <Grid>
                  <Image
                    src={secondGrid}
                    alt="Picture of the author"
                  />
                </Grid>
                <Grid 
                marginLeft={{sm:'0px', xs:'13px'}}
                marginTop={{lg:'14px',sm:'5px', xs:'0px'}}>
                  <Image
                    src={thirdGrid}
                    alt="Picture of the author"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4.5}>
              <Grid style={{display:"flex", alignItems:'flex-start',marginBottom:'13px'}}>
                <Box marginTop={'7px'} width={'46px'}>
                  <Image
                    src={glow}
                    alt="Picture of the author"
                  />
                </Box>
                <Box style={{ marginLeft: "10px" }}>
                  <Typography sx={styles.gridinnereText} fontWeight={'600'} fontSize={'22px'}>More money. Less problems</Typography>
                  <Typography sx={styles.gridinnerPara} fontWeight={'600'} fontSize={{xs:'18px',lg:'22px'}}>
                    Track performance overtime. Create value for creator, brands and shoppers.
                  </Typography>
                </Box>
              </Grid>
              <Grid style={{display:"flex", alignItems:'flex-start',marginBottom:'13px'}}>
                <Box marginTop={'7px'}  width={'46px'}>
                  <Image
                    src={glow}
                    alt="Picture of the author"
                  />
                </Box>
                <Box style={{ marginLeft: "10px" }}>
                  <Typography sx={styles.gridinnereText} fontWeight={'600'} fontSize={'22px'}>Simple and free</Typography>
                  <Typography sx={styles.gridinnerPara} fontWeight={'600'}  fontSize={{xs:'18px',lg:'22px'}}>
                    Creators and brands get set up in under two minutes. Start selling instantly!
                  </Typography>
                </Box>
              </Grid>
              <Grid style={{display:"flex", alignItems:'flex-start',marginBottom:'13px'}}>
                <Box marginTop={'7px'} width={'46px'}>
                  <Image
                    src={glow}
                    alt="Picture of the author"
                  />
                </Box>
                <Box style={{ marginLeft: "10px" }}>
                  <Typography sx={styles.gridinnereText} fontWeight={'600'} fontSize={'22px'}>Business as usual</Typography>
                  <Typography sx={styles.gridinnerPara} fontWeight={'600'} fontSize={{xs:'18px',lg:'22px'}}>
                    Creators get paid more to do what they love. Brands integrate their Shopify then set and forget.
                  </Typography>
                </Box>
              </Grid>
              <Grid style={{paddingLeft:'25px'}}>
                <Link href="" sx={styles.creator} fontFamily={'Inter'} fontSize={{xs:'18px', lg:'22px'}} fontWeight={'600'}>Creators and Brands, Get Started →</Link>
              </Grid>
            </Grid>
          </Grid> 
        </Box>
        <Marquee direction="left" speed={40} gradient={false}>
          <Typography fontWeight={"600"} fontSize={"34px"} sx={styles.marqueeleft}>
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
        <Marquee direction="left" speed={40} gradient={false}>
          <Typography fontWeight={"600"} fontSize={"34px"} sx={styles.marqueebottom}>
            Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar Pedlar
          </Typography>
        </Marquee>
      </Grid>
    </CustomContainer>
  );
};

export default Gridbox;
