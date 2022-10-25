import Layout from "components/layout";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Home</title>
        <meta property="og:image" content="url img" />
        <meta property="og:url" content="/home" />
        <meta property="og:type" content="Home" />
        <meta property="og:description" content="Home" />
        <meta property="og:title" content="Home" key="Home" name="description" />
      </Head>
    </Layout>
  );
};

export default Home;
