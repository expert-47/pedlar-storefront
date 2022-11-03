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



const ProductHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid
      container
      sm={10}
      md={11.3}
      lg={11.3}
      direction={largeScreen?"row":"column"}

      style={{ display: "flex", justifyContent: "space-between", padding: "10px"}}
    >
      <Grid  item>
        <Typography variant="h1" gutterBottom color="#1C1B1F">
          All Products
        </Typography>
      </Grid>

      <Grid item style={{ display: "flex"}}>
        {/* <div>
        <DropdownMenu type={"Brands"} />
        <DropdownMenu type={"Category"} /></div> */}


        <div>

          <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            sx={styles.inputLabel}
            onClick={handleClick}
          >
            Brands
            <KeyboardArrowDownIcon />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        <div>

          <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            sx={styles.inputLabel}
            onClick={handleClick}
          >
            Category
            <KeyboardArrowDownIcon />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        {/* <FormControl size="small" variant="standard" sx={{ minWidth: 80 }}>
          <InputLabel style={styles.inputLabel}>Brands</InputLabel>
          <Select
            disableUnderline={true}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            IconComponent= {KeyboardArrowDownIcon}
            label="Brands"
          >
            <MenuItem value="">Brands</MenuItem>
            <MenuItem value={10}>Brands</MenuItem>
            <MenuItem value={20}>Brands</MenuItem>
            <MenuItem value={30}>Brands</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ minWidth: 90 }}>
          <InputLabel style={styles.inputLabel} id="demo-simple-select-standard-label">Category</InputLabel>
          <Select
            disableUnderline={true}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Category"
            IconComponent= {KeyboardArrowDownIcon}

          >
            <MenuItem value={10}>Category</MenuItem>
            <MenuItem value={20}>Category</MenuItem>
            <MenuItem value={30}>Category</MenuItem>
          </Select>
        </FormControl> */}
      </Grid>
    </Grid>
  );
};

export default ProductHeader;
