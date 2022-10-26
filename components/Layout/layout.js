import { Container } from "@mui/material";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <Container maxWidth={false} disableGutters>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}

export function CustomContainer({ children }) {
  return (
    <Container maxWidth={false} disableGutters>
      {children}
    </Container>
  );
}

export function CustomGrid({ children }) {
  return (
    <Container maxWidth={"lg"} disableGutters>
      {children}
    </Container>
  );
}
