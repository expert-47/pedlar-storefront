import React from "react";
import CreatorTerms from "../../StoreComponents/staticpages/creatorterms/CreatorTerms";
import Layout from "../../StoreComponents/landinglayout";

const creatorterms = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
        color: "#1C1B1F",
      }}
    >
      <CreatorTerms />
    </Layout>
  );
};

export default creatorterms;
