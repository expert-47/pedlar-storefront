import React from "react";
import Faq from "../landing-components/creator-page/faq/Faq";
import Banner from "../landing-components/brand-page/mainbanner/Banner";
import Layout from "../landing-components/landinglayout";
import Pointofpurchase from "../landing-components/brand-page/pointofpurchase/Pointofpurchase";
import Influncerheading from "../landing-components/brand-page/influncerheading/Influncerheading";
import Businesstoday from "../landing-components/brand-page/businesstoday/Businesstoday";
import Box from '@mui/material/Box';
import Image from 'next/image'
import orangetop from '../public/top-mesh.png'
import orangebottom from '../public/bottom-mesh.png'
import Picturecarousel from '../landing-components/landing/picture-carousel/pictures-carousel';

const brands = () => {
  return (
    <Layout
      style={{position:'relative',backgroundColor: "#f9f6f2",}}
    >
      <Box style={{position:'relative'}}>
        <Box  style={{position: 'absolute',
                left: '0',
                width: 'auto',
                zIndex: '0'}}
                top={{xs:'0px',lg:'0px'}}
                >
            <Image
              src={orangetop}
              alt="Orange meshes"
            />
        </Box>
        <Box
            style={{ position: "absolute", right: "0", width: "auto", zIndex: "0" }}
            top={{ xs: "4083px",sm:'1806px', md:'1134px',lg:'1431px' }}
            bottom={{xs:'0px',lg:'0px'}}
          >
            <Image src={orangebottom} alt="orang brand meshes" />
        </Box>
      </Box>
      <Banner />
      <Pointofpurchase />
      <Influncerheading />
      <Picturecarousel />
      <Faq />
      <Businesstoday />
    </Layout>
  );
};

export default brands;
