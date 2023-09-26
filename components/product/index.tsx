//package imports
import {
  Box,
  Grid,
  Alert,
  Theme,
  AppBar,
  Divider,
  useTheme,
  Accordion,
  Typography,
  useMediaQuery,
  CircularProgress,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import "swiper/css";
import Link from "next/link";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import Scrollspy from "react-scrollspy";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import React, { useState, useEffect, useRef } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//components imports
import Layout from "../layout";
import Action from "./components/action";
import Options from "./components/options";
import { CustomContainer } from "../layout";
import CardComponent from "components/home/components/cardComponent";
//style imports
import styles from "styles/product";
//api imports
import {
  addToCart,
  updateCartLineItem,
  addToCartLineItem,
  getCartProducts,
  getVariantBySelectedOptions,
  checkoutCartDetails,
} from "apis/graphql/grapgql";
//redux
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, updateCartId } from "store/slice/appSlice";
//utils
import { seo } from "utils/seoData";
import * as gtmEvents from "utils/gtm";
import { getStoreName } from "utils/getPathName";
import { productDetailImpressiongmtEvent, productsImpressiongmtEvent } from "utils/gtm";
import { NextImage } from "components/pedlarImage";

function scrollToTop() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  if (!isBrowser()) return;
  window.scrollTo({ top: -50, behavior: "instant" });
}

