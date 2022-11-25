import React from "react";
import Faq from "StoreComponents/brandpage/faq/Faq";
import Banner from "StoreComponents/brandpage/mainbanner/Banner";
import Layout from "StoreComponents/Landinglayout";
import Cardslider from "StoreComponents/landingpage/cardslider/Cardslider";
import Pointofpurchase from "StoreComponents/brandpage/pointofpurchase/Pointofpurchase";
import Influncerheading from "StoreComponents/brandpage/influncerheading/Influncerheading";
import Businesstoday from "StoreComponents/brandpage/businesstoday/businesstoday";

const brands = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
    >
      <Banner />
      <Pointofpurchase />
      <Influncerheading />
      <Cardslider />
      <Faq />
      <Businesstoday />
    </Layout>
  );
};

export default brands;
