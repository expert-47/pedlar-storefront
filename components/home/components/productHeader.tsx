import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { CustomGrid } from "components/layout";
import DropdownButton from "components/navbar/components/dropdownButton";
import { ResponsiveHeader } from "./responsiveHeader";
import apiClient from "api/restApi/client";

const ProductHeader = (props: any) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));
  let slug = props?.slug;
  const { brandsFilterList, shopFilterList } = props;
  const [brandFilterData, setBrandFilterData] = useState([]);
  const [shopFilterData, setShopFilterData] = useState([]);
  const [openBrand, toggleBrandDropDown] = useState(null);
  const [openShop, toggleShopDropDown] = useState(null);

  const handleOpenBrandDropDown = (event: any) => {
    toggleBrandDropDown(event?.currentTarget || true);
  };
  const handleOpenShopDropDown = (event: any) => {
    toggleShopDropDown(event.currentTarget);
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
    if (filterData?.shopList?.length == 0 || filterData?.vender?.length == 0) {
      getVenders();
    }
  }, []);

  const getSelectedCategories = async (filterArray: any) => {
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
        "Brands",
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
  const getSelectedVenders = async (filterArray: any) => {
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
        "Shop",
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
    let venders = await apiClient.get(`storefront/${slug}/vendors/`);
    let shop = await apiClient.get(`storefront/${slug}/categories/`);

    setFilterData({
      vender: venders?.data?.data || [],
      shopList: shop?.data?.data || [],
    });
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
      getSelectedVenders(apply ? data : []);
    } else {
      getSelectedCategories(apply ? data : []);
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
            />
          </Grid>
        )}
      </Grid>
    </CustomGrid>
  );
};

export default ProductHeader;
