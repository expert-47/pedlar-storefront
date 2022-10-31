import { Container, ContainerProps } from "@mui/material";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar";
import React from "react";

export default function Layout(props: ContainerProps) {
  const { children } = props;
  return (
    <Container maxWidth={false} disableGutters {...props}>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
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
