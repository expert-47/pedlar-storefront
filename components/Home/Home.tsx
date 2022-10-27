import React from "react";
import BannerImg from "./Components/BannerImg";
import ProductListing from "./Components/ProductListing";
import BrandListing from "./Components/BrandListing";
import { Grid } from "@mui/material";
import Bar from "./Components/Bar";
import GridGallery from "./Components/GridGallery";
import { CustomGrid } from "components/Layout/layout";
import BrandTitles from "./Components/BrandTitles";
import BaseFooter from "../Footer/BaseFooter";
import ReverseGallery from "./Components/ReverseGallery";
import Divider from "@mui/material/Divider";

export const Home = () => {
  return (
    <Grid>
      <BannerImg />
      <Divider style={{ marginTop: "50px", height: "1px" }} />
      <Bar />
      <ProductListing />
      <CustomGrid>
        <GridGallery />
        <BrandListing />
      </CustomGrid>
      <Divider style={{ marginTop: "100px", height: "1px" }} />
      <CustomGrid>
        <BaseFooter />
      </CustomGrid>
      <Divider style={{ marginTop: "40px", height: "1px" }} />
    </Grid>
  );
};
