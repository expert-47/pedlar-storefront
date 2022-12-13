import Layout from "components/layout";
import { Home } from "components/home";

export default function index({ HeaderData }) {
  return (
    <Layout
      seo={{
        title: "Pedlar - Hannah Juneva Store",
        description: "Hi honeys! I've worked closely with some of my favorite brands to curate my own store!",
      }}
      storefrontName={HeaderData?.data?.storefrontName}
    >
      <Home HeaderData={HeaderData?.data} />
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(`https://pedlar-dev.ts.r.appspot.com/user/${slug}/details`);

  const HeaderData = await res.json();
  return { props: { HeaderData } };
}
