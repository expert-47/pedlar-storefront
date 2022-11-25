import React from "react";
import Layout from "StoreComponents/Layout";
import ReturnPolicy from "StoreComponents/Return Policy/ReturnPolicy";

const ShippingReturnsPolicy = () => {
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

export default ShippingReturnsPolicy;
