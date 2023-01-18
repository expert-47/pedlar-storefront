import React from "react";
import Layout from "../landing-components/landinglayout";
import ReturnPolicy from "../landing-components/static-pages/return-policy/return-policy";

const Returnpolicy = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
      seo={{
        title: process.env.NEXT_PUBLIC_RETURN_POLICY_TITLE,
        description: process.env.NEXT_PUBLIC_RETURN_POLICY_DESCRIPTION,
      }}
    >
      <ReturnPolicy />
    </Layout>
  );
};

export default Returnpolicy;
