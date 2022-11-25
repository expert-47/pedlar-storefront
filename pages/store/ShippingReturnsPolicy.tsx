import React from "react";
import Layout from "StoreComponents/Landinglayout";
import ReturnPolicy from "StoreComponents/staticpages/shippingreturnpolicy/shippingreturnspolicy";

const shippingreturnspolicy = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
    >
      <ReturnPolicy />
    </Layout>
  );
};

export default shippingreturnspolicy;
