import React, { useEffect, useState } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import styles from "styles/checkout";
import { updateCartLineItem } from "apis/graphql/grapgql";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, cartDrawerToggle } from "store/slice/appSlice";
import { NextImage } from "components/pedlarImage";
import * as gtmEvents from "utils/gtm";
import { useRouter } from "next/router";

interface Props {
  name: string;
  price: string;
  image: string;
  quantity: number;
  itemData: any;
  CurrencyCode: string;
  title: string;
  vendor: string;
  index: number;
  id: string;
  key: string;
}

const CheckoutOrder = (props: Props) => {
  const { itemData } = props;
  const [productCount, setProductCount] = useState(props?.quantity);
  const [error, setError] = useState(false);
  const [loadingButtonState, setLoadingButtonState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const storeName = useSelector((data: any) => data.app.storeName);
  const cartProducts = useSelector((data: any) => data.app.products[storeName]) || [];
  const cartId = useSelector((data: any) => data.app.cartId[storeName]);
  const dispatch = useDispatch();
  const incQuantityHandler = async (quantity: number) => {
    try {
      setLoadingButtonState(true);
      setError(false);

      if (props?.itemData?.merchandise?.quantityAvailable === productCount) {
        setError(true);
        setErrorMessage("This item is currently out of stock");
        setLoadingButtonState(false);
      } else {
        await updateCartLineItem(cartId, props?.itemData?.id, quantity + 1);
        const products = [...cartProducts];
        products[props.index] = { ...cartProducts[props.index], quantity: quantity + 1 };
        dispatch(addProductToCart({ products: products, showCart: true }));
        gmtEventToAddProduct({ ...itemData, index: props.index, quantity: 1 });

        setLoadingButtonState(false);
      }
    } catch (error) {
      setLoadingButtonState(false);
    }
  };
  const removeItem = async () => {
    try {
      setLoadingButtonState(true);
      await updateCartLineItem(cartId, props?.itemData?.id, 0);

      dispatch(
        addProductToCart({ products: cartProducts.filter((item, index) => index != props.index), showCart: true }),
      );

      setLoadingButtonState(false);
      gmtEventRemoveProduct({ quantity: props?.quantity, ...itemData, index: props.index });
    } catch (error) {
      setLoadingButtonState(false);
    }
  };
  const gmtEventToAddProduct = (data: any) => {
    gtmEvents.increaseCartProduct(data);
  };
  const gmtEventRemoveProduct = (data: any) => {
    gtmEvents.removeFromCart(data);
  };
  const productDecrementHandler = async (quantity: number) => {
    try {
      setError(false);

      setLoadingButtonState(true);

      await updateCartLineItem(cartId, props?.itemData?.id, quantity - 1);
      gmtEventRemoveProduct({ ...itemData, index: props.index, quantity: 1 });
      if (quantity - 1 == 0) {
        dispatch(
          addProductToCart({ products: cartProducts.filter((item, index) => index != props.index), showCart: true }),
        );
      } else {
        const products = [...cartProducts];
        products[props.index] = { ...cartProducts[props.index], quantity: quantity - 1 };
        dispatch(addProductToCart({ products: products, showCart: true }));
      }

      setLoadingButtonState(false);
    } catch (error) {
      setLoadingButtonState(false);
    }
  };
  const handleAlertClose = () => {
    setError(false);
    setErrorMessage("");
  };
  useEffect(() => {
    setProductCount(props?.quantity);
  }, [props?.quantity, props.index]);
  const prices = props?.price?.endsWith(".0") ? Math.round(props?.price) : props?.price;
  const route = useRouter();

  const onClickCard = () => {
    let productID = itemData?.merchandise.product.id;
    productID = productID.split("gid://shopify/Product/")[1];
    route.push({
      pathname: `/${storeName}/product/${productID}`,
    });
    dispatch(cartDrawerToggle(false));
  };
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
          sx={{
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
                height: "155px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              <Box sx={{ width: 130, height: 155 }} onClick={onClickCard}>
                <NextImage
                  src={props.image}
                  style={{ objectFit: "cover", objectPosition: "center center" }}
                  alt={props.name}
                />
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
              <Typography sx={styles.productPrice}>{`${
                props?.CurrencyCode === "AUD" ? "$" : ""
              } ${prices}`}</Typography>

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
