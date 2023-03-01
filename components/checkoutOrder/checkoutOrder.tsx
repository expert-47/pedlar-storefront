import React, { useEffect, useState } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import styles from "styles/checkout";
import { getCartProducts, updateCartLineItem } from "api/graphql/grapgql";
import { Alert } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "store/slice/appSlice";
import PedlarImage from "components/pedlarImage";
import * as gtmEvents from "utils/gtm";

interface Props {
  name: string;
  price: string;
  image: string;
  quantity: number;
  itemData: any;
  CurrencyCode: string;
  title: string;
  vendor: string;
}

const CheckoutOrder = (props: Props) => {
  const [productCount, setProductCount] = useState(props?.quantity);
  const [error, setError] = useState(false);
  const [loadingButtonState, setLoadingButtonState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const cartId = useSelector((data: any) => data.app.cartId);
  const dispatch = useDispatch();
  const incQuantityHandler = async (quantity: number) => {
    setLoadingButtonState(true);
    setError(false);

    if (props?.itemData?.merchandise?.quantityAvailable === productCount) {
      setError(true);
      setErrorMessage("This item is currently out of stock");
      setLoadingButtonState(false);
    } else {
      await updateCartLineItem(cartId, props?.itemData?.id, quantity + 1);
      setProductCount(quantity + 1);
      gmtEventToAddProduct({ ...props?.itemData, ...props?.itemData?.merchandise, quantity: quantity + 1 });

      await getCartList();
      setLoadingButtonState(false);
    }
  };
  const removeItem = async () => {
    setLoadingButtonState(true);
    await updateCartLineItem(cartId, props?.itemData?.id, 0);
    await getCartList();
    setLoadingButtonState(false);
    gmtEventRemoveProduct({ ...props?.itemData, ...props?.itemData?.merchandise, quantity: 0 });
  };
  const getCartList = async () => {
    if (cartId) {
      try {
        let response = await getCartProducts(cartId);

        dispatch(addProductToCart(response?.data?.cart?.lines?.nodes || []));
      } catch (error) {}
    }
  };

  const gmtEventToAddProduct = (data) => {
    console.log("data", data);

    gtmEvents.addToCart(data);
  };
  const gmtEventRemoveProduct = (data) => {
    gtmEvents.removeFromCart(data);
  };
  const productDecrementHandler = async (quantity: number) => {
    setError(false);

    setLoadingButtonState(true);

    await updateCartLineItem(cartId, props?.itemData?.id, quantity - 1);
    gmtEventRemoveProduct({ ...props?.itemData, ...props?.itemData?.merchandise, quantity: quantity - 1 });
    setProductCount(quantity - 1);

    await getCartList();
    setLoadingButtonState(false);
  };

  const handleAlertClose = () => {
    setError(false);
    setErrorMessage("");
  };
  useEffect(() => {
    setProductCount(productCount);
  }, [productCount]);
  return (
    <>
      {loadingButtonState ? (
        <Box
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Box
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              height: "130px",
              backgroundColor: "transparent",
            }}
          >
            <CircularProgress color="secondary" />
          </Box>
          <Divider sx={styles.divider} />
        </Box>
      ) : (
        <Box
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Box
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              paddingTop: "10px",
            }}
          >
            <Box
              style={{
                width: "130px",
                height: "130px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              <Box sx={{ width: 130, height: 130 }}>
                <PedlarImage src={props.image} />
              </Box>
            </Box>
            <Box
              style={{
                marginBottom: "5px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Typography sx={styles.vendorName}>{props.vendor}</Typography>
              <Typography sx={styles.brandName}>{props.title}</Typography>
              <Typography sx={styles.brandName}>{props.name}</Typography>
              <Typography sx={styles.productPrice}>{`${props?.CurrencyCode === "AUD" ? "$" : ""} ${
                props?.price
              }`}</Typography>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                marginTop={"15px"}
              >
                <Box
                  component="span"
                  sx={{
                    borderRadius: "3px",
                    border: "1px solid #DDDDDD",
                    width: "85px",
                    height: "25px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <RemoveIcon sx={styles.addRemoveIcon} onClick={() => productDecrementHandler(props?.quantity)} />

                  <Typography sx={styles.addRemoveText}>{productCount}</Typography>
                  <AddIcon sx={styles.addRemoveIcon} onClick={() => incQuantityHandler(productCount)} />
                </Box>
                <Button onClick={removeItem} sx={styles.removeButton}>
                  Remove
                </Button>
              </Box>
            </Box>
          </Box>
          {error ? (
            <Alert onClose={handleAlertClose} sx={{ marginTop: 5, marginBottom: 10 }} severity="error">
              {errorMessage}
            </Alert>
          ) : null}
          <Divider sx={styles.divider} />
        </Box>
      )}
    </>
  );
};

export default CheckoutOrder;
