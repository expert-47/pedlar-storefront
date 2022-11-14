import { Container, ContainerProps } from "@mui/material";
import Footer from "components/footer/footer";
import Navbar from "components/navbar";
import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";
interface LayoutProps extends ContainerProps {
  seo?: NextSeoProps;
}
export default function Layout(props: LayoutProps) {
  const { children, seo } = props;
  return (
    <Container maxWidth={false} disableGutters {...props}>
      <header>
        <NextSeo {...seo} />
        <Navbar />
      </header>
      <main
       style={{paddingTop: "115px"}}
      >
        {children}
      </main>
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
