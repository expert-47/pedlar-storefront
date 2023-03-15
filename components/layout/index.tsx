import { Container, ContainerProps } from "@mui/material";
import Footer from "components/footer/footer";
import Navbar from "components/navbar";
import React, { useEffect } from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import ApiError from "components/PageError";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, clearStore } from "store/slice/appSlice";
import useSwr from "swr";
import { getCartProducts, getFilteredProductsData, getFliterData } from "api/graphql/grapgql";
import { useQuery } from "@apollo/client";
interface LayoutProps extends ContainerProps {
  seo?: NextSeoProps;
  storefrontName: string;
  slug: string;
  productsPage: boolean;
  error?: boolean;
}
export default function Layout(props: LayoutProps) {
  const { children, seo, storefrontName = "", slug = "", productsPage = "", error, collectionId } = props;

  const storeName = useSelector((data) => data.app.storeName);

  const cartId = useSelector((data: any) => data.app.cartId[storeName]);
  const dispatch = useDispatch();
  const { data: fliterData } = useQuery(getFliterData, {
    variables: {
      collectionId: `gid://shopify/Collection/${collectionId}`,
      query: [{ available: true }],
    },
  });

  let shopList = fliterData?.collection?.products?.filters?.find((data) => data.label === "Product type");
  let data = fliterData?.collection?.products?.filters?.find((data) => data.label === "Brand");
  console.log("shopList", shopList, collectionId);

  //

  // const { data, error: venderApiError } = useSwr(`storefront/${slug}/vendors/`);
  // const { data: shopList, error: shopListApiError } = useSwr(`storefront/${slug}/categories/`);

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
  console.log("myTestingsss", data);

  return (
    <Container maxWidth={false} disableGutters {...props}>
      <header>
        <NextSeo {...seo} />
        <Navbar
          storefrontName={storefrontName}
          slug={slug}
          productsPage={productsPage}
          data={data?.values || []}
          shopList={shopList?.values || []}
          // loading={venderApiError && !data}
          // shopListLoading={shopListApiError && !shopList}
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
