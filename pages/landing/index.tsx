import React from "react";
import Banner from "StoreComponents/landingpage/homebanner/banner";
import Company from "StoreComponents/landingpage/comapny/company";
import EarlyAcess from "StoreComponents/landingpage/earlyaccess/earlyacess";
import Faq from "StoreComponents/landingpage/faq/faq";
import Layout from "StoreComponents/Landinglayout";
import Gridbox from "StoreComponents/landingpage/marqueegrid/gridbox";
import Cardslider from "StoreComponents/landingpage/cardslider/cardslider";

const storeIndex = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
        alignItems: "center",
        backgroundPosition: "top left",
        backgroundSize: "unset",
        backgroundRepeat: "repeat",
        width: "100%",
        height: "unset",
        mixBlendMode: "overlay",
        zIndex: "2",
        position: "absolute",
      }}
    >
      <Banner />
      <Gridbox />
      <Company />
      <Cardslider />
      <EarlyAcess />
      <Faq />
    </Layout>
  );
};

export default storeIndex;
