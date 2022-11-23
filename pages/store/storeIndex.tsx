import React from "react";
import Banner from "StoreComponents/Banner Component/Banner";
import Faq from "StoreComponents/FAQ/Faq";
import Layout from "StoreComponents/Layout";
import Gridbox from "StoreComponents/MarqueeBox/Gridbox";

const storeIndex = () => {
  return (
    <Layout>
      <Banner />
      <Gridbox />
      <Faq />
    </Layout>
  );
};

export default storeIndex;
