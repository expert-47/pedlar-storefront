import React from "react";
import { ButtonProps, Button, CircularProgress, Box, Tooltip } from "@mui/material";

interface Props extends ButtonProps {
  loading: boolean;
  title: string;
}
const LoadingButton = (props: Props) => {
  const { loading, children, disabled, title = "" } = props;

  return (
    <Tooltip title={title}>
      <Button {...props} disabled={false}>
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
    </Tooltip>
  );
};

export default LoadingButton;
