import React from "react";
import { seo } from "utils/seoData";
import Layout from "../landing-components/landinglayout";
import ReturnPolicy from "../landing-components/static-pages/return-policy/return-policy";

const Returnpolicy = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "common.white",
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
