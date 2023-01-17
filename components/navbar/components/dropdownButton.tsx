import { useState } from "react";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "styles/navbar";
import { Button, Grid, useTheme, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  type: string;
  data: string[];
  setFiltersValue: any;
}
let BrandsNames: string[] = [];
let VendorsNames: string[] = [];

const DropdownButton = (props: Props) => {
  const theme = useTheme();
  const { type = "Brands", data, setFiltersValue } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const [filterCheckBoxes, setFilterCheckBoxes] = useState({});

  const openMenu = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const applyFiltersMethod = () => {
    setFiltersValue(BrandsNames, VendorsNames, true);
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
  };

  return (
    <>
      <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Button sx={styles.tabButton} onClick={handleClick}>
          <Box style={{ borderBottom: openMenu ? "solid #1C1B1F 1px" : "none" }}>{type}</Box>
          {openMenu ? <ExpandLess sx={styles.tabIcon} /> : <ExpandMore sx={styles.tabIcon} />}
        </Button>
      </Grid>
      <Menu
        PaperProps={{
          elevation: 1,
          sx: {
            mt: 10.5,
            left: 0,
            l: 0,
            maxWidth: "unset",
            borderRadius: 0,
          },
        }}
        sx={styles.menu}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
      >
        <Grid container justifyContent={"center"} sx={styles.menuContainer}>
          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sm={9}
            lg={9}
            md={9}
            paddingX={{ xs: theme.spacing(10), md: theme.spacing(0), lg: theme.spacing(40) }}
            paddingY={{ md: theme.spacing(10), lg: theme.spacing(10) }}
          >
            {/* <ProductHeader /> */}
            <Grid
              container
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              paddingTop={"10px"}
              paddingX={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
            >
              <Box sx={styles.menuInnerContainer} style={{ display: "flex" }}>
                {data.map((item, index) => {
                  const checkboxKey: string = "checkbox-" + index;
                  // debugger;
                  return (
                    <MenuItem key={index}>
                      <Checkbox
                        // id={"checkbox"+index}

                        checked={filterCheckBoxes[checkboxKey] || false}
                        sx={styles.menuCheck}
                        onChange={(e) => getCheckBoxValue(e, item)}
                        onClick={() => {
                          setFilterCheckBoxes({ ...filterCheckBoxes, [checkboxKey]: !filterCheckBoxes[checkboxKey] });
                        }}
                      />
                      <ListItemText>{item}</ListItemText>
                    </MenuItem>
                  );
                })}
              </Box>
            </Grid>
            <Grid
              container
              item
              display={"flex"}
              justifyContent={"center"}
              paddingY={{ xs: theme.spacing(10), lg: theme.spacing(10) }}
            >
              <Grid
                xs={7}
                sm={7}
                md={2.5}
                lg={2.5}
                paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
                paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
              >
                <Button variant="contained" sx={styles.menuButton} onClick={() => applyFiltersMethod()}>
                  Apply
                </Button>
              </Grid>
              <Grid
                xs={7}
                sm={7}
                md={2.5}
                lg={2.5}
                paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
                paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
              >
                <Button variant="outlined" sx={styles.outlinedButton} type="reset" onClick={() => resetFilters()}>
                  Reset filters
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Menu>
    </>
  );
};

export default DropdownButton;
