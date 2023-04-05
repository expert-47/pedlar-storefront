import React from "react";
import { seo } from "utils/seoData";
import Layout from "../landing-components/landinglayout";
import ReturnPolicy from "../landing-components/static-pages/return-policy/return-policy";

const Returnpolicy = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
      seo={{
        title: seo.landingTitle,
        description: seo.landingDescription,
      }}
    >
      <ReturnPolicy />
    </Layout>
  );
};

export default Returnpolicy;
