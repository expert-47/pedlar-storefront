import React from "react";
import Banner from "StoreComponents/Banner Component/Banner";
import Company from "StoreComponents/Company Section/Company";
import EarlyAcess from "StoreComponents/Early Access/EarlyAcess";
import Faq from "StoreComponents/FAQ/Faq";
import Layout from "StoreComponents/Layout";
import Gridbox from "StoreComponents/MarqueeBox/Gridbox";

const storeIndex = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
        alignItems: "center",
      }}
      
    >
      <Banner />
      <Gridbox />
      <Company />
      <EarlyAcess />
      <Faq />
    </Layout>
  );
};

export default storeIndex;
