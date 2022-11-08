import Layout from "components/layout";

import { Home } from "components/home";

const index = () => {
  <link rel="icon" href="/favicon.ico" />;
  return (
    <Layout
      seo={{
        title: "Home",
        titleTemplate: "Home",
      }}
    >
      <Home />
    </Layout>
  );
};

export default index;
