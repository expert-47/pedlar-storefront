import React, { useEffect } from "react";
import Layout from "components/layout";
import { Home } from "components/home";
import { getUserDetailByFetchAPICall } from "api/graphql/grapgql";
import { homeImpressiongmtEvent, homeProductsImpressiongmtEvent } from "utils/gtm";
import { getCuratedBrands } from "api/restApi/getCuratedBrands";
import { getUserDetail } from "api/restApi/getUserDetail";

export default function index({ headerData, newAdditionData, slug, curatedBrandsResponse, error }: any) {
  useEffect(() => {
    homeImpressiongmtEvent(headerData?.data?.storefrontName);
    homeProductsImpressiongmtEvent(newAdditionData);
  }, []);

  return (
    <>
      <Layout
        error={error}
        seo={{
          title: `${process.env.NEXT_PUBLIC_STOREFRONT_HOME_TITLE1} ${headerData?.data?.storefrontName}'s ${process.env.NEXT_PUBLIC_STOREFRONT_HOME_TITLE2}`,
          description: `${process.env.NEXT_PUBLIC_STOREFRONT_HOME_DESCRIPTION1} ${headerData?.data?.storefrontName}'s ${process.env.NEXT_PUBLIC_STOREFRONT_HOME_DESCRIPTION2}`,
        }}
        storefrontName={headerData?.data?.storefrontName}
        slug={slug}
        collectionId={headerData?.data?.collectionId}
      >
        <Home
          headerData={headerData?.data}
          newAdditionData={newAdditionData}
          curatedBrandsResponse={curatedBrandsResponse?.slice(0, 4)}
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
