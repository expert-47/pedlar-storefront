import React from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Button } from "@mui/material";
import styles from "styles/navbar";

interface Props {
  buttonText: string;
  open: boolean;
  handleClick: () => void;
}

const PedlarButton = (props: Props) => {
  const { buttonText, open, handleClick } = props;

  return (
    <Button sx={styles.tabButton} onClick={handleClick} endIcon={open ? <ExpandLess /> : <ExpandMore />}>
      {buttonText}
    </Button>
  );
};

export default PedlarButton;
