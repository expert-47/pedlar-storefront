import React from "react";
import { Grid, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "styles/product";

function Options(props: any) {
  const { newAdditionData, priceFilter, setFilter, onSelectedItem } = props;

  const handleChange = (value: any, type: string, index) => {
    let data = { name: newAdditionData?.options[index].name, value: value };
    let filter = [...priceFilter];
    filter[index] = data;
    setFilter(filter);
    onSelectedItem(filter);
  };

  return (
    <Grid container item xs={12} sm={12} md={12} lg={12} gap={22} sx={styles.container}>
      {newAdditionData?.options[0]?.name == "Title" && newAdditionData?.options[0]?.values[0] == "Default Title"
        ? null
        : newAdditionData?.options?.map((item, index) => (
            <Grid item xs={12} sm={10} md={6} lg={6}>
              <Typography sx={styles.typography}>{item.name}</Typography>
              <FormControl sx={{ width: "100%" }}>
                <Select
                  value={priceFilter[index].value}
                  onChange={(event) => {
                    handleChange(event.target.value, item.name, index);
                  }}
                  displayEmpty
                  sx={styles.select}
                  IconComponent={item?.values?.length === 1 ? "" : KeyboardArrowDownIcon}
                  disabled={item?.values?.length == 1}
                >
                  {item?.values?.map((val: any, index: any) => {
                    return (
                      <MenuItem key={index} value={val}>
                        {val}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
          ))}
    </Grid>
  );
}

export default Options;
