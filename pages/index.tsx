//packages imports
import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("../landing-components/index"));

const Loading = () => {
  return <div></div>;
};
const index = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  );
};

export default index;
