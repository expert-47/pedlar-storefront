import { useState } from "react";

import { ExpandLess, ExpandMore } from "@mui/icons-material";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import styles from "styles/navbar";

import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

interface Props {
  type: string;
  data: string[];
}
const DropdownMenu = (props: Props) => {
  const { type = "Brands", data } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
            ml: 0,
            maxWidth: "unset",
          },
        }}
        sx={styles.menu}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
      >
        <Grid sx={styles.menuContainer}>
          <Box sx={styles.menuInnerContainer}>
            {data.map((item) => (
              <MenuItem>{item}</MenuItem>
            ))}
            <MenuItem sx={styles.menuItem}>
              <Link href="/">
                <a>View all</a>
              </Link>
            </MenuItem>
          </Box>
        </Grid>
      </Menu>
    </>
  );
};

export default DropdownMenu;
