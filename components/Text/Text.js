import React from "react";
import { Typography } from "@mui/material";

const Text = (props) => {
  const { name = "", children, fontSize, style } = props;
  return (
    <Typography {...props} {...(fontSize ? { style: { fontSize } } : { style })}>
      {children ? children : name}
    </Typography>
  );
};

export default Text;
