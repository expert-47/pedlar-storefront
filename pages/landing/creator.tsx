import React from "react";
import Banner from "../../StoreComponents/creatorpage/mainbanner/Banner";
import Husttle from "../../StoreComponents/creatorpage/husttle/Husttle";
import Layout from "../../StoreComponents/landinglayout";
import Company from "../../StoreComponents/creatorpage/comapny/Company";
import Faq from "../../StoreComponents/creatorpage/creatorfaq/Faq";
import Storefree from "../../StoreComponents/creatorpage/storefree/Storefree";

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
      <Faq />
      <Storefree />
    </Layout>
  );
};

export default creator;
