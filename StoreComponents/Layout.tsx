import React from "react";
import { Container, ContainerProps } from "@mui/material";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { NextSeo, NextSeoProps } from "next-seo";

interface LayoutProps extends ContainerProps {
  seo?: NextSeoProps;
}

const Layout = (props: LayoutProps) => {
  const { children, seo } = props;

  return (
    <Container maxWidth={false} disableGutters {...props}>
      <NextSeo {...seo} />
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export function CustomContainer(props: ContainerProps) {
  const { children } = props;

  return (
    <Container maxWidth={"lg"} disableGutters {...props}>
      {children}
    </Container>
  );
}
export default Layout;
