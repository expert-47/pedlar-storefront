import React from "react";
import { Grid } from "@mui/material";
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
      <Grid item xs={12} sm={10} md={6} lg={6} sx={{ width: "100%" }}>
        <LoadingButton
          variant="outlined"
          title={disabled ? "There is a problem with your selection. Please contact support." : ""}
          sx={{
            color: disabled ? "black" : "white",
            // opacity: disabled ? "0.5" : "1",
            backgroundColor: disabled ? "white" : "#1C1B1F",
            borderRadius: "25px",
            width: "100%",
            height: "46px",
            fontWeight: "600",
            fontSize: "16px",
            textTransform: "none",

            borderColor: "#1C1B1F",
            "&:hover": {
              backgroundColor: disabled ? "white" : "#1C1B1F",
              borderColor: "#1C1B1F",
            },
          }}
          onClick={addToCartButton}
          loading={buttonLoaderState}
          disabled={disabled}
        >
          Add to cart
        </LoadingButton>
      </Grid>
      <Grid item xs={12} sm={10} md={6} lg={6} sx={{ paddingTop: "25px", width: "100%" }}>
        <LoadingButton
          variant="outlined"
          title={disabled ? "There is a problem with your selection. Please contact support." : ""}
          sx={{
            color: "black",
            borderRadius: "25px",
            width: "100%",
            height: "46px",
            borderColor: "#1C1B1F",
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
