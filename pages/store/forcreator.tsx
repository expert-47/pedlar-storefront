import React from "react";
import ForCreator from "StoreComponents/Creator Page/ForCreator";
import Layout from "StoreComponents/Layout";

const forcreator = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
    >
      <ForCreator />
    </Layout>
  );
};

export default forcreator;
