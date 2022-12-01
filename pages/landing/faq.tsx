import React from "react";
import Layout from "../../StoreComponents/landinglayout";
import Faq from "../../StoreComponents/staticpages/faqpage/Faq";

const faq = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
        color: "#1C1B1F",
      }}
    >
      <Faq />
    </Layout>
  );
};

export default faq;
