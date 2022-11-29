import React from "react";
import Banner from "../../StoreComponents/creatorpage/mainbanner/banner";
import Husttle from "../../StoreComponents/creatorpage/husttle/husttle";
import Layout from "../../StoreComponents/landinglayout";
import Company from "../../StoreComponents/creatorpage/comapny/company";
import Cardslider from "../../StoreComponents/landingpage/cardslider/cardslider";
import Faq from "../../StoreComponents/creatorpage/faq/faq";
import Storefree from "../../StoreComponents/creatorpage/storefree/storefree";

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
