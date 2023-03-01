import { Box, Checkbox, Collapse, Divider, Grid, Typography, useTheme } from "@mui/material";
import LoadingButton from "components/LoadingButton";
import React, { useState } from "react";
import styles from "styles/navbar";

interface Props {
  setFiltersValue: any;
  brandFilterData: any;
  setBrandFilterData: any;
  shopFilterData: any;
  anchorEl: any;
  loading: boolean;
  setShopFilterData: any;
}

const FilterHeader = ({
  setFiltersValue,
  brandFilterData,
  setBrandFilterData,
  shopFilterData,
  anchorEl,
  loading,
  setShopFilterData,
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
      <Collapse in={anchorEl} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Divider sx={styles.menuDivider} />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexFlow: " wrap",
          }}
        >
          {brandFilterData?.map((item: any, index: any) => {
            return (
              <Box
                onClick={() => {
                  onClickBrand(item);
                }}
                sx={{
                  width: "50%",
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
                key={"checkBox-" + index}
              >
                <Checkbox
                  style={{ padding: "2px" }}
                  sx={styles.menuCheck}
                  checked={item.checked || false}
                  onChange={(e) => onClickBrand(item)}
                />
                <Typography sx={styles.menuCheck} style={{ paddingTop: "2px" }}>
                  {item.item}
                </Typography>
              </Box>
            );
          })}
        </Box>
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
      </Collapse>

      {/* {For Catagory} */}
      <Collapse in={anchorEl}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexFlow: " wrap",
          }}
        >
          {shopFilterData?.map((item: any, index: any) => {
            return (
              <Box
                onClick={() => {
                  onClickShop(item);
                }}
                sx={{
                  width: "50%",
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
                key={"checkBoxx" + index}
              >
                <Box>
                  <Checkbox style={{ padding: "2px" }} sx={styles.menuCheck} checked={item.checked || false} />
                </Box>
                <Box>
                  <Typography sx={styles.menuCheck} style={{ paddingTop: "2px" }}>
                    {item.item}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
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
      </Collapse>
    </>
  );
};

export default FilterHeader;
