import { Container, ContainerProps } from "@mui/material";
import Footer from "components/footer/footer";
import Navbar from "components/navbar";
import React, { useEffect } from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import ApiError from "components/PageError";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, clearStore } from "store/slice/appSlice";
import useSwr from "swr";
import { getCartProducts } from "api/graphql/grapgql";
interface LayoutProps extends ContainerProps {
  seo?: NextSeoProps;
  storefrontName: string;
  slug: string;
  productsPage: boolean;
  error?: boolean;
}
export default function Layout(props: LayoutProps) {
  const { children, seo, storefrontName = "", slug = "", productsPage = "", error } = props;

  const storeName = useSelector((data) => data.app.storeName);

  const cartId = useSelector((data: any) => data.app.cartId[storeName]);
  const dispatch = useDispatch();
  const { data, error: venderApiError } = useSwr(`storefront/${slug}/vendors/`);
  const { data: shopList, error: shopListApiError } = useSwr(`storefront/${slug}/categories/`);

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

  return (
    <Container maxWidth={false} disableGutters {...props}>
      <header>
        <NextSeo {...seo} />
        <Navbar
          storefrontName={storefrontName}
          slug={slug}
          productsPage={productsPage}
          data={data}
          shopList={shopList}
          loading={venderApiError && !data}
          shopListLoading={shopListApiError && !shopList}
        />
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
