import React from "react";
import Faq from "../landing-components/creator-page/faq/Faq";

import Banner from "../landing-components/brand-page/mainbanner/Banner";
import Layout from "../landing-components/landinglayout";
import Pointofpurchase from "../landing-components/brand-page/pointofpurchase/Pointofpurchase";
import Influncerheading from "../landing-components/brand-page/influncerheading/Influncerheading";
import Businesstoday from "../landing-components/brand-page/businesstoday/Businesstoday";

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
