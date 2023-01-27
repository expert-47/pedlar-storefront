import React from "react";
import Faq from "../landing-components/faq/faq";
import Banner from "../landing-components/brand-page/mainbanner/Banner";
import Layout from "../landing-components/landinglayout";
import Pointofpurchase from "../landing-components/brand-page/pointofpurchase/Pointofpurchase";
import Influncerheading from "../landing-components/brand-page/influncerheading/Influncerheading";
import Businesstoday from "../landing-components/brand-page/businesstoday/Businesstoday";
import Box from "@mui/material/Box";
import Image from "next/image";
import orangetop from "../public/top-mesh.png";
import orangebottom from "../public/bottom-mesh.png";
import Picturecarousel from "../landing-components/landing/picture-carousel/pictures-carousel";
import Howitswork from "../landing-components/how-its-work/how-its-work";
import firstStep from "../public/step1.png";
import secondStep from "../public/work1.png";
import thirdStep from "../public/work4.png";
import fourthStep from "../public/cartList.png";

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
      <Howitswork
        title1="Sync your Shopify store to Pedlar in two minutes"
        title2="Creators add your products to their stores"
        title3="When sales are made, you ship the products directly to customers"
        title4="Only pay commission on sales made"
        image1={firstStep}
        image2={secondStep}
        image3={thirdStep}
        image4={fourthStep}
      />
      <Influncerheading />
      <Picturecarousel />
      <Faq
        question1="How do I get my brand on Pedlar?"
        question2="Do I need to manually upload all my product images, descriptions, sizes, prices and other product information onto Pedlar?"
        question3="What happens if there are changes to product prices, images and stock levels (e.g. product is sold out)?"
        question4="How will I receive orders?"
        question5="How does shipping and returns work?"
        answer1="It takes less than two minutes to get set up on Pedlar. We seamlessly integrate your Shopify store into our platform using a Shopify app."
        answer2="No. Once we have integrated your Shopify store with Pedlar, all inventory management is done automatically in real-time through APIs."
        answer3="All product information including prices, images and inventory levels are updated automatically on Pedlar. This means when changes are made on your Shopify store it is reflected on Pedlar in real time."
        answer4="You receive orders as soon as they are made and they will appear as normal on your Shopify store. All Pedlar orders are tagged from Pedlar so you'll know its an order from us."
        answer5="You (the brand) ships the order using your normal order fulfilment process. Pedlar is committed to adhering to your shipping and returns policy so it's business as usual for you. If Pedlar chooses to subsidise shipping and returns, Pedlar will absorb that cost."
      />
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
