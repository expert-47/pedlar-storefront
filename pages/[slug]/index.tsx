import React from "react";
import Layout from "components/layout";
import { Home } from "components/home";
import { getUserDetailByFetchAPICall, checkoutCartDetails } from "api/graphql/grapgql";
import Custom404 from "../404";
import { getCuratedBrands } from "api/restApi/getCuratedBrands";
import { getUserDetail } from "api/restApi/getUserDetail";

export default function index({ HeaderData, newAdditionData, slug, curatedBrandsResponse }: any) {
  return (
    <>
      {HeaderData?.data?.storefrontName ? (
        <Layout
          seo={{
            title: "Pedlar | " + HeaderData?.data?.storefrontName,
            description: "Hi honeys! I've worked closely with some of my favorite brands to curate my own store!",
          }}
          storefrontName={HeaderData?.data?.storefrontName}
          slug={slug}
        >
          <Home
            HeaderData={HeaderData?.data}
            newAdditionData={newAdditionData}
            curatedBrandsResponse={curatedBrandsResponse}
          />
        </Layout>
      ) : (
        <Custom404 />
      )}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const res = await getUserDetail(slug);
  console.log("res", res);

  const HeaderData = await res;

  const numberofProducts = 6;

  let data = await getUserDetailByFetchAPICall(HeaderData?.data?.collectionId, numberofProducts);
  data = data?.data?.collection?.products?.nodes || [];

  let curatedBrandsResponse = await getCuratedBrands();

  curatedBrandsResponse = curatedBrandsResponse?.data;
  return {
    props: {
      HeaderData: HeaderData ? HeaderData : [],
      newAdditionData: data ? data : [],
      slug: slug || [],
      curatedBrandsResponse: curatedBrandsResponse || [],
    },
  };
}
