import { Divider } from "@mui/material";
import BaseFooter from "components/footer/baseFooter";
import Layout from "components/layout";
import React from "react";
import PrivacyPolicy from "../../landing-components/static-pages/privacy-policy/privacy-policy";

const privacypolicy = () => {
  return (
    <Layout
      seo={{
        title: process.env.NEXT_PUBLIC_PRIVACY_POLICY_TITLE,
        description: process.env.NEXT_PUBLIC_PRIVACY_POLICY_DESCRIPTION,
      }}
    >
      <PrivacyPolicy />
      <Divider sx={{ marginTop: "50px", marginBottom: "10px", height: "1px" }} />
      <BaseFooter />
    </Layout>
  );
};

export default privacypolicy;
