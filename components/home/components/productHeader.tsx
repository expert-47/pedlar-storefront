import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import useSwr from "swr";

import { useMediaQuery, useTheme } from "@mui/material";
import { CustomGrid } from "components/layout";
import DropdownButton from "components/navbar/components/dropdownButton";
import { ResponsiveHeader } from "./responsiveHeader";
import apiClient from "api/restApi/client";

const ProductHeader = (props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));
  let slug = props?.slug;
  const { brandsFilterList, shopFilterList } = props;
  const [brandFilterData, setBrandFilterData] = useState([]);
  const [shopFilterData, setShopFilterData] = useState([]);
  const [filterData, setFilterData] = useState({
    shopList: [],
    vender: [],
  });
  useEffect(() => {
    if (filterData?.shopList?.length == 0 || filterData?.vender?.length == 0) {
      getVenders();
    }
  }, []);

  const getSelectedCategories = async (filterArray) => {
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
    const filterData = brandsFilterList.filter((item) => {
      let findIndex = data.findIndex((i) => item.productVendor == i.vendor);
      if (findIndex != -1) {
        return item;
      }
    });

    props.setFiltersValue(
      filterData.map((item) => item.productVendor),
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
  };
  const getSelectedVenders = async (filterArray) => {
    let shop = {};

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
    const filterData = shopFilterList.filter((item) => {
      let findIndex = data.findIndex((i) => item.productType == i.productType);
      if (findIndex != -1) {
        return item;
      }
    });

    props.setFiltersValue(
      filterArray,
      filterData.map((item) => item.productType),
      "Shop",
      true,
    );

    setFilterData((prv) => {
      return {
        shopList: shop?.data?.data || [],
        vender: prv.vender,
      };
    });
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
    let selectedData = filterData.vender?.map((item) => {
      let findIndex = brandsFilterList.findIndex((i) => i.productVendor == item.vendor);
      return {
        item: item.vendor,
        checked: findIndex != -1,
      };
    });
    setBrandFilterData(selectedData);
  }, [filterData.vender, brandsFilterList]);

  useEffect(() => {
    let selectedData = filterData?.shopList?.map((item) => {
      let findIndex = shopFilterList.findIndex((i) => i.productType == item.productType);
      return {
        item: item.productType,
        checked: findIndex != -1,
      };
    });
    setShopFilterData(selectedData);
  }, [filterData?.shopList, shopFilterList]);

  const applyFilter = (data, type, apply) => {
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
            />
            <DropdownButton
              type={"Category"}
              setFiltersValue={applyFilter}
              filterList={shopFilterData}
              setFilterData={setShopFilterData}
              filterCount={shopFilterList?.length || 0}
            />
          </Grid>
        )}
      </Grid>
    </CustomGrid>
  );
};

export default ProductHeader;
