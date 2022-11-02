import { useState } from "react";

import { ExpandLess, ExpandMore } from "@mui/icons-material";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useStyles } from "styles/navbar";

import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

interface Props {
  type: string;
  data: string[];
}
const DropdownMenu = (props: Props) => {
  const { type = "Brands", data } = props;
  const { classes, cx } = useStyles();
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
      <Button
        className={cx(classes.tabButton)}
        onClick={handleClick}
        endIcon={openMenu ? <ExpandLess /> : <ExpandMore />}
      >
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
        className={cx(classes.menu)}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
      >
        <Grid className={cx(classes.menuContainer)}>
          <Box className={cx(classes.menuInnerContainer)}>
            {data.map((item) => (
              <MenuItem>{item}</MenuItem>
            ))}
            <MenuItem className={cx(classes.menuItem)}>
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
