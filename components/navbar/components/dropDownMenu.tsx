import { useState } from "react";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "styles/navbar";
import { Button, Grid, useTheme, Checkbox, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Text from "components/customText";
import ListItemText from "@mui/material/ListItemText";
import PedlarButton from "./pedlarButton";
import ProductHeader from "components/home/components/productHeader";
import Link from "next/link";

interface Props {
    type: string;
    data: string[];
}
const DropDownMenu = (props: Props) => {
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
                <Grid lg={12} md={12} sm={12} xl={10} container style={{ display: "flex", alignItems: "center", justifyContent: "end",    maxWidth: "100%", }} >

                    <Grid container item sx={styles.menuContainer} md={6} lg={6} sm={8} xl={4}>
                        <Grid

                            container
                            item
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            paddingX={{ xs: theme.spacing(10), md: theme.spacing(0), lg: theme.spacing(40) }}
                            paddingY={{ md: theme.spacing(10), lg: theme.spacing(10) }}
                        >
                            <Grid
                                container
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                paddingX={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
                            >
                                <Box sx={styles.menuInnerContainer}>
                                    {data.map((item) => (
                                        <MenuItem >
                                            <Typography sx={styles.menuItems}>{item}</Typography>

                                        </MenuItem>
                                    ))}
                                    <Link href="/">
                                        <ListItemText style={{ paddingLeft: "8px", color: "black", fontWeight: "600", fontSize: "12px", textDecoration: "underline" }}>
                                            View all.....
                                        </ListItemText>
                                    </Link>
                                </Box>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            </Menu>
        </>
    );
};

export default DropDownMenu;
