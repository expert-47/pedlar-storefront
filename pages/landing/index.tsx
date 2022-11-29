import React from "react";
import Banner from "../../StoreComponents/landingpage/homebanner/banner";
import Company from "../../StoreComponents/landingpage/comapny/company";
import EarlyAcess from "../../StoreComponents/landingpage/earlyaccess/earlyacess";
import Faq from "../../StoreComponents/landingpage/faq/faq";
import Layout from "../../StoreComponents/landinglayout";
import Gridbox from "../../StoreComponents/landingpage/marqueegrid/gridbox";

const index = () => {
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
      {/* <Cardslider /> */}
      {/* <Slider /> */}
      {/* <Sliderr /> */}
      <EarlyAcess />
      <Faq />
    </Layout>
  );
};

export default index;
