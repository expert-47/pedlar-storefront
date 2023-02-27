import Text from "components/customText";
import ProductHeader from "components/home/components/productHeader";
import Layout from "components/layout";
import { Grid, Button, Divider, Box, CircularProgress, Typography } from "@mui/material";
import Head from "next/head";
import BaseFooter from "components/footer/baseFooter";
import styles from "styles/home";
import Gallery from "components/home/components/Gallery";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import {
  getFilteredProducts,
  getPaginationProducts,
  getUserDetailByFetchAPICall,
  getPaginationProducts2,
} from "api/graphql/grapgql";
import { getUserDetail } from "api/restApi/getUserDetail";
const Products = ({ items, slug, collectionId, userData: data, error }: any) => {
  const [productsData, setProductsData] = useState([]);
  const [endCursorValue, setEndCursorValue] = useState("");
  const [startCursorValue, setStartCursorValue] = useState("");

  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [brandsFilterList, setBrandFilterList] = useState([]);
  const [shopFilterList, setShopFilterList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [paginationData, setPaginationData] = useState({});

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
    // }, [brandsFilterList, shopFilterList]);
  }, []);

  const [paginationCount, setPaginationCount] = useState(1);

  const getFilteredData = async () => {
    try {
      setLoading(true);
      const response = await getFilteredProducts(collectionId, [...brandsFilterList, ...shopFilterList]);
      setProductsData(response?.data?.collection?.products?.nodes || []);
      setTotalPage(Math.ceil(productsData.length) / 18);

      const collectionDataProducts = await getPaginationProducts2(
        response?.data?.collection?.products?.pageInfo?.endCursor,
        collectionId,
        [...brandsFilterList, ...shopFilterList],
      );
      setEndCursorValue(collectionDataProducts?.pageInfo?.endCursor);
      setStartCursorValue(collectionDataProducts?.pageInfo?.startCursor);

      setHasNextPage(response?.data?.collection?.products?.pageInfo?.hasNextPage);
      setPaginationData(collectionDataProducts?.pageInfo);
    } catch (error) {
      setProductsData([]);
    } finally {
      setLoading(false);
    }
  };
  const [updatevalue, setupdatevalue] = useState(false);

  const getPaginationData = async (e, value) => {
    setupdatevalue(!updatevalue);
    console.log(value, "valllll");
    try {
      const collectionDataProducts = await getPaginationProducts(
        value > pageNumber ? "after" : "before",
        value > pageNumber ? endCursorValue : startCursorValue,
        collectionId,
        [...brandsFilterList, ...shopFilterList],
      );
      setEndCursorValue(collectionDataProducts?.pageInfo?.endCursor);
      setStartCursorValue(collectionDataProducts?.pageInfo?.startCursor);
      setProductsData(collectionDataProducts?.nodes || []);
      setHasNextPage(collectionDataProducts?.pageInfo?.hasNextPage);

      setPaginationData(collectionDataProducts?.pageInfo);

      value > pageNumber
        ? collectionDataProducts?.pageInfo?.hasNextPage === true
          ? setCountValue((countValue) => countValue + 1)
          : setPaginationCount(countValue)
        : setCountValue((countValue) => countValue - 1);

      console.log(collectionDataProducts, "ppppp");
      setPageNumber(value);
      return collectionDataProducts;
    } catch (error) {
      console.log(error);
      setHasNextPage(false);
    }
  };
  const [countValue, setCountValue] = useState(0);

  // useEffect(() => {
  //   if (pageNumber === countValue) {

  //     setCountValue((countValue) => countValue + 1);
  //   }
  // }, [pageNumber, countValue]);

  useEffect(() => {
    if (hasNextPage === true) {
      setCountValue((countValue) => countValue + 1);
    }
  }, []);
  console.log("countValue", countValue);
  const handlerPageChange = (newpage) => {
    setCurrentPage(newpage);
  };
  const handleNextClick = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const prevDisable = currentPage === 1;
  const nextDisable = currentPage === totalPage;
  const itemsPerPage = 8;
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // console.log({ productsData });

  // const itemsToDisplay = productsData.slice(startIndex, endIndex);
  // console.log(itemsToDisplay, "itemsToDisplayitemsToDisplayitemsToDisplay");
  const itemsToDisplay = [...productsData];

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
          brandsFilterList={brandsFilterList}
          setFiltersValue={setFiltersValue}
          collectionId={collectionId}
          slug={slug}
          shopFilterList={shopFilterList}
        />
        {loading && (
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
        )}
        <Gallery newAdditionData={itemsToDisplay} />
      </Box>
      <Grid
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //  flexDirection: "column",
        }}
      >
        {/* <button style={{ padding: "10px" }} onClick={handlePrevClick} disabled={prevDisable}>
          Prev
        </button>
        {Array.from({ length: totalPage }, (_, i) => {
          return (
            <button
              style={{ padding: "10px" }}
              onClick={() => handlerPageChange(i + 1)}
              key={i}
              disabled={i + 1 === currentPage}
            >
              {i + 1}
            </button>
          );
        })}
        <button style={{ padding: "10px" }} onClick={handleNextClick} disabled={nextDisable}>
          Next
        </button> */}
        <Pagination
          count={paginationCount === 1 ? countValue : paginationCount}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => getPaginationData(e, value)}
          page={pageNumber}
          hidePrevButton={paginationData?.hasPreviousPage === false ? true : false}
          hideNextButton={paginationData?.hasNextPage === false ? true : false}
        />
      </Grid>
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
    const numberofProducts = 18;
    let data = await getUserDetailByFetchAPICall(headerData?.data?.collectionId, numberofProducts);
    let userData = data?.data?.collection?.products || [];
    // let totalData = await getUserTotalDetailByFetchAPICall(headerData?.data?.collectionId);
    // let totalUserData = totalData?.data?.collection?.products || [];

    return {
      props: {
        items: userData,
        slug,
        collectionId: headerData?.data?.collectionId,
        userData: headerData,
        // newAdditionTotalData: totalUserData,
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
