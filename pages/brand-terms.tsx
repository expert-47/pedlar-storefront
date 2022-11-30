import React from "react";
import BrandTerms from "../landing-components/static-pages/brandterms/brand-terms";
import Layout from "../landing-components/landinglayout";

const brandterms = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
    >
      <BrandTerms />
    </Layout>
  );
};

export default brandterms;
