import React from "react";
import Banner from "../../landing-components/creator-page/mainbanner/Banner";
import Husttle from "../../landing-components/creator-page/husttle/Husttle";
import Layout from "../../landing-components/landinglayout";
import Company from "../../landing-components/creator-page/comapny/Company";
import Faq from "../../landing-components/creator-page/faq/Faq";
import Storefree from "../../landing-components/creator-page/storefree/Storefree";
import Box from "@mui/material/Box";
import Image from "next/image";
import bluemeshbrands from "../public/blue-meshh.png";
import Picturecarousel from "../../landing-components/landing/picture-carousel/pictures-carousel";
import Howitswork from "../../landing-components/creator-page/how-its-work/how-its-work";
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
const creator = () => {
  return (
    <Layout
      style={{ position: "relative", backgroundColor: "#f9f6f2" }}
      seo={{
        title: process.env.NEXT_PUBLIC_CREATOR_TITLE,
        description: process.env.NEXT_PUBLIC_CREATOR_DESCRIPTION,
      }}
    >
      <Box sx={styless.paperContainer}></Box>
      <Box style={{ position: "absolute", right: "0", width: "auto", zIndex: "0" }} top={{ xs: "0px", lg: "0px" }}>
        <Image src={bluemeshbrands} alt="Orange meshes" />
      </Box>
      <Banner />
      <Husttle />
      <Howitswork />
      <Company />
      <Picturecarousel />
      <Faq />
      <Storefree />
    </Layout>
  );
};

export default creator;
