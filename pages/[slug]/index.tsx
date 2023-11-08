import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { getUserDetailByFetchAPICall } from "apis/graphql/grapgql";
import { homeImpressiongmtEvent, homeProductsImpressiongmtEvent } from "utils/gtm";
import { getCuratedBrands } from "apis/restApi/getCuratedBrands";
import { getUserDetail } from "apis/restApi/getUserDetail";
import { seo } from "utils/seoData";
import { Box } from "@mui/material";

function logCurrentTime() {
  return new Date().toUTCString();
}

const Home = dynamic(() => import("components/home"), {
  loading: () => <Box sx={{ height: 1000 }}></Box>,
});
const Layout = dynamic(() => import("components/layout"), {
  loading: () => <p></p>,
});

export default function Index({
  headerData,
  newAdditionData,
  slug,
  curatedBrandsResponse,
  firstTime,
  secondTime,
  isMobile,
  error,
}: any) {
  useEffect(() => {
    homeImpressiongmtEvent(headerData?.data?.storefrontName);
    homeProductsImpressiongmtEvent(newAdditionData);
    window.history.scrollRestoration = "manual";
  }, [newAdditionData]);

  useEffect(() => {
    console.log("====================================");
    console.log("first time = ", firstTime);
    console.log("Second time = ", secondTime);

    console.log("====================================");
  }, []);

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
      isMobile={isMobile}
    >
      <Home
        headerData={headerData?.data}
        newAdditionData={newAdditionData}
        curatedBrandsResponse={curatedBrandsResponse?.slice(0, 4)}
        isMobile={isMobile}
      />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const { req } = context;
  const userAgent = req.headers["user-agent"] || "";
  const isMobile = /Mobile/.test(userAgent);
  const maxWidthProductImage = isMobile ? 500 : 800;
  const maxHeightProductImage = isMobile ? 600 : 900;
  const firstTime = logCurrentTime();
  const { slug } = context.query;

  const data = await Promise.all([getCuratedBrands(slug), getUserDetail(slug)]);
  const headerData = data[1];

  const numberofProducts = 6;
  if (headerData?.data) {
    const response = await getUserDetailByFetchAPICall(
      headerData?.data?.collectionId,
      numberofProducts,
      maxWidthProductImage,
      maxHeightProductImage,
    );

    const userData = response?.data?.collection?.products?.nodes || [];
    const curatedBrandsResponse = data[0];
    const secondTime = logCurrentTime();
    return {
      props: {
        data: [],
        headerData: headerData ? headerData : [],
        newAdditionData: userData ? userData : [],
        slug: slug || [],
        curatedBrandsResponse: curatedBrandsResponse?.data || [],
        firstTime,
        secondTime,
        isMobile,
      },
    };
  }
  return {
    props: {
      error: true,
    },
  };
}
