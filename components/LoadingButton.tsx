import React from "react";
import { ButtonProps, Button, CircularProgress, Box } from "@mui/material";
import { green } from "@mui/material/colors";

interface Props extends ButtonProps {
  loading: boolean;
}
const LoadingButton = (props: Props) => {
  const { loading, children } = props;

  return (
    <Button {...props}>
      {loading && (
        <Box
          sx={{
            backgroundColor: "#D7D8D9",

            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 6,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            borderRadius: 30,
          }}
        >
          <CircularProgress size={20} sx={{ color: "black" }} />
        </Box>
      )}
      {children}
    </Button>
  );
};

export default LoadingButton;
