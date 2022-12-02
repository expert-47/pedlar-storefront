import React from "react";
import Banner from "../landing-components/landing/homebanner/home-banner";
import Company from "../landing-components/landing/comapny/company";
import EarlyAcess from "../landing-components/landing/earlyaccess/early-access";
import Faq from "../landing-components/landing/faq/faq";
import Layout from "../landing-components/landinglayout";
import Gridbox from "../landing-components/landing/marquee-grid/grid-box";
import Picturecarousel from "../landing-components/landing/picture-carousel/pictures-carousel";
import Box from "@mui/material/Box";
import Image from "next/image";
import orangeMeshes from "../public/orange-meshes.png";
import pinkMeshes from "../public/left-pink-meshes.png";
import orangepinkmesh from "../public/mesh-pink-orange.png";

const index = () => {
  return (
    <Layout style={{ position: "relative", backgroundColor: "#f9f6f2" }}>
      <Box style={{ position: "relative" }}>
        <Box
          style={{ position: "absolute", right: "0", width: "auto", zIndex: "0" }}
          top={{ xs: "1059px", lg: "1187px" }}
        >
          <Image src={orangeMeshes} alt="Orange meshes" />
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
