import React from "react";
import BrandTerms from "../landing-components/static-pages/brandterms/brand-terms";
import Layout from "../landing-components/landinglayout";
import { seo } from "utils/seoData";

const brandterms = () => {
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
      <BrandTerms />
    </Layout>
  );
};

export default brandterms;
