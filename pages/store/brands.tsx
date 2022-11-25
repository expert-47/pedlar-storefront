import React from "react";
import ForBrand from "StoreComponents/brandpage/ForBrand";
import Layout from "StoreComponents/Landinglayout";

const brands = () => {
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

export default brands;
