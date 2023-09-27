//package imports
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, useLayoutEffect } from "react";
import { Divider, Box, useMediaQuery, Pagination, Theme, CircularProgress } from "@mui/material";
//components imports
import Layout from "components/layout";
import BaseFooter from "components/footer/baseFooter";
import Gallery from "components/home/components/Gallery";
import ProductHeader from "components/home/components/productHeader";
//apis
import { getUserDetail } from "apis/restApi/getUserDetail";
import { getFilteredProducts, getPaginationProducts } from "apis/graphql/grapgql";
//style
import styles from "styles/home";
//SEO
import { seo } from "utils/seoData";
//GTM
import { productsImpressiongmtEvent } from "utils/gtm";

const Products = ({ slug, collectionId, userData: data, isMobile, error }: any) => {
  const route = useRouter();
  //states
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const [shopFilterList, setShopFilterList] = useState([]);
  const [endCursorValue, setEndCursorValue] = useState({});
  const [brandsFilterList, setBrandFilterList] = useState([]);
  const [filterData, setFilterData] = useState({
    shopList: [],
    vender: [],
  });

  const maxWidthProductImage = isMobile ? 600 : 800;
  const maxHeightProductImage = isMobile ? 700 : 900;

  const setFiltersValue = async (brandData = [], shopData = []) => {
    getFilteredData([...brandData, ...shopData]);
  };

  useLayoutEffect(() => {
    if (route.query.dataType === "Brands" || route.query.dataType === "Categories") {
      if (route.query.dataType === "Brands") {
        const filterList = [{ productVendor: route?.query.itemValue }];
        setFiltersValue(filterList, []);
      }
      if (route.query.dataType === "Categories") {
        let filterList = [{ productType: route?.query.itemValue }];
        setFiltersValue([], filterList);
      }
    } else {
      getFilteredData([]);
      setShopFilterList([]);
      setBrandFilterList([]);
    }
  }, [route?.query]);

  const getFilteredData = async (filterData) => {
    scrollToTop();

    try {
      setLoading(true);
      setProductsData([]);
      const response = await getFilteredProducts(collectionId, filterData, maxWidthProductImage, maxHeightProductImage);
      const data = response?.data?.collection?.products?.filters;

      const shopList = data.find((data) => data.label == "Product type");

      const vender = data.find((data) => data.label == "Brand");
      setFilterData({ shopList: shopList?.values || [], vender: vender?.values || [] });
      const brandsFilter =
        filterData.filter(
          (item) => vender?.values.findIndex((i) => i.label == item?.productVendor && i.count != 0) != -1,
        ) || [];
      setBrandFilterList(brandsFilter);
      const shopFilter =
        filterData.filter(
          (item) => shopList?.values.findIndex((i) => i.label == item?.productType && i.count != 0) != -1,
        ) || [];
      setShopFilterList(shopFilter);
      productsImpressiongmtEvent(response?.data?.collection?.products?.nodes || [], "all products");

      setProductsData(response?.data?.collection?.products?.nodes || []);

      setEndCursorValue((prev) => {
        const data = { ...prev };
        data[1] = response?.data?.collection?.products?.pageInfo?.endCursor;
        return data;
      });

      setPageNumber(1);
      setHasNextPage(response?.data?.collection?.products?.pageInfo?.hasNextPage);
      // }
    } catch (error) {
      setProductsData([]);
    }
  };

  const getPaginationData = async (e, value) => {
    try {
      if (value == 1) {
        getFilteredData([...brandsFilterList, ...shopFilterList]);
        return;
      }
      scrollToTop();
      setLoading(true);

      const collectionDataProducts = await getPaginationProducts(
        "after",
        endCursorValue[value - 1],
        collectionId,
        [...brandsFilterList, ...shopFilterList],
        maxWidthProductImage,
        maxHeightProductImage,
      );

      setPageNumber(value);
      setProductsData(collectionDataProducts?.nodes || []);
      productsImpressiongmtEvent(collectionDataProducts?.nodes || [], "all products");

      setEndCursorValue((prv) => {
        const data = { ...prv };
        data[value] = collectionDataProducts?.pageInfo.endCursor;
        return data;
      });
      setHasNextPage(collectionDataProducts?.pageInfo?.hasNextPage);

      return collectionDataProducts;
    } catch (error) {
      console.log(error);
      setHasNextPage(false);
    }
  };
  useEffect(() => {
    window.history.scrollRestoration = "manual";

    if (productsData?.length > 0) {
      scrollToTop();

      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [productsData]);

  useEffect(() => {
    if (hasNextPage && pageCount <= pageNumber) {
      setPageCount(pageNumber + 1);
    }
  }, [pageNumber, hasNextPage]);

  return (
    <Layout
      error={error}
      seo={{
        title: seo.productListingTitle.replace("storefrontName", `${data?.data?.storefrontName}'s`),
        description: seo.productListingDescription.replace("storefrontName", `${data?.data?.storefrontName}'s`),
      }}
      storefrontName={data?.data?.storefrontName}
      slug={slug}
      productsPage={true}
      collectionId={collectionId}
      isMobile={isMobile}
    >
      <Head>
        <title>Pedlar</title>
        <meta property="og:image" content="url img" />
        <meta property="og:url" content="/home" />
        <meta property="og:type" content="Home" />
        <meta property="og:description" content="Home" />
        <meta property="og:title" content="Home" key="Home" name="description" />
      </Head>

      {loading && !error ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <>
          <Box
            sx={{
              alignItems: { xs: "center", md: "center", lg: "center" },
              justifyContent: { xs: "center", md: "center", lg: "center" },
              paddingLeft: { xs: "10px", md: "20px", lg: "40px" },
              paddingRight: { xs: "10px", md: "20px", lg: "40px" },
            }}
          >
            <ProductHeader
              slug={slug}
              loading={loading}
              filterData={filterData}
              setLoading={setLoading}
              collectionId={collectionId}
              shopFilterList={shopFilterList}
              setFiltersValue={setFiltersValue}
              brandsFilterList={brandsFilterList}
            />
          </Box>
          <Gallery newAdditionData={productsData} heading={"all products"} />
        </>
      )}
      {(!loading && productsData?.length > 0) || pageNumber != 1 ? (
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
          paddingX={0}
        >
          <Pagination
            count={hasNextPage ? pageCount : pageNumber}
            variant="outlined"
            shape="rounded"
            siblingCount={0}
            onChange={(e, value) => getPaginationData(e, value)}
            page={pageNumber}
            hidePrevButton={pageNumber == 1}
            hideNextButton={!hasNextPage}
          />
        </Box>
      ) : null}
      <Divider sx={styles.footerDivider} />
      <BaseFooter />
    </Layout>
  );
};

export default Products;

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const { req } = context;
  const userAgent = req.headers["user-agent"] || "";
  const isMobile = /Mobile/.test(userAgent);
  const headerData = await getUserDetail(slug);

  if (headerData?.data) {
    return {
      props: {
        slug,
        collectionId: headerData?.data?.collectionId,
        userData: headerData,
        isMobile,
      },
    };
  } else {
    return {
      props: {
        error: true,
        isMobile,
      },
    };
  }
}

function scrollToTop() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "instant" });
}
