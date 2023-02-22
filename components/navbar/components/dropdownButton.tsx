import { useState, useEffect } from "react";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "styles/navbar";
import { Button, Grid, useTheme, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import ListItemText from "@mui/material/ListItemText";
// import ProductHeader from "components/home/components/productHeader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

interface Props {
  type: string;
  data: string[];
  setFiltersValue: any;
  filterList: [];
  filterCount: Number;

  setFilterData: (data: [], type: string, apply: boolean) => void;
}

const DropdownButton = (props: Props) => {
  const theme = useTheme();
  const { type = "Brands", data, setFiltersValue, filterList, setFilterData, filterCount } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const applyFiltersMethod = () => {
    let data = filterList.filter((item) => item.checked);
    setFiltersValue(
      data.map((item) => item.item),
      type,
      true,
    );
    handleClose();
  };

  const resetFilters = () => {
    setFiltersValue(
      filterList.map((item) => item.item),
      type,
      false,
    );
    handleClose();
  };
  const getSelectedValues = (item) => {
    let index = filterList.findIndex((data) => data.item == item.item);

    let data = {
      item: item.item,
      checked: item.checked ? false : true,
    };
    let list = [...filterList];
    list[index] = data;

    setFilterData(list);
  };

  return (
    <>
      <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Button sx={styles.tabButton} onClick={handleClick}>
          <Box style={{ borderBottom: openMenu ? "solid #1C1B1F 1px" : "none" }}>{type}</Box>
          {filterCount != 0 ? <Box sx={{ color: "purple" }}>{`(${filterCount})`}</Box> : null}
          {openMenu ? <ExpandLess sx={styles.tabIcon} /> : <ExpandMore sx={styles.tabIcon} />}
        </Button>
      </Grid>
      <Menu
        PaperProps={{
          elevation: 1,
          sx: {
            mt: { md: 10.5, sm: 44 },

            l: 0,

            borderRadius: 0,

            pb: 0,
            left: "0 !important",

            width: "100% ",
            maxWidth: "100% ",
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
            <Grid
              container
              display={"flex"}
              // justifyContent={"center"}
              // alignItems={"center"}
              // paddingTop={"10px"}
              paddingX={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
            >
              <Box sx={styles.menuInnerContainer}>
                {filterList?.map((item, index) => {
                  return (
                    <FormControlLabel
                      sx={{
                        width: 180,
                      }}
                      control={
                        <Checkbox
                          checked={item.checked || false}
                          sx={styles.menuCheck}
                          onClick={(e) => getSelectedValues(item)}
                        />
                      }
                      label={item?.item || ""}
                    />
                  );
                })}
              </Box>
            </Grid>
            {filterList?.length > 0 && (
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
                  <Button variant="contained" sx={styles.menuButton} onClick={applyFiltersMethod}>
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
                    Reset Filters
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Menu>
    </>
  );
};

export default DropdownButton;
