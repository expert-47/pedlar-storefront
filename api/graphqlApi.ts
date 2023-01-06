export const apiCall = async (body: any) => {
  const headers: any = {
    "X-Shopify-Storefront-Access-Token": "539c0fd31464cd8d090d295cfca2fb7f",
    "Content-Type": "application/json",
    Connection: "keep-alive",
    "Accept-Encoding": "gzip, deflate, br",
    Accept: "*/*",
  };
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  };

  const res = await fetch("https://pedlar-development.myshopify.com/api/2022-10/graphql.json", options);
  return await res?.json();
};

export const checkoutApiCalls = async (body: any) => {
  const headers: any = {
    "X-Shopify-Storefront-Access-Token": "539c0fd31464cd8d090d295cfca2fb7f",
    "Content-Type": "application/json",
    Connection: "keep-alive",
    "Accept-Encoding": "gzip, deflate, br",
    Accept: "*/*",
  };
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  };

  const res = await fetch("https://pedlar-development.myshopify.com/api/2022-10/graphql.json", options);
  return await res?.json();
};
