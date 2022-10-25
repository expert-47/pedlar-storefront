import { Container } from "@mui/material";
import React from "react";

export default function Layout({ children,  }: { children: React.ReactNode }) {
  return (
    <Container maxWidth={false} disableGutters>
      <main>{children}</main>

    </Container>
  );
}
