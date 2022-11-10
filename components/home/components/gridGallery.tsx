import React from "react";
import { Grid, GridProps, useTheme } from "@mui/material";
import CardComponent from "./cardComponent";
import { CustomGrid } from "components/layout";

const GridGallery = (props: GridProps) => {
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
        sm={11.5}
        md={11.3}
        lg={11.5}
        columnSpacing={10}
        paddingX={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
        paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
        {...props}
      >
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          // sx={{ backgroundColor: "red" }}
          justifyContent={{ xs: "center", md: "flex-start", lg: "flex-start" }}
        >
          <img src="/grid-img1.png" alt="Grid-img1" width="100%" height="89%" />
          <CardComponent name={"Low Classic"} type={"Green Polyester Blazer"} price="$365" />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={5.9}
          lg={6}
          columnSpacing={10}
          // sx={{ backgroundColor: "blue" }}
          justifyContent={{ xs: "center", md: "flex-end", lg: "flex-end" }}
        >
          <Grid item xs={5.5} lg={6}>
            <img src="/grid-img2.png" alt="Grid-img2" width="100%"></img>
            <CardComponent name={"Veja X Marni"} type={"35s"} price="$320" />
          </Grid>
          <Grid item xs={5.5} lg={6}>
            <img src="/grid-img3.png" alt="Grid-img3" width="100%"></img>
            <CardComponent name={"Sisley Paris"} type={"Eye Contour Mask"} price="$42" />
          </Grid>
          <Grid item xs={5.5} lg={6}>
            <img src="/grid-img4.png" alt="Grid-img4" width="100%"></img>
            <CardComponent name={"Nike"} type={"High-Waisted Fleece Open"} price="$975" />
          </Grid>
          <Grid item xs={5.5} lg={6}>
            <img src="/grid-img5.png" alt="Grid-img5" width="100%"></img>
            <CardComponent name={"Matteau"} type={"Drop Earring Collection"} price="$450" />
          </Grid>
        </Grid>
      </Grid>
    </CustomGrid>
  );
};

export default GridGallery;
