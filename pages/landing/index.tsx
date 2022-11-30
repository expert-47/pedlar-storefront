import React from "react";
import Banner from "../../StoreComponents/landingpage/homebanner/Banner";
import Company from "../../StoreComponents/landingpage/comapny/Company";
import EarlyAcess from "../../StoreComponents/landingpage/earlyaccess/EarlyAcess";
import Faq from "../../StoreComponents/landingpage/faq/Faq";
import Layout from "../../StoreComponents/landinglayout";
import Gridbox from "../../StoreComponents/landingpage/marqueegrid/Gridbox";
import Picturecarousel from "../../StoreComponents/landingpage/picture-carousel/picturecarousel";
import Box from '@mui/material/Box';
import Image from 'next/image'
import orangeMeshes from '../../public/orange-meshes.png'
// import pinkMeshes from '../../public/left-pink-meshes.png'

const index = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
    >
      <Box style={{position:'relative'}}>
        <Box  style={{position: 'absolute',
              right: '0',
              width: 'auto',
              zIndex: '0'}}
              top={{xs:'1059px',lg:'1187px'}}
              >
          <Image
            src={orangeMeshes}
            alt="Orange meshes"
          />
        </Box>
        {/* <Box  style={{position: 'absolute',
              left: '0',
              top: '1187px',
              width: 'auto',
              zIndex: '0'}}>
          <Image
            src={pinkMeshes}
            alt="pink meshes"
          />
        </Box> */}
      </Box>
      <Banner />
      <Gridbox />
      <Company />
      <Picturecarousel />
      <EarlyAcess />
      <Faq />
    </Layout>
  );
};

export default index;
