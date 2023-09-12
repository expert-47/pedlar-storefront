import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
// import { Home } from "components/home";
import { getUserDetailByFetchAPICall } from "apis/graphql/grapgql";
import { homeImpressiongmtEvent, homeProductsImpressiongmtEvent } from "utils/gtm";
import { getCuratedBrands } from "apis/restApi/getCuratedBrands";
import { getUserDetail } from "apis/restApi/getUserDetail";
import { seo } from "utils/seoData";
import { isMobile } from "react-device-detect";

function logCurrentTime() {
  return new Date().toUTCString();
}

const Home = dynamic(() => import("components/home"), {
  loading: () => <p></p>,
});
const Layout = dynamic(() => import("components/layout"), {
  loading: () => <p></p>,
});
const maxWidthProductImage = isMobile ? 185 : 380;
const maxHeightProductImage = isMobile ? 230 : 450;

export default function Index({
  headerData,
  newAdditionData,
  slug,
  curatedBrandsResponse,
  firstTime,
  secondTime,
  error,
}: any) {
  // const [newAdditionsLatest, setnewAdditionsLatest] = useState();
  useEffect(() => {
    homeImpressiongmtEvent(headerData?.data?.storefrontName);
    homeProductsImpressiongmtEvent(newAdditionData);
    // getNewAdditionsData();
  }, [newAdditionData]);

  // const getNewAdditionsData = async () => {
  //   const numberofProducts = 6;

  //   const data = await getUserDetailByFetchAPICall(
  //     headerData?.data?.collectionId,
  //     numberofProducts,
  //     maxWidthProductImage,
  //     maxHeightProductImage,
  //   );
  //   const userData = data?.data?.collection?.products?.nodes || [];

  //   setnewAdditionsLatest(userData);
  // };

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
    >
      <Home
        headerData={headerData?.data}
        newAdditionData={newAdditionData}
        curatedBrandsResponse={curatedBrandsResponse?.slice(0, 4)}
      />
    </Layout>
  );
}

// export async function getServerSideProps(context: any) {
//   const { slug } = context.query;
//   // const headerData = await getUserDetail(slug);
//   const headerData = {
//     success: true,
//     data: {
//       collectionIdLong: "gid://shopify/Collection/413429596387",
//       id: "dd",
//       storefrontName: "dsd",
//       firstName: "d",
//       lastName: "dd",
//       collectionId: 413429596387,
//       isFirstLogin: false,
//       tiktokLink: "tiktok.com/@_mohsin_hussain",
//       instagramLink: "instagram.com/@engr_husain",
//       storefrontDescription:
//         "You should be willing to grow and adapt but still have ideas about your strengths and weaknesses so that you can work on the weaker areas.",
//       storefrontImageUrl:
//         "https://storage.googleapis.com/pedlar-profile-images-dev/dd/cropped-image-fileMon Sep 04 2023 16:53:34 GMT+0500 (Pakistan Standard Time)",
//     },
//   };

//   // console.log("headerData", headerData);

