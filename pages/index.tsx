import Layout from "components/layout";

import { Home } from "components/home";

const index = () => {
  return (
    <Layout
      seo={{
        title: "Pedlar - Hannah Juneva Store",
        description: "Hi honeys! I’ve worked closely with some of my favorite brands to curate my own store!",
      }}
    >
      <Home />
    </Layout>
  );
};

export default index;
