import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";

const StickyHeader = () => {
  return (
    <Grid>
      <Image
        src="/header-logo.svg"
        alt="header-logo"
        height={85}
        width={260}
        style={{ background: "red", position: "absolute" }}
      />
    </Grid>
  );
};

export default StickyHeader;
