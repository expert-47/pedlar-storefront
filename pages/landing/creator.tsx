import React from "react";
import Banner from "StoreComponents/creatorpage/mainbanner/Banner";
import Husttle from "StoreComponents/creatorpage/husttle/Husttle";
import Layout from "StoreComponents/landinglayout";
import Company from "StoreComponents/creatorpage/comapny/Company";
import Cardslider from "StoreComponents/landingpage/cardslider/Cardslider";
import Faq from "StoreComponents/creatorpage/faq/Faq";
import Storefree from "StoreComponents/creatorpage/storefree/Storefree";

const creator = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
    >
      <Banner />
      <Husttle />
      <Company />
      <Cardslider />
      <Faq />
      <Storefree />
    </Layout>
  );
};

export default creator;
