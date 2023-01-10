import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import styles from "styles/checkout";
import { getCartProducts, updateCartLineItem } from "api/grapgql";
import { Alert } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "store/slice/appSlice";

interface Props {
  name: string;
  price: string;
  image: string;
  quantity: number;
  itemData: any;
  CurrencyCode: string;
}

const CheckoutOrder = (props: Props) => {
  const [productCount, setProductCount] = useState(props?.quantity);
  const [error, setError] = useState(false);
  const [loadingButtonState, setLoadingButtonState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const cartId = useSelector((data) => data.app.cartId);
  const cartProducts = useSelector((data) => data.app.products);
  const dispatch = useDispatch();
  const incQuantityHandler = async (quantity: number) => {
    setLoadingButtonState(true);
    setError(false);

    if (props?.itemData?.merchandise?.quantityAvailable === productCount) {
      setError(true);
      setErrorMessage("This Item is Currently out of Stock");
      setLoadingButtonState(false);
    } else {
      await updateCartLineItem(cartId, props?.itemData?.id, quantity + 1);
      setProductCount(quantity + 1);
      await getCartList();
      setLoadingButtonState(false);
    }
  };
  const removeItem = async () => {
    setLoadingButtonState(true);
    await updateCartLineItem(cartId, props?.itemData?.id, 0);
    await getCartList();
    setLoadingButtonState(false);

  };
  const getCartList = async () => {
    if (cartId) {
      try {
        let response = await getCartProducts(cartId);

        dispatch(addProductToCart(response?.data?.cart?.lines?.nodes || []));
      } catch (error) {}
    }
  };
  const productDecrementHandler = async (quantity: number) => {
    setError(false);

    setLoadingButtonState(true);

    await updateCartLineItem(cartId, props?.itemData?.id, quantity - 1);
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
              backgroundColor: "#D7D8D9",
            }}
          ></Box>
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
              <img src={props?.image} width="130px" height={"130px"} />
              {/* <Image src={props.image} width={130} height={130} layout="responsive" objectFit="fill"></Image> */}
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
              <Typography sx={styles.brandName}>{props.name}</Typography>
              <Typography sx={styles.productPrice}>{`${props?.CurrencyCode === "AUD" ? "A$" : ""} ${
                props?.price
              }`}</Typography>
              {error ? (
                <Alert onClose={handleAlertClose} severity="error">
                  {errorMessage}
                </Alert>
              ) : null}

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
          <Divider sx={styles.divider} />
        </Box>
      )}
    </>
  );
};

export default CheckoutOrder;
