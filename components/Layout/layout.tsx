import { Container, ContainerProps } from "@mui/material";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar";
import React from "react";

export default function Layout(props: ContainerProps) {
  const { children } = props;
  return (
    <Container maxWidth={false} disableGutters {...props}>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}

export function CustomContainer(props: ContainerProps) {
  const { children } = props;

  return (
    <Container  disableGutters {...props}>
      {children}
    </Container>
  );
}

export function CustomGrid(props: ContainerProps) {
  const { children } = props;
  return (
    <Container  disableGutters {...props}>
      {children}
    </Container>
  );
}
