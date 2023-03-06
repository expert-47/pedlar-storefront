import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { CustomGrid } from "components/layout";
import DropdownButton from "components/navbar/components/dropdownButton";
import { ResponsiveHeader } from "./responsiveHeader";
import apiClient from "api/restApi/client";
import { useRouter } from "next/router";

const ProductHeader = (props: any) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));
  let slug = props?.slug;
  const route = useRouter();
  const { brandsFilterList, shopFilterList } = props;
  const [brandFilterData, setBrandFilterData] = useState([]);
  const [shopFilterData, setShopFilterData] = useState([]);
  const [openBrand, toggleBrandDropDown] = useState(null);
  const [openShop, toggleShopDropDown] = useState(null);
  const [filterListLoading, setFilterListLoading] = useState(false);
  const handleOpenBrandDropDown = (event: any) => {
    {
      brandFilterData.length > 0 && toggleBrandDropDown(event?.currentTarget || true);
    }
  };
  const handleOpenShopDropDown = (event: any) => {
    {
      shopFilterData?.length > 0 && toggleShopDropDown(event.currentTarget);
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
  const [filterData, setFilterData] = useState({
    shopList: [],
    vender: [],
  });
  useEffect(() => {
    if (filterData?.shopList?.length == 0 || filterData?.vender?.length == 0 || !isMatch) {
      getVenders();
    }
  }, [brandsFilterList, shopFilterList]);

  const getSelectedVenders = async (filterArray: any) => {
    try {
      props?.setLoading(true);

      let venders = {};
      if (filterArray.length == 0) {
        venders = await apiClient.get(`storefront/${slug}/vendors/`);
      } else {
        venders = await apiClient.get(`storefront/${slug}/vendors/`, {
          params: {
            category: filterArray.join(","),
          },
        });
      }
      let data = venders?.data?.data || [];
      const filterData = brandsFilterList.filter((item: any) => {
        let findIndex = data.findIndex((i: any) => item.productVendor == i.vendor);
        if (findIndex != -1) {
          return item;
        }
      });

      props.setFiltersValue(
        filterData.map((item: any) => item.productVendor),
        filterArray,
        "Shop",
        true,
      );
      setFilterData((prv) => {
        return {
          shopList: prv.shopList,
          vender: venders?.data?.data || [],
        };
      });
    } catch (error) {
      props?.setLoading(false);
    }
  };
  const getSelectedCategories = async (filterArray: any) => {
    let shop = {};
    try {
      props.setLoading(true);
      if (filterArray.length == 0) {
        shop = await apiClient.get(`storefront/${slug}/categories/`);
      } else {
        shop = await apiClient.get(`storefront/${slug}/categories/`, {
          params: {
            vendor: filterArray.join(","),
          },
        });
      }
      let data = shop?.data?.data || [];
      const filterData = shopFilterList.filter((item: any) => {
        let findIndex = data.findIndex((i: any) => item.productType == i.productType);
        if (findIndex != -1) {
          return item;
        }
      });

      props.setFiltersValue(
        filterArray,
        filterData.map((item: any) => item.productType),
        "Brands",
        true,
      );

      setFilterData((prv) => {
        return {
          shopList: shop?.data?.data || [],
          vender: prv.vender,
        };
      });
    } catch (error) {
      props.setLoading(false);
    }
  };

  const getVenders = async () => {
    try {
      setFilterListLoading(true);

      let venders = await apiClient.get(`storefront/${slug}/vendors/`, {
        params: {
          category: shopFilterList.map((item) => item.productType).join(","),
        },
      });

      let shop = await apiClient.get(`storefront/${slug}/categories/`, {
        params: {
          vendor: brandsFilterList.map((item) => item.productVendor).join(","),
        },
      });

      setFilterData({
        vender: venders?.data?.data || [],
        shopList: shop?.data?.data || [],
      });
    } catch (error) {
    } finally {
      setFilterListLoading(false);
    }
  };
  useEffect(() => {
    if (Boolean(openBrand)) {
      return;
    }
    let selectedData = filterData.vender?.map((item: any) => {
      let findIndex = brandsFilterList.findIndex((i: any) => i.productVendor == item.vendor);
      return {
        item: item.vendor,
        checked: findIndex != -1,
      };
    });
    setBrandFilterData(selectedData);
  }, [filterData.vender, brandsFilterList, openBrand]);

  useEffect(() => {
    if (Boolean(openShop)) {
      return;
    }
    let selectedData = filterData?.shopList?.map((item: any) => {
      let findIndex = shopFilterList.findIndex((i: any) => i.productType == item.productType);
      return {
        item: item.productType,
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
    if (!apply) {
      props?.setFiltersValue(data, type, apply);
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
              pageLoading={filterListLoading}
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
              pageLoading={filterListLoading}
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
            paddingTop: 30,
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      )}
    </CustomGrid>
  );
};

export default ProductHeader;
