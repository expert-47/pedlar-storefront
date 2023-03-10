import { ApolloClient, InMemoryCache } from "@apollo/client";
const headers: any = {
  "X-Shopify-Storefront-Access-Token": "539c0fd31464cd8d090d295cfca2fb7f",
};

export const client = new ApolloClient({
  uri: "https://pedlar-development.myshopify.com/api/2022-10/graphql.json",
  cache: new InMemoryCache({
    resultCaching: false,
  }),
  headers: headers,
});
