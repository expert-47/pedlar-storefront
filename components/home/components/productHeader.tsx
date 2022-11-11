import React from "react";
import { Grid, Typography } from "@mui/material";

import { useMediaQuery, useTheme } from "@mui/material";
import { CustomGrid } from "components/layout";
import DropdownButton from "components/navbar/components/dropdownButton";
import { brandList, shopList } from "components/navbar/data";
import { ResponsiveHeader } from "./responsiveHeader";

const ProductHeader = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));

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
        <Typography variant="h1" gutterBottom color="#1C1B1F">
          All Products
        </Typography>

        {!isMatch ? (
          <>
            <ResponsiveHeader data={brandList} />
          </>
        ) : (
          <Grid columns={{ xs: 12, md: 12 }} item style={{ display: "flex" }}>
            {" "}
            <DropdownButton type={"Brands"} data={brandList} />
            <DropdownButton type={"Category"} data={shopList} />
          </Grid>
        )}
      </Grid>
    </CustomGrid>
  );
};

export default ProductHeader;
