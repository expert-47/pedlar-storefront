import React from "react";
import Banner from "StoreComponents/landingpage/homebanner/Banner";
import Company from "StoreComponents/landingpage/comapny/Company";
import EarlyAcess from "StoreComponents/landingpage/earlyaccess/EarlyAcess";
import Faq from "StoreComponents/landingpage/faq/Faq";
import Layout from "StoreComponents/Landinglayout";
import Gridbox from "StoreComponents/landingpage/marqueegrid/Gridbox";
import Cardslider from "StoreComponents/landingpage/cardslider/Cardslider";

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
