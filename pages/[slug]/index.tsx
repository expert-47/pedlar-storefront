import React from "react";
import Layout from "components/layout";
import { Home } from "components/home";
import { getUserDetailByFetchAPICall } from "api/graphql/grapgql";

import { getCuratedBrands } from "api/restApi/getCuratedBrands";
import { getUserDetail } from "api/restApi/getUserDetail";

export default function index({ headerData, newAdditionData, slug, curatedBrandsResponse, error }: any) {
  return (
    <>
      <Layout
        error={error}
        seo={{
          title: "Pedlar | " + headerData?.data?.storefrontName,
          description: "Hi honeys! I've worked closely with some of my favorite brands to curate my own store!",
        }}
        storefrontName={headerData?.data?.storefrontName}
        slug={slug}
        collectionID={headerData?.data?.collectionId}
      >
        <Home
          headerData={headerData?.data}
          newAdditionData={newAdditionData}
          curatedBrandsResponse={curatedBrandsResponse.slice(0, 4)}
        />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const headerData = await getUserDetail(slug);

  const numberofProducts = 6;
  if (headerData?.data) {
    let data = await getUserDetailByFetchAPICall(headerData?.data?.collectionId, numberofProducts);
    let userData = data?.data?.collection?.products?.nodes || [];
    let curatedBrandsResponse = await getCuratedBrands(slug);

    return {
      props: {
        headerData: headerData ? headerData : [],
        newAdditionData: userData ? userData : [],
        slug: slug || [],
        curatedBrandsResponse: curatedBrandsResponse?.data || [],
      },
    };
  }
  return {
    props: {
      error: true,
    },
  };
}
