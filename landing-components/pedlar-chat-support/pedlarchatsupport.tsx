import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
//import SpeedDialAction from "@mui/material/SpeedDialAction";

const Pedlarchatsupport = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 10,
        right: 16,
        transform: "translateZ(0px)",
        flexGrow: 1,
        zIndex: 9999,
        color: "#1C1B1F",

        ".css-i9wys1-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab": {
          Color: "#1C1B1F",
          backgroundColor: "#1C1B1F",
        },
        ".css-i9wys1-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab:hover": {
          backgroundColor: "#1C1B1F",
        },
      }}
    >
      <SpeedDial ariaLabel="Pedlar Chat Support" icon={<ChatRoundedIcon style={{ color: "white" }} />}>
        {/* <SpeedDialAction /> */}
      </SpeedDial>
    </Box>
  );
};

export default Pedlarchatsupport;
