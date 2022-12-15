import Text from "components/customText";
import ProductHeader from "components/home/components/productHeader";
import Layout from "components/layout";
import { Grid, Button, useTheme, Divider, Box } from "@mui/material";
import Head from "next/head";
import BaseFooter from "components/footer/baseFooter";
import { useStyles } from "styles/home";
import Gallery from "components/home/components/Gallery";
import { useRouter } from "next/router";
import { useState , useEffect } from "react";

const gallery1 = [
  {
    label: "Coat",
    imgPath: "/grid-img1.png",
    name: "Low Classic",
    type: "Green Polyester Blazer",
    price: "$365",
    crossPrice: "$420",
  },
  {
    label: "Veja",
    imgPath: "/grid-img2.png",
    name: "Veja X Marni",
    type: "35s",
    price: "$320",
  },
  {
    label: "Mask",
    imgPath: "/grid-img3.png",
    name: "Sisley Paris",
    type: "Eye Contour Mask",
    price: "$42",
  },
  {
    label: "Fleece",
    imgPath: "/grid-img4.png",
    name: "Nike",
    type: "High-Waisted Fleece Open",
    price: "$975",
  },
  {
    label: "Earring",
    imgPath: "/grid-img5.png",
    name: "Matteau",
    type: "Drop Earring Collection",
    price: "$42",
  },
];
const gallery2 = [
  {
    label: "Kasbah",
    imgPath: "/grid-img7.png",
    name: "19-69",
    type: "KASBAH",
    price: "$310",
  },
  {
    label: "Purse",
    imgPath: "/grid-img6.png",
    name: "Ganni",
    type: "Beaded Banana Purse",
    price: "$525",
  },
  {
    label: "Mask",
    imgPath: "/grid-img3.png",
    name: "Sisley Paris",
    type: "Eye Contour Mask",
    price: "$42",
  },
  {
    label: "Fleece",
    imgPath: "/grid-img4.png",
    name: "Nike",
    type: "High-Waisted Fleece Open",
    price: "$975",
  },
  {
    label: "Coco",
    imgPath: "/grid-img8.png",
    name: "Hunza G",
    type: "Coco Bikini",
    price: "$300",
  },
];

