import React from "react";
import { Grid, GridProps, useTheme } from "@mui/material";
import { CustomGrid } from "components/layout";

const BrandTitles = (props: GridProps) => {
  const theme = useTheme();
  return (
    <CustomGrid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        item
        xs={11.5}
        sm={11.5}
        md={11.5}
        lg={12}
        gap={10}
        alignItems={{ xs: "center", sm: "center", md: "center", lg: "center" }}
        justifyContent={{ xs: "center",sm: "center", md: "center", lg: "center" }}
        paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
        paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
        {...props}
      >
        <Grid
          item
          xs={5.5}
          sm={2}
          md={2}
          lg={2.2}
          style={{
            border: "1px solid rgba(0,0,0,0.4)",
            textAlign: "center",
          }}
        >
          <img  src="/ganni.png" alt="bordergrid"></img>
        </Grid>
        <Grid item xs={5.5} sm={2} md={2} lg={2.2} style={{ border: "1px solid rgba(0,0,0,0.4)", textAlign: "center" }}>
          <img style={{ height: "100%", width: "100%" }} src="/1969.png" alt="bordergrid"></img>
        </Grid>
        <Grid item xs={5.5} sm={2} md={2} lg={2.2} style={{ border: "1px solid rgba(0,0,0,0.4)", textAlign: "center" }}>
          <img style={{ height: "100%", width: "100%" }} src="/hunza.png" alt="bordergrid"></img>
        </Grid>
        <Grid item xs={5.5} sm={2} md={2} lg={2.2} style={{ border: "1px solid rgba(0,0,0,0.4)", textAlign: "center" }}>
          <img style={{ height: "100%", width: "100%" }} src="/low-classic.png" alt="bordergrid"></img>
        </Grid>
        <Grid item xs={5.5} sm={2} md={2} lg={2.2} style={{ border: "1px solid rgba(0,0,0,0.4)", textAlign: "center" }}>
          <img style={{ height: "100%", width: "100%" }} src="/peach-den.png" alt="bordergrid"></img>
        </Grid>
      </Grid>
    </CustomGrid>
   
  );
};

export default BrandTitles;
