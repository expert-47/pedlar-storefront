import React from "react";
import Banner from "../../StoreComponents/landingpage/homebanner/Banner";
import Company from "../../StoreComponents/landingpage/comapny/Company";
import EarlyAcess from "../../StoreComponents/landingpage/earlyaccess/EarlyAcess";
import Faq from "../../StoreComponents/landingpage/landingfaq/Faq";
import Layout from "../../StoreComponents/landinglayout";
import Gridbox from "../../StoreComponents/landingpage/marqueegrid/Gridbox";
import Picturecarousel from "../../StoreComponents/landingpage/picture-carousel/picturecarousel";
import Box from "@mui/material/Box";
import Image from "next/image";
import orangeMeshes from "../../public/orange-meshes.png";
import pinkMeshes from "../../public/left-pink-meshes.png";
//import grainTexture from "../../public/Grain-Texture.png";
import orangepinkmesh from "../../public/mesh-pink-orange.png";

// const styles = {
//   paperContainer: {
//     backgroundColor: "#f9f6f2",
//     "&::before": {
//       backgroundImage:`url(${grainTexture.src})`,
//       backgroundPosition:' 0 0',
//         backgroundRepeat: 'repeat',
//         backgroundSize:' initial',
//         content :`""`,
//         height:' 100%',
//         mixBlendMode: 'overlay',
//         opacity: '.6',
//         position: 'absolute',
//         width: '100%',
//         zIndex: '4',
//     }
     
//   }
// };
const index = () => {
  return (
    <Layout
      style={{position:'relative',backgroundColor: "#f9f6f2",}}
      // sx = {styles.paperContainer}
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
        <Box
          style={{ position: "absolute", left: "0", width: "auto", zIndex: "0" }}
          top={{ xs: "687px", md: "500px", lg: "117px" }}
        >
          <Image src={pinkMeshes} alt="pink meshes" />
        </Box>
        <Box
          style={{ position: "absolute", right: "0", width: "auto", zIndex: "0" }}
          top={{ xs: "933px", md: "627px", lg: "545px" }}
        >
          <Image src={orangepinkmesh} alt="orange pink meshes" />
        </Box>
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
