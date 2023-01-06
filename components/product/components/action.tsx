import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { addToCart } from "api/grapgql";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getVariantBySelectedOptions, addToCartLineItem } from "api/grapgql";
import { getCartProducts, updateCartLineItem } from "api/grapgql";
import { debug } from "console";

const Action = (props) => {
  const { newAdditionData, changeLoaderState } = props;
  const [cartData, setCartData] = useState([]);
  const [updateCartState, setUpdateCartState] = useState(false);
  const [cartLineid, setCartLineid] = useState("");

  const router = useRouter();

  useEffect(() => {
    const res = getVariantBySelectedOptions(newAdditionData?.id);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartID = localStorage.getItem("cartID");

      const res = getCartProducts(cartID).then((response) => {
        // setCartData(response?.data?.cart?.lines?.nodes[0].merchandise);
        setCartData(response?.data?.cart?.lines?.nodes);
      });

      // }
    }
  }, []);
  const slugValue = router.query.slug;

  const addToCartButton = async () => {
    changeLoaderState(true);
    const createdCartID = localStorage.getItem("cartID");

    if (createdCartID === null || createdCartID === undefined) {
      const addToCartResponse = await addToCart(newAdditionData?.variantBySelectedOptions?.id, slugValue).then(
        (res) => {
          console.log("addToCartResponse", res);
          localStorage.setItem("cartID", res?.data?.cartCreate?.cart?.id);
          changeLoaderState(false);
        },
      );
      debugger;
    }

    if (!(createdCartID === null || createdCartID === undefined)) {
      cartData?.some((item) => {
        if (item?.merchandise?.id === newAdditionData?.variantBySelectedOptions?.id) {
          const updateCartResponse = updateCartLineItem(createdCartID, item?.id).then((res) => {
            console.log("resmm", res);
            setUpdateCartState(true);
            changeLoaderState(false);

            return true;
          });

          // setCartLineid(item?.id);
          debugger;
        } else if (!(item?.merchandise?.id !== newAdditionData?.variantBySelectedOptions?.id)) {
          debugger;
          const addCartLineItemResponse = addToCartLineItem(
            createdCartID,
            newAdditionData?.variantBySelectedOptions?.id,
          ).then((res) => {
            changeLoaderState(false);
            console.log("createdCartID", createdCartID);

            console.log("addCartLineItemResponse", res?.data);
            return true;
          });
        }
      });
      // if(updateCartState === true){
      //   const updateCartResponse = await updateCartLineItem(createdCartID , cartLineid );
      //   debugger
      // }
      // if(updateCartState === false){
      //   debugger;
      //   const addCartLineItemResponse = await addToCartLineItem(createdCartID , newAdditionData?.variantBySelectedOptions?.id ).then((res)=>{
      //     changeLoaderState(false);
      //     console.log("createdCartID" , createdCartID );

      //     console.log("addCartLineItemResponse" , res?.data);
      //   });
      // }
    }
  };

  return (
    <Grid
      item
      xs={12}
      md={12}
      lg={12}
      sx={{ paddingTop: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Grid item xs={12} sm={7} md={6.7} lg={6.7} sx={{ width: "100%" }}>
        <Button
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
          onClick={() => {
            addToCartButton();
          }}
        >
          Add to cart
        </Button>
      </Grid>
      <Grid item xs={12} sm={7} md={6.7} lg={6.7} sx={{ paddingTop: "20px", width: "100%" }}>
        <Button
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
        >
          Buy now
        </Button>
      </Grid>
    </Grid>
  );
};
export default Action;
