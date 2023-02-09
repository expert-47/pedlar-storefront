import { Divider } from "@mui/material";
import BaseFooter from "components/footer/baseFooter";
import Layout from "components/layout";
import React from "react";
import ReturnPolicy from "../../landing-components/static-pages//return-policy/return-policy";

const Returnpolicy = () => {
  return (
    <Layout
      seo={{
        title: process.env.NEXT_PUBLIC_RETURN_POLICY_TITLE,
        description: process.env.NEXT_PUBLIC_RETURN_POLICY_DESCRIPTION,
      }}
    >
      <ReturnPolicy />
      <Divider sx={{ marginTop: "50px", marginBottom: "10px", height: "1px" }} />
      <BaseFooter />
    </Layout>
  );
};

export default Returnpolicy;
