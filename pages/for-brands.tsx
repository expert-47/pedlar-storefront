//package imports
import React from "react";
import Box from "@mui/material/Box";
//components
import orangetop from "../public/top-mesh.png";
import Faq from "../landing-components/faq/faq";
import { NextImage } from "components/pedlarImage";
import orangebottom from "../public/bottom-mesh.png";
import Layout from "../landing-components/landinglayout";
import CardBox from "landing-components/card-box/card-box";
import Banner from "../landing-components/brand-page/mainbanner/Banner";
import Howitswork from "../landing-components/how-its-work/how-its-work";
import Picturecarousel from "../landing-components/picture-carousel/pictures-carousel";
import Businesstoday from "../landing-components/brand-page/businesstoday/Businesstoday";
import Influncerheading from "../landing-components/brand-page/influncerheading/Influncerheading";
//assets
import firstStep from "../public/step1.png";
import thirdStep from "../public/work4.png";
import secondStep from "../public/work1.png";
import FreeJoin from "../public/free-join.png";
import fourthStep from "../public/cartList.png";
import SetForgot from "../public/set-forgot.png";
import SalesBrand from "../public/sales-brand1.png";
import PropleTrustPeople from "../public/people-trust-people.png";
//assets
import { seo } from "utils/seoData";

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
const brands = () => {
  return (
    <Layout
      style={{ position: "relative", backgroundColor: "#f9f6f2" }}
      seo={{
        title: seo.landingTitle,
        description: seo.landingDescription,
      }}
    >
      <Box sx={styless.paperContainer}></Box>
      <Box style={{ position: "relative" }}>
        <Box style={{ position: "absolute", left: "0", width: "100%", zIndex: "0" }} top={{ xs: "0px", lg: "0px" }}>
          <NextImage
            src={orangetop}
            fill={false}
            layout="default"
            style={{ width: "100%", height: "auto" }}
            alt="Orange meshes"
            loading={"lazy"}
            quality={50}
            placeholder="empty"
          />
        </Box>
      </Box>
      <Banner />
      <CardBox
        heading=" Create moments of inspiration closer to the point of purchase"
        icon1={SalesBrand}
        title1="Increase Sales and Brand Exposure"
        para1="Let our creators promote and sell your products for you."
        icon2={SetForgot}
        title2="Set and forget"
        para2="All stock easily integrated in under two minutes. Fulfil orders as normal."
        icon3={FreeJoin}
        title3="Free to join, only pay commission on sales"
        para3="Free, forever. Only pay commission on sales creators make."
        icon4={PropleTrustPeople}
        title4="People trust people"
        para4="Deepen existing creator relationships or find new, lucrative partnerships."
      />
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
        style={{ position: "absolute", right: "0", width: "100%", zIndex: "0" }}
        bottom={{ xs: "619px", sm: "0px", lg: "343px" }}
      >
        <NextImage
          layout="default"
          fill={false}
          style={{ width: "100%", height: "auto" }}
          src={orangebottom}
          alt="orange brand meshes"
          placeholder="empty"
        />
      </Box>
    </Layout>
  );
};

export default brands;
