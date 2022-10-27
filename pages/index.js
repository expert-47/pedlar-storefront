import Layout from "components/Layout/layout";
import Head from "next/head";
import { Home } from "components/Home/Home";

const index = () => {
  <link rel="icon" href="/favicon.ico" />;
  return (
    <Layout>
      <Head>
        <title>Pedlar</title>
        <meta property="og:image" content="url img" />
        <meta property="og:url" content="/home" />
        <meta property="og:type" content="Home" />
        <meta property="og:description" content="Home" />
        <meta property="og:title" content="Home" key="Home" name="description" />
      </Head>
      <Home />
    </Layout>
  );
};

export default index;
