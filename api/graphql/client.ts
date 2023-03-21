import { ApolloClient, InMemoryCache } from "@apollo/client";
const headers: any = {
  "X-Shopify-Storefront-Access-Token": "2c5cf3b924c90e78a67a460aa46d7d7c",
};

export const client = new ApolloClient({
  uri: "https://pedlar-development.myshopify.com/api/2022-10/graphql.json",
  cache: new InMemoryCache(),
  headers: headers,
});
