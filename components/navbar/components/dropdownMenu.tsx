import React from "react";

import { useStyles } from "styles/navbar";

import { Button } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface Props {
  type: string;
  open: boolean;
  handleClick: () => void;
}
const DropdownMenu = (props: Props) => {
  const { type = "Brands", open, handleClick } = props;
  const { classes, cx } = useStyles();

  return (
    <Button className={cx(classes.tabButton)} onClick={handleClick} endIcon={open ? <ExpandLess /> : <ExpandMore />}>
      {type}
    </Button>
  );
};

export default DropdownMenu;
