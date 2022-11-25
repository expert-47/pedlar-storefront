import React from "react";
import ForCreator from "StoreComponents/Creator Page/Banner Components/ForCreator";
import Husttle from "StoreComponents/Creator Page/Side Husttle/Husttle";
import Layout from "StoreComponents/Layout";

const forcreator = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
    >
      <ForCreator />
      <Husttle />
    </Layout>
  );
};

export default forcreator;
