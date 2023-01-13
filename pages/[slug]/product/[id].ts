import { getProductDetails, getUserDetailByFetchAPICall } from "api/graphql/grapgql";
import { getUserDetail } from "api/restApi/getUserDetail";
import Cart from "components/product";

export default Cart;
export async function getServerSideProps(context: any) {
  const { slug } = context.query;

  const headerData = await getUserDetail(slug);
  if (headerData?.data) {
    const numberofProducts = 6;
    let response = await getUserDetailByFetchAPICall(headerData?.data?.collectionId, numberofProducts);
    response = response?.data?.collection?.products?.nodes;

    let data = await getProductDetails(context?.query?.id);

    return {
      props: {
        HeaderData: headerData ? headerData : [],
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
