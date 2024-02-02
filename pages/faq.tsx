import React from "react";
import { seo } from "utils/seoData";
import Layout from "../landing-components/landinglayout";
import Faq from "../landing-components/static-pages/faq/faq";

const faq = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "landing.main",
        color: "#1C1B1F",
      }}
      seo={{
        title: seo.landingTitle,
        description: seo.landingDescription,
      }}
    >
      <Faq />
    </Layout>
  );
};

export default faq;
