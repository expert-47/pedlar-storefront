import "../styles/globals.css";
import { theme } from "styles/theme/defalutTheme";
import { ThemeProvider } from "@mui/material";

import { createEmotionSsrAdvancedApproach } from "tss-react/nextJs";

import { DefaultSeo } from "next-seo";
import SEO from "../utils/next-seo.config";
import { Fragment } from "react";

const { EmotionCacheProvider, withEmotionCache } = createEmotionSsrAdvancedApproach({ key: "css" });
export { withEmotionCache };

function MyApp({ Component, pageProps }: any) {
  return (
    <Fragment>
      <DefaultSeo {...SEO} />
      <EmotionCacheProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </EmotionCacheProvider>
    </Fragment>
  );
}

export default MyApp;
