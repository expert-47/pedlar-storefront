import React from "react";
import { Container, ContainerProps } from "@mui/material";
import Header from "./header/header";
import Footer from "./footer/footer";
import { NextSeo, NextSeoProps } from "next-seo";
// import Pedlarchatsupport from "../landing-components/pedlar-chat-support/pedlarchatsupport";

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
      {/* <Pedlarchatsupport /> */}
      <Footer />
    </Container>
  );
};

export function CustomContainer(props: ContainerProps) {
  const { children } = props;

  return (
    <Container maxWidth={"xl"} disableGutters {...props}>
      {children}
    </Container>
  );
}
export default Layout;
