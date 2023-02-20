import { Container, ContainerProps } from "@mui/material";
import Footer from "components/footer/footer";
import Navbar from "components/navbar";
import React, { useEffect } from "react";
import { NextSeo, NextSeoProps } from "next-seo";

import ApiError from "components/PageError";
import { shopList } from "../navbar/data";
import { useDispatch, useSelector } from "react-redux";
import { clearStore } from "store/slice/appSlice";
interface LayoutProps extends ContainerProps {
  seo?: NextSeoProps;
  storefrontName: string;
  slug: string;
  productsPage: boolean;
  error?: boolean;
}
export default function Layout(props: LayoutProps) {
  const {
    children,
    seo,
    storefrontName = "",
    slug = "",
    productsPage = "",
    error,
    data,
    shopList,
    loading,
    shopListLoading,
  } = props;

  const storeName = useSelector((data) => data.app.storeName);
  const dispatch = useDispatch();

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
          loading={loading}
          shopListLoading={shopListLoading}
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
