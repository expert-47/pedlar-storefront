import React from "react";
import Faq from "../../landing-components/brand-page/faq/Faq";
import Banner from "../../landing-components/brand-page/mainbanner/Banner";
import Layout from "../../landing-components/landinglayout";
import Pointofpurchase from "../../landing-components/brand-page/pointofpurchase/Pointofpurchase";
import Influncerheading from "../../landing-components/brand-page/influncerheading/Influncerheading";
import Businesstoday from "../../landing-components/brand-page/businesstoday/Businesstoday";
import Box from "@mui/material/Box";
import Image from "next/image";
import orangetop from "../../public/top-mesh.png";
import orangebottom from "../../public/bottom-mesh.png";
import Picturecarousel from "../../landing-components/landing/picture-carousel/pictures-carousel";
import Howitswork from "../../landing-components/brand-page/how-its-work/how-its-work";
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
const brands = () => {
  return (
    <Layout
      style={{ position: "relative", backgroundColor: "#f9f6f2" }}
      seo={{
        title: process.env.NEXT_PUBLIC_BRAND_TITLE,
        description: process.env.NEXT_PUBLIC_BRAND_DESCRIPTION,
      }}
    >
      <Box sx={styless.paperContainer}></Box>
      <Box style={{ position: "relative" }}>
        <Box style={{ position: "absolute", left: "0", width: "auto", zIndex: "0" }} top={{ xs: "0px", lg: "0px" }}>
          <Image src={orangetop} alt="Orange meshes" />
        </Box>
      </Box>
      <Banner />
      <Pointofpurchase />
      <Howitswork />
      <Influncerheading />
      <Picturecarousel />
      <Faq />
      <Businesstoday />
      <Box
        style={{ position: "absolute", right: "0", width: "1783px", zIndex: "0" }}
        bottom={{ xs: "619px", sm: "0px", lg: "343px" }}
      >
        <Image src={orangebottom} alt="orange brand meshes" />
      </Box>
    </Layout>
  );
};

export default brands;
