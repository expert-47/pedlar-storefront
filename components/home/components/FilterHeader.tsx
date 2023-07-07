import { Box, Checkbox, Collapse, Divider, Grid, Typography, useTheme } from "@mui/material";
import LoadingButton from "components/LoadingButton";
import React, { useState } from "react";
import styles from "styles/navbar";

interface Props {
  setFiltersValue: any;
  filterData: any;
  setFilterData: any;

  anchorEl: any;
  loading: boolean;

  type: string;
}

const FilterHeader = ({ setFiltersValue, filterData, setFilterData, filterCounts, anchorEl, loading, type }: Props) => {
  const theme = useTheme();
  const [clickType, setClick] = useState<"apply" | "reset">("apply");
  const applyFiltersMethod = () => {
    setClick("apply");
    const data = filterData.filter((item: any) => item.checked);

    setFiltersValue(
      data.map((item: any) => JSON.parse(item.input)),
      type,
      true,
    );
  };
  const resetFilters = () => {
    setClick("reset");
    setFiltersValue([], type, false);
  };
  const onClickBrand = (item: any) => {
    const index = filterData.findIndex((data: any) => data.label == item.label);

    const data = {
      ...item,
      checked: item.checked ? false : true,
    };
    const list = [...filterData];
    list[index] = data;

    setFilterData(list);
  };
  const enableFliterBrand = filterData?.some((item: any) => item?.checked);

  return (
    <Collapse in={anchorEl} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Divider sx={styles.menuDivider} />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexFlow: " wrap",
        }}
      >
        {filterData?.map((item: any, index: any) => {
          if (item.count != 0) {
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
                  onChange={() => onClickBrand(item)}
                />
                <Typography sx={styles.menuCheck} style={{ paddingTop: "2px" }}>
                  {item.label}
                </Typography>
              </Box>
            );
          }
        })}
      </Box>
      {filterData?.length > 0 && (
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
              disabled={!enableFliterBrand && filterCounts == 0}
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
  );
};

export default FilterHeader;
