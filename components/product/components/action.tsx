import React from "react";
import { Grid } from "@mui/material";
// import Button from "@mui/material/Button";
// import { addToCart } from "api/grapgql";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { getVariantBySelectedOptions, addToCartLineItem } from "api/grapgql";
// import { getCartProducts, updateCartLineItem } from "api/grapgql";
// import { checkoutCartDetails } from "api/grapgql";
import LoadingButton from "components/LoadingButton";

const Action = (props: any) => {
  const { addToCartButton, buttonLoaderState, BuyNowHandler, buyNowLoaderState, disabled } = props;

  return (
    <Grid
      item
      xs={12}
      md={12}
      lg={12}
      sx={{ paddingTop: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Grid item xs={12} sm={10} md={5.6} lg={5.6} sx={{ width: "100%" }}>
        <LoadingButton
          sx={{
            color: disabled ? "White" : "",
            backgroundColor: disabled ? "" : "#1C1B1F",
            borderRadius: "25px",
            width: "100%",
            height: "46px",
            fontWeight: "600",
            fontSize: "16px",
            textTransform: "none",
            "&:hover": {
              borderColor: disabled ? "black" : "black",
              backgroundColor: disabled ? "" : "#1C1B1F",
            },
          }}
          onClick={addToCartButton}
          loading={buttonLoaderState}
          disabled={disabled}
        >
          Add to cart
        </LoadingButton>
      </Grid>
      <Grid item xs={12} sm={10} md={5.6} lg={5.6} sx={{ paddingTop: "25px", width: "100%" }}>
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
          disabled={disabled}
        >
          Buy now
        </LoadingButton>
      </Grid>
    </Grid>
  );
};
export default Action;
