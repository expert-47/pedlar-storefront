import React from "react";
import ForBrand from "StoreComponents/Brand Page/ForBrand";
import Layout from "StoreComponents/Layout";

const forbrands = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
    >
      <ForBrand />
    </Layout>
  );
};

export default forbrands;
