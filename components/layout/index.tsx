import { Container, ContainerProps } from "@mui/material";
import Footer from "components/footer/footer";
import Navbar from "components/navbar";
import React, { useEffect } from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import ApiError from "components/PageError";
import { useDispatch, useSelector } from "react-redux";
import { clearStore } from "store/slice/appSlice";
import useSwr from "swr";
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
  const isNavShow = useSelector((state) => state.app.showNavbar);
  const dispatch = useDispatch();
  const { data, error: venderApiError } = useSwr(`storefront/${slug}/vendors/`);
  const { data: shopList, error: shopListApiError } = useSwr(`storefront/${slug}/categories/`);

  useEffect(() => {
    if (storeName != slug) {
      dispatch(clearStore(slug));
    }
  }, []);

  console.log("isNavShowisNavShow", isNavShow);

  return (
    <Container maxWidth={false} disableGutters {...props}>
      <header>
        <NextSeo {...seo} />
        {/* 
        {isNavShow === "undefined" ||
          (isNavShow && ( */}
        <Navbar
          storefrontName={storefrontName}
          slug={slug}
          productsPage={productsPage}
          data={data}
          shopList={shopList}
          loading={venderApiError && !data}
          shopListLoading={shopListApiError && !shopList}
        />
        {/* ))} */}
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
