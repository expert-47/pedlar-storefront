import "../styles/globals.css";
import Axios from "axios";
import { theme } from "styles/theme/defalutTheme";
import { ThemeProvider } from "@mui/material";
import { SWRConfig } from "swr";

import { createEmotionSsrAdvancedApproach } from "tss-react/nextJs";

import { DefaultSeo } from "next-seo";
import SEO from "../utils/next-seo.config";
import { Fragment } from "react";

const { EmotionCacheProvider, withEmotionCache } = createEmotionSsrAdvancedApproach({ key: "css" });
export { withEmotionCache };

function MyApp({ Component, pageProps }: any) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource) => Axios.get(resource).then((r) => r.data),
      }}
    >
      <Fragment>
        <DefaultSeo {...SEO} />
        <EmotionCacheProvider>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </EmotionCacheProvider>
      </Fragment>
    </SWRConfig>
  );
}

export default MyApp;
