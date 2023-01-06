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
      seo={{
        title: process.env.NEXT_PUBLIC_CREATOR_TERMS_TITLE,
        description: process.env.NEXT_PUBLIC_CREATOR_TERMS_DESCRIPTION,
      }}
    >
      <CreatorTerms />
    </Layout>
  );
};

export default creatorterms;
