import { Checkbox, Collapse, Divider, Grid, Typography, useTheme } from "@mui/material";
import LoadingButton from "components/LoadingButton";
import React, { useState } from "react";
import styles from "styles/navbar";

interface Props {
  setFiltersValue: any;
  brandFilterData: any;
  setBrandFilterData: any;
  shopFilterData: any;
  openBrand: any;
  loading: boolean;
  openShop: any;
  setShopFilterData: any;
}

const FilterHeader = ({
  setFiltersValue,
  brandFilterData,
  setBrandFilterData,
  shopFilterData,
  openBrand,
  loading,
  setShopFilterData,
  openShop,
}: Props) => {
  const theme = useTheme();
  const [clickType, setClick] = useState<"apply" | "reset">("apply");
  const applyFiltersMethod = (type: any) => {
    setClick("apply");
    let data =
      type == "Brands"
        ? brandFilterData.filter((item: any) => item.checked)
        : shopFilterData.filter((item: any) => item.checked);
    setFiltersValue(
      data.map((item: any) => item.item),
      type,
      true,
    );
  };
  const resetFilters = (type: any) => {
    setClick("reset");
    setFiltersValue([], type, false);
  };
  const onClickBrand = (item: any) => {
    let index = brandFilterData.findIndex((data: any) => data.item == item.item);

    let data = {
      item: item.item,
      checked: item.checked ? false : true,
    };
    let list = [...brandFilterData];
    list[index] = data;

    setBrandFilterData(list);
  };
  const enableFliterBrand = brandFilterData?.some((item: any) => item?.checked);

  const onClickShop = (item: any) => {
    let index = shopFilterData.findIndex((data: any) => data.item == item.item);

    let data = {
      item: item.item,
      checked: item.checked ? false : true,
    };
    let list = [...shopFilterData];
    list[index] = data;

    setShopFilterData(list);
  };
  const enableFliterCatagory = shopFilterData?.some((item: any) => item?.checked);

  return (
    <>
      {/* {For Brand} */}
      <Collapse in={openBrand} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Divider sx={styles.menuDivider} />
        <Grid
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          container
          item
          xs={12}
          sm={12}
          md={12}
        >
          <Grid gap={20} sx={styles.menuInnerContainer}>
            {brandFilterData?.map((item: any, index: any) => {
              return (
                <Grid
                  onClick={() => {
                    onClickBrand(item);
                  }}
                  style={{ display: "flex" }}
                  key={"checkBox-" + index}
                >
                  <Grid>
                    <Checkbox
                      style={{ padding: "2px" }}
                      sx={styles.menuCheck}
                      checked={item.checked || false}
                      onChange={(e) => onClickBrand(item)}
                    />
                  </Grid>
                  <Grid>
                    <Typography sx={styles.menuCheck} style={{ paddingTop: "2px" }}>
                      {item.item}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          {brandFilterData?.length > 0 && (
            <>
              <Grid
                xs={12}
                sm={12}
                md={2}
                lg={2}
                paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
                paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
              >
                <LoadingButton
                  variant="contained"
                  loading={loading && clickType == "apply"}
                  sx={styles.menuButton}
                  onClick={() => applyFiltersMethod("Brands")}
                  disabled={!enableFliterBrand}
                >
                  Apply
                </LoadingButton>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={2}
                lg={2}
                paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
                paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
              >
                <LoadingButton
                  loading={loading && clickType == "reset"}
                  variant="outlined"
                  sx={styles.outlinedButton}
                  onClick={() => resetFilters("Brands")}
                >
                  Reset filters
                </LoadingButton>
              </Grid>
            </>
          )}
        </Grid>
      </Collapse>

      {/* {For Catagory} */}
      <Collapse in={openShop}>
        <Divider sx={styles.menuDivider} />
        <Grid
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          container
          item
          xs={12}
          sm={12}
          md={12}
        >
          <Grid gap={20} sx={styles.menuInnerContainer}>
            {shopFilterData?.map((item: any, index: any) => {
              return (
                <Grid
                  onClick={() => {
                    onClickShop(item);
                  }}
                  style={{ display: "flex" }}
                  key={"checkBoxx" + index}
                >
                  <Grid>
                    <Checkbox style={{ padding: "2px" }} sx={styles.menuCheck} checked={item.checked || false} />
                  </Grid>
                  <Grid>
                    <Typography sx={styles.menuCheck} style={{ paddingTop: "2px" }}>
                      {item.item}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          {shopFilterData?.length > 0 && (
            <>
              <Grid
                xs={12}
                sm={12}
                md={2}
                lg={2}
                paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
                paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
              >
                <LoadingButton
                  variant="contained"
                  sx={styles.menuButton}
                  onClick={() => applyFiltersMethod("Category")}
                  disabled={!enableFliterCatagory}
                  loading={loading && clickType == "apply"}
                >
                  Apply
                </LoadingButton>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={2}
                lg={2}
                paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
                paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
              >
                <LoadingButton
                  loading={loading && clickType == "reset"}
                  variant="outlined"
                  sx={styles.outlinedButton}
                  onClick={() => resetFilters("Category")}
                >
                  Reset filters
                </LoadingButton>
              </Grid>
            </>
          )}
        </Grid>
      </Collapse>
    </>
  );
};

export default FilterHeader;
