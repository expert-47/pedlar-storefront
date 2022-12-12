import React from "react";
import Banner from "../landing-components/creator-page/mainbanner/Banner";
import Husttle from "../landing-components/creator-page/husttle/Husttle";
import Layout from "../landing-components/landinglayout";
import Company from "../landing-components/creator-page/comapny/Company";
import Faq from "../landing-components/creator-page/faq/Faq";
import Storefree from "../landing-components/creator-page/storefree/Storefree";
import Box from "@mui/material/Box";
import Image from "next/image";
import bluemeshbrand from "../public/blue-mesh-brand.png";
import bluemeshbrands from "../public/blue-meshh.png";
import Picturecarousel from "../landing-components/landing/picture-carousel/pictures-carousel";
import Howitswork from "../landing-components/creator-page/how-its-work/how-its-work";

const creator = () => {
  return (
    <Layout
      style={{ position: "relative", backgroundColor: "#f9f6f2" }}
      seo={{
        title: "Pedlar - Creator Store ",
        description: "Pedlar making creator to sell things easily!",
      }}
    >
      <Box style={{ position: "relative" }}>
        <Box style={{ position: "absolute", right: "0", width: "auto", zIndex: "0" }} top={{ xs: "0px", lg: "0px" }}>
          <Image src={bluemeshbrands} alt="Orange meshes" />
        </Box>
        <Box
          style={{ position: "absolute", left: "0", width: "auto", zIndex: "0",  bottom:"0"}}
          top={{ xs: "3684px", sm: "1806px", md: "1134px", lg: "41px" }}
        >
          <Image src={bluemeshbrand} alt="orang brand meshes" />
        </Box>
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
