import React from "react";
import Layout from "../../landing-components/landinglayout";
import Faq from "../../landing-components/static-pages/faq/faq";

const faq = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
        color: "#1C1B1F",
      }}
      seo={{
        title: process.env.NEXT_PUBLIC_FAQ_TITLE,
        description: process.env.NEXT_PUBLIC_FAQ_DESCRIPTION,
      }}
    >
      <Faq />
    </Layout>
  );
};

export default faq;
