import React from "react";
import { Grid, GridProps, useTheme } from "@mui/material";
import CardComponent from "./cardComponent";
import styles from "styles/home";
import { CustomGrid } from "components/layout";
import { useStyles } from "styles/home";


const GridGallery = (props: GridProps) => {
  const theme = useTheme();
  const { classes, cx } = useStyles();

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
        sm={11.5}
        md={10.5}
        lg={12}
        alignItems={{ xs: "center", md: "center", lg: "center" }}
        justifyContent={{ xs: "center", md: "center", lg: "center" }}
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
          lg={5.9}
          justifyContent={{ xs: "flex-start", md: "flex-start", lg: "flex-start" }}
          paddingX={{ xs: theme.spacing(5), md: theme.spacing(10), lg: theme.spacing(20) }}
          paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
        >
          <img src="/grid-img1.png" alt="Grid-img1" className={cx(classes.galleryImg1)} />
          <CardComponent name={"Low Classic"} type={"Green Polyester Blazer"} price="$365"/>
        </Grid>
        <Grid
          container
          item
          gap={24}
          xs={12}
          sm={12}
          md={5.9}
          lg={6}
          justifyContent={{ xs: "center", md: "center", lg: "center" }}
          // paddingX={{ xs: theme.spacing(0), md: theme.spacing(5), lg: theme.spacing(40) }}
        >
          <Grid item xs={5.5} lg={5.5}>
            <img src="/grid-img2.png" alt="Grid-img2" className={cx(classes.galleryImg2)}></img>
            <CardComponent name={"Veja X Marni"} type={"35s"} price="$320"/>
          </Grid>
          <Grid item xs={5.5} lg={5.5}>
            <img src="/grid-img3.png" alt="Grid-img3" className={cx(classes.galleryImg2)}></img>
            <CardComponent name={"Sisley Paris"} type={"Eye Contour Mask"} price="$42"/>
          </Grid>
          <Grid item xs={5.5} lg={5.5}>
            <img src="/grid-img4.png" alt="Grid-img4" className={cx(classes.galleryImg2)}></img>
            <CardComponent name={"Nike"} type={"High-Waisted Fleece Open-Hem Pant"} price="$975"/>
          </Grid>
          <Grid item xs={5.5} lg={5.5}>
            <img src="/grid-img5.png" alt="Grid-img5" className={cx(classes.galleryImg2)}></img>
            <CardComponent name={"Matteau"} type={"Drop Earring Collection"} price="$450"/>
          </Grid>
        </Grid>
      </Grid>
    </CustomGrid>
  );
};

export default GridGallery;
