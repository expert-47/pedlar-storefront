import { ApolloClient, InMemoryCache } from "@apollo/client";
const headers: any = {
  "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_TOKEN,
};

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_BASE_URL,
  cache: new InMemoryCache(),
  headers: headers,
});
