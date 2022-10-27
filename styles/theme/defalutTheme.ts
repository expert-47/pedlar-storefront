import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f3e5f5",
      light: "#F5F5F5",
      contrastText: "linear-gradient(259.45deg, #16BCE1 -6.94%, #9FE8FF 104.78%)",
      dark: "radial-gradient(83.15% 154.4% at 10% 13.52%, #001A1F 0%, #002E37 56.38%, #001A1F 100%)",
    },
    secondary: {
      main: "#001A1F",
      light: "#ffffff",
      contrastText: "#16B1E1",
      dark: "#1E212C",
    },
    success: {
      main: "rgba(255,255,255,0.1)",
      light: "#555555",
      dark: "#16B1E11A",
      contrastText: "#7E7E7E",
    },
    error: {
      main: "#004960",
      contrastText: "#EAFAFF",
      light: "#E7E7E7",
    },
  },
  typography: {
    fontFamily: "inter",

    h3: {
      fontSize: "28px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "24px",
      fontWeight: 600,
    },
    h5: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "30px",
      letterSpacing: "0.5px",
      fontStyle: "Semi bold",
    },
    h6: {
      fontSize: "18px",
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "20px",
    },

    body2: {
      fontSize: "16px",
      fontWeight: 500,
    },
    caption: {
      fontSize: "12px",
      fontWeight: 500,
    },
    overline: {
      fontSize: "42px",
      fontWeight: 900,
      lineHeight: "62.4px",
    },
  },
});

// theme.typography.subtitle2 = {
//   fontSize: "16px",
//   fontWeight: 400,
//   fontFamily: "Poppins",
//   [theme.breakpoints.up("sm")]: {
//     fontWeight: 500,
//     fontSize: "20px",
//   },
// };
