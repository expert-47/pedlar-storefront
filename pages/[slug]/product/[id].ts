import { getProductDetails, getUserDetailByFetchAPICall } from "apis/graphql/grapgql";
import { getUserDetail } from "apis/restApi/getUserDetail";
import Cart from "components/product";

export default Cart;
export async function getServerSideProps(context: any) {
  const { slug } = context.query;

  const headerData = await getUserDetail(slug);
  if (headerData?.data) {
    const numberofProducts = 6;
    let response = await getUserDetailByFetchAPICall(headerData?.data?.collectionId, numberofProducts);
    response = response?.data?.collection?.products?.nodes;

    const data = await getProductDetails(context?.query?.id);

    return {
      props: {
        headerData: headerData ? headerData : [],
        newAdditionData: data?.data?.product || [],
        newAdditionData2: response ? response : [],
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
