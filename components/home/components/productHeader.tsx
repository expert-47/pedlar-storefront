import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { CustomGrid } from "components/layout";
import DropdownButton from "components/navbar/components/dropdownButton";
import { ResponsiveHeader } from "./responsiveHeader";

const ProductHeader = (props: any) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));

  const {
    brandsFilterList,
    shopFilterList,
    filterData = {
      shopList: [],
      vender: [],
    },
  } = props;
  const [brandFilterData, setBrandFilterData] = useState([]);
  const [shopFilterData, setShopFilterData] = useState([]);
  const [openBrand, toggleBrandDropDown] = useState(null);
  const [openShop, toggleShopDropDown] = useState(null);
  // const [filterListLoading, setFilterListLoading] = useState(false);
  const handleOpenBrandDropDown = (event: any) => {
    {
      toggleBrandDropDown(event?.currentTarget || true);
    }
  };

  const handleOpenShopDropDown = (event: any) => {
    {
      toggleShopDropDown(event.currentTarget);
    }
  };
  const handleClose = () => {
    toggleBrandDropDown(null);
    toggleShopDropDown(null);
  };

  useEffect(() => {
    if (!props.loading) {
      handleClose();
    }
  }, [props.loading]);

  useEffect(() => {
    if (filterData?.shopList?.length == 0 || filterData?.vender?.length == 0 || !isMatch) {
      getVenders();
    }
  }, [brandsFilterList, shopFilterList]);

  const getSelectedVenders = async (filterArray: any) => {
    try {
      if (JSON.stringify(filterArray.length) == JSON.stringify(shopFilterList.length)) {
        handleClose();
      }
      props.setFiltersValue(brandsFilterList, filterArray, "Shop", filterArray.length == 0 ? false : true);
    } catch (error) {}
  };
  const getSelectedCategories = async (filterArray: any) => {
    try {
      if (JSON.stringify(filterArray.length) == JSON.stringify(brandsFilterList.length)) {
        handleClose();
      }

      props.setFiltersValue(filterArray, shopFilterList, "Brands", filterArray.length == 0 ? false : true);
    } catch (error) {}
  };

  const getVenders = async () => {};
  useEffect(() => {
    if (Boolean(openBrand)) {
      return;
    }
    const selectedData = filterData.vender?.map((item: any) => {
      const findIndex = brandsFilterList.findIndex((i: any) => i.productVendor == item.label);
      return {
        ...item,
        checked: findIndex != -1,
      };
    });
    setBrandFilterData(selectedData);
  }, [filterData.vender, brandsFilterList, openBrand]);

  useEffect(() => {
    if (Boolean(openShop)) {
      return;
    }
    const selectedData = filterData?.shopList?.map((item: any) => {
      const findIndex = shopFilterList.findIndex((i: any) => i.productType == item.label);
      return {
        ...item,
        checked: findIndex != -1,
      };
    });
    setShopFilterData(selectedData);
  }, [filterData?.shopList, shopFilterList, openShop]);

  const applyFilter = (data: any, type: any, apply: any) => {
    if (type == "Brands") {
      getSelectedCategories(apply ? data : []);
    } else {
      getSelectedVenders(apply ? data : []);
    }
  };

  return (
    <CustomGrid>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isMatch ? "row" : "column",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h1" color="#1C1B1F">
          All Products
        </Typography>

        {!isMatch ? (
          <>
            <ResponsiveHeader
              type={"Brands"}
              setFiltersValue={applyFilter}
              slug={props?.slug}
              brandFilterData={brandFilterData}
              setBrandFilterData={setBrandFilterData}
              shopFilterData={shopFilterData}
              setShopFilterData={setShopFilterData}
              shopCount={shopFilterList?.length || 0}
              brandCount={brandsFilterList?.length || 0}
              handleOpenBrandDropDown={handleOpenBrandDropDown}
              handleOpenShopDropDown={handleOpenShopDropDown}
              openBrand={Boolean(openBrand)}
              openShop={Boolean(openShop)}
              handleClose={handleClose}
              toggleBrandDropDown={toggleBrandDropDown}
              toggleShopDropDown={toggleShopDropDown}
              loading={props?.loading}
            />
          </>
        ) : (
          <Grid gap={3} columns={{ xs: 12, md: 12 }} item style={{ display: "flex" }}>
            <DropdownButton
              type={"Brands"}
              setFiltersValue={applyFilter}
              filterList={brandFilterData}
              setFilterData={setBrandFilterData}
              filterCount={brandsFilterList?.length || 0}
              openMenu={Boolean(openBrand)}
              handleClick={handleOpenBrandDropDown}
              handleClose={handleClose}
              anchorEl={openBrand}
              pageLoading={false}
              loading={props?.loading}
            />
            <DropdownButton
              type={"Category"}
              setFiltersValue={applyFilter}
              filterList={shopFilterData}
              setFilterData={setShopFilterData}
              filterCount={shopFilterList?.length || 0}
              openMenu={Boolean(openShop)}
              handleClose={handleClose}
              handleClick={handleOpenShopDropDown}
              anchorEl={openShop}
              loading={props?.loading}
              pageLoading={false}
            />
          </Grid>
        )}
      </Grid>
      {props.loading && !Boolean(openShop) && !Boolean(openBrand) && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      )}
    </CustomGrid>
  );
};

export default ProductHeader;
