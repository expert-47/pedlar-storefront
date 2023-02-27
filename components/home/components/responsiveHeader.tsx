import { Grid, Typography, Button, useTheme, Checkbox, Divider, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

import styles from "styles/navbar";

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
}

export const ResponsiveHeader = (props: Props) => {
  const theme = useTheme();
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
  } = props;
  const route = useRouter();
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

  const applyFiltersMethod = (type: any) => {
    let data =
      type == "Brands"
        ? brandFilterData.filter((item: any) => item.checked)
        : shopFilterData.filter((item: any) => item.checked);
    setFiltersValue(
      data.map((item: any) => item.item),
      type,
      true,
    );
    handleClose();
  };

  const resetFilters = (type: any) => {
    setFiltersValue([], type, false);
    handleClose();
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
  const enableFliterBrand = brandFilterData.some((item: any) => item?.checked);
  const enableFliterCatagory = shopFilterData.some((item: any) => item?.checked);

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
                <Button
                  variant="contained"
                  sx={styles.menuButton}
                  onClick={() => applyFiltersMethod("Brands")}
                  disabled={!enableFliterBrand}
                >
                  Apply
                </Button>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={2}
                lg={2}
                paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
                paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
              >
                <Link
                  as={`/${route?.query?.slug}/products`}
                  href={{
                    pathname: `/${route?.query?.slug}/products`,
                  }}
                >
                  <Button variant="outlined" sx={styles.outlinedButton} onClick={() => resetFilters("Brands")}>
                    Reset filters
                  </Button>
                </Link>
              </Grid>
            </>
          )}
        </Grid>
      </Collapse>
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
                <Button
                  variant="contained"
                  sx={styles.menuButton}
                  onClick={() => applyFiltersMethod("Category")}
                  disabled={!enableFliterCatagory}
                >
                  Apply
                </Button>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={2}
                lg={2}
                paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
                paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
              >
                <Link
                  as={`/${route?.query?.slug}/products`}
                  href={{
                    pathname: `/${route?.query?.slug}/products`,
                  }}
                >
                  <Button variant="outlined" sx={styles.outlinedButton} onClick={() => resetFilters("Category")}>
                    Reset filters
                  </Button>
                </Link>
              </Grid>
            </>
          )}
        </Grid>
      </Collapse>
    </React.Fragment>
  );
};
