import "../styles/globals.css";
import Axios from "axios";
import { theme } from "styles/theme/defalutTheme";
import { ThemeProvider } from "@mui/material";
import { SWRConfig } from "swr";
import { Crisp } from "crisp-sdk-web";

import { DefaultSeo } from "next-seo";
import SEO from "../utils/next-seo.config";
import { Fragment, useEffect } from "react";
import { Provider } from "react-redux";

import { store } from "store/index";
import { ApolloProvider } from "@apollo/client";
import { client } from "api/graphql/client";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: any) {
  const route = useRouter();
  useEffect(() => {
    Crisp.configure("0d4e2511-7101-418f-a040-f3f1a89ccb6d", {
      autoload: false,
    });
    Crisp.setZIndex(9999);
    Crisp.load();
  });

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <SWRConfig
          value={{
            fetcher: (resource) => Axios.get(resource).then((r) => r.data),
          }}
        >
          <Fragment>
            <DefaultSeo {...SEO} />

            <ThemeProvider theme={theme}>
              <NextNProgress color="#29D" startPosition={0.3} height={3} showOnShallow={true} />

              <Component {...pageProps} />
            </ThemeProvider>
          </Fragment>
        </SWRConfig>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
