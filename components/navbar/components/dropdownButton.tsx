import { useState } from "react";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "styles/navbar";
import { Button, Grid, useTheme, Checkbox, Divider } from "@mui/material";
import { Box } from "@mui/system";
import Text from "components/customText";
import ListItemText from "@mui/material/ListItemText";
import PedlarButton from "./pedlarButton";

interface Props {
  type: string;
  data: string[];
}
const DropdownMenu = (props: Props) => {
  const theme = useTheme();
  const { type = "Brands", data } = props;
  const [brands, setBrands] = useState(false);
  const [category, setCategory] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const showBrands = () => {
    setBrands((prv) => !prv);
  };
  const showCategory = () => {
    setCategory((prv) => !prv);
  };

  return (
    <>
      <Button sx={styles.tabButton} onClick={handleClick} endIcon={openMenu ? <ExpandLess /> : <ExpandMore />}>
        {type}
      </Button>
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
        <Grid container sx={styles.menuContainer}>
          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingX={{ xs: theme.spacing(10), md: theme.spacing(0), lg: theme.spacing(40) }}
            paddingY={{ md: theme.spacing(10), lg: theme.spacing(10) }}
          >
            <Grid item sm={3} lg={7}>
              <Text fontSize="26px" sx={styles.menuText1}>
                All Products
              </Text>
            </Grid>
            <Grid item sm={4} lg={3} display={"flex"} justifyContent={"space-evenly"}>
              <PedlarButton handleClick={showBrands} buttonText="Brands" open={brands} />
              <PedlarButton handleClick={showCategory} buttonText="Category" open={category} />
            </Grid>

            <Divider sx={styles.menuDivider} />

            <Grid
              container
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              paddingX={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
            >
              <Box sx={styles.menuInnerContainer}>
                {data.map((item) => (
                  <MenuItem>
                    <Checkbox sx={styles.menuCheck} />
                    <ListItemText>{item}</ListItemText>
                  </MenuItem>
                ))}
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
                md={2}
                lg={2}
                paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
                paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
              >
                <Button variant="contained" sx={styles.menuButton}>
                  Apply
                </Button>
              </Grid>
              <Grid
                xs={7}
                sm={7}
                md={2}
                lg={2}
                paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
                paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
              >
                <Button variant="outlined" sx={styles.outlinedButton}>
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

export default DropdownMenu;
