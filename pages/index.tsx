import React from "react";
import Banner from "../landing-components/landing/homebanner/home-banner";
import Company from "../landing-components/landing/comapny/company";
import EarlyAcess from "../landing-components/landing/earlyaccess/early-access";
import Faq from "../landing-components/landing/faq/faq";
import Layout from "../landing-components/landinglayout";
import Gridbox from "../landing-components/landing/marquee-grid/grid-box";
import Picturecarousel from "../landing-components/landing/picture-carousel/pictures-carousel";
import Howitswork from "../landing-components/landing/how-its-work/how-its-work";
import Box from "@mui/material/Box";
import Image from "next/image";
import orangeMeshes from "../public/orange-meshes.png";
import pinkMeshes from "../public/left-pink-meshes.png";
import orangeMesh from "../public/meshHome-gradient.png";

const styless = {
  paperContainer: {
    backgroundImage: "url(../Grain-Texture.png) !important",
    backgroundPosition: "0 0",
    backgroundRepeat: "repeat",
    backgroundSize: "initial",
    content: `""`,
    height: " 100%",
    mixBlendMode: "overlay",
    opacity: ".6",
    position: " absolute",
    width: "100%",
    zIndex: "2",
    top: "0",
    right: "0",
    left: "0",
  },
};
const index = () => {
  return (
    <Layout
      style={{ position: "relative", backgroundColor: "#f9f6f2" }}
      seo={{
        title: process.env.NEXT_PUBLIC_LANDING_TITLE,
        description: process.env.NEXT_PUBLIC_LANDING_DESCRIPTION,
      }}
    >
      <Box sx={styless.paperContainer}></Box>
      <Box style={{ position: "relative" }}>
        <Box style={{ position: "absolute", right: "0", width: "auto", zIndex: "0" }} top={{ xs: "1051px" }}>
          <Image src={orangeMeshes} alt="Orange meshes" loading={"lazy"} quality={50} />
        </Box>
        <Box style={{ position: "absolute", left: "0", width: "auto", zIndex: "0" }} top={{ xs: "512px", lg: "57px" }}>
          <Image src={pinkMeshes} alt="pink meshes" priority quality={50} />
        </Box>
        <Box
          style={{ position: "absolute", right: "0", width: "auto", zIndex: "0" }}
          top={{ xs: "2118px", sm: "422px", md: "422px", lg: "1655px" }}
        >
          <Image src={orangeMesh} alt="Oranges pink meshes" priority quality={50} />
        </Box>
      </Box>
      <Banner />
      <Gridbox />
      <Company />
      <Picturecarousel />
      <Howitswork />
      <EarlyAcess />
      <Faq />
    </Layout>
  );
};

export default index;
