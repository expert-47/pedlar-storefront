import React from "react";
import Layout from "../..//landing-components/landinglayout";
import PrivacyPolicy from "../../landing-components/static-pages/privacy-policy/privacy-policy";

const privacypolicy = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
      seo={{
        title: process.env.NEXT_PUBLIC_PRIVACY_POLICY_TITLE,
        description: process.env.NEXT_PUBLIC_PRIVACY_POLICY_DESCRIPTION,
      }}
    >
      <PrivacyPolicy />
    </Layout>
  );
};

export default privacypolicy;
