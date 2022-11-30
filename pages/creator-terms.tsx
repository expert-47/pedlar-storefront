import React from "react";
import CreatorTerms from "../landing-components/static-pages/creatorterms/creator-terms";
import Layout from "../landing-components/landinglayout";

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
