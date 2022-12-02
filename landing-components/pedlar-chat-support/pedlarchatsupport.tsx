import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
//import SpeedDialAction from "@mui/material/SpeedDialAction";

const Pedlarchatsupport = () => {
  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="Pedlar Chat Support"
        icon={<SpeedDialIcon />}
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          ".css-i9wys1-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab:hover": {
            backgroundColor: "white",
          },
        }}
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        {/* <SpeedDialAction /> */}
      </SpeedDial>
    </Box>
  );
};

export default Pedlarchatsupport;
