import Text from "components/customText";
import ProductHeader from "components/home/components/productHeader";
import Layout from "components/layout";
import { Grid, Button, Divider, Box } from "@mui/material";
import Head from "next/head";
import BaseFooter from "components/footer/baseFooter";
import { useStyles } from "styles/home";
import Gallery from "components/home/components/Gallery";
import axios from "axios";
import useSWR from "swr";
import { useState, useEffect } from "react";


const filterValuesForQuery :any = [];

const Products = ({ newAdditionData, collectionId , slug }: any) => {
  const [productsData, setProductsData] = useState([{}]);
  const [endCursorValue, setEndCursorValue] = useState("");
  const [hasNextPage, setHasNextPage] = useState(true);
  const[applyFiltersState , setApplyFiltersState] = useState(false);
  // const [brandsNamesArray , setBrandsNamesArray] = useState([]);
  // const [vendorsArrayNames , setVendorsNamesArray] = useState([]);
  // const[productFiltersData , setProducsFiltersData] = useState([{}]);


  // console.log("setApplyFiltersState11" , applyFiltersState);
  
  const setFiltersValue = (BrandsNames ,VendorsNames , applyFilters )=>{
// debugger
    // setBrandsNamesArray(BrandsNames);
    // setVendorsNamesArray(VendorsNames);

    if(BrandsNames?.length > 0 ){
      console.log("BrandsNames length" , BrandsNames.length);
      

      
      // filterValuesForQuery=[];
      BrandsNames?.map((item )=>{
      // const result = filterValuesForQuery.find(filterValuesForQuery => filterValuesForQuery.productVendor === item);
      // console.log(result);
        
           
          filterValuesForQuery.push({"productVendor" : item});
        
      });

    }
    if(VendorsNames?.length > 0){
      // filterValuesForQuery=[];
      VendorsNames?.map((item)=>{
    
        filterValuesForQuery.push({"productType" : item});
        
      });

    }
    if (applyFilters != applyFiltersState) {

      setApplyFiltersState(applyFilters);
    }

  };

  useEffect(() => {
    setProductsData(newAdditionData?.nodes);
    setEndCursorValue(newAdditionData?.pageInfo?.endCursor);
  }, []);

  const { classes, cx } = useStyles();

  <link rel="icon" href="/favicon.ico" />;



  // getting the filtered data 


  const getFilteredData = async () =>{
    const requestBody = {
      query: `query GetCollection($collectionId: ID!, $query: [ProductFilter!]) {
        collection(id: $collectionId) {
            products(first: 10, reverse: true, filters: $query) {
                nodes {
                    id
                    title
                    productType
                    vendor
                    description
                    totalInventory
                    priceRange {
                        maxVariantPrice {
                            amount
                            currencyCode
                        }
                        minVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                    featuredImage {
                      height
                      src
                      width
                      originalSrc
                      transformedSrc(preferredContentType: WEBP, maxHeight: 343, maxWidth: 343)
                    }
                    createdAt
                    publishedAt
                }
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    startCursor
                    endCursor
                }
            }
        }
    }`,
      variables: { collectionId: `gid://shopify/Collection/${collectionId}` , "query":filterValuesForQuery },
    };
    const headers: any = {
      "X-Shopify-Storefront-Access-Token": "539c0fd31464cd8d090d295cfca2fb7f",
      "Content-Type": "application/json",
      Connection: "keep-alive",
      "Accept-Encoding": "gzip, deflate, br",
      Accept: "*/*",
    };
    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    };
    let response = await fetch("https://pedlar-development.myshopify.com/api/2022-10/graphql.json", options);
     response = await response.json();
     console.log("filter response " , response?.data?.collection?.products);
     setProductsData(response?.data?.collection?.products?.nodes);
     setApplyFiltersState(false);
     

  };
  

  useEffect(()=>{
    if(applyFiltersState){

      getFilteredData();
    }


  },[applyFiltersState]);

  // if (applyFiltersState === true){


  //   console.log("filterValuesForQuery  final " , filterValuesForQuery);
    
  //   getFilteredData();
  // }
  // making the chunks of 5 products

  const productsDataArray = [];

  for (let i = 0; i < productsData.length; i = i + 5) {
    productsDataArray.push(productsData.slice(i, i + 5));
  }

  const getPaginationData = async () => {
    if (endCursorValue.includes("=")) {
      setEndCursorValue(endCursorValue.slice(0, -2));
    }
    const requestBody = {
      query: `query GetCollection($collectionId: ID!) {
        collection(id: $collectionId) {
          products(first: 3, reverse: true ,after: "${endCursorValue}")
            {
                nodes {
                    id
                    title
                    productType
                    vendor
                    description
                    totalInventory
                    priceRange {
                        maxVariantPrice {
                            amount
                            currencyCode
                        }
                        minVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                    featuredImage {
              height
              src
              width
              originalSrc
              transformedSrc(preferredContentType: WEBP, maxHeight: 343, maxWidth: 343)
            }
                    createdAt
                    publishedAt
                }
                pageInfo {
                    hasNextPage 
                    hasPreviousPage
                    startCursor
                    endCursor
                }
            }
        }
    }`,
      variables: { collectionId: `gid://shopify/Collection/${collectionId}` },
    };
    const headers: any = {
      "X-Shopify-Storefront-Access-Token": "539c0fd31464cd8d090d295cfca2fb7f",
      "Content-Type": "application/json",
      Connection: "keep-alive",
      "Accept-Encoding": "gzip, deflate, br",
      Accept: "*/*",
    };
    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    };

    async function getResponse() {
      const res =  await fetch("https://pedlar-development.myshopify.com/api/2022-10/graphql.json", options);

      const collectionData = await res.json();

      return collectionData?.data?.collection?.products;
    }

    try {
      const collectionDataProducts = await getResponse();

      const totalData = [...productsData, ...collectionDataProducts.nodes];
      setProductsData(totalData);
      setEndCursorValue(collectionDataProducts?.pageInfo?.endCursor);
      setHasNextPage(collectionDataProducts?.pageInfo?.hasNextPage);

      return collectionDataProducts;
    } catch (error) {
      console.log(error);
    }
  };
  const address = `https://pedlar-dev.ts.r.appspot.com/user/${slug}/details`;
  const fetcher = async (url: any) => await axios.get(url).then((res) => res.data);
  const { data } = useSWR(address, fetcher);
  // console.log("data2d2d2" , data?.data?.storefrontName);

  // const res = await fetch(`https://pedlar-dev.ts.r.appspot.com/user/${slug}/details`);

  // const HeaderData = await res.json();

  return (
    <Layout storefrontName={data?.data?.storefrontName ? data?.data?.storefrontName : ""} slug={slug}>
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
        {/* {
  productsDataArray?.map ((item , index)=> */}

        <Gallery
          // girdProps={{
          //   flexDirection: {
          //     lg: "row-reverse",
          //     md: "row-reverse",
          //     sm: "column-reverse",
          //     xs: "column-reverse",
          //   },
          // }}
          // data={gallery1}
          newAdditionData={productsData}
          // position = {index === 0 ? true : index % 2 === 0 ? true : false }
          // key={index}
        />

        {/* //   )
// } */}
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
          {`You've viewed ${productsData.length} out of 100 products`}
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
      <Divider className={cx(classes.footerDivider)} />
      <BaseFooter />
    </Layout>
  );
};

