import { ThemeProvider } from "@mui/material";
import { theme } from "styles/theme/defalutTheme";
import "react-slideshow-image/dist/styles.css";
import "photoswipe/dist/photoswipe.css";
const MuiThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default MuiThemeProvider;
