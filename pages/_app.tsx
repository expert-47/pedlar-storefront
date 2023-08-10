import "../styles/globals.css";
import { theme } from "styles/theme/defalutTheme";
import { ThemeProvider } from "@mui/material";
import { SWRConfig } from "swr";
import { Crisp } from "crisp-sdk-web";

import "photoswipe/dist/photoswipe.css";
import { DefaultSeo } from "next-seo";
import SEO from "../utils/next-seo.config";
import { useEffect } from "react";
import { Provider } from "react-redux";
// import { store } from "store/index";
import { store } from "store/slice";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ApolloProvider } from "@apollo/client";
import { client } from "api/graphql/client";
import apiClient from "api/restApi/client";
import "react-slideshow-image/dist/styles.css";

import NextNProgress from "nextjs-progressbar";

import Script from "next/script";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { AppProps } from "next/app";
import createEmotionCache from "utils/createEmotionCache";

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: any) {
  useEffect(() => {
    Crisp.configure("0d4e2511-7101-418f-a040-f3f1a89ccb6d", {
      autoload: false,
    });
    Crisp.setZIndex(9999);
    Crisp.load();
  }, []);

  const persistor = persistStore(store);

  return (
    <CacheProvider value={emotionCache}>
      <Script
        id="gtag-base"
        strategy="lazyOnload"
        // strategy="worker"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_KEY}');
          `,
        }}
      />

      <DefaultSeo {...SEO} />
      <Provider store={store}>
        <ApolloProvider client={client}>
          <SWRConfig
            value={{
              fetcher: (resource) => apiClient.get(resource).then((r) => r.data),
            }}
          >
            <ThemeProvider theme={theme}>
              <PersistGate persistor={persistor}>
                <NextNProgress color="#29D" startPosition={0.3} height={3} showOnShallow={true} />

                <Component {...pageProps} />
              </PersistGate>
            </ThemeProvider>
          </SWRConfig>
        </ApolloProvider>
      </Provider>
    </CacheProvider>
  );
}

export default MyApp;
