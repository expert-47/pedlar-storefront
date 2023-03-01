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
  // const [clickType, setClick] = useState<"apply" | "reset">("apply");

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

  // const applyFiltersMethod = (type: any) => {
  //   setClick("apply");
  //   let data =
  //     type == "Brands"
  //       ? brandFilterData.filter((item: any) => item.checked)
  //       : shopFilterData.filter((item: any) => item.checked);
  //   setFiltersValue(
  //     data.map((item: any) => item.item),
  //     type,
  //     true,
  //   );
  // };

  // const resetFilters = (type: any) => {
  //   setClick("reset");
  //   setFiltersValue([], type, false);
  // };

  // const onClickBrand = (item: any) => {
  //   let index = brandFilterData.findIndex((data: any) => data.item == item.item);

  //   let data = {
  //     item: item.item,
  //     checked: item.checked ? false : true,
  //   };
  //   let list = [...brandFilterData];
  //   list[index] = data;

  //   setBrandFilterData(list);
  // };
  // const onClickShop = (item: any) => {
  //   let index = shopFilterData.findIndex((data: any) => data.item == item.item);

  //   let data = {
  //     item: item.item,
  //     checked: item.checked ? false : true,
  //   };
  //   let list = [...shopFilterData];
  //   list[index] = data;

  //   setShopFilterData(list);
  // };
  // const enableFliterBrand = brandFilterData.some((item: any) => item?.checked);
  // const enableFliterCatagory = shopFilterData.some((item: any) => item?.checked);

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
        setBrandFilterData={setBrandFilterData}
        brandFilterData={brandFilterData}
        loading={loading}
      />
      <FilterHeader
        anchorEl={openShop}
        setFiltersValue={setFiltersValue}
        setShopFilterData={setShopFilterData}
        shopFilterData={shopFilterData}
        loading={loading}
      />
    </React.Fragment>
  );
};
