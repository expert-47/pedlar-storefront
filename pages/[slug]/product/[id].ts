import { getProductDetails, getUserDetailByFetchAPICall } from "api/grapgql";
import Cart from "components/product";

export default Cart;
export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const res = await fetch(`https://pedlar-dev.ts.r.appspot.com/user/${slug}/details`);
  const HeaderData = await res.json();

  const numberofProducts = 6;
  let response = await getUserDetailByFetchAPICall(HeaderData?.data?.collectionId, numberofProducts);
  response = response?.data?.collection?.products?.nodes;

  let data = await getProductDetails(context?.query?.id);
  console.log("");

  return {
    props: {
      HeaderData: HeaderData ? HeaderData : [],
      newAdditionData: data?.data?.product || [],
      newAdditionData2: response ? response : [],
    },
  };
}
