import { useState } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useStyles } from "styles/navbar";

import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

interface Props {
  type: string;
}
const DropdownMenu = (props: Props) => {
  const { type = "Brands" } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const { classes, cx } = useStyles();
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button className={cx(classes.tabButton)} onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
        {type}
      </Button>
      <Menu className={cx(classes.menu)} anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
        <Grid className={cx(classes.menuContainer)}>
          <Box className={cx(classes.menuInnerContainer)}>
            {Array.apply(null, Array(40)).map(() => (
              <MenuItem>{type}</MenuItem>
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
