import ProductHeader from "components/home/components/productHeader";
import Layout from "components/layout";
import { Divider, Box } from "@mui/material";
import Head from "next/head";
import BaseFooter from "components/footer/baseFooter";
import styles from "styles/home";
import Gallery from "components/home/components/Gallery";
import { useState, useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import { getFilteredProducts, getPaginationProducts } from "api/graphql/grapgql";
import { getUserDetail } from "api/restApi/getUserDetail";
const Products = ({ slug, collectionId, userData: data, error }: any) => {
  const [productsData, setProductsData] = useState([]);
  const [endCursorValue, setEndCursorValue] = useState({});

  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [brandsFilterList, setBrandFilterList] = useState([]);
  const [shopFilterList, setShopFilterList] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const route = useRouter();

  const setFiltersValue = async (brandData = [], shopData = [], type: string, applyFilters: boolean) => {
    console.log("applyFilters", type, applyFilters, shopFilterList.length, brandsFilterList.length);

    if (!applyFilters) {
      if (type == "Brands") {
        setBrandFilterList([]);
        console.log("shopFilterList.length", shopFilterList.length);

        return;
      }

      setShopFilterList([]);
      if (brandsFilterList.length == 0) {
        getFilteredData(true);
      }
      return;
    }
    if (type == "Brands" && brandData?.length == 0) {
      if (shopFilterList.length == 0) {
        console.log("here");

        getFilteredData(true);
      }
    } else if (type == "Brands" && brandsFilterList.length == 0) {
      getFilteredData(true);
    }
    setBrandFilterList(
      brandData.map((item) => {
        return { productVendor: item };
      }),
    );

    setShopFilterList(
      shopData.map((item) => {
        return { productType: item };
      }),
    );
  };

  useLayoutEffect(() => {
    if (route.query.dataType === "Brands" || route.query.dataType === "Shop") {
      if (route.query.dataType === "Brands") {
        setBrandFilterList([{ productVendor: route?.query.itemValue }]);
        setShopFilterList([]);
      }
      if (route.query.dataType === "Shop") {
        setShopFilterList([{ productType: route?.query.itemValue }]);
        setBrandFilterList([]);
      }
    } else {
      getFilteredData(true);
      setShopFilterList([]);
      setBrandFilterList([]);
    }
  }, [route?.query]);

  useEffect(() => {
    if (brandsFilterList.length != 0 || shopFilterList.length != 0) {
      getFilteredData();
    }
  }, [brandsFilterList, shopFilterList]);

  const getFilteredData = async (reset = false) => {
    try {
      setLoading(true);
      const response = await getFilteredProducts(collectionId, reset ? [] : [...brandsFilterList, ...shopFilterList]);
      setProductsData(response?.data?.collection?.products?.nodes || []);

      setEndCursorValue((prev) => {
        let data = { ...prev };
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
        getFilteredData();
        return;
      }

      const collectionDataProducts = await getPaginationProducts("after", endCursorValue[value - 1], collectionId, [
        ...brandsFilterList,
        ...shopFilterList,
      ]);
      setProductsData(collectionDataProducts?.nodes || []);
      setPageNumber(value);

      setEndCursorValue((prv) => {
        let data = { ...prv };
        data[value] = collectionDataProducts?.pageInfo.endCursor;
        return data;
      });
      setHasNextPage(collectionDataProducts?.pageInfo?.hasNextPage);

      return collectionDataProducts;
    } catch (error) {
      console.log(error);
      setHasNextPage(false);
    } finally {
      scrollToTop();
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
        title: `${process.env.NEXT_PUBLIC_STOREFRONT_PRODUCTLISTING_TITLE1} ${data?.data?.storefrontName}'s ${process.env.NEXT_PUBLIC_STOREFRONT_PRODUCTLISTING_TITLE2}`,
        description: `${process.env.NEXT_PUBLIC_STOREFRONT_PRODUCTLISTING_DESCRIPTION1} ${data?.data?.storefrontName}'s ${process.env.NEXT_PUBLIC_STOREFRONT_PRODUCTLISTING_DESCRIPTION2}`,
      }}
      storefrontName={data?.data?.storefrontName}
      slug={slug}
      productsPage={true}
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
          shopFilterList={shopFilterList}
        />
      </Box>
      <Gallery newAdditionData={productsData} />
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
