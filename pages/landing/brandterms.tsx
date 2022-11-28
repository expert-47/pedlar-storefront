import React from "react";
import BrandTerms from "StoreComponents/staticpages/brandterms/brandterms";
import Layout from "StoreComponents/landinglayout";

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
