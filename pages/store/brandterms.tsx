import React from 'react'
import BrandTerms from 'StoreComponents/Brand Terms/BrandTerms'
import Layout from 'StoreComponents/Layout'

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
}

export default brandterms
