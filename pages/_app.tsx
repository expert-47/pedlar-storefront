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

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());



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