//   const numberofProducts = 6;
//   if (headerData?.data) {
//     // const response = await Promise.all([
//     //   getUserDetailByFetchAPICall(
//     //     headerData?.data?.collectionId,
//     //     numberofProducts,
//     //     maxWidthProductImage,
//     //     maxHeightProductImage,
//     //   ),
//     //   getCuratedBrands(slug),
//     // ]);
//     const response = [
//       {
//         data: {
//           collection: {
//             __typename: "Collection",
//             products: {
//               __typename: "ProductConnection",
//               nodes: [
//                 {
//                   __typename: "Product",
//                   id: "gid://shopify/Product/8122927939811",
//                   title: "ALESSA SHORTS",
//                   productType: "Shorts",
//                   vendor: "Avenue The Label",
//                   description:
//                     "The Alessa Shorts are crafted from a luxurious cotton-linen blend stripe. Featuring an elasticised waistband and natural herringbone tie, pair with our Kate Tank or style with the matching Alessa Robe worn open.",
//                   totalInventory: 10,
//                   priceRange: {
//                     __typename: "ProductPriceRange",
//                     maxVariantPrice: { __typename: "MoneyV2", amount: "2.0", currencyCode: "AUD" },
//                     minVariantPrice: { __typename: "MoneyV2", amount: "2.0", currencyCode: "AUD" },
//                   },
//                   featuredImage: {
//                     __typename: "Image",
//                     url: "https://cdn.shopify.com/s/files/1/0633/8088/1635/products/ALESSASHORTS_380x450.jpg.webp?v=1690329173",
//                   },
//                   createdAt: "2023-07-25T23:52:53Z",
//                   publishedAt: "2023-07-25T23:55:03Z",
//                 },
//                 {
//                   __typename: "Product",
//                   id: "gid://shopify/Product/8122926072035",
//                   title: "Benita Shoulder Bag - Cocoa",
//                   productType: "Handbags",
//                   vendor: "The Wolf Gang",
//                   description:
//                     "Cute and compact, our Benita Shoulder Bag is the arm candy you've been missing. With a roomy main compartment to hold your essentials, and feature suede-wrapped linked ring detail, the Benita is everything but ordinary!",
//                   totalInventory: 2,
//                   priceRange: {
//                     __typename: "ProductPriceRange",
//                     maxVariantPrice: { __typename: "MoneyV2", amount: "2.55", currencyCode: "AUD" },
//                     minVariantPrice: { __typename: "MoneyV2", amount: "2.55", currencyCode: "AUD" },
//                   },
//                   featuredImage: {
//                     __typename: "Image",
//                     url: "https://cdn.shopify.com/s/files/1/0633/8088/1635/products/TheWolfGang_SantaElena_BenitaShoulderBag_Cocoa_2022.11.110456copy_c6fe0978-26fc-4b71-aa65-694b45ef86ea_380x450.jpg.webp?v=1690329144",
//                   },
//                   createdAt: "2023-07-25T23:52:23Z",
//                   publishedAt: "2023-07-25T23:55:05Z",
//                 },
//                 {
//                   __typename: "Product",
//                   id: "gid://shopify/Product/8122926006499",
//                   title: "Amalia Long Sleeve Knit - Mint",
//                   productType: "Knitwear",
//                   vendor: "The Wolf Gang",
//                   description:
//                     "When the dress codes calls for 'jeans and a nice top', the Amalia is your answer. From brunch dates, to nights out dancing on vacation, the Amalia knows how to show off your sleek shoulders while keeping you casual. Nice and stretchy, the Amalia fits like a glove, and will mould to your body. Pair with your favourite vintage denim, or our Ravello Bootcut Pants for the perfect highwaisted fit.",
//                   totalInventory: 10,
//                   priceRange: {
//                     __typename: "ProductPriceRange",
//                     maxVariantPrice: { __typename: "MoneyV2", amount: "2.55", currencyCode: "AUD" },
//                     minVariantPrice: { __typename: "MoneyV2", amount: "2.55", currencyCode: "AUD" },
//                   },
//                   featuredImage: {
//                     __typename: "Image",
//                     url: "https://cdn.shopify.com/s/files/1/0633/8088/1635/products/TCTheWolfGang23Q1Caracolito-AmaliaLongSleeveTopMint-0961_380x450.jpg.webp?v=1690329130",
//                   },
//                   createdAt: "2023-07-25T23:52:10Z",
//                   publishedAt: "2023-07-25T23:55:04Z",
//                 },
//                 {
//                   __typename: "Product",
//                   id: "gid://shopify/Product/8122925973731",
//                   title: "Azaelia Midi Dress - Lime Hibiscus",
//                   productType: "Dresses",
//                   vendor: "The Wolf Gang",
//                   description:
//                     "Stretchy, silk, body skimming and figure-flattering, the Azaelia Midi Dress is your answer to that sexy made-them-look-twice dress that's actually comfortable. Featuring triangular bust shaping with contrast binding, and our 70s Waikiki-inspired custom print, the Azaelia is body-con done just right.",
//                   totalInventory: 10,
//                   priceRange: {
//                     __typename: "ProductPriceRange",
//                     maxVariantPrice: { __typename: "MoneyV2", amount: "2.55", currencyCode: "AUD" },
//                     minVariantPrice: { __typename: "MoneyV2", amount: "2.55", currencyCode: "AUD" },
//                   },
//                   featuredImage: {
//                     __typename: "Image",
//                     url: "https://cdn.shopify.com/s/files/1/0633/8088/1635/products/The_Wolf_Gang_Paradiso_23Q2_1200x1800_AzaeliaMidiDress_LimeHibiscus_LolaShoulderBag_Peach_3090_380x450.jpg.webp?v=1690329114",
//                   },
//                   createdAt: "2023-07-25T23:51:54Z",
//                   publishedAt: "2023-07-25T23:55:04Z",
//                 },
//                 {
//                   __typename: "Product",
//                   id: "gid://shopify/Product/8122925646051",
//                   title: "Backless Apron Maxi Dress - Yellow/Brown Stripe",
//                   productType: "Dresses",
//                   vendor: "Venroy",
//                   description:
//                     "The Backless Apron Maxi Dress is made for warm summer nights. Cut from heavyweight cotton in a bold yellow and brown stripe, this dress has a straight neckline framed by thin shoulder straps that tie at the neck, side cut-outs, and a low back. Wear it with sandals or barely-there heels. Backless apron cotton maxi dress Straight neckline Custom stripe Spaghetti straps that tie at the neck Roule ties that fasten at the back Side cut-outs and an open back Low back waist with zipper Side pockets 100% Cotton Cold machine wash on a delicate cycle",
//                   totalInventory: 8,
//                   priceRange: {
//                     __typename: "ProductPriceRange",
//                     maxVariantPrice: { __typename: "MoneyV2", amount: "1.5", currencyCode: "AUD" },
//                     minVariantPrice: { __typename: "MoneyV2", amount: "1.5", currencyCode: "AUD" },
//                   },
//                   featuredImage: {
//                     __typename: "Image",
//                     url: "https://cdn.shopify.com/s/files/1/0633/8088/1635/products/Backless-Apron-Maxi-Dress-Yellow-Brown-Stripe_0008_380x450.jpg.webp?v=1690329034",
//                   },
//                   createdAt: "2023-07-25T23:50:34Z",
//                   publishedAt: "2023-07-25T23:55:04Z",
//                 },
//                 {
//                   __typename: "Product",
//                   id: "gid://shopify/Product/8122925908195",
//                   title: "Aluminaire Maxi Dress - Noir",
//                   productType: "Dresses",
//                   vendor: "The Wolf Gang",
//                   description:
//                     "Sleek, elegant and sexy, the Aluminaire Maxi Dress is formal enough to throw on some heels for cocktails and late night dinners, but comfy enough for weekends spent in sneakers. With a ruched front bust, keyhole cutout and feature beads; we've got your next little black dress well and truly covered. The Aluminaire Dress is whatever you want her to be; a cocktail dress, formal dress, wedding guest outift, or your new favourite long lunch summer dress. A classic you can reinvent time and time again!",
//                   totalInventory: 10,
//                   priceRange: {
//                     __typename: "ProductPriceRange",
//                     maxVariantPrice: { __typename: "MoneyV2", amount: "2.55", currencyCode: "AUD" },
//                     minVariantPrice: { __typename: "MoneyV2", amount: "2.55", currencyCode: "AUD" },
//                   },
//                   featuredImage: {
//                     __typename: "Image",
//                     url: "https://cdn.shopify.com/s/files/1/0633/8088/1635/products/TheWolfGang_MirageEscenaBeadedKnitDressNoirFayeMiniShoulderBagCognac_2.3_fullbody_082_380x450.jpg.webp?v=1690329108",
//                   },
//                   createdAt: "2023-07-25T23:51:48Z",
//                   publishedAt: "2023-07-25T23:55:03Z",
//                 },
//               ],
//               pageInfo: {
//                 __typename: "PageInfo",
//                 hasNextPage: true,
//                 hasPreviousPage: false,
//                 startCursor: "eyJsYXN0X3ZhbHVlIjoiMCIsImxhc3RfaWQiOjgxMjI5Mjc5Mzk4MTF9",
//                 endCursor: "eyJsYXN0X3ZhbHVlIjoiNSIsImxhc3RfaWQiOjgxMjI5MjU5MDgxOTV9",
//               },
//             },
//           },
//         },
//         loading: false,
//         networkStatus: 7,
//       },
//       {
//         success: true,
//         data: [
//           {
//             vendor: "The Wolf Gang",
//             logo_url: "https://storage.googleapis.com/pedlar_brands_dev/The%20Wolf%20Gang/logo.png",
//             banner_url: "https://storage.googleapis.com/pedlar_brands_dev/The%20Wolf%20Gang/banner.png",
//           },
//           {
//             vendor: "Avenue The Label",
//             logo_url: "https://storage.googleapis.com/pedlar_brands_dev/Avenue%20The%20Label/logo.png",
//             banner_url: "https://storage.googleapis.com/pedlar_brands_dev/Avenue%20The%20Label/banner.png",
//           },
//           {
//             vendor: "Venroy",
//             logo_url: "https://storage.googleapis.com/pedlar_brands_dev/Venroy/logo.png",
//             banner_url: "https://storage.googleapis.com/pedlar_brands_dev/Venroy/banner.png",
//           },
//           {
//             vendor: "LMS",
//             logo_url: "https://storage.googleapis.com/pedlar_brands_dev/LMS/logo.png",
//             banner_url: "https://storage.googleapis.com/pedlar_brands_dev/LMS/banner.png",
//           },
//         ],
//       },
//     ];

//     // console.log("response", JSON.stringify(response));

//     const userData = response[0]?.data?.collection?.products?.nodes || [];
//     const curatedBrandsResponse = response[1];

//     return {
//       props: {
//         data: [],
//         headerData: headerData ? headerData : [],
//         newAdditionData: userData ? userData : [],
//         slug: slug || [],
//         curatedBrandsResponse: curatedBrandsResponse?.data || [],
//       },
//     };
//   }
//   return {
//     props: {
//       error: true,
//     },
//   };
// }

export async function getServerSideProps(context: any) {
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

    // console.log("response", JSON.stringify(response));

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
      },
    };
  }
  return {
    props: {
      error: true,
    },
  };
}