const Products = ({newAdditionData , slug , collectionId}:any) => {

  const [productsData , setProductsData] = useState([{}]);
  const [endCursorValue , setEndCursorValue] = useState("");


  useEffect(() => { 
     setProductsData(newAdditionData?.nodes) ;
     setEndCursorValue(newAdditionData?.pageInfo?.endCursor)
     ;}, []);



  
  const theme = useTheme();
  const { classes, cx } = useStyles();

  <link rel="icon" href="/favicon.ico" />;

  // const router = useRouter();
  // const {slug} = router.query;
  console.log("slug..... ,, id " , slug ,"id........" , collectionId);


  let data = [];

  for(let i = 0 ; i<productsData.length  ; i=i+5 ){

    data.push(productsData.slice(i,i+5));
  
  }
  let endCursor:string  = newAdditionData?.pageInfo?.endCursor;
  endCursor=endCursor.toString();
  // endCursor =endCursor.JSON.stringify();
  if(endCursor.includes("=")){

    endCursor=endCursor.slice(0,-2);
    
    console.log("endCursor" , endCursor);

  }
 


  const getPaginationData =async()=>{
    if(endCursorValue.includes("=")){
      setEndCursorValue(endCursorValue.slice(0,-2));
    }
    const requestBody = {
      query: `query GetCollection($collectionId: ID!) {
        collection(id: $collectionId) {
          products(first: 2, reverse: true ,after: "${endCursorValue}")
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
              transformedSrc(preferredContentType: WEBP, maxHeight: 500, maxWidth: 400)
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
    variables: { collectionId : `gid://shopify/Collection/${collectionId}` }
  
  
  };
  const headers:any = {
    "X-Shopify-Storefront-Access-Token": "539c0fd31464cd8d090d295cfca2fb7f",
      "Content-Type" : "application/json",
      "Connection":"keep-alive",
      "Accept-Encoding":"gzip, deflate, br",
      "Accept":"*/*"
  
  };
  const options = {
    method: "POST",
    headers : headers,
    body: JSON.stringify(requestBody),

  };

  async function getResponse (){
  const res = await (await fetch("https://pedlar-development.myshopify.com/api/2022-10/graphql.json", options));

  const collectionData = await res.json();

 
  return  collectionData?.data?.collection?.products;
    
  }
  
  const data2 = await getResponse();
  // setProductsData((productsData)=> {
  //   let totalData = {productsData , data2};
  //   return { totalData}; } );
  const totalData=[...productsData,...data2.nodes];
  setProductsData(totalData);
  setEndCursorValue(data2?.pageInfo?.endCursor);

  return   data2;


  };  
  
// const api_res = getPaginationData().then(resp=>{

//   setProductsData((productsData)=> {
//   return { ... productsData , ...resp}; } );

//   console.log("resp......////" , resp);
  

// });
// console.log("newAdditionData?.pageInfo?.endCursor...." , newAdditionData?.pageInfo?.endCursor);

console.log("productsData...,.,.,.,.,.,.,.," , productsData);



  return (
    <Layout>
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
        <ProductHeader />
        {
  data?.map ((item , index)=>
 
    <Gallery
    girdProps={{
      flexDirection: {
        // lg: "row-reverse",
        // md: "row-reverse",
        // sm: "column-reverse",
        // xs: "column-reverse",
      },
    }}
    data={gallery1}
    newAdditionData={item}
    position = {index === 0 ? true : index % 2 === 0 ? true : false }
    key={index}
  />

  )
}
        {/* <Gallery
          girdProps={{
            flexDirection: {
              lg: "row-reverse",
              md: "row-reverse",
              sm: "column-reverse",
              xs: "column-reverse",
            },
          }}
          data={gallery1}
          newAdditionData={newAdditionData}

        />
        <Gallery
          data={gallery2}
          girdProps={{
            flexDirection: {
              lg: "row",
              md: "row",
              sm: "column-reverse",
              xs: "column-reverse",
            },
            marginTop: 40,
          }}
          columnSpacing={0}
          newAdditionData={newAdditionData?.length > 5 ? newAdditionData.slice(5,10) : "null"}

        /> */}
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
          {"You've viewed 10 out of 100 products"}
        </Text>
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
      </Grid>
      <Divider className={cx(classes.footerDivider)} />
      <BaseFooter />
    </Layout>
  );
};

export default Products;


export async function getServerSideProps(context:any) {
  
  const {slug} = context.query;

  
  const res = await fetch(`https://pedlar-dev.ts.r.appspot.com/user/${slug}/details`);
 
  const HeaderData = await res.json();





const getUserDetailByFetchAPICall = async () => { 


  const requestBody = {
    query: `query GetCollection($collectionId: ID!) {
      collection(id: $collectionId) {
          products(first: 2, reverse: true ) {
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
            transformedSrc(preferredContentType: WEBP, maxHeight: 500, maxWidth: 400)
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
  variables: { collectionId : `gid://shopify/Collection/${HeaderData?.data?.collectionId}` }


};
const headers:any = {
  "X-Shopify-Storefront-Access-Token": "539c0fd31464cd8d090d295cfca2fb7f",
    "Content-Type" : "application/json",
    "Connection":"keep-alive",
    "Accept-Encoding":"gzip, deflate, br",
    "Accept":"*/*"

};
const options = {
  method: "POST",
  headers : headers,
  body: JSON.stringify(requestBody),
 


};

const res = await (await fetch("https://pedlar-development.myshopify.com/api/2022-10/graphql.json", options));

const collectionData = await res.json();

return collectionData;

} ;
       
let data=await getUserDetailByFetchAPICall();
data = data?.data?.collection?.products;

  return { props : {  newAdditionData:data , slug , collectionId:HeaderData?.data?.collectionId } };
}
