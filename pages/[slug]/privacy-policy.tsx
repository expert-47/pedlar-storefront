import { Divider } from "@mui/material";
import BaseFooter from "components/footer/baseFooter";
import Layout from "components/layout";
import React from "react";
import PrivacyPolicy from "../../landing-components/static-pages/privacy-policy/privacy-policy";
import { getUserDetail } from "api/restApi/getUserDetail";

const privacypolicy = (props) => {
  const { slug, headerData } = props;

  return (
    <Layout
      seo={{
        title: process.env.NEXT_PUBLIC_PRIVACY_POLICY_TITLE,
        description: process.env.NEXT_PUBLIC_PRIVACY_POLICY_DESCRIPTION,
      }}
      slug={slug}
      storefrontName={headerData?.data?.storefrontName}
    >
      <PrivacyPolicy />
      <Divider sx={{ marginTop: "50px", marginBottom: "10px", height: "1px" }} />
      <BaseFooter />
    </Layout>
  );
};

export default privacypolicy;

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const headerData = await getUserDetail(slug);

  return {
    props: {
      headerData: headerData ? headerData : [],
      slug: slug || [],
    },
  };

  return {
    props: {
      error: true,
    },
  };
}
