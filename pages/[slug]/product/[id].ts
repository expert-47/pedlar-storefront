import { getProductDetails, getUserDetailByFetchAPICall } from "apis/graphql/grapgql";
import { getUserDetail } from "apis/restApi/getUserDetail";
import Cart from "components/product";
import { isMobile } from "react-device-detect";

const maxWidthProductImage = isMobile ? 800 : 800;
const maxHeightProductImage = isMobile ? 900 : 900;

const maxWidthProductDetailImage = isMobile ? 600 : 800;
const maxHeightProductDetailImage = isMobile ? 700 : 900;

export default Cart;
export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const { req } = context;
  const userAgent = req.headers["user-agent"] || "";
  const isMobile = /Mobile/.test(userAgent);
  const headerData = await getUserDetail(slug);
  if (headerData?.data) {
    const numberofProducts = 6;
    let response = await getUserDetailByFetchAPICall(
      headerData?.data?.collectionId,
      numberofProducts,
      maxWidthProductImage,
      maxHeightProductImage,
    );
    response = response?.data?.collection?.products?.nodes;

    const data = await getProductDetails(context?.query?.id, maxWidthProductDetailImage, maxHeightProductDetailImage);

    return {
      props: {
        headerData: headerData ? headerData : [],
        newAdditionData: data?.data?.product || [],
        newAdditionData2: response ? response : [],
        isMobile,
      },
    };
  } else {
    return {
      props: {
        error: true,
        isMobile,
      },
    };
  }
}
