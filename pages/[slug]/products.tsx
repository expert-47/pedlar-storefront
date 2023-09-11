//package imports
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, useLayoutEffect } from "react";
import { Divider, Box, useMediaQuery, Pagination, Theme } from "@mui/material";
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

const Products = ({ slug, collectionId, userData: data, error }: any) => {
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
  //media query
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const maxWidthProductImage = isMobile ? 185 : 380;
  const maxHeightProductImage = isMobile ? 230 : 450;

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
    } finally {
      setLoading(false);
      scrollToTop();
    }
  };

  const getPaginationData = async (e, value) => {
    try {
      if (value == 1) {
        getFilteredData([...brandsFilterList, ...shopFilterList]);
        return;
      }

      const collectionDataProducts = await getPaginationProducts(
        "after",
        endCursorValue[value - 1],
        collectionId,
        [...brandsFilterList, ...shopFilterList],
        maxWidthProductImage,
        maxHeightProductImage,
      );

      setProductsData(collectionDataProducts?.nodes || []);
      productsImpressiongmtEvent(collectionDataProducts?.nodes || [], "all products");

      setPageNumber(value);

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
    } finally {
      setTimeout(() => {
        scrollToTop();
      }, 500);
    }
  };
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
    >
      <Head>
        <title>Pedlar</title>
        <meta property="og:image" content="url img" />
        <meta property="og:url" content="/home" />
        <meta property="og:type" content="Home" />
        <meta property="og:description" content="Home" />
        <meta property="og:title" content="Home" key="Home" name="description" />
      </Head>
      <Box
        sx={{
          alignItems: { xs: "center", md: "center", lg: "center" },
          justifyContent: { xs: "center", md: "center", lg: "center" },
          paddingLeft: { xs: "10px", md: "20px", lg: "40px" },
          paddingRight: { xs: "10px", md: "20px", lg: "40px" },
        }}
      >
        <ProductHeader
          loading={loading}
          setLoading={setLoading}
          brandsFilterList={brandsFilterList}
          setFiltersValue={setFiltersValue}
          collectionId={collectionId}
          slug={slug}
          filterData={filterData}
          shopFilterList={shopFilterList}
        />
      </Box>
      <Gallery newAdditionData={productsData} heading={"all products"} />
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

  const headerData = await getUserDetail(slug);

  if (headerData?.data) {
    return {
      props: {
        slug,
        collectionId: headerData?.data?.collectionId,
        userData: headerData,
      },
    };
  } else {
    return {
      props: {
        error: true,
      },
    };
  }
}

function scrollToTop() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
