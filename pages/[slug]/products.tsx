import Text from "components/customText";
import ProductHeader from "components/home/components/productHeader";
import Layout from "components/layout";
import { Grid, Button, Divider, Box } from "@mui/material";
import Head from "next/head";
import BaseFooter from "components/footer/baseFooter";
import styles from "styles/home";
import Gallery from "components/home/components/Gallery";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  getFilteredProducts,
  getPaginationProducts,
  getUserDetailByFetchAPICall,
  getUserTotalDetailByFetchAPICall,
} from "api/graphql/grapgql";
import { getUserDetail } from "api/restApi/getUserDetail";

let filterValuesForQuery: any = [];

const Products = ({ newAdditionTotalData, newAdditionData, slug, collectionId, userData: data, error }: any) => {
  const [productsData, setProductsData] = useState([{}]);
  const [endCursorValue, setEndCursorValue] = useState("");
  const [hasNextPage, setHasNextPage] = useState(true);
  const [applyFiltersState, setApplyFiltersState] = useState(false);

  const route = useRouter();

  const setFiltersValue = async (BrandsNames: any, VendorsNames: any, applyFilters: boolean) => {
    if (BrandsNames?.length > 0) {
      BrandsNames?.map((item: any) => {
        filterValuesForQuery.push({ productVendor: item });
      });
      BrandsNames = [];
    }
    if (VendorsNames?.length > 0) {
      VendorsNames?.map((item: any) => {
        filterValuesForQuery.push({ productType: item });
      });
      VendorsNames = [];
    }

    if (applyFilters != applyFiltersState) {
      setApplyFiltersState(applyFilters);
      getFilteredData().then((res) => {
        filterValuesForQuery = [];
      });
    }
  };

  // console.log("filterValuesForQuery", filterValuesForQuery);
  useEffect(() => {
    if (!(route.query.dataType === "Brands") && !(route.query.dataType === "Shop")) {
      setProductsData(newAdditionData?.nodes);
      setEndCursorValue(newAdditionData?.pageInfo?.endCursor);
    }

    if (route.query.dataType === "Brands" || route.query.dataType === "Shop") {
      filterValuesForQuery = [];
      if (route.query.dataType === "Brands") {
        filterValuesForQuery.push({ productVendor: route?.query.itemValue });
      }
      if (route.query.dataType === "Shop") {
        filterValuesForQuery.push({ productType: route?.query.itemValue });
      }
      getFilteredData();
    }
  }, []);

  <link rel="icon" href="/favicon.ico" />;

  const getFilteredData = async () => {
    const response = await getFilteredProducts(collectionId, filterValuesForQuery);

    setProductsData(response?.data?.collection?.products?.nodes);
    setApplyFiltersState(false);
  };

  const getPaginationData = async () => {
    if (endCursorValue.includes("=")) {
      setEndCursorValue(endCursorValue.slice(0, -2));
    }

    try {
      const collectionDataProducts = await getPaginationProducts(endCursorValue, collectionId);

      const totalData = [...productsData, ...collectionDataProducts.nodes];
      setProductsData(totalData);
      setEndCursorValue(collectionDataProducts?.pageInfo?.endCursor);
      setHasNextPage(collectionDataProducts?.pageInfo?.hasNextPage);

      return collectionDataProducts;
    } catch (error) {
      console.log(error);
    }
  };
  console.log("newAdditionTotalData", newAdditionData);

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

          // paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
        }}
      >
        <ProductHeader setFiltersValue={setFiltersValue} />

        <Gallery newAdditionData={productsData} />
      </Box>
      <Grid
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Text fontSize="12px" fontWeight="600">
          {`You've viewed ${productsData?.length} out of ${productsData?.length} products`}
        </Text>
        {hasNextPage && (
          <Button
            variant="outlined"
            onClick={getPaginationData}
            style={{
              width: "15em",
              border: "2px solid black",
              borderRadius: "30px",
              backgroundColor: "white",
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "16px",
              textTransform: "none",
              marginTop: "10px",
            }}
          >
            Load more
          </Button>
        )}
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
    let totalData = await getUserTotalDetailByFetchAPICall(headerData?.data?.collectionId);
    let totalUserData = totalData?.data?.collection?.products || [];
    return {
      props: {
        newAdditionData: userData,
        slug,
        collectionId: headerData?.data?.collectionId,
        userData: headerData,
        newAdditionTotalData: totalUserData,
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
