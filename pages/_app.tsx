//package

import Script from "next/script";
import { useEffect } from "react";
import { store } from "store/slice";
import { AppProps } from "next/app";
import { Crisp } from "crisp-sdk-web";
import { DefaultSeo } from "next-seo";
import { Provider } from "react-redux";
import "photoswipe/dist/photoswipe.css";
import SEO from "../utils/next-seo.config";
import { client } from "apis/graphql/client";
import { persistStore } from "redux-persist";
import { ThemeProvider } from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import NextNProgress from "nextjs-progressbar";
import { ApolloProvider } from "@apollo/client";
import { theme } from "styles/theme/defalutTheme";
import createEmotionCache from "utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";

//style
import "../styles/globals.css";

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: any) {
  useEffect(() => {
    setTimeout(() => {
      Crisp.configure("0d4e2511-7101-418f-a040-f3f1a89ccb6d", {
        autoload: false,
      });
      Crisp.setZIndex(9999);
      Crisp.load();
    }, 5000);
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
setTimeout(loadGtm.bind(null, window, document, 'script', 'dataLayer', '${process.env.NEXT_PUBLIC_GTM_KEY}'), 4000);'${process.env.NEXT_PUBLIC_GTM_KEY}'`,
        }}
      />
      <DefaultSeo {...SEO} />
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <NextNProgress color="#29D" startPosition={0.3} height={3} showOnShallow={true} />

            <main>
              <Component {...pageProps} />
            </main>
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </CacheProvider>
  );
}

export default MyApp;
