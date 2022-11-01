import React from "react";
import { Grid, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ProductHeader = () => {
  return (
    <Grid
      container
      sm={10}
      md={12}
      style={{ marginTop: "100px", display: "flex", alignItems: "center", padding: "10px" }}
    >
      <Grid item sm={12} md={8} lg={8}>
        <Typography variant="h4" gutterBottom color="#1C1B1F">
          All Products
        </Typography>
      </Grid>

      <Grid item sm={12} md={4} lg={4} style={{ display: "flex", marginBottom: "17px" }}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-standard-label">Brands</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            //   value={Brands}
            //   onChange={handleChange}
            label="Brands"
          >
            <MenuItem value={10}>Brands</MenuItem>
            <MenuItem value={20}>Brands</MenuItem>
            <MenuItem value={30}>Brands</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            //   value={Category}
            //   onChange={handleChange}
            label="Category"
          >
            <MenuItem value={10}>Category</MenuItem>
            <MenuItem value={20}>Category</MenuItem>
            <MenuItem value={30}>Category</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default ProductHeader;
