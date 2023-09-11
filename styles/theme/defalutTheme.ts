import { createTheme } from "@mui/material";
import { Inter } from "@next/font/google";

export const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      dark: "#000000",
      contrastText: "#1C1B1F",
      light: "#8652FF",
    },
    success: {
      main: "rgba(0, 0, 0, 0.2)",
      light: "rgba(28, 27, 31, 0.64)",
      dark: "rgba(28, 27, 31, 0.64)",
    },
    info: {
      main: "#C5C5C5",
      contrastText: "#6750A4",
    },
    divider: "rgba(6,6,6,0.12)",
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: "26px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "26px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "22px",
      fontWeight: 400,
    },
    h4: {
      fontSize: "20px",
      fontWeight: 600,
    },

    subtitle1: {
      fontSize: "18px",
      fontWeight: 600,
    },

    subtitle2: {
      fontSize: "16px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "12px",
      fontWeight: 600,
    },

    body2: {
      fontSize: "14px",
      fontWeight: 400,
    },
    h6: {
      fontSize: "14px",
      fontWeight: 700,
    },
  },
  spacing: 1,
});

theme.typography.h2 = {
  fontSize: "20px",
  fontWeight: 700,
  fontFamily: inter.style.fontFamily,
  [theme.breakpoints.up("sm")]: {
    fontSize: "24px",
  },
};
