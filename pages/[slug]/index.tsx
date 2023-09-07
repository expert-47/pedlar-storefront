import React, { useEffect, useState } from "react";
import Layout from "components/layout";
import { Home } from "components/home";
import { getUserDetailByFetchAPICall } from "apis/graphql/grapgql";
import { homeImpressiongmtEvent, homeProductsImpressiongmtEvent } from "utils/gtm";
import { getCuratedBrands } from "apis/restApi/getCuratedBrands";
import { getUserDetail } from "apis/restApi/getUserDetail";
import { seo } from "utils/seoData";

export default function Index({ headerData, newAdditionData, slug, curatedBrandsResponse, error }: any) {
  const [newAdditionsLatest, setnewAdditionsLatest] = useState();
  useEffect(() => {
    homeImpressiongmtEvent(headerData?.data?.storefrontName);
    homeProductsImpressiongmtEvent(newAdditionData);
    getNewAdditionsData();
  }, [newAdditionData]);

  const getNewAdditionsData = async () => {
    const numberofProducts = 6;

    const data = await getUserDetailByFetchAPICall(headerData?.data?.collectionId, numberofProducts);
    const userData = data?.data?.collection?.products?.nodes || [];

    setnewAdditionsLatest(userData);
  };

  return (
    <Layout
      error={error}
      seo={{
        title: seo.storeFrontHomeTitle.replace("storefrontName", `${headerData?.data?.storefrontName}'s`),
        description: seo.storeFrontHomeDescription.replace("storefrontName", `${headerData?.data?.storefrontName}'s`),
      }}
      storefrontName={headerData?.data?.storefrontName}
      slug={slug}
      collectionId={headerData?.data?.collectionId}
    >
      <Home
        headerData={headerData?.data}
        newAdditionData={newAdditionsLatest}
        curatedBrandsResponse={curatedBrandsResponse?.slice(0, 4)}
      />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const headerData = await getUserDetail(slug);

  const numberofProducts = 6;
  if (headerData?.data) {
    const data = await getUserDetailByFetchAPICall(headerData?.data?.collectionId, numberofProducts);
    const userData = data?.data?.collection?.products?.nodes || [];
    const curatedBrandsResponse = await getCuratedBrands(slug);

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
