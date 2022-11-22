import React from "react";
import { Container, ContainerProps } from "@mui/material";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { NextSeoProps } from "next-seo";

interface LayoutProps extends ContainerProps {
  seo?: NextSeoProps;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
