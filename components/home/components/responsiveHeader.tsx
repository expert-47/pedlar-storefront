import { Grid, Button, Box } from "@mui/material";
import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FilterHeader from "./FilterHeader";

interface Props {
  type: string;
  data: string[];
  setFiltersValue: any;
  brandFilterData: any;
  setBrandFilterData: any;
  shopFilterData: any;
  setShopFilterData: any;
  brandCount: any;
  shopCount: any;
  openBrand: any;
  openShop: any;
  handleClose: any;
  handleOpenShopDropDown: any;
  handleOpenBrandDropDown: any;
  toggleBrandDropDown: any;
  toggleShopDropDown: any;
  loading: boolean;
}

export const ResponsiveHeader = (props: Props) => {
  const {
    setFiltersValue,
    brandFilterData,
    setBrandFilterData,
    shopFilterData,
    setShopFilterData,
    brandCount,
    shopCount,
    openBrand,
    openShop,
    handleClose,
    handleOpenShopDropDown,
    handleOpenBrandDropDown,
    toggleBrandDropDown,
    toggleShopDropDown,
    loading,
  } = props;

  const onClickBrands = (event: any) => {
    if (!openBrand) {
      handleOpenBrandDropDown(event);
      toggleShopDropDown(null);
      return;
    }
    handleClose();
  };
  const onClickShopButton = (event: any) => {
    if (!openShop) {
      handleOpenShopDropDown(event);
      toggleBrandDropDown(null);
      return;
    }
    handleClose();
  };

  return (
    <React.Fragment>
      <Grid columns={{ xs: 12, md: 12 }} item style={{ display: "flex", paddingTop: "12px" }}>
        <Grid>
          <Button
            onClick={onClickBrands}
            style={{ fontSize: "16px", color: "#1C1B1Fe3", fontWeight: "600", padding: "unset" }}
          >
            <Grid style={{ borderBottom: openBrand ? "solid black 1.5px" : "none", textTransform: "none" }}>
              Brands
            </Grid>
            {brandCount != 0 ? <Box sx={{ color: "purple" }}>{`(${brandCount})`}</Box> : null}
            {openBrand ? (
              <ExpandLess style={{ transform: "scale(0.8)" }} />
            ) : (
              <ExpandMore style={{ transform: "scale(0.8)" }} />
            )}
          </Button>
        </Grid>

        <Grid>
          <Button
            onClick={onClickShopButton}
            style={{ fontSize: "16px", color: "#1C1B1Fe3", fontWeight: "600", padding: "unset" }}
          >
            <Grid style={{ borderBottom: openShop ? "solid black 1.5px" : "none", textTransform: "none" }}>
              Category
            </Grid>
            {shopCount != 0 ? <Box sx={{ color: "purple" }}>{`(${shopCount})`}</Box> : null}

            {openShop ? (
              <ExpandLess style={{ transform: "scale(0.8)" }} />
            ) : (
              <ExpandMore style={{ transform: "scale(0.8)" }} />
            )}
          </Button>
        </Grid>
      </Grid>
      <FilterHeader
        anchorEl={openBrand}
        setFiltersValue={setFiltersValue}
        setFilterData={setBrandFilterData}
        filterData={brandFilterData}
        loading={loading}
        type={"Brands"}
        filterCounts={brandCount}
      />
      <FilterHeader
        type={"Category"}
        anchorEl={openShop}
        setFiltersValue={setFiltersValue}
        setFilterData={setShopFilterData}
        filterData={shopFilterData}
        loading={loading}
        filterCounts={shopCount}
      />
    </React.Fragment>
  );
};
