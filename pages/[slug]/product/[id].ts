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
    const headerDataPromise = getUserDetail(slug);

    const headerData = await headerDataPromise;

    if (headerData?.data) {
      const userDetailResponsePromise = getUserDetailByFetchAPICall(
        headerData.data.collectionId,
        6, // numberofProducts
        maxWidthProductImage,
        maxHeightProductImage,
      );
      const productDetailsPromise = getProductDetails(id, maxWidthProductDetailImage, maxHeightProductDetailImage);

      // Wait for both API calls to complete.
      const [userDetailResponse, productDetails] = await Promise.all([
        userDetailResponsePromise,
        productDetailsPromise,
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
      maxWidthProductImage: 300,
      maxHeightProductImage: 400,
      maxWidthProductDetailImage: 500,
      maxHeightProductDetailImage: 600,
    };
  }

  return {
    maxWidthProductImage: 500,
    maxHeightProductImage: 500,
    maxWidthProductDetailImage: 800,
    maxHeightProductDetailImage: 900,
  };
}
