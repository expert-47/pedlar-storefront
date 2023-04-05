import { Container, ContainerProps } from "@mui/material";
import Footer from "components/footer/footer";
import Navbar from "components/navbar";
import React, { useEffect } from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import ApiError from "components/PageError";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, clearStore } from "store/slice/appSlice";
import { getCartProducts } from "api/graphql/grapgql";
import { getBrandShopTags } from "store/slice/tagsSlice";
interface LayoutProps extends ContainerProps {
  seo?: NextSeoProps;
  storefrontName: string;
  slug: string;
  productsPage: boolean;
  error?: boolean;
  collectionId: string;
}
export default function Layout(props: LayoutProps) {
  const { children, seo, storefrontName = "", slug = "", productsPage = "", error, collectionId } = props;

  const storeName = useSelector((data) => data.app.storeName);

  const cartId = useSelector((data: any) => data.app.cartId[storeName]);
  const { shop, brand } = useSelector((data: any) => data.tags);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTagsData = async () => {
      if (shop?.length == 0 || brand?.length == 0) {
        dispatch(getBrandShopTags(collectionId));
      }
    };
    getTagsData();
  }, []);
  const getCartList = async (value = false) => {
    if (cartId) {
      try {
        let response = await getCartProducts(cartId);
        dispatch(addProductToCart({ products: response?.data?.cart?.lines?.nodes || [], showCart: false }));
      } catch (error) {}
    }
  };
  useEffect(() => {
    getCartList();
  }, [cartId]);

  useEffect(() => {
    if (storeName != slug) {
      dispatch(clearStore(slug));
    }
  }, []);
  console.log();

  return (
    <Container maxWidth={false} disableGutters {...props}>
      <header>
        <NextSeo {...seo} />
        <Navbar storefrontName={storefrontName} slug={slug} productsPage={productsPage} data={brand} shopList={shop} />
      </header>
      <main style={{ paddingTop: "115px" }}>{error ? <ApiError /> : children}</main>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}

export function CustomContainer(props: ContainerProps) {
  const { children } = props;

  return (
    <Container maxWidth={"xl"} disableGutters {...props}>
      {children}
    </Container>
  );
}

export function CustomGrid(props: ContainerProps) {
  const { children } = props;
  return (
    <Container maxWidth={"lg"} disableGutters {...props}>
      {children}
    </Container>
  );
}
