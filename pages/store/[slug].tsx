import Layout from "components/layout";
import { Home } from "components/home";
import { any } from "prop-types";


import products from "styles/products";
import { AnyARecord } from "dns";

export default function index({ HeaderData , newAdditionData   }) {

console.log("newAdditionData...." , {newAdditionData}); 


  return (
    <Layout
      seo={{
        title: "Pedlar | "+HeaderData?.data?.storefrontName,
        description: "Hi honeys! I've worked closely with some of my favorite brands to curate my own store!",
      }}
      storefrontName ={HeaderData?.data?.storefrontName}  
    >
      <Home HeaderData={HeaderData?.data} newAdditionData={newAdditionData} />
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps(context:any) {
  
  const { slug } = context.query;
  const res = await fetch(`https://pedlar-dev.ts.r.appspot.com/user/${slug}/details`);
  
  const HeaderData = await res.json();

// products data 



// let newAdditionData={};

const getUserDetailByFetchAPICall = async () => { 


  const requestBody = {
    query: `query GetCollection($collectionId: ID!) {
      collection(id: $collectionId) {
          products(first: 10, reverse: true) {
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
  variables: { collectionId : `gid://shopify/Collection/${HeaderData?.data?.shopify_collection_id}` }


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
  // body: requestBody,


};


const res = await (await fetch("https://pedlar-development.myshopify.com/api/2022-10/graphql.json", options));

const collectionData = await res.json();





return collectionData;

} ;
       
let data=await getUserDetailByFetchAPICall();
data = data?.data?.collection?.products?.nodes;

  return { props : { HeaderData , newAdditionData:data  } };
}
