import React from "react";
import { Container, ContainerProps, Box } from "@mui/material";
import Header from "./header/header";
import Footer from "./footer/footer";
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
    <Container
      maxWidth={"xl"}
      sx={{
        paddingX: { sx: 0, sm: 5, md: 30, lg: 45, xl: 0 },
      }}
      disableGutters
      {...props}
    >
      {children}
    </Container>
  );
}
export default Layout;
