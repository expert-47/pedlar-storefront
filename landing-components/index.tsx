//packages imports
import React from "react";
import Box from "@mui/material/Box";
//components imports
import Faq from "../landing-components/faq/faq";
import Layout from "../landing-components/landinglayout";
import Company from "../landing-components/landing/comapny/company";
import Howitswork from "../landing-components/how-its-work/how-its-work";
import Gridbox from "../landing-components/landing/marquee-grid/grid-box";
import Banner from "../landing-components/landing/homebanner/home-banner";
import EarlyAcess from "../landing-components/landing/earlyaccess/early-access";
import Picturecarousel from "../landing-components/picture-carousel/pictures-carousel";
//images imports
import firstStep from "../public/step1.png";
import thirdStep from "../public/step3.png";
import secondStep from "../public/step2.png";
import fourthStep from "../public/step4.png";
import orangeMeshes from "../public/orange-meshes.png";
import pinkMeshes from "../public/left-pink-meshes.webp";
import orangeMesh from "../public/meshHome-gradient.png";
//seo import
import { seo } from "utils/seoData";
import { NextImage } from "components/pedlarImage";
//style
const styless = {
  paperContainer: {
    backgroundImage: "url(../Grain-Texture.webp) !important",
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

const Home = () => {
  return (
    <Layout
      sx={{ position: "relative", backgroundColor: "#f9f6f2" }}
      seo={{
        title: seo.landingTitle,
        description: seo.landingDescription,
      }}
    >
      <Box sx={styless.paperContainer}></Box>
      <Box className="positionProperty">
        <Box className="orangeMeshesBox" sx={{ width: "100%" }} top={{ xs: "1051px" }}>
          <NextImage
            src={orangeMeshes}
            style={{ objectFit: "cover", width: "100%" }}
            alt="Orange meshes"
            loading={"lazy"}
            quality={50}
            fill={false}
            layout="default"
            placeholder="empty"
          />
        </Box>
        <Box className="pinkMeshesBox" top={{ xs: "512px", lg: "57px" }}>
          <NextImage
            fill={false}
            layout="default"
            src={pinkMeshes}
            style={{ width: "100%" }}
            alt="pink meshes"
            quality={50}
            placeholder="empty"
          />
        </Box>
        <Box className="orangeMeshesBox" top={{ xs: "2118px", sm: "422px", md: "422px", lg: "1655px" }}>
          <NextImage
            fill={false}
            layout="default"
            src={orangeMesh}
            alt="Oranges pink meshes"
            style={{ width: "100%" }}
            quality={50}
            placeholder="empty"
          />
        </Box>
      </Box>
      <Banner />
      <Gridbox />
      <Company />
      <Picturecarousel />
      <Howitswork
        title1="Top Aussie brands sync their store to the Pedlar platform"
        title2="Creators select products from brands they love"
        title3="Creators personalise their store to match their style "
        title4="Creators share their store with their followers and make sales"
        image1={firstStep}
        image2={secondStep}
        image3={thirdStep}
        image4={fourthStep}
      />
      <EarlyAcess />
      <Faq
        question1="Why should I set up a Pedlar store?"
        question2="Do I get paid for being on Pedlar?"
        question3="Does it cost to join Pedlar?"
        question4="How can I join Pedlar?"
        question5="Does my store have its own unique URL?"
        answer1="Pedlar stores are a quick and risk-free way to set up your own digital store and sell products from
                  brands you love. Your storefront will be a place for your community to browse and shop your style. The
                  best part: you'll earn 20% commision on all the sales you make."
        answer2="Creators earn a 20% commission on all sales made on their Pedlar store. Brands only pay commision when
                  a sale is made."
        answer3="Nope! It's completely free for both Creators and Brands."
        answer4="Since Pedlar is an invite only platform, submit an application and our team will get back to you
                  within 24 hours. Pedlar is excited to partner with Creators with all types of aesthetic and style!"
        answer5="Yep, when signing up you can choose your own unique URL."
      />
    </Layout>
  );
};
export default Home;
