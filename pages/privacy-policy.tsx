import React from "react";
import { seo } from "utils/seoData";
import Layout from "../landing-components/landinglayout";
import PrivacyPolicy from "../landing-components/static-pages/privacy-policy/privacy-policy";

const privacypolicy = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#FFF7EC",
      }}
      seo={{
        title: seo.landingTitle,
        description: seo.landingDescription,
      }}
    >
      <PrivacyPolicy />
    </Layout>
  );
};

export default privacypolicy;
