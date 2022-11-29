import React from "react";
import Layout from "../../StoreComponents/landinglayout";
import PrivacyPolicy from "../../StoreComponents/staticpages/privacypolicy/privacypolicy";

const privacypolicy = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
    >
      <PrivacyPolicy />
    </Layout>
  );
};

export default privacypolicy;
