import React from "react";
import { Grid } from "@mui/material";
// import Button from "@mui/material/Button";
// import { addToCart } from "api/grapgql";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { getVariantBySelectedOptions, addToCartLineItem } from "api/grapgql";
// import { getCartProducts, updateCartLineItem } from "api/grapgql";
// import { checkoutCartDetails } from "api/grapgql";
import LoadingButton from "@mui/lab/LoadingButton";

const Action = (props: any) => {
  const { addToCartButton, buttonLoaderState, BuyNowHandler , buyNowLoaderState} = props;

  // const [cartData, setCartData] = useState<any>([]);
  // const [updateCartState, setUpdateCartState] = useState(false);
  // const [cartLineid, setCartLineid] = useState("");

  // const router = useRouter();

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const cartID = localStorage.getItem("cartID");

  //     getCartProducts(cartID).then((response) => {
  //       // setCartData(response?.data?.cart?.lines?.nodes[0].merchandise);
  //       setCartData(response?.data?.cart?.lines?.nodes);
  //     });

  //     // }
  //   }
  // }, []);
  // const slugValue = router.query.slug;

  // const BuyNowHandler = async () => {
  //   const createdCartID = localStorage.getItem("cartID");

  //   if (!createdCartID) {
  //     await addToCart(newAdditionData?.variantBySelectedOptions?.id, slugValue).then(async (res) => {
  //       console.log("addToCartResponse", res);
  //       localStorage.setItem("cartID", res?.data?.cartCreate?.cart?.id);
  //       // changeLoaderState(false);

  //       let response = await checkoutCartDetails(localStorage.getItem("cartID"));
  //       changeLoaderState(false);

  //       window.open(response?.data?.cart?.checkoutUrl);
  //     });
  //   } else {
  //     try {
  //       const data1 = cartData?.find(
  //         (item: any) => item?.merchandise?.id === newAdditionData?.variantBySelectedOptions?.id,
  //       );
  //       if (data1) {
  //         await updateCartLineItem(createdCartID, data1?.id);
  //         const response = await checkoutCartDetails(createdCartID);
  //         changeLoaderState(false);

  //         window.open(response?.data?.cart?.checkoutUrl);
  //       } else {
  //         await addToCartLineItem(createdCartID, newAdditionData?.variantBySelectedOptions?.id);
  //         const response = await checkoutCartDetails(createdCartID);
  //         changeLoaderState(false);

  //         window.open(response?.data?.cart?.checkoutUrl);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  return (
    <Grid
      item
      xs={12}
      md={12}
      lg={12}
      sx={{ paddingTop: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Grid item xs={12} sm={7} md={6.7} lg={6.7} sx={{ width: "100%" }}>
        <LoadingButton
          variant="contained"
          sx={{
            backgroundColor: "#1C1B1F",
            color: "white",
            borderRadius: "25px",
            width: "100%",
            height: "46px",
            fontWeight: "600",
            fontSize: "16px",
            textTransform: "none",
          }}
          onClick={addToCartButton}
          loading={buttonLoaderState}
        >
          Add to cart
        </LoadingButton>
      </Grid>
      <Grid item xs={12} sm={7} md={6.7} lg={6.7} sx={{ paddingTop: "20px", width: "100%" }}>
        <LoadingButton
          variant="outlined"
          sx={{
            color: "black",
            borderRadius: "25px",
            width: "100%",
            height: "46px",
            borderColor: "black",
            fontSize: "16px",
            fontWeight: "600",
            textTransform: "none",
            "&:hover": {
              borderColor: "black",
            },
          }}
          onClick={() => BuyNowHandler()}
          loading={buyNowLoaderState}
        >
          Buy now
        </LoadingButton>
      </Grid>
    </Grid>
  );
};
export default Action;
