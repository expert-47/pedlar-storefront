import React from 'react'
import CreatorTerms from 'StoreComponents/Creator Terms/CreatorTerms'
import Layout from 'StoreComponents/Layout'

const creatorterms = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
    >
      <CreatorTerms />
    </Layout>
  );
}

export default creatorterms
