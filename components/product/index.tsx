import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import { Alert, Divider, Grid, Typography } from "@mui/material";
import { Slide } from "react-slideshow-image";
import Link from "next/link";
import "react-slideshow-image/dist/styles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { CustomContainer } from "../layout";
import AddIcon from "@mui/icons-material/Add";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import RemoveIcon from "@mui/icons-material/Remove";
import Layout from "../layout";
import Options from "./components/options";
import Action from "./components/action";
import styles from "styles/product";
import BaseFooter from "components/footer/baseFooter";
import PedlarImage from "components/pedlarImage";
import { useMediaQuery, useTheme } from "@mui/material";
import { getStoreName } from "utils/getPathName";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { isMobile } from "react-device-detect";

import {
  addToCart,
  updateCartLineItem,
  addToCartLineItem,
  getCartProducts,
  getVariantBySelectedOptions,
  checkoutCartDetails,
} from "api/graphql/grapgql";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, updateCartId, cartDrawerToggle } from "store/slice/appSlice";
import * as gtmEvents from "utils/gtm";

import CardComponent from "components/home/components/cardComponent";

const buttonStyle = {
  display: "none",
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}></button>,
  nextArrow: <button style={{ ...buttonStyle }}></button>,
};

const Cart = (props: any) => {
  const { newAdditionData, headerData, newAdditionData2, error: apiError } = props;
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [buttonLoaderState, setButtonLoaderState] = useState(false);
  const [buyNowLoaderState, setBuyNowLoaderState] = useState(false);
  const isMatch = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const route = useRouter();
  const slugValue = route.query.slug;
  let path = getStoreName(route);
  const storeName = useSelector((data: any) => data.app.storeName);

  const cartId = useSelector((data: any) => data.app.cartId[storeName]);

  const cartProducts = useSelector((data: any) => data.app.products[storeName]) || [];
  const dispatch = useDispatch();
  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    setSize(newAdditionData?.options[0]?.values[0] || "");
    setColor(newAdditionData?.options[1]?.values[0] || "");
  }, [route]);
  useEffect(() => {
    setError(false);
  }, [cartProducts]);

  // for setting the size of the product
  const setSizeValue = (value: string) => {
    setSize(value);
  };
  // for setting the color of product
  const setColorValue = (value: string) => {
    setColor(value);
  };
  // add to cart method
  const getCartList = async (value = false) => {
    if (cartId) {
      try {
        let response = await getCartProducts(cartId);
        dispatch(addProductToCart({ products: response?.data?.cart?.lines?.nodes || [], showCart: value }));
      } catch (error) {}
    }
  };
  const gmtEventToAddProduct = (data) => {
    gtmEvents.addToCart(data);
  };
  const gmtEventToBuyNow = (data) => {
    gtmEvents.beginCheckout({
      currency: data?.priceRange?.minVariantPrice?.currencyCode || "", // Currency
      item_name: data?.title || "", // Name or ID is required.
      item_id: data?.id || "", //ID of the item.
      price: data?.priceRange?.minVariantPrice?.amount || "", //total price of the item.
      item_brand: data?.vendor || "", // brand of the item.(this is the example value)
      item_category: data?.productType || "", //The category to which the product belongs to.
      item_category2: size, //size of the product.
      item_variant: color, // color of the product.
      //  item_list_name: "Category Page",//e.g. Filter results, Popular Picks For You ,Recently Viewed, Best sellers, Search Results, Personal Boutique etc.
      //  item_list_id: "H3123", //ID of the list in which the item was presented to the user.
      // index: 2, // position of the item
      quantity: data.quantity, //quantity of the item
      // promotion_id: "abc123",
      // promotion_name: "shop now"
    });
  };

  const addToCartButton = async () => {
    try {
      setButtonLoaderState(true);
      const variant = await getVariantBySelectedOptions(
        newAdditionData?.id,
        size,
        color,
        newAdditionData?.options[0]?.name,
        newAdditionData?.options[1]?.name,
      );
      const varientData = variant?.data.product?.variantBySelectedOptions;

      if (!Boolean(varientData?.quantityAvailable) || varientData?.quantityAvailable === 0) {
        setError(true);
        setErrorMessage("This item is currently out of stock");
      } else {
        if (Boolean(cartId)) {
          const data1 = cartProducts?.find((item: any) => item?.merchandise?.id === varientData?.id);

          if (data1) {
            if (varientData?.quantityAvailable === data1?.quantity) {
              setError(true);
              setErrorMessage("This item is currently out of stock");
            } else {
              const quantity = data1.quantity + 1;

              await updateCartLineItem(cartId, data1?.id, quantity);

              gmtEventToAddProduct({
                ...data1,
                quantity: quantity,
                ...newAdditionData,
              });
            }
          } else {
            await addToCartLineItem(cartId, varientData?.id, 1);
          }
        } else {
          let response = await addToCart(varientData?.id, slugValue, 1);

          dispatch(updateCartId({ id: response?.data?.cartCreate?.cart?.id, showCart: true }));
          gmtEventToAddProduct({
            ...varientData,
            quantity: 1,
            ...newAdditionData,
          });
        }
      }
    } catch (error) {
    } finally {
      getCartList(true);
      setButtonLoaderState(false);
    }
  };
  useEffect(() => {
    onSelectedItem();
  }, [size, color]);

  const onSelectedItem = async () => {
    setError(false);
    setErrorMessage("");

    const variant = await getVariantBySelectedOptions(
      newAdditionData?.id,
      size,
      color,
      newAdditionData?.options[0]?.name,
      newAdditionData?.options[1]?.name,
    );

    const varientData = variant?.data.product?.variantBySelectedOptions;

    if (!varientData?.quantityAvailable || varientData?.quantityAvailable === 0) {
      setError(true);
      setErrorMessage("This item is currently out of stock");
    } else {
      setError(false);
      setErrorMessage("");
    }
  };

  // const BuyNowHandler = async () => {
  //   const quantity = 1;

  //   setBuyNowLoaderState(true);
  //   try {
  //     const variant = await getVariantBySelectedOptions(
  //       newAdditionData?.id,
  //       size,
  //       color,
  //       newAdditionData?.options[0]?.name,
  //       newAdditionData?.options[1]?.name,
  //     );

  //     const varientData = variant?.data.product?.variantBySelectedOptions;
  //     if (varientData?.quantityAvailable === 0) {
  //       setError(true);
  //       setErrorMessage("This item is currently out of stock");
  //     } else {
  //       if (!cartId) {
  //         let res = await addToCart(varientData?.id, slugValue, quantity);

  //         let cartId = res?.data?.cartCreate?.cart?.id;
  //         const response = await checkoutCartDetails(cartId);

  //         if (isMobile) {
  //           window.open(response?.data?.cart?.checkoutUrl, "_self");
  //         } else {
  //           window.open(response?.data?.cart?.checkoutUrl);
  //         }

  //         gmtEventToBuyNow({ ...newAdditionData });
  //       } else {
  //         const data1 = cartProducts?.find((item: any) => item?.merchandise?.id === varientData?.id);
  //         if (data1) {
  //           if (varientData?.quantityAvailable === data1?.quantity) {
  //             setError(true);
  //             setErrorMessage("This item is currently out of stock");
  //           } else {
  //             let res = await addToCart(varientData?.id, slugValue, quantity);

  //             let cartId = res?.data?.cartCreate?.cart?.id;
  //             const response = await checkoutCartDetails(cartId);
  //             if (isMobile) {
  //               window.open(response?.data?.cart?.checkoutUrl, "_self");
  //             } else {
  //               window.open(response?.data?.cart?.checkoutUrl);
  //             }
  //             gmtEventToBuyNow({ ...newAdditionData });
  //           }
  //         } else {
  //           let res = await addToCart(varientData?.id, slugValue, quantity);
  //           let cartId = res?.data?.cartCreate?.cart?.id;
  //           const response = await checkoutCartDetails(cartId);
  //           if (isMobile) {
  //             window.open(response?.data?.cart?.checkoutUrl, "_self");
  //           } else {
  //             window.open(response?.data?.cart?.checkoutUrl);
  //           }
  //           gmtEventToBuyNow({ ...newAdditionData });
  //         }
  //       }
  //     }
  //   } catch (error) {
  //     console.log("error");
  //   } finally {
  //     setBuyNowLoaderState(false);
  //   }
  // };

  const BuyNowHandler = async () => {
    const quantity = 1;

    setBuyNowLoaderState(true);
    try {
      const variant = await getVariantBySelectedOptions(
        newAdditionData?.id,
        size,
        color,
        newAdditionData?.options[0]?.name,
        newAdditionData?.options[1]?.name,
      );

      const varientData = variant?.data.product?.variantBySelectedOptions;
      if (varientData?.quantityAvailable === 0) {
        setError(true);
        setErrorMessage("This item is currently out of stock");
      } else {
        if (!cartId) {
          let res = await addToCart(varientData?.id, slugValue, quantity);
          dispatch(updateCartId(res?.data?.cartCreate?.cart?.id));
          let cartId = res?.data?.cartCreate?.cart?.id;
          const response = await checkoutCartDetails(cartId);

          window.open(response?.data?.cart?.checkoutUrl, "_self");
          gmtEventToBuyNow({ ...newAdditionData });
        } else {
          const data1 = cartProducts?.find((item: any) => item?.merchandise?.id === varientData?.id);
          if (data1) {
            if (varientData?.quantityAvailable === data1?.quantity) {
              setError(true);
              setErrorMessage("This item is currently out of stock");
            } else {
              await updateCartLineItem(cartId, data1?.id, quantity);
              const response = await checkoutCartDetails(cartId);

              window.open(response?.data?.cart?.checkoutUrl, "_self");
              gmtEventToBuyNow({ ...newAdditionData });
            }
          } else {
            await addToCartLineItem(cartId, varientData?.id, quantity);
            const response = await checkoutCartDetails(cartId);

            window.open(response?.data?.cart?.checkoutUrl, "_self");
            gmtEventToBuyNow({ ...newAdditionData });
          }
        }
      }
    } catch (error) {
      console.log("error");
    } finally {
      setBuyNowLoaderState(false);
    }
  };

  const ClearErrors = () => {
    setError(false);
    setErrorMessage("");
  };

  return (
    <Layout
      error={apiError}
      slug={slugValue}
      seo={{
        title: `${process.env.NEXT_PUBLIC_STOREFRONT_PRODUCTDETAILS_TITLE1} ${newAdditionData?.title} ${process.env.NEXT_PUBLIC_STOREFRONT_PRODUCTDETAILS_TITLE2} ${headerData?.data?.storefrontName}'s ${process.env.NEXT_PUBLIC_STOREFRONT_PRODUCTDETAILS_TITLE3}`,
        description: `${process.env.NEXT_PUBLIC_STOREFRONT_PRODUCTDETAILS_DESCRIPTION1} ${newAdditionData?.title} ${process.env.NEXT_PUBLIC_STOREFRONT_PRODUCTDETAILS_DESCRIPTION2} ${headerData?.data?.storefrontName} ${process.env.NEXT_PUBLIC_STOREFRONT_PRODUCTDETAILS_DESCRIPTION3}`,
      }}
      storefrontName={headerData?.data?.storefrontName}
    >
      <CustomContainer>
        <Box sx={styles.mainContainer}>
          <Grid container item md={11} lg={9} xl={9}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: isMatch ? "center" : "start",
                textAlign: "center",
                // paddingTop: "26px",
              }}
            >
              <Grid item xs={10} sx={{ display: { lg: "none", md: "none", sm: "none" } }}>
                <Grid>
                  <Gallery>
                    <Slide {...properties} indicators={true} autoplay={false} transitionDuration={500}>
                      {newAdditionData?.images?.nodes?.map((item: any) => {
                        return (
                          <>
                            <Box sx={styles.eachSlideEffect}>
                              <Item original={item?.url} thumbnail={item?.url} width="600" height="600">
                                {({ ref, open }) => (
                                  <img width={"335px"} height={"365.97px"} ref={ref} onClick={open} src={item?.url} />
                                )}
                              </Item>
                            </Box>
                          </>
                        );
                      })}
                    </Slide>
                  </Gallery>
                </Grid>
              </Grid>
              <Gallery>
                <ImageList
                  cols={1}
                  sx={{
                    maxHeight: "240vh",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <ImageListItem sx={{ paddingBottom: "25px" }}>
                    <Box
                      sx={{
                        width: 400,
                        height: 400,
                      }}
                    >
                      {newAdditionData?.images?.nodes?.map((item: any, index: any) => {
                        return (
                          <Box
                            sx={{
                              width: 400,
                              height: 400,
                              marginTop: "20px",
                            }}
                          >
                            <Item original={item?.url} thumbnail={item?.url} width="500" height="500">
                              {({ ref, open }) => (
                                <img width={400} height={400} ref={ref} onClick={open} src={item?.url} />
                              )}
                            </Item>
                          </Box>
                        );
                      })}
                    </Box>
                  </ImageListItem>
                </ImageList>
              </Gallery>
            </Grid>

            <Grid container item xs={12} sm={12} md={6} lg={6} justifyContent="center">
              <Grid item xs={11} sm={6} md={10} lg={10} textAlign="center" paddingTop="40px">
                <Box
                  style={{
                    position: "sticky",
                    top: "110px",
                  }}
                >
                  <Typography fontSize={"16px"} fontWeight={"600"}>
                    {newAdditionData?.vendor}
                  </Typography>
                  <Typography sx={styles.description}>{newAdditionData?.title}</Typography>
                  <Grid container item xs={12} sm={12} md={12} lg={12} justifyContent="center">
                    <Typography style={styles.price} fontSize={"24px"} fontWeight={"600"}>
                      {`${newAdditionData?.priceRange?.minVariantPrice?.currencyCode === "AUD" ? "$" : ""}${
                        newAdditionData?.priceRange?.minVariantPrice?.amount
                      }`}
                    </Typography>
                  </Grid>

                  <Options
                    newAdditionData={newAdditionData}
                    onSelectedItem={onSelectedItem}
                    size={size}
                    color={color}
                    setSizeValue={setSizeValue}
                    setColorValue={setColorValue}
                  />
                  {error ? (
                    <Alert
                      // onClose={() => {
                      //   setError(false);
                      // }}
                      sx={{ marginTop: 10 }}
                      severity="error"
                    >
                      {errorMessage}
                    </Alert>
                  ) : null}

                  <Action
                    addToCartButton={addToCartButton}
                    buttonLoaderState={buttonLoaderState}
                    BuyNowHandler={BuyNowHandler}
                    buyNowLoaderState={buyNowLoaderState}
                    disabled={error}
                  />

                  <Typography sx={styles.mainDescription}>All Orders Shipped Directly From Each Brand </Typography>
                  <Divider />
                  <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.accordianGrid}>
                    <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} elevation={0}>
                      <AccordionSummary expandIcon={expanded === "panel1" ? <RemoveIcon /> : <AddIcon />}>
                        <Typography sx={styles.accordianTypography} fontWeight={"bold"}>
                          Description
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={styles.descriptionTypography}>{newAdditionData?.description}</Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} elevation={0}>
                      <AccordionSummary expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}>
                        <Typography sx={styles.accordianTypography} fontWeight={"bold"}>
                          Shipping
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={styles.descriptionTypography}>Free shipping on all Pedlar orders</Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} elevation={0}>
                      <AccordionSummary expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}>
                        <Typography sx={styles.accordianTypography} fontWeight={"bold"}>
                          Returns
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={styles.descriptionTypography}>Free returns on all Pedlar orders</Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={0}>
                      <AccordionSummary></AccordionSummary>
                      <AccordionDetails></AccordionDetails>
                    </Accordion>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={4} sx={styles.bottomContainer}>
          <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} paddingTop="40px">
            <Grid item xs={12} sm={12} md={12} lg={12} paddingLeft="10px">
              <Typography sx={styles.text} fontSize={"24px"} fontWeight={"bold"}>
                You might like
              </Typography>
            </Grid>

            {newAdditionData2?.slice(0, 4)?.map((item: any, index: any) => {
              let productId = item?.id?.split("gid://shopify/Product/")[1];
              return (
                <Link key={"link" + index} href={{ pathname: `${path}/product/${productId}` }}>
                  <Grid
                    key={index}
                    item
                    xs={6}
                    sm={6}
                    md={3}
                    lg={3}
                    paddingLeft="10px"
                    paddingBottom="10px"
                    onClick={ClearErrors}
                  >
                    <CardComponent
                      name={item?.title}
                      type={item?.productType}
                      price={
                        item.priceRange?.maxVariantPrice?.currencyCode === "AUD"
                          ? `$${item.priceRange?.maxVariantPrice?.amount}`
                          : item.priceRange?.maxVariantPrice?.amount
                      }
                      image={item?.featuredImage?.transformedSrc}
                      id={item?.id}
                      item={item}
                    />
                  </Grid>
                </Link>
              );
            })}
          </Grid>
        </Grid>
      </CustomContainer>
      <Divider sx={styles.footerDivider} />
      <BaseFooter />
    </Layout>
  );
};

export default Cart;
