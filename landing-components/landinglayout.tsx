import React, { Suspense } from "react";
import { Container, ContainerProps, Box } from "@mui/material";
import Header from "./header/header";
import Footer from "./footer/footer";
import { NextSeo, NextSeoProps } from "next-seo";

interface LayoutProps extends ContainerProps {
  seo?: NextSeoProps;
}
export function Loading() {
  return <p>Loading...</p>;
}

const Layout = (props: LayoutProps) => {
  const { children, seo } = props;

  return (
    <Container maxWidth={false} disableGutters {...props}>
      <NextSeo {...seo} />
      <Suspense fallback={<Loading />}>
        <Header />
        {children}
        <Footer />
      </Suspense>
    </Container>
  );
};

export function CustomContainer(props: ContainerProps) {
  const { children } = props;

  return (
    <Container maxWidth={"xl"} disableGutters {...props}>
      <Box className="mainChild">{children}</Box>
    </Container>
  );
}
export default Layout;
