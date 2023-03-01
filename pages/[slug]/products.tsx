import ProductHeader from "components/home/components/productHeader";
import Layout from "components/layout";
import { Grid, Divider, Box, CircularProgress, useMediaQuery } from "@mui/material";
import Head from "next/head";
import BaseFooter from "components/footer/baseFooter";
import styles from "styles/home";
import Gallery from "components/home/components/Gallery";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import { getFilteredProducts, getPaginationProducts, getUserDetailByFetchAPICall } from "api/graphql/grapgql";
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
    if (!applyFilters) {
      if (type == "Brands") {
        setBrandFilterList([]);
        return;
      }
      setShopFilterList([]);
      return;
    }

    setBrandFilterList(
      brandData.map((item) => {
        return { productVendor: item };
      }),
    );
    // console.log("shopData", shopData);

    setShopFilterList(
      shopData.map((item) => {
        return { productType: item };
      }),
    );
  };

  useEffect(() => {
    if (route.query.dataType === "Brands" || route.query.dataType === "Shop") {
      if (route.query.dataType === "Brands") {
        setBrandFilterList([{ productVendor: route?.query.itemValue }]);
      }
      if (route.query.dataType === "Shop") {
        setShopFilterList([{ productType: route?.query.itemValue }]);
      }
    }
    return () => {
      setShopFilterList([]);
      setBrandFilterList([]);
    };
  }, [route?.query]);

  useEffect(() => {
    getFilteredData();
  }, [brandsFilterList, shopFilterList]);

  const getFilteredData = async () => {
    try {
      setLoading(true);
      const response = await getFilteredProducts(collectionId, [...brandsFilterList, ...shopFilterList]);
      setProductsData(response?.data?.collection?.products?.nodes || []);
      setEndCursorValue({ 1: response?.data?.collection?.products?.pageInfo?.endCursor });

      setPageNumber(1);
      setHasNextPage(response?.data?.collection?.products?.pageInfo?.hasNextPage);
    } catch (error) {
      setProductsData([]);
    } finally {
      setLoading(false);
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
    }
  };
  useEffect(() => {
    if (hasNextPage && pageCount <= pageNumber) {
      setPageCount(pageNumber + 1);
    }
  }, [pageNumber, hasNextPage]);

  return (
    <Layout error={error} storefrontName={data?.data?.storefrontName} slug={slug} productsPage={true}>
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
        {/* {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50px",
            }}
          >
            <CircularProgress color="secondary" />
          </Box>
        )} */}
        <Gallery newAdditionData={productsData} />
      </Box>
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
