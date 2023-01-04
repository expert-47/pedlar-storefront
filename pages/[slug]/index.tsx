import Layout from "components/layout";
import { Home } from "components/home";
import { getUserDetailByFetchAPICall } from "api/grapgql";

export default function index({ HeaderData, newAdditionData, slug }: any) {
  console.log("newAdditionData", newAdditionData);

  return (
    <Layout
      seo={{
        title: "Pedlar | " + HeaderData?.data?.storefrontName,
        description: "Hi honeys! I've worked closely with some of my favorite brands to curate my own store!",
      }}
      storefrontName={HeaderData?.data?.storefrontName}
      slug={slug}
    >
      <Home HeaderData={HeaderData?.data} newAdditionData={newAdditionData} />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  console.log("contextcontext", context);
  const res = await fetch(`https://pedlar-dev.ts.r.appspot.com/user/${slug}/details`);

  const HeaderData = await res.json();
  console.log("headerData", HeaderData);

 
  const numberofProducts  = 6;

  let data = await getUserDetailByFetchAPICall(HeaderData?.data?.collectionId , numberofProducts);
  data = data?.data?.collection?.products?.nodes;

  return { props: { HeaderData, newAdditionData: data, slug: slug } };
}
