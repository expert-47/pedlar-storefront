import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import { Alert, Divider, Grid, Typography, CircularProgress } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Link from "next/link";
import "react-slideshow-image/dist/styles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { CustomContainer } from "../layout";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Layout from "../layout";
import Options from "./components/options";
import Action from "./components/action";
import styles from "styles/product";
import BaseFooter from "components/footer/baseFooter";
import { useMediaQuery, useTheme } from "@mui/material";
import { getStoreName } from "utils/getPathName";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import Scrollspy from "react-scrollspy";

import {
  addToCart,
  updateCartLineItem,
  addToCartLineItem,
  getCartProducts,
  getVariantBySelectedOptions,
  checkoutCartDetails,
} from "api/graphql/grapgql";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, updateCartId } from "store/slice/appSlice";
import * as gtmEvents from "utils/gtm";
import CardComponent from "components/home/components/cardComponent";
import { productDetailImpressiongmtEvent, productsImpressiongmtEvent } from "utils/gtm";

import AppBar from "@mui/material/AppBar";
import Image from "next/image";
import { seo } from "utils/seoData";

const Cart = (props: any) => {
  const { newAdditionData, headerData, newAdditionData2, error: apiError } = props;
  const theme = useTheme();
  useEffect(() => {
    productsImpressiongmtEvent(newAdditionData2, "you might like");
  }, [newAdditionData2]);
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [price, setPrice] = useState({
    price: 0,
    currencyCode: "AUD",
  });
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
    if (newAdditionData?.options) {
      setSize(newAdditionData?.options[0]?.values[0] || "Default Title");
      setColor(newAdditionData?.options[1]?.values[0] || "");
      onSelectedItem(
        newAdditionData?.options[0]?.values[0] || "Default Title",
        newAdditionData?.options[1]?.values[0] || "",
      );
    }
  }, [newAdditionData, route]);

  // for setting the size of the product
  const setSizeValue = (value: string) => {
    setSize(value);
    onSelectedItem(value, undefined);
  };
  // for setting the color of product
  const setColorValue = (value: string) => {
    setColor(value);
    onSelectedItem(undefined, value);
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
  const gmtEventToAddProduct = (data: any) => {
    gtmEvents.addToCart({
      ...data,
      size: size,
      color: color,
      index: route?.query?.index ? parseInt(route?.query?.index) + 1 : 1,
    });
  };

  const gmtEventToBuyNow = (data) => {
    gtmEvents.buyNowbeginCheckout({
      ...data,
      size: size,
      color: color,
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

              gmtEventToAddProduct({ ...newAdditionData, quantity: 1 });
            }
          } else {
            await addToCartLineItem(cartId, varientData?.id, 1);
          }
        } else {
          let response = await addToCart(varientData?.id, slugValue, 1);

          dispatch(updateCartId({ id: response?.data?.cartCreate?.cart?.id, showCart: true }));
          gmtEventToAddProduct({ ...newAdditionData, quantity: 1 });
        }
      }
    } catch (error) {
    } finally {
      getCartList(true);
      setButtonLoaderState(false);
      setLoading(false);
    }
  };

  const onSelectedItem = async (sizeValue = undefined, colorValue = undefined) => {
    try {
      setError(false);
      setErrorMessage("");
      setLoading(true);
      productDetailImpressiongmtEvent({
        ...newAdditionData,
        size: sizeValue != undefined ? sizeValue : size,
        color: colorValue != undefined ? colorValue : color,
        index: route?.query?.index ? parseInt(route?.query?.index) + 1 : 1,
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
        if (!cartId) {
          let res = await addToCart(varientData?.id, slugValue, quantity);
          dispatch(updateCartId(res?.data?.cartCreate?.cart?.id));
          let cartId = res?.data?.cartCreate?.cart?.id;
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
              let data = await updateCartLineItem(cartId, data1?.id, quantity);
              gtmEvents.beginCheckout(data.data?.cartLinesUpdate?.cart?.lines?.nodes || [], "buy now button");

              const response = await checkoutCartDetails(cartId);
              window.open(response?.data?.cart?.checkoutUrl, "_self");
            }
          } else {
            let data = await addToCartLineItem(cartId, varientData?.id, quantity);
            const response = await checkoutCartDetails(cartId);

            gtmEvents.beginCheckout(data.data?.cartLinesAdd?.cart?.lines?.nodes || [], "buy now button");

            window.open(response?.data?.cart?.checkoutUrl, "_self");
          }
        }
      }
    } catch (error) {
      console.log("response", error);
    } finally {
      setBuyNowLoaderState(false);
    }
  };

  const ClearErrors = () => {
    setError(false);
    setErrorMessage("");
  };
  const pagination = {
    clickable: true,
    pagination: true,
  };

  let prices = price?.price?.toString()?.endsWith(".0") ? Math.round(price?.price) : price?.price;

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
    >
      <CustomContainer>
        <Box sx={styles.mainContainer}>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
                zIndex: "10px",
                marginRight: "1rem",
              },
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
              <Grid item xs={10} sx={{ display: { lg: "none", md: "none", sm: "none" } }}>
                <Grid>
                  <Gallery>
                    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
                      {newAdditionData?.images?.nodes?.map((item: any, index: number) => {
                        return (
                          <Box sx={styles.eachSlideEffect} key={"sliderImages" + index}>
                            <SwiperSlide>
                              <Item original={item?.url} thumbnail={item?.url} width="600" height="600">
                                {({ ref, open }) => (
                                  <img
                                    width={"265px"}
                                    height={"290px"}
                                    ref={ref}
                                    onClick={open}
                                    src={item?.url}
                                    objectFit="contain"
                                  />
                                )}
                              </Item>
                            </SwiperSlide>
                          </Box>
                        );
                      })}
                    </Swiper>
                  </Gallery>
                </Grid>
              </Grid>

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Gallery>
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
                        <Item original={item?.url} thumbnail={item?.url} width="500" height="500">
                          {({ ref, open }) => (
                            <div onClick={open} ref={ref}>
                              <Image
                                src={item?.url}
                                width={530}
                                height={579}
                                placeholder="blur"
                                blurDataURL="/loaderShim.png"
                                objectFit="contain"
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    );
                  })}
                </Gallery>
              </Box>
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
                        {`${price.currencyCode === "AUD" ? "$" : ""}${prices}`}
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
                      <AccordionSummary expandIcon={expanded === "panel1" ? <RemoveIcon /> : <AddIcon />}>
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
          </Grid>

          <Grid container xs={12} sm={12} md={12} lg={12} xl={12} pl={3} pr={3}>
            {newAdditionData2?.slice(0, 4)?.map((item: any, index: any) => {
              const productId = item?.id?.split("gid://shopify/Product/")[1];
              const prices = item.priceRange?.minVariantPrice?.amount.endsWith(".0")
                ? Math.round(item.priceRange?.minVariantPrice?.amount)
                : item.priceRange?.minVariantPrice?.amount;
              return (
                <Link key={"link" + index} href={{ pathname: `${path}/product/${productId}` }}>
                  <Grid
                    key={index}
                    item
                    xs={6}
                    sm={3}
                    md={3}
                    lg={2.5}
                  

                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    onClick={ClearErrors}
                  >
                    <CardComponent
                      width={{ xs: 150, sm: 170, md: 230, lg: 290 }}
                      height={{ xs: 150, sm: 170, md: 230, lg: 290 }}
                      name={item?.title}
                      type={item?.productType}
                      price={item.priceRange?.minVariantPrice?.currencyCode === "AUD" ? `$${prices}` : prices}
                      image={item?.featuredImage?.transformedSrc}
                      id={item?.id}
                      item={item}
                      index={index}
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
