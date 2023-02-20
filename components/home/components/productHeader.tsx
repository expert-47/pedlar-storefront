import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import useSwr from "swr";

import { useMediaQuery, useTheme } from "@mui/material";
import { CustomGrid } from "components/layout";
import DropdownButton from "components/navbar/components/dropdownButton";
import { ResponsiveHeader } from "./responsiveHeader";

const ProductHeader = (props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));
  let slug = props?.slug;

  const { data } = useSwr(`storefront/${slug}/vendors/`);
  const { data: shopList } = useSwr(`storefront/${slug}/categories/`);
  const { brandsFilterList, shopFilterList } = props;
  const [brandFilterData, setBrandFilterData] = useState([]);
  const [shopFilterData, setShopFilterData] = useState([]);

  useEffect(() => {
    let selectedData = data?.data?.map((item) => {
      let findIndex = brandsFilterList.findIndex((i) => i.productVendor == item.vendor);
      return {
        item: item.vendor,
        checked: findIndex != -1,
      };
    });
    setBrandFilterData(selectedData);
  }, [data, brandsFilterList]);

  useEffect(() => {
    let selectedData = shopList?.data?.map((item) => {
      let findIndex = shopFilterList.findIndex((i) => i.productType == item.productType);
      return {
        item: item.productType,
        checked: findIndex != -1,
      };
    });
    setShopFilterData(selectedData);
  }, [shopList, shopFilterList]);

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
              setFiltersValue={props?.setFiltersValue}
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
              setFiltersValue={props?.setFiltersValue}
              filterList={brandFilterData}
              setFilterData={setBrandFilterData}
              filterCount={brandsFilterList?.length || 0}
            />
            <DropdownButton
              type={"Category"}
              setFiltersValue={props?.setFiltersValue}
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
