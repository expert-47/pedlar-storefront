//package

import Script from "next/script";
import { Fragment, lazy, useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
import { DefaultSeo } from "next-seo";

import SEO from "../utils/next-seo.config";
import { client } from "api/graphql/client";

import { ApolloProvider } from "@apollo/client";
//style
import "../styles/globals.css";
import createEmotionCache from "utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import Head from "next/head";

const ReduxProvider = lazy(() => import("../Provider/redux"));

const MuiThemeProvider = lazy(() => import("../Provider/ThemeProvider"));
const NextProgress = lazy(() => import("../Provider/NextProgress"));

function MyApp(props: any) {
  const clientSideEmotionCache = createEmotionCache();

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    setTimeout(() => {
      Crisp.configure("0d4e2511-7101-418f-a040-f3f1a89ccb6d", {
        autoload: false,
      });
      Crisp.setZIndex(9999);
      Crisp.load();
    }, 100);
  }, []);
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
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      <ApolloProvider client={client}>
        <MuiThemeProvider>
          <ReduxProvider>
            <NextProgress />

            <Component {...pageProps} />
          </ReduxProvider>
        </MuiThemeProvider>
      </ApolloProvider>
    </CacheProvider>
  );
}

export default MyApp;
