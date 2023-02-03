import React from "react";
import Banner from "../../landing-components/creator-page/mainbanner/Banner";
import Husttle from "../../landing-components/creator-page/husttle/Husttle";
import Layout from "../../landing-components/landinglayout";
import Company from "../../landing-components/creator-page/comapny/Company";

import Storefree from "../../landing-components/creator-page/storefree/Storefree";
import Box from "@mui/material/Box";
import Image from "next/image";
import bluemeshbrands from "../../public/blue-meshh.png";
import Picturecarousel from "../../landing-components/picture-carousel/pictures-carousel";
import Howitswork from "landing-components/how-its-work/how-its-work";
import firstStep from "../../public/work1.png";
import secondStep from "../../public/work2.png";
import thirdStep from "../../public/work3.png";
import fourthStep from "../../public/work4.png";
import Faq from "landing-components/faq/faq";
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
      <Howitswork
        title1="Select products from your favourite brands"
        title2="Personalise your store to represent your aesthetic "
        title3="Share with your community, wherever they are  "
        title4="Sit back and earn. Pedlar handles customer support, shipping and inventory   "
        image1={firstStep}
        image2={secondStep}
        image3={thirdStep}
        image4={fourthStep}
      />
      <Company />
      <Picturecarousel />
      <Faq
        question1="How do I build my store?"
        question2="Do I have to buy or manage inventory?"
        question3="Where and how can I promote my Pedlar store?"
        question4="Why should I set up a Pedlar store?"
        question5="How can I join Pedlar?"
        answer1="We'll send you a link once we accept your application. Select products from your favourite brands, customise your store to make it your own and share your unique URL with your followers. All done in less than two minutes!"
        answer2="Nope, all inventory is held by the brands. This also means you don't have to worry about shipping and returns. "
        answer3="You can promote your Pedlar site wherever you want by sharing your unique URL. Popular places to start are link in bio on your social channels and LinkTree."
        answer4="Pedlar stores are a quick and risk-free way to set up your own digital store and sell products from brands you love. Your storefront will be a place for your community to browse and shop your style. The best part: you'll earn 20% commision on all the sales you make."
        answer5="Since Pedlar is an invite only platform, submit an application and our team will get back to you within 24 hours. Pedlar is excited to partner with Creators with all types of aesthetic and style!"
      />
      <Storefree />
    </Layout>
  );
};

export default creator;
