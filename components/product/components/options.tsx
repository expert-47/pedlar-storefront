import React from "react";
import { Grid, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "styles/product";

function Options(props: any) {
  const { newAdditionData, setColorValue, setSizeValue, size, color } = props;

  const handleChange1 = (event: any) => {
    setSizeValue(event.target.value);
  };
  const handleChange2 = (event: any) => {
    setColorValue(event.target.value);
  };

  return (
    <Grid container item xs={12} sm={12} md={12} lg={12} gap={22} sx={styles.container}>
      {size != "Default Title" && newAdditionData?.options[0]?.values?.length > 0 && (
        <Grid item xs={12} sm={12} md={5.6} lg={6.5}>
          <Typography sx={styles.typography}>{newAdditionData?.options[0]?.name}</Typography>
          <FormControl sx={{ width: "100%" }}>
            <Select
              value={size}
              onChange={handleChange1}
              displayEmpty
              sx={styles.select}
              IconComponent={KeyboardArrowDownIcon}
            >
              {newAdditionData?.options[0]?.values?.map((val: any, index: any) => {
                return (
                  <MenuItem key={index} value={val}>
                    {val}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      )}

      {newAdditionData?.options[1]?.values?.length > 0 && (
        <Grid item xs={12} sm={12} md={5.6} lg={5.6}>
          <Typography sx={styles.typography}>{newAdditionData?.options[1]?.name}</Typography>
          <FormControl sx={{ width: "100%" }}>
            <Select
              value={color}
              displayEmpty
              sx={styles.select}
              onChange={handleChange2}
              IconComponent={KeyboardArrowDownIcon}
            >
              {newAdditionData?.options[1]?.values?.map((val: any, index: any) => {
                return (
                  <MenuItem key={index} value={val}>
                    {val}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      )}
    </Grid>
  );
}

export default Options;
