import React from "react";
import { Grid, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "styles/products";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import { Button, useMediaQuery, useTheme } from "@mui/material";
import { CustomGrid } from "components/layout";
import DropdownButton from "components/navbar/components/dropdownButton"
import { brandList, shopList } from "components/navbar/data";
import { ResponsiveHeader } from "./responsiveHeader";



const ProductHeader = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <CustomGrid>
      <Grid
        container
        paddingX={{ xs: theme.spacing(20), sm: theme.spacing(16), md: theme.spacing(20), lg: theme.spacing(12) }}

        style={{ display: "flex", justifyContent: "space-between",  flexDirection: isMatch ?"row": "column" }}
      >

        <Typography variant="h1" gutterBottom color="#1C1B1F">
          All Products
        </Typography>



        {!isMatch ? (
          <>
            <ResponsiveHeader data={brandList} />
          </>
        ) : (
          <Grid columns={{ xs: 12, md: 12 }}
            item style={{ display: "flex" }}
          >                <DropdownButton type={"Brands"} data={brandList} />
            <DropdownButton type={"Category"} data={shopList} />
          </Grid>

        )}

      </Grid>
    </CustomGrid>
  );
};

export default ProductHeader;
