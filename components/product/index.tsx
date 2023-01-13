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

const buttonStyle = {
  display: "none",
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}></button>,
  nextArrow: <button style={{ ...buttonStyle }}></button>,
};

const Cart = (props) => {
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
  const cartId = useSelector((data) => data.app.cartId);
  const cartProducts = useSelector((data) => data.app.products);
  const dispatch = useDispatch();

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    setSize(newAdditionData?.options[0]?.values[0]);
    setColor(newAdditionData?.options[1]?.values[0]);
  }, [route]);

  useEffect(() => {
    setError(false);
  }, [cartProducts]);

  useEffect(() => {
    getCartList();
  }, [cartId]);
  // for setting the size of the product
  const setSizeValue = (value: string) => {
    setSize(value);
  };
  // for setting the color of product
  const setColorValue = (value: string) => {
    setColor(value);
  };

  // add to cart method

  const getCartList = async () => {
    if (cartId) {
      try {
        let response = await getCartProducts(cartId);

        dispatch(addProductToCart(response?.data?.cart?.lines?.nodes || []));
      } catch (error) {}
    }
  };
  const addToCartButton = async () => {
    try {
      const quantity = 1;
      setButtonLoaderState(true);
      const variant = await getVariantBySelectedOptions(newAdditionData?.id, size, color);

      const varientData = variant?.data.product?.variantBySelectedOptions;

      if (varientData?.quantityAvailable === 0) {
        setError(true);
        setErrorMessage("This item is currently out of stock");
      } else {
        if (typeof cartId == "string" && cartId != "") {
          const data1 = cartProducts?.find((item: any) => item?.merchandise?.id === varientData?.id);

          if (data1) {
            if (varientData?.quantityAvailable === data1?.quantity) {
              setError(true);
              setErrorMessage("This item is currently out of stock");
            } else {
              const quantity = data1.quantity + 1;

              await updateCartLineItem(cartId, data1?.id, quantity);
            }
          } else {
            await addToCartLineItem(cartId, varientData?.id, quantity);
          }
        } else {
          let response = await addToCart(varientData?.id, slugValue, quantity);
          dispatch(updateCartId(response?.data?.cartCreate?.cart?.id));
        }
      }
    } catch (error) {
    } finally {
      await getCartList();
      setButtonLoaderState(false);
    }
  };

  const BuyNowHandler = async () => {
    const quantity = 1;

    setBuyNowLoaderState(true);
    try {
      const variant = await getVariantBySelectedOptions(newAdditionData?.id, size, color);

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

          window.open(response?.data?.cart?.checkoutUrl);
        } else {
          const data1 = cartProducts?.find((item: any) => item?.merchandise?.id === varientData?.id);
          if (data1) {
            if (varientData?.quantityAvailable === data1?.quantity) {
              setError(true);
              setErrorMessage("This item is currently out of stock");
            } else {
              await updateCartLineItem(cartId, data1?.id, quantity);
              const response = await checkoutCartDetails(cartId);

              window.open(response?.data?.cart?.checkoutUrl);
            }
          } else {
            await addToCartLineItem(cartId, varientData?.id, quantity);
            const response = await checkoutCartDetails(cartId);

            window.open(response?.data?.cart?.checkoutUrl);
          }
        }
      }
    } catch (error) {
    } finally {
      setBuyNowLoaderState(false);
    }
  };

  return (
    <Layout error={apiError} slug={slugValue} storefrontName={headerData?.data?.storefrontName}>
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
                paddingTop: "26px",
              }}
            >
              <Grid item xs={10} sx={{ display: { lg: "none", md: "none", sm: "none" } }}>
                <Grid>
                  <Slide {...properties} indicators={true}>
                    <Box className="each-slide-effect">
                      <Box
                        sx={styles.eachSlideEffect}
                        style={{ backgroundImage: `url(${newAdditionData?.featuredImage?.url})` }}
                      ></Box>
                    </Box>
                  </Slide>
                </Grid>
              </Grid>
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
                    <PedlarImage src={newAdditionData?.featuredImage?.url} />
                  </Box>
                </ImageListItem>
              </ImageList>
            </Grid>

            <Grid container item xs={12} sm={12} md={6} lg={6} justifyContent="center">
              <Grid item xs={11} sm={6} md={10} lg={10} textAlign="center" paddingTop="40px">
                <Grid
                  style={{
                    position: "sticky",
                    top: "110px",
                  }}
                >
                  <Typography fontSize={"16px"} fontWeight={"600"}>
                    LOW CLASSIC
                  </Typography>
                  <Typography sx={styles.description}>{newAdditionData?.title}</Typography>
                  <Grid container item xs={12} sm={12} md={12} lg={12} justifyContent="center">
                    <Typography style={styles.price} fontSize={"24px"} fontWeight={"600"}>
                      {`${newAdditionData?.priceRange?.minVariantPrice?.amount} ${newAdditionData?.priceRange?.minVariantPrice?.currencyCode}`}
                    </Typography>
                  </Grid>

                  <Options
                    newAdditionData={newAdditionData}
                    size={size}
                    color={color}
                    setSizeValue={setSizeValue}
                    setColorValue={setColorValue}
                  />
                  {error ? (
                    <Alert
                      onClose={() => {
                        setError(false);
                      }}
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
                  />

                  <Typography sx={styles.mainDescription}>All Orders Shipped Directly From Each Brand </Typography>
                  <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.accordianGrid}>
                    <Accordion elevation={0}>
                      <AccordionSummary />
                      <AccordionDetails />
                    </Accordion>
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
                        <Typography sx={styles.descriptionTypography}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                          amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} elevation={0}>
                      <AccordionSummary expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}>
                        <Typography sx={styles.accordianTypography} fontWeight={"bold"}>
                          Returns
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={styles.descriptionTypography}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                          amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={0}>
                      <AccordionSummary></AccordionSummary>
                      <AccordionDetails></AccordionDetails>
                    </Accordion>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={4} sx={styles.bottomContainer}>
          <Grid container item xs={11.5} sm={9} md={11.2} lg={9.2} xl={9.2} paddingTop="30px">
            <Grid item xs={12} sm={12} md={12} lg={12} paddingLeft="10px">
              <Typography sx={styles.text} fontSize={"24px"} fontWeight={"bold"}>
                You might like
              </Typography>
            </Grid>
            {newAdditionData2?.slice(0, 5)?.map((item: any, index: any) => {
              let productId = item?.id?.split("gid://shopify/Product/")[1];
              return (
                <Link key={"link" + index} href={{ pathname: `${path}/product/${productId}` }}>
                  <Grid
                    key={index}
                    item
                    xs={6}
                    sm={6}
                    md={2.4}
                    lg={2.4}
                    paddingLeft="10px"
                    paddingBottom="50px"
                    sx={{ cursor: "pointer" }}
                  >
                    <Box sx={{ width: 190, height: 180 }}>
                      <PedlarImage src={item?.featuredImage?.transformedSrc} />
                    </Box>
                    <Typography variant="body1">SISLEY PARIS</Typography>
                    <Typography variant="subtitle2">Eye Contour Mask</Typography>
                    <Typography variant="subtitle2">$42</Typography>
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
