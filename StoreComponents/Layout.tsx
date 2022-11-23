import React from "react";
import { Container, ContainerProps } from "@mui/material";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface LayoutProps extends ContainerProps {}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
