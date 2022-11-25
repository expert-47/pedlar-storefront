import React from "react";
import Banner from "StoreComponents/creatorpage/mainbanner/Banner";
import Husttle from "StoreComponents/creatorpage/husttle/Husttle";
import Layout from "StoreComponents/Landinglayout";

const creator = () => {
  return (
    <Layout
      sx={{
        backgroundColor: "#f9f6f2",
      }}
    >
      <Banner />
      <Husttle />
    </Layout>
  );
};

export default creator;
