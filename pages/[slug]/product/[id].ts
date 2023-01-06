import { getProductDetails } from "api/grapgql";
import Cart from "components/product";

export default Cart;
export async function getServerSideProps(context: any) {
  let data = await getProductDetails(context?.query.id);


  console.log("data......................." , data);
  return { props: { newAdditionData: data?.data?.product || [] } };
}
