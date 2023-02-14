import {
  Drawer,
  List,
  ListItemText,
  Grid,
  Typography,
  InputBase,
  ListItem,
  MenuItem,
  ListItemButton,
  Button,
  useTheme,
  Checkbox,
  Divider,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useSwr from "swr";

import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/system";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Marquee from "react-fast-marquee";
import styles from "styles/navbar";

interface Props {
  type: string;
  data: string[];
  setFiltersValue: any;
}
let BrandsNames: string[] = [];
let VendorsNames: string[] = [];
export const ResponsiveHeader = (props: Props) => {
  const theme = useTheme();
  const { type = "Brands", data, setFiltersValue, slug } = props;

  const { data: shopList } = useSwr(`https://pedlar-dev.ts.r.appspot.com/storefront/${slug}/categories/`);
  const route = useRouter();
  const paperStyle = {
    color: "black",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  };

  const onClickDrawer = () => {
    toggleDrawer(!openDrawer);
  };

  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [filterCheckBoxes, setFilterCheckBoxes] = React.useState({});
  const [filterCheckBoxesCategory, setFilterCheckBoxesCategory] = React.useState({});

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: any) => {
    setOpen(!open);
    setOpens(false);
    setAnchorEl(event.currentTarget);
  };
  const handleClicks = (event: any) => {
    setOpens(!opens);
    setOpen(false);
    setAnchorEl(event.currentTarget);
  };

  const openMenu = Boolean(anchorEl);
  // const handleClick = (event: any) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  //   setOpens(false);
  // };

  const getCheckBoxValue = (e: any, text: string) => {
    if (e.target.checked) {
      if (type === "Brands" && !BrandsNames?.includes(text)) {
        BrandsNames.push(text);
      }
      if (!(type === "Brands") && !VendorsNames?.includes(text)) {
        VendorsNames.push(text);
      }
    }
    if (!e.target.checked) {
      if (type === "Brands" && BrandsNames?.includes(text)) {
        BrandsNames = BrandsNames.filter(function (item) {
          return item !== text;
        });
      }
      if (!(type === "Brands") && VendorsNames?.includes(text)) {
        VendorsNames = VendorsNames.filter(function (item) {
          return item !== text;
        });
      }
    }
  };

  const getCheckBoxValueCategories = (e: any, text: string) => {
    if (e.target.checked) {
      VendorsNames.push(text);
    }
    if (!e.target.checked) {
      VendorsNames = VendorsNames.filter(function (item) {
        return item !== text;
      });
    }
  };

  const applyFiltersMethod = () => {
    setFiltersValue(BrandsNames, VendorsNames, true);
    setOpens(false);
    setOpen(false);
    setAnchorEl(null);
  };

  const resetFilters = () => {
    if (type === "Brands") {
      BrandsNames = [];
    } else {
      VendorsNames = [];
    }
    const obj = {};
    data.forEach((_item, index) => {
      obj["checkbox-" + index] = false;
    });
    setFilterCheckBoxes(obj);
    setFiltersValue(BrandsNames, VendorsNames, true);

    setOpen(false);
  };
  const resetFilterOfCategory = () => {
    VendorsNames = [];

    const obj = {};
    shopList.data.forEach((_item, index) => {
      obj["checkbox-" + index] = false;
    });
    setFilterCheckBoxesCategory(obj);
    setFiltersValue(BrandsNames, VendorsNames, true);
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
            {data.map((item, index) => {
              const checkboxKey: string = "checkbox-" + index;
              return (
                <Grid style={{ display: "flex" }} key={"checkBox-" + index}>
                  <Grid>
                    <Checkbox
                      style={{ padding: "2px" }}
                      sx={styles.menuCheck}
                      checked={filterCheckBoxes[checkboxKey] || false}
                      onChange={(e) => getCheckBoxValue(e, item)}
                      onClick={() => {
                        setFilterCheckBoxes({ ...filterCheckBoxes, [checkboxKey]: !filterCheckBoxes[checkboxKey] });
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography sx={styles.menuCheck} style={{ paddingTop: "2px" }}>
                      {item}
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
            <Button variant="contained" sx={styles.menuButton} onClick={() => applyFiltersMethod()}>
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
              <Button variant="outlined" sx={styles.outlinedButton} onClick={() => resetFilters()}>
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
            {(shopList ? shopList.data.map((item) => item.productType) : []).map((item, index) => {
              const checkboxKey: string = "checkbox-" + index;
              return (
                <Grid style={{ display: "flex" }} key={"checkBoxx" + index}>
                  <Grid>
                    <Checkbox
                      style={{ padding: "2px" }}
                      sx={styles.menuCheck}
                      checked={filterCheckBoxesCategory[checkboxKey] || false}
                      onChange={(e) => getCheckBoxValueCategories(e, item)}
                      onClick={() => {
                        setFilterCheckBoxesCategory({
                          ...filterCheckBoxesCategory,
                          [checkboxKey]: !filterCheckBoxesCategory[checkboxKey],
                        });
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography sx={styles.menuCheck} style={{ paddingTop: "2px" }}>
                      {item}
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
            <Button variant="contained" sx={styles.menuButton} onClick={() => applyFiltersMethod()}>
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
              <Button variant="outlined" sx={styles.outlinedButton} onClick={() => resetFilterOfCategory()}>
                Reset filters
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Collapse>
    </React.Fragment>
  );
};
