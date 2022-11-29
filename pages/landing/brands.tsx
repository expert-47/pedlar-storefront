import React from "react";
import Faq from "../../StoreComponents/brandpage/faq/faq";
import Banner from "../../StoreComponents/brandpage/mainbanner/banner";
import Layout from "../../StoreComponents/landinglayout";
import Pointofpurchase from "../../StoreComponents/brandpage/pointofpurchase/pointofpurchase";
import Influncerheading from "../../StoreComponents/brandpage/influncerheading/influncerheading";
import Businesstoday from "../../StoreComponents/brandpage/businesstoday/businesstoday";

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
      <Faq />
      <Businesstoday />
    </Layout>
  );
};

export default brands;
