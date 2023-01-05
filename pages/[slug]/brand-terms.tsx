import React from "react";
import BrandTerms from "../../landing-components/static-pages/brandterms/brand-terms";
import Layout from "../..//landing-components/landinglayout";

const brandterms = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
      seo={{
        title: process.env.NEXT_PUBLIC_BRAND_TERMS_TITLE,
        description: process.env.NEXT_PUBLIC_BRAND_TERMS_DESCRIPTION,
      }}
    >
      <BrandTerms />
    </Layout>
  );
};

export default brandterms;
