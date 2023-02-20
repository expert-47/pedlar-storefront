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
}

export const ResponsiveHeader = (props: Props) => {
  const theme = useTheme();

  const {
    data,
    setFiltersValue,
    slug,
    shopList,
    brandFilterData,
    setBrandFilterData,
    shopFilterData,
    setShopFilterData,
    brandCount,
    shopCount,
  } = props;

  const route = useRouter();

  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);

  const handleClick = (event: any) => {
    setOpen(!open);
    setOpens(false);
  };
  const handleClicks = (event: any) => {
    setOpens(!opens);
    setOpen(false);
  };

  const applyFiltersMethod = (type) => {
    let data =
      type == "Brands" ? brandFilterData.filter((item) => item.checked) : shopFilterData.filter((item) => item.checked);
    setFiltersValue(
      data.map((item) => item.item),
      type,
      true,
    );

    setOpens(false);
    setOpen(false);
  };

  const resetFilters = (type) => {
    setFiltersValue([], type, false);
    setOpens(false);
    setOpen(false);
  };

  const onClickBrand = (item) => {
    let index = brandFilterData.findIndex((data) => data.item == item.item);

    let data = {
      item: item.item,
      checked: item.checked ? false : true,
    };
    let list = [...brandFilterData];
    list[index] = data;

    setBrandFilterData(list);
  };
  const onClickShop = (item) => {
    let index = shopFilterData.findIndex((data) => data.item == item.item);

    let data = {
      item: item.item,
      checked: item.checked ? false : true,
    };
    let list = [...shopFilterData];
    list[index] = data;

    setShopFilterData(list);
  };
  return (
    <React.Fragment>
      <Grid columns={{ xs: 12, md: 12 }} item style={{ display: "flex", paddingTop: "12px" }}>
        <Grid>
          <Button
            onClick={handleClick}
            style={{ fontSize: "16px", color: "#1C1B1Fe3", fontWeight: "600", padding: "unset" }}
          >
            <Grid style={{ borderBottom: open ? "solid black 1.5px" : "none", textTransform: "none" }}>Brands</Grid>
            {brandCount != 0 ? <Box sx={{ color: "purple" }}>{`(${brandCount})`}</Box> : null}
            {open ? (
              <ExpandLess style={{ transform: "scale(0.8)" }} />
            ) : (
              <ExpandMore style={{ transform: "scale(0.8)" }} />
            )}
          </Button>
        </Grid>

        <Grid>
          <Button
            onClick={handleClicks}
            style={{ fontSize: "16px", color: "#1C1B1Fe3", fontWeight: "600", padding: "unset" }}
          >
            <Grid style={{ borderBottom: opens ? "solid black 1.5px" : "none", textTransform: "none" }}>Category</Grid>
            {shopCount != 0 ? <Box sx={{ color: "purple" }}>{`(${shopCount})`}</Box> : null}

            {opens ? (
              <ExpandLess style={{ transform: "scale(0.8)" }} />
            ) : (
              <ExpandMore style={{ transform: "scale(0.8)" }} />
            )}
          </Button>
        </Grid>
      </Grid>
      <Collapse in={open} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
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
            {brandFilterData?.map((item, index) => {
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
          <Grid
            xs={12}
            sm={12}
            md={2}
            lg={2}
            paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
            paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
          >
            <Button variant="contained" sx={styles.menuButton} onClick={() => applyFiltersMethod("Brands")}>
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
        </Grid>
      </Collapse>
      <Collapse in={opens}>
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
            {shopFilterData?.map((item, index) => {
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
          <Grid
            xs={12}
            sm={12}
            md={2}
            lg={2}
            paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
            paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
          >
            <Button variant="contained" sx={styles.menuButton} onClick={() => applyFiltersMethod("Category")}>
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
        </Grid>
      </Collapse>
    </React.Fragment>
  );
};
