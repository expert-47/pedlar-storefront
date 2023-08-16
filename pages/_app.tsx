//package
import { SWRConfig } from "swr";
import Script from "next/script";
import { useEffect } from "react";
import { store } from "store/slice";
import { AppProps } from "next/app";
import { Crisp } from "crisp-sdk-web";
import { DefaultSeo } from "next-seo";
import { Provider } from "react-redux";
import "photoswipe/dist/photoswipe.css";
import SEO from "../utils/next-seo.config";
import apiClient from "api/restApi/client";
import { client } from "api/graphql/client";
import { persistStore } from "redux-persist";
import { ThemeProvider } from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import NextNProgress from "nextjs-progressbar";
import { ApolloProvider } from "@apollo/client";
import { theme } from "styles/theme/defalutTheme";
import createEmotionCache from "utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { PersistGate } from "redux-persist/integration/react";
//style
import "../styles/globals.css";

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
        dangerouslySetInnerHTML={{
          __html: `
        var loadGtm = function(w, d, s, l, i) {w[l] = w[l] || [];w[l].push({'gtm.start': new Date().getTime(),event: 'gtm.js'});var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
}
setTimeout(loadGtm.bind(null, window, document, 'script', 'dataLayer', '${process.env.NEXT_PUBLIC_GTM_KEY}'), 3000);'${process.env.NEXT_PUBLIC_GTM_KEY}'`,
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
