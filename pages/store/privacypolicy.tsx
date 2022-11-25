import React from 'react'
import Layout from 'StoreComponents/Layout'
import PrivacyPolicy from 'StoreComponents/Privacy Policy/PrivacyPolicy'

const privacypolicy = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
    >
      <PrivacyPolicy />
    </Layout>
  );
}

export default privacypolicy