export default Products;

export async function getServerSideProps(context: any) {
  //  console.log("context..............///................." , context.query["slug"]  );

  // console.log("context..............///................." , context.resolvedUrl  );

  // const slug = context.query["slug"];

  const { slug } = context.query;

  console.log("prod...", slug);

  // console.log("`slug`..............///................." , slug);

  const res = await fetch(`https://pedlar-dev.ts.r.appspot.com/user/${slug}/details`);

  const HeaderData = await res.json();

  const getUserDetailByFetchAPICall = async () => {
    const requestBody = {
      query: `query GetCollection($collectionId: ID!) {
      collection(id: $collectionId) {
          products(first: 18, reverse: true ) {
              nodes {
                  id
                  title
                  productType
                  vendor
                  description
                  totalInventory
                  priceRange {
                      maxVariantPrice {
                          amount
                          currencyCode
                      }
                      minVariantPrice {
                          amount
                          currencyCode
                      }
                  }
                  featuredImage {
            height
            src
            width
            originalSrc
            transformedSrc(preferredContentType: WEBP, maxHeight: 343, maxWidth: 343)
          }
                  createdAt
                  publishedAt
              }
              pageInfo {
                  hasNextPage
                  hasPreviousPage
                  startCursor
                  endCursor
              }
          }
      }
  }`,
      variables: { collectionId: `gid://shopify/Collection/${HeaderData?.data?.collectionId}` },
    };
    const headers: any = {
      "X-Shopify-Storefront-Access-Token": "539c0fd31464cd8d090d295cfca2fb7f",
      "Content-Type": "application/json",
      Connection: "keep-alive",
      "Accept-Encoding": "gzip, deflate, br",
      Accept: "*/*",
    };
    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    };

    const res = await await fetch("https://pedlar-development.myshopify.com/api/2022-10/graphql.json", options);

    const collectionData = await res.json();

    return collectionData;
  };

  let data = await getUserDetailByFetchAPICall();
  data = data?.data?.collection?.products;

  return { props: { newAdditionData: data, slug, collectionId: HeaderData?.data?.collectionId } };
}
