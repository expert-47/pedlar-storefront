import { useState } from "react";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "styles/navbar";
import { Button, Grid, useTheme, Checkbox, Divider, Typography, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import Text from "components/customText";
import ListItemText from "@mui/material/ListItemText";
import PedlarButton from "./pedlarButton";
import ProductHeader from "components/home/components/productHeader";
import Link from "next/link";

interface Props {
    type: string;
    data: string[];
    loading: boolean;
}
const DropDownMenu = (props: Props) => {
    const theme = useTheme();
    const { type = "Brands", data, loading } = props;
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
            <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Button sx={styles.tabButton} onClick={handleClick} >
                    <Box style={{ borderBottom: openMenu ? "solid #1C1B1F 1px" : "none" }} >{type}</Box>
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
                <Grid container style={{ maxWidth: "100%", }} >

                    <Grid container item sx={styles.menuContainer}>

                        <Box sx={styles.menuInnerContainer}>
                            {loading
                                ?
                                <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>

                                    <CircularProgress color="inherit" />
                                </Grid>
                                :
                                <Grid display={"flex"}
                                    justifyContent={"space-around"}
                                    alignItems={"center"}>
                                    <Grid></Grid>
                                    <Grid></Grid>
                                    <Grid>
                                        {(data.sort().slice(0, 28).map((item) => (
                                            <MenuItem >
                                                <Typography sx={styles.menuItems}>{item}</Typography>

                                            </MenuItem>
                                        )))}
                                        < Link href="/">
                                            <ListItemText style={{ paddingTop: "4px", paddingLeft: "16px", color: "black", fontWeight: "600", fontSize: "12px", textDecoration: "underline" }}>
                                                View all.....
                                            </ListItemText>
                                        </Link>
                                    </Grid>
                                </Grid>

                            }
                        </Box>
                    </Grid>


                </Grid>

            </Menu>
        </>
    );
};

export default DropDownMenu;
