import { apiCall, checkoutApiCalls } from "./graphqlApi";

export const getProductDetails = async (productId: string) => {
  const requestBody = {
    query: `query GetProduct($productId: ID!, $selectedOptionInput: [SelectedOptionInput!]!) {
      product(id: $productId) {
          id
          title
          productType
          vendor
          description
          totalInventory
          priceRange {
              maxVariantPrice {
                  amount
                  currencyCode
              }
              minVariantPrice {
                  amount
                  currencyCode
              }
          }
          options {
              id
              name
              values
          }
          variantBySelectedOptions(selectedOptions: $selectedOptionInput) {
              id
              title
          }
          featuredImage {
              url
          }
          createdAt
          publishedAt
      }
  }`,
    variables: {
      productId: `gid://shopify/Product/${productId}`,

      selectedOptionInput: [
        {
          name: "Size",
          value: "4 US / 4 AU / 35 EU",
        },
        {
          name: "Color",
          value: "Brown",
        },
      ],
    },
  };

  const collectionData = await apiCall(requestBody);

  return collectionData;
};

export const getUserDetailByFetchAPICall = async (collectionID: number, numberofProducts: number) => {
  const requestBody = {
    query: `query GetCollection($collectionId: ID!) {
    collection(id: $collectionId) {
        products(first: ${numberofProducts}, reverse: true ) {
            nodes {
                id
                title
                productType
                vendor
                description
                totalInventory
                priceRange {
                    maxVariantPrice {
                        amount
                        currencyCode
                    }
                    minVariantPrice {
                        amount
                        currencyCode
                    }
                }
                featuredImage {
          height
          src
          width
          originalSrc
          transformedSrc(preferredContentType: WEBP, maxHeight: 343, maxWidth: 343)
        }
                createdAt
                publishedAt
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
}`,
    variables: { collectionId: `gid://shopify/Collection/${collectionID}` },
  };
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
    body: JSON.stringify(requestBody),
  };

  const res = await fetch("https://pedlar-development.myshopify.com/api/2022-10/graphql.json", options);

  const collectionData = await res.json();

  return collectionData;
};

export const addToCart = async (merchandiseId, value) => {
  const requestBody = {
    query: `mutation createCart($input: CartInput) {
      cartCreate(input: $input) {
        cart {
          id
          lines(first: 10) {
              nodes {
                  id
                  quantity
  
              }
          }
        }
      }
  }`,
    variables: {
      input: {
        attributes: [
          {
            key: "id",
            value: `${value}`,
          },
        ],
        lines: [
          {
            merchandiseId: `${merchandiseId}`,
            quantity: 1,
          },
        ],
      },
    },
  };
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
    body: JSON.stringify(requestBody),
  };
  try {
    const res = await fetch("https://pedlar-development.myshopify.com/api/2022-10/graphql.json", options);

    const addToCartApiResponse = await res.json();

    return addToCartApiResponse;
  } catch (error) {
    return undefined;
  }
};

export const addToCartLineItem = async (cartID, merchandiseId) => {
  const requestBody = {
    query: `mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      id
      lines(first: 20) {
            nodes {
                id
                quantity
            }
      }

    }
    userErrors {
      field
      message
    }
  }
}`,
    variables: {
      cartId: `${cartID}`,
      lines: {
        merchandiseId: `${merchandiseId}`,
        quantity: 1,
      },
    },
  };
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
    body: JSON.stringify(requestBody),
  };
  try {
    const res = await fetch("https://pedlar-development.myshopify.com/api/2022-10/graphql.json", options);

    const addToCartApiResponse = await res.json();

    return addToCartApiResponse;
  } catch (error) {
    return undefined;
  }
};

export const getCartProducts = async (cartid) => {
  const requestBody = {
    query: `query getCart($id: ID!) {
      cart(id: $id) {
          id
          lines(first: 20) {
              nodes {
                  id
                  quantity
                  merchandise {
                      ... on ProductVariant {
                          id
                          currentlyNotInStock
                          image {
                              url
                          }
                          quantityAvailable
                          title
                      }
                  }
              }
          }
      }
  }`,
    variables: { id: `${cartid}` },
  };
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
    body: JSON.stringify(requestBody),
  };
  try {
    const res = await fetch("https://pedlar-development.myshopify.com/api/2022-10/graphql.json", options);

    const getCartProductResponse = await res.json();

    return getCartProductResponse;
  } catch (error) {
    return undefined;
  }
};

export const getVariantBySelectedOptions = async (productID) => {
  const requestBody = {
    query: `query GetProduct($productId: ID!, $selectedOptionInput: [SelectedOptionInput!]!) {
      product(id: $productId) {
          variantBySelectedOptions(selectedOptions: $selectedOptionInput) {
              id
              title,
              quantityAvailable
          }
      }
  }`,
    variables: {
      productId: `${productID}`,
      selectedOptionInput: [
        {
          name: "Size",
          value: "4 US / 4 AU / 35 EU",
        },
        {
          name: "Color",
          value: "Black",
        },
      ],
    },
  };
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
    body: JSON.stringify(requestBody),
  };
  try {
    const res = await fetch("https://pedlar-development.myshopify.com/api/2022-10/graphql.json", options);

    const getVariantResponse = await res.json();

    return getVariantResponse;
  } catch (error) {
    return undefined;
  }
};

export const checkoutCartDetails = async (checkoutId: any) => {
  const requestBody = {
    query: `query getCart($id: ID!) {
      cart(id: $id) {
          id
          checkoutUrl
      }
  }`,
    variables: { id: checkoutId },
  };
  const collectCheck = await checkoutApiCalls(requestBody);

  return collectCheck;
};

export const updateCartLineItem = async ( createdCartID , cartLineid ) => {


  
  const requestBody = {
    query: `mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          id
          lines(first: 20) {
                nodes {
                    id
                    quantity
                }
          }
    
        }
        userErrors {
          field
          message
        }
      }
    }`,
    variables: { 
      
      "cartId": `${createdCartID}`,
      "lines": {
        "id": `${cartLineid}`,
        "quantity": 2
      }
    
    },
  };
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
    body: JSON.stringify(requestBody),
  };
try {
  const res =  await fetch("https://pedlar-development.myshopify.com/api/2022-10/graphql.json", options);

  const updateCartResponse = await res.json();

  return updateCartResponse;
} catch (error) {
  return undefined;
}
 
};



