import "../styles/globals.css";
import { theme } from "styles/theme/defalutTheme";
import { ThemeProvider } from "@mui/material";

import { createEmotionSsrAdvancedApproach } from "tss-react/nextJs";

const { EmotionCacheProvider, withEmotionCache } = createEmotionSsrAdvancedApproach(
  { key: "css" } /* Argument of createCache */,
);

export { withEmotionCache };
function MyApp({ Component, pageProps } : any) {
  return (
    <EmotionCacheProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </EmotionCacheProvider>
  );
}

export default MyApp;
