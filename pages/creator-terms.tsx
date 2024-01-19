import React from "react";
import CreatorTerms from "../landing-components/static-pages/creatorterms/creator-terms";
import Layout from "../landing-components/landinglayout";
import { seo } from "utils/seoData";

const creatorterms = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "common.white",
        color: "#1C1B1F",
      }}
      seo={{
        title: seo.landingTitle,
        description: seo.landingDescription,
      }}
    >
      <CreatorTerms />
    </Layout>
  );
};

export default creatorterms;
