//packages imports
import React from "react";

import dynamic from "next/dynamic";
import Header from "landing-components/header/header";

const Home = dynamic(() => import("../landing-components/index"), {
  loading: () => <Header />,
});

const index = () => {
  return <Home />;
};

export default index;
