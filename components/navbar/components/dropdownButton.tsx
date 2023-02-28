import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import styles from "styles/navbar";
import { Button, Grid, useTheme, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import LoadingButton from "components/LoadingButton";
import { useState } from "react";

interface Props {
  type: string;
  data: string[];
  setFiltersValue: any;
  filterList: [];
  filterCount: Number;
  openMenu: boolean;
  handleClose: () => void;
  handleClick: (e: any) => void;
  anchorEl: any;
  setFilterData: (data: [], type: string, apply: boolean) => void;
  loading: boolean;
}

const DropdownButton = (props: Props) => {
  const theme = useTheme();
  const {
    type = "Brands",
    setFiltersValue,
    filterList,
    setFilterData,
    filterCount,
    handleClick,
    handleClose,
    openMenu,
    anchorEl,
    loading,
  } = props;
  const [clickType, setClick] = useState<"apply" | "reset">("apply");
  const applyFiltersMethod = () => {
    setClick("reset");
    let data = filterList.filter((item: any) => item.checked);
    setFiltersValue(
      data.map((item: any) => item.item),
      type,
      true,
    );
    setClick("apply");
    // handleClose();
  };

  const resetFilters = () => {
    setClick("reset");
    setFiltersValue(
      filterList.map((item: any) => item.item),
      type,
      false,
    );

    // handleClose();
  };
  const getSelectedValues = (item: any) => {
    let index = filterList.findIndex((data: any) => data.item == item.item);

    let data = {
      item: item.item,
      checked: item.checked ? false : true,
    };
    let list = [...filterList];
    list[index] = data;

    setFilterData(list);
  };
  const enableFliter = filterList.some((item: any) => item?.checked);

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
          elevation: 0,
          sx: {
            mt: -27,
            l: 0,
            borderRadius: 0,
            pb: 0,
            left: "0 !important",
            width: "100% ",
            maxWidth: "100% ",
            justifyContent: "center",
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
              paddingX={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
            >
              <Box sx={styles.menuInnerContainer}>
                {filterList?.map((item: any) => {
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
                  <LoadingButton
                    variant="contained"
                    sx={styles.menuButton}
                    onClick={applyFiltersMethod}
                    disabled={!enableFliter}
                    loading={clickType == "apply" && loading}
                  >
                    Apply
                  </LoadingButton>
                </Grid>
                <Grid
                  xs={7}
                  sm={7}
                  md={2.5}
                  lg={2.5}
                  paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
                  paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
                >
                  <LoadingButton
                    loading={clickType == "reset" && loading}
                    variant="outlined"
                    sx={styles.outlinedButton}
                    type="reset"
                    onClick={() => resetFilters()}
                  >
                    Reset Filters
                  </LoadingButton>
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
