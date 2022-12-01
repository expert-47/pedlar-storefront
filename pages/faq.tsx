import React from "react";
import Layout from "../landing-components/landinglayout";
import Faq from "../landing-components/static-pages/faq/Faq";


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
