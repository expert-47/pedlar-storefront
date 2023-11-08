import { getProductDetails, getUserDetailByFetchAPICall } from "apis/graphql/grapgql";
import { getUserDetail } from "apis/restApi/getUserDetail";
import Cart from "components/product";

export default Cart;
export async function getServerSideProps(context: any) {
  const { slug, id } = context.query;
  const userAgent = context.req.headers["user-agent"] || "";
  const isMobile = /Mobile/.test(userAgent);
  const { maxWidthProductImage, maxHeightProductImage, maxWidthProductDetailImage, maxHeightProductDetailImage } =
    getImageDimensions(isMobile);

  try {
    const headerData = await getUserDetail(slug);

    if (headerData?.data) {
      const [userDetailResponse, productDetails] = await Promise.all([
        getUserDetailByFetchAPICall(headerData.data.collectionId, 6, maxWidthProductImage, maxHeightProductImage),
        getProductDetails(id, maxWidthProductDetailImage, maxHeightProductDetailImage),
      ]);

      return {
        props: {
          headerData: headerData.data,
          newAdditionData: productDetails?.data?.product || [],
          newAdditionData2: userDetailResponse?.data?.collection?.products?.nodes || [],
          isMobile,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      error: true,
      isMobile,
    },
  };
}

function getImageDimensions(isMobile: boolean) {
  if (isMobile) {
    return {
      maxWidthProductImage: 500,
      maxHeightProductImage: 600,
      maxWidthProductDetailImage: 650,
      maxHeightProductDetailImage: 750,
    };
  }

  return {
    maxWidthProductImage: 700,
    maxHeightProductImage: 700,
    maxWidthProductDetailImage: 800,
    maxHeightProductDetailImage: 900,
  };
}
