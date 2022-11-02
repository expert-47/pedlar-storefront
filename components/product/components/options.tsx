import React from "react";

import { Grid, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from 'styles/product'


function Options() {
    const [Size, setSize] = React.useState("");
    const [Colour, setColour] = React.useState("");

    const handleChange1 = (event) => {
        setSize(event.target.value);
      };
      const handleChange2 = (event) => {
        setColour(event.target.value);
      };
return(

    <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        gap={22}
        sx={styles.container}
    >

        <Grid item xs={12} sm={12} md={5} lg={5} sx={{}}>
            <Typography sx={styles.typography}>
                Size
            </Typography>
            <FormControl sx={{ width: "100%" }}>
                <Select
                    value={Size}
                    onChange={handleChange1}
                    displayEmpty
                    sx={styles.select}
                    IconComponent= {KeyboardArrowDownIcon}
                >
                    <MenuItem value="">XS</MenuItem>
                    <MenuItem value={10}>Small</MenuItem>
                    <MenuItem value={20}>Medium</MenuItem>
                    <MenuItem value={30}>Large</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
            <Typography sx={styles.typography}>
                Colour
            </Typography>
            <FormControl sx={{ width: "100%" }}>
                <Select
                    value={Colour}
                    onChange={handleChange2}
                    displayEmpty
                    sx={styles.select}
                    IconComponent= {KeyboardArrowDownIcon}

                >
                    <MenuItem value="">Green</MenuItem>
                    <MenuItem value={10}>Blue</MenuItem>
                    <MenuItem value={20}>Yellow</MenuItem>
                    <MenuItem value={30}>Orange</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    </Grid>
    
    
    )
}

export default Options;
