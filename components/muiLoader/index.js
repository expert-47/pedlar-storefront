import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";

const CircularIndeterminate = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Backdrop
        sx={{
          color: "#1976d2",
        }}
        open={props?.open}
      >
        <CircularProgress open={props?.open} color={"inherit"} size={60} />
      </Backdrop>
    </Box>
  );
};

export default CircularIndeterminate;
