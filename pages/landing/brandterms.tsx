import React from "react";
import BrandTerms from "../../StoreComponents/staticpages/brandterms/BrandTerms";
import Layout from "../../StoreComponents/landinglayout";

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
