import React from "react";
import Layout from "StoreComponents/landinglayout";
import ReturnPolicy from "StoreComponents/staticpages/returnpolicy/returnpolicy";

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