const Cart = (props: any) => {
  const theme = useTheme();
  const route = useRouter();
  const slideRef = useRef(null);
  const dispatch = useDispatch();
  const path = getStoreName(route);
  const slugValue = route.query.slug;
  const { newAdditionData, headerData, newAdditionData2, error: apiError } = props;

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ImageLoaded, setImageLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [buttonLoaderState, setButtonLoaderState] = useState(false);
  const [buyNowLoaderState, setBuyNowLoaderState] = useState(false);
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [price, setPrice] = useState({
    price: 0,
    currencyCode: "AUD",
  });
  const [productsLoadedState, setproductsLoadedState] = useState(true);

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    if (ImageLoaded) {
      scrollToTop();
    }
  }, [ImageLoaded]);

  useEffect(() => {
    productsImpressiongmtEvent(newAdditionData2, "you might like");
  }, [newAdditionData2]);

  const isMatch = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const storeName = useSelector((data: any) => data.app.storeName);
  const cartId = useSelector((data: any) => data.app.cartId[storeName]);
  const cartProducts = useSelector((data: any) => data.app.products[storeName]) || [];

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    if (newAdditionData?.options) {
      setSize(newAdditionData?.options[0]?.values[0] || "Default Title");
      setColor(newAdditionData?.options[1]?.values[0] || "");
      onSelectedItem(
        newAdditionData?.options[0]?.values[0] || "Default Title",
        newAdditionData?.options[1]?.values[0] || "",
        newAdditionData?.options.length,
      );
    }
    return () => {
      slideRef?.current?.goTo(0);
    };
  }, [route.query?.id]);

  // for setting the size of the product
  const setSizeValue = (value: string) => {
    setSize(value);
    onSelectedItem(value, undefined, newAdditionData?.options.length);
  };
  // for setting the color of product
  const setColorValue = (value: string) => {
    setColor(value);
    onSelectedItem(undefined, value, newAdditionData?.options.length);
  };
  // add to cart method
  const getCartList = async (value = false) => {
    if (cartId) {
      try {
        const response = await getCartProducts(cartId);
        dispatch(addProductToCart({ products: response?.data?.cart?.lines?.nodes || [], showCart: value }));
      } catch (error) {}
    }
  };
  const gmtEventToAddProduct = (data: any) => {
    gtmEvents.addToCart({
      ...data,
      ...(newAdditionData?.options.length != 1 && { size: size }),
      color: newAdditionData?.options.length == 1 ? size : color,
      index: route?.query?.index ? parseInt(route?.query?.index) + 1 : 1,
    });
  };

  const gmtEventToBuyNow = (data: any) => {
    gtmEvents.buyNowbeginCheckout({
      ...data,
      ...(newAdditionData?.options.length != 1 && { size: size }),
      color: newAdditionData?.options.length == 1 ? size : color,
      index: route?.query?.index ? parseInt(route?.query?.index) + 1 : 1,
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

      const varientData = variant?.data?.product?.variantBySelectedOptions;

      if (!Boolean(varientData?.quantityAvailable) || varientData?.quantityAvailable === 0) {
        setError(true);
        setErrorMessage("This item is currently out of stock");
        setLoading(false);
      } else {
        if (Boolean(cartId)) {
          const data1 = cartProducts?.find((item: any) => item?.merchandise?.id === varientData?.id);

          if (data1) {
            if (varientData?.quantityAvailable === data1?.quantity) {
              setError(true);
              setErrorMessage("This item is currently out of stock");
              setLoading(false);
            } else {
              const quantity = data1.quantity + 1;

              await updateCartLineItem(cartId, data1?.id, quantity);
            }
          } else {
            await addToCartLineItem(cartId, varientData?.id, 1);
          }
        } else {
          const response = await addToCart(varientData?.id, slugValue, 1);

          dispatch(updateCartId({ id: response?.data?.cartCreate?.cart?.id, showCart: true }));
        }
      }
    } catch (error) {
    } finally {
      gmtEventToAddProduct({ ...newAdditionData, quantity: 1, item_category3: "add to cart" });
      getCartList(true);
      setButtonLoaderState(false);
      setLoading(false);
    }
  };
  const onSelectedItem = async (sizeValue = undefined, colorValue = undefined, type) => {
    try {
      setError(false);
      setErrorMessage("");
      setLoading(true);
      productDetailImpressiongmtEvent({
        ...newAdditionData,
        ...(type != 1 && { size: sizeValue != undefined ? sizeValue : size }),
        color: type == 1 && sizeValue != undefined ? sizeValue : colorValue != undefined ? colorValue : color,
        index: route?.query?.index ? parseInt(route?.query?.index) + 1 : 1,
        heading: route?.query?.heading || "all products",
      });
      const variant = await getVariantBySelectedOptions(
        newAdditionData?.id,
        sizeValue != undefined ? sizeValue : size,
        colorValue != undefined ? colorValue : color,
        newAdditionData?.options[0]?.name,
        newAdditionData?.options[1]?.name,
      );
      const varientData = variant?.data.product?.variantBySelectedOptions;
      setPrice({
        price: varientData.price.amount,
        currencyCode: varientData.price.currencyCode,
      });
      if (!varientData?.quantityAvailable || varientData?.quantityAvailable === 0) {
        setError(true);
        setErrorMessage("This item is currently out of stock");
        setLoading(false);
      } else {
        setError(false);
        setErrorMessage("");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };
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
        gmtEventToAddProduct({ ...newAdditionData, quantity: 1, item_category3: "buy now button" });
        if (!cartId) {
          const res = await addToCart(varientData?.id, slugValue, quantity);
          dispatch(updateCartId(res?.data?.cartCreate?.cart?.id));
          const cartId = res?.data?.cartCreate?.cart?.id;
          const response = await checkoutCartDetails(cartId);
          window.open(response?.data?.cart?.checkoutUrl, "_self");
          gmtEventToBuyNow({ ...newAdditionData, quantity: 1 });
        } else {
          const data1 = cartProducts?.find((item: any) => item?.merchandise?.id === varientData?.id);
          if (data1) {
            if (varientData?.quantityAvailable === data1?.quantity) {
              setError(true);
              setErrorMessage("This item is currently out of stock");
            } else {
              const data = await updateCartLineItem(cartId, data1?.id, data1?.quantity + 1);
              gtmEvents.beginCheckout(data.data?.cartLinesUpdate?.cart?.lines?.nodes || [], "buy now button");
              setTimeout(async () => {
                const response = await checkoutCartDetails(cartId);
                window.open(response?.data?.cart?.checkoutUrl, "_self");
              }, 500);
            }
          } else {
            const data = await addToCartLineItem(cartId, varientData?.id, quantity);

            gtmEvents.beginCheckout(data.data?.cartLinesAdd?.cart?.lines?.nodes || [], "buy now button");
            setTimeout(async () => {
              const response = await checkoutCartDetails(cartId);

              window.open(response?.data?.cart?.checkoutUrl, "_self");
            }, 500);
          }
        }
      }
    } catch (error) {
      console.log("response");
    } finally {
      setBuyNowLoaderState(false);
    }
  };

  const ClearErrors = () => {
    setError(false);
    setErrorMessage("");
  };
  const getPriceValueFromState = price?.price;

  let priceOfProduct: any = getPriceValueFromState;
  const decimalPart = priceOfProduct?.toString().split(".")[1];
  if (decimalPart && decimalPart.length === 1 && decimalPart !== "0") {
    priceOfProduct += "0";
  } else if (decimalPart === "0") {
    priceOfProduct = Math.round(priceOfProduct);
  }
  useEffect(() => {
    if (newAdditionData?.images?.nodes.length > 0) {
      setproductsLoadedState(false);
    }
  }, [newAdditionData]);

  return (
    <Layout
      error={apiError}
      slug={slugValue}
      seo={{
        title: seo.productDetailTitle
          .replace("TITLE", `${newAdditionData?.title}`)
          .replace("storefrontName", `${headerData?.data?.storefrontName}'s`),
        description: seo.productDetailDescription
          .replace("TITLE", `${newAdditionData?.title}`)
          .replace("storefrontName", `${headerData?.data?.storefrontName}'s`),
      }}
      storefrontName={headerData?.data?.storefrontName}
      collectionId={headerData?.data?.collectionId}
      isMobile={isMobile}
    >
      {!productsLoadedState ? (
        <CustomContainer>
          <Box sx={styles.mainContainer}>
            {!isMobile ? (
              <Box
                sx={{
                  zIndex: "10px",
                  marginRight: "1rem",
                }}
              >
                <AppBar
                  position="sticky"
                  sx={{
                    top: "350px",
                    boxShadow: "none",
                    zIndex: "5",
                  }}
                >
                  <Scrollspy
                    items={newAdditionData?.images?.nodes?.map((_: any, index: any) => `section-${index + 1}`)}
                    currentClassName="detail-page-current"
                    style={{ width: 10 }}
                    offset={-300}
                  >
                    {newAdditionData?.images?.nodes?.map((item: any, index: any) => {
                      return (
                        <li className="list_unorder" key={"imagesScrollSpy" + index}>
                          <a href={`#section-${index + 1}`}>
                            <div className="app__navigation-dot"></div>
                          </a>
                        </li>
                      );
                    })}
                  </Scrollspy>
                </AppBar>
              </Box>
            ) : null}

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
                  paddingTop: "26px",
                }}
              >
                {isMobile ? (
                  <Grid item xs={12} sx={{ height: "400px" }}>
                    <Gallery
                      options={{
                        showAnimationDuration: 0,
                        hideAnimationDuration: 0,
                      }}
                    >
                      <Slide
                        transitionDuration={100}
                        ref={slideRef}
                        indicators={true}
                        arrows={false}
                        autoplay={false}
                        infinite={false}
                      >
                        {newAdditionData?.images?.nodes?.map((item: any, index: number) => {
                          return (
                            <Box
                              style={{
                                backgroundColor: "white",
                              }}
                              key={"newAdditiondataCart" + index}
                            >
                              <Item id={index} original={item?.url} thumbnail={item?.url}>
                                {({ ref, open }) => (
                                  <Box
                                    ref={ref}
                                    onClick={open}
                                    sx={{
                                      height: "100%",
                                      width: "100%",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      display: "flex",
                                    }}
                                  >
                                    <NextImage
                                      src={item?.url}
                                      width={358}
                                      height={400}
                                      layout="default"
                                      alt={"newAdditiondataCart" + index}
                                      fill={false}
                                      style={{
                                        objectFit: "contain",
                                        objectPosition: "center",
                                      }}
                                      onLoad={() => setImageLoaded(true)}
                                      priority={index < 2 ? true : false}
                                    />
                                  </Box>
                                )}
                              </Item>
                            </Box>
                          );
                        })}
                      </Slide>
                    </Gallery>
                  </Grid>
                ) : (
                  <Box>
                    <Gallery
                      options={{
                        showAnimationDuration: 0,
                        hideAnimationDuration: 0,
                      }}
                    >
                      {newAdditionData?.images?.nodes?.map((item: any, index: any) => {
                        return (
                          <div
                            id={`section-${index + 1}`}
                            key={"newAdditionImages" + index}
                            style={{
                              width: 530,
                              height: 579,
                              marginTop: "20px",
                            }}
                          >
                            <Item original={item?.url} thumbnail={item?.url} width="700" height="700">
                              {({ ref, open }) => (
                                <div onClick={open} ref={ref}>
                                  <NextImage
                                    src={item?.url}
                                    fill={false}
                                    layout="default"
                                    width={540}
                                    style={{
                                      objectFit: "contain",
                                    }}
                                    height={579}
                                    alt={"newAdditionImages" + index}
                                    priority={index < 2 ? true : false}
                                  />
                                </div>
                              )}
                            </Item>
                          </div>
                        );
                      })}
                    </Gallery>
                  </Box>
                )}
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                sx={{ justifyContent: { xs: "center", lg: "flex-end" } }}
              >
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
                      {loading ? (
                        <CircularProgress color="secondary" />
                      ) : (
                        <Typography style={styles.price} fontSize={"24px"} fontWeight={"600"}>
                          {`${price.currencyCode === "AUD" ? "$" : ""}${priceOfProduct}`}
                        </Typography>
                      )}
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
                      <Alert sx={{ marginTop: 10 }} severity="error">
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
                        <AccordionSummary // expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography sx={styles.accordianTypography} fontWeight={"bold"}>
                            Description
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            sx={styles.descriptionTypography}
                            dangerouslySetInnerHTML={{ __html: newAdditionData?.descriptionHtml }}
                          ></Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion elevation={0}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography sx={styles.accordianTypography} fontWeight={"bold"}>
                            Shipping
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography sx={styles.descriptionTypography}>Free shipping on all Pedlar orders</Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion elevation={0}>
                        <AccordionSummary // expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel3a-content"
                          id="panel3a-header"
                        >
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

          {isMobile ? (
            <Grid container spacing={4} sx={{ ...styles.bottomContainer }}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} paddingTop="40px" paddingLeft="10px">
                <Typography sx={styles.text} fontSize={"24px"} fontWeight={"bold"}>
                  You might like
                </Typography>
              </Grid>
              <Grid
                container
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                pl={3}
                pr={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {newAdditionData2?.slice(0, 4)?.map((item: any, index: any) => {
                  const productId = item?.id?.split("gid://shopify/Product/")[1];
                  //   assign the value of price according to the requirement of the client
                  //(remove .0 if exists , and if there is one decimal and that
                  //  decimal is not zero put the extra zero with that decimal for example 1.1 should be 1.10)

                  const prices = item.priceRange?.minVariantPrice?.amount;
                  let formattedPrice = prices;

                  const decimalPart = formattedPrice.split(".")[1];
                  if (decimalPart && decimalPart.length === 1 && decimalPart !== "0") {
                    formattedPrice += "0";
                  } else if (decimalPart === "0") {
                    formattedPrice = Math.round(formattedPrice);
                  }
                  return (
                    <Grid
                      key={index}
                      item
                      xs={6}
                      sm={3}
                      md={3}
                      lg={2}
                      sx={{ display: "flex", justifyContent: "center", alignItems: "baseline" }}
                      onClick={ClearErrors}
                    >
                      <Link
                        key={"link" + index}
                        href={{ pathname: `${path}/product/${productId}` }}
                        style={{ textDecoration: "none" }}
                        onClick={() => setproductsLoadedState(true)}
                      >
                        <CardComponent
                          width={{ xs: 150, sm: 250, md: 320, lg: 380 }}
                          height={{ xs: 187, sm: 312, md: 400, lg: 450 }}
                          name={item?.title?.toLowerCase()}
                          type={item?.vender}
                          price={
                            item.priceRange?.minVariantPrice?.currencyCode === "AUD"
                              ? `$${formattedPrice}`
                              : formattedPrice
                          }
                          image={item?.featuredImage?.url}
                          id={item?.id}
                          item={item}
                          index={index}
                          heading={"you might like"}
                        />
                      </Link>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          ) : (
            <>
              <Box
                sx={{
                  padding: "40px 0 0 10px",
                }}
              >
                <Typography sx={styles.text} fontSize={"24px"} fontWeight={"bold"}>
                  You might like
                </Typography>
              </Box>
              <Grid container spacing={4} sx={{ ...styles.bottomContainer }}>
                {newAdditionData2?.slice(0, 5)?.map((item: any, index: any) => {
                  const productId = item?.id?.split("gid://shopify/Product/")[1];
                  //   assign the value of price according to the requirement of the client
                  //(remove .0 if exists , and if there is one decimal and that
                  //  decimal is not zero put the extra zero with that decimal for example 1.1 should be 1.10)
                  const prices = item.priceRange?.minVariantPrice?.amount;
                  let formattedPrice = prices;

                  const decimalPart = formattedPrice.split(".")[1];
                  if (decimalPart && decimalPart.length === 1 && decimalPart !== "0") {
                    formattedPrice += "0";
                  } else if (decimalPart === "0") {
                    formattedPrice = Math.round(formattedPrice);
                  }
                  return (
                    <Grid key={"you_might_like" + index} item sm={3} lg={2.4} onClick={ClearErrors}>
                      <Link
                        key={"link" + index}
                        href={{ pathname: `${path}/product/${productId}` }}
                        style={{ textDecoration: "none" }}
                        onClick={() => setproductsLoadedState(true)}
                      >
                        <CardComponent
                          width={{ xs: 150, sm: 170, md: 230, lg: 270 }}
                          height={{ xs: 150, sm: 170, md: 230, lg: 270 }}
                          name={item?.title?.toLowerCase()}
                          type={item?.vendor}
                          price={
                            item.priceRange?.minVariantPrice?.currencyCode === "AUD"
                              ? `$${formattedPrice}`
                              : formattedPrice
                          }
                          image={item?.featuredImage?.url}
                          id={item?.id}
                          item={item}
                          index={index}
                          heading={"you might like"}
                        />
                      </Link>
                    </Grid>
                  );
                })}
              </Grid>
            </>
          )}
        </CustomContainer>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 30,
            height: 500,
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      )}
    </Layout>
  );
};

export default Cart;
