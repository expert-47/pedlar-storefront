import React from "react";
import Banner from "../landing-components/creator-page/mainbanner/Banner";
import Husttle from "../landing-components/creator-page/husttle/Husttle";
import Layout from "../landing-components/landinglayout";
import Company from "../landing-components/creator-page/comapny/Company";
import Faq from "../landing-components/creator-page/faq/Faq";
import Storefree from "../landing-components/creator-page/storefree/Storefree";

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
