import React from "react";
import { Grid, Typography } from "@mui/material";
import useSwr from "swr";

import { useMediaQuery, useTheme } from "@mui/material";
import { CustomGrid } from "components/layout";
import DropdownButton from "components/navbar/components/dropdownButton";
import { ResponsiveHeader } from "./responsiveHeader";

const ProductHeader = (props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));
  const { data } = useSwr("https://pedlar-dev.ts.r.appspot.com/storefront/412809756899/vendors/");
  const { data: shopList } = useSwr("https://pedlar-dev.ts.r.appspot.com/storefront/412809756899/categories/");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
              setFiltersValue={props?.setFiltersValue}
              data={data ? data.data.map((item) => item.vendor) : []}
            />
          </>
        ) : (
          <Grid gap={3} columns={{ xs: 12, md: 12 }} item style={{ display: "flex" }}>
            <DropdownButton
              type={"Brands"}
              setFiltersValue={props?.setFiltersValue}
              data={data ? data.data.map((item) => item.vendor) : []}
            />
            <DropdownButton
              type={"Category"}
              setFiltersValue={props?.setFiltersValue}
              data={shopList ? shopList.data.map((item) => item.productType) : []}
            />
          </Grid>
        )}
      </Grid>
    </CustomGrid>
  );
};

export default ProductHeader;
