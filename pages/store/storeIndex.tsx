import React from "react";
import Banner from "StoreComponents/Banner Component/Banner";
import Layout from "StoreComponents/Layout";
import Gridbox from "StoreComponents/MarqueeBox/Gridbox";

const storeIndex = () => {
  return (
    <Layout>
      <Banner />
      <Gridbox />
    </Layout>
  );
};

export default storeIndex;
