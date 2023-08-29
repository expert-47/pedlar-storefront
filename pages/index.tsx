//packages imports
import Header from "landing-components/header/header";
import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("../landing-components/index"));

const Loading = () => {
  return <Header />;
};
const index = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  );
};

export default index;
