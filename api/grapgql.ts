import { gql } from "@apollo/client";
import { client } from "./graphql/client";

export const getProductDetails = async (productId: string) => {
  const requestBody = {
    query: gql`
      query GetProduct($productId: ID!, $selectedOptionInput: [SelectedOptionInput!]!) {
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
      }
    `,
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

  const collectionData = await client.query({ query: requestBody.query, variables: requestBody.variables });
  console.log("collectionData", collectionData);

  return collectionData || {};
};

export const getUserDetailByFetchAPICall = async (collectionID: number, numberofProducts: number) => {
  const requestBody = {
    query: gql`query GetCollection($collectionId: ID!) {
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

  const res = await client.query({ query: requestBody.query, variables: requestBody.variables });

  return res || {};
};

export const addToCart = async (merchandiseId, value , quantity) => {
  console.log("merchandiseId", merchandiseId);

  const requestBody = {
    query: gql`
      mutation createCart($input: CartInput) {
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
      }
    `,
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
            quantity: quantity,
          },
        ],
      },
    },
  };

  try {
    const res = await client.mutate({ mutation: requestBody.query, variables: requestBody.variables });

    return res;
  } catch (error) {
    return undefined;
  }
};

export const addToCartLineItem = async (cartID, merchandiseId, quantity) => {
  const requestBody = {
    query: gql`
      mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
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
      }
    `,
    variables: {
      cartId: `${cartID}`,
      lines: {
        merchandiseId: `${merchandiseId}`,
        quantity: quantity,
      },
    },
  };

  try {
    const addToCartApiResponse = await client.mutate({ mutation: requestBody.query, variables: requestBody.variables });

    return addToCartApiResponse;
  } catch (error) {
    return undefined;
  }
};

export const getCartProducts = async (cartid) => {
  const requestBody = {
    query: gql`
      query getCart($id: ID!) {
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
                  price{
                    amount
                    currencyCode

                }
                }
              }
            }
          }
        }
      }
    `,
    variables: { id: `${cartid}` },
  };

  try {
    const getCartProductResponse = await client.query({ query: requestBody.query, variables: requestBody.variables });

    return getCartProductResponse;
  } catch (error) {
    return undefined;
  }
};

export const getVariantBySelectedOptions = async (productID,size,color) => {
  const requestBody = {
    query: gql`
      query GetProduct($productId: ID!, $selectedOptionInput: [SelectedOptionInput!]!) {
        product(id: $productId) {
          variantBySelectedOptions(selectedOptions: $selectedOptionInput) {
            id
            title
            quantityAvailable
          }
        }
      }
    `,
    variables: {
      productId: `${productID}`,
      selectedOptionInput: [
        {
          name: "Size",
          value:size,
        },
        {
          name: "Color",
          value: color,
        },
      ],
    },
  };

  try {
    const getVariantResponse = await client.query({ query: requestBody.query, variables: requestBody.variables });

    return getVariantResponse;
  } catch (error) {
    return undefined;
  }
};

export const checkoutCartDetails = async (checkoutId: any) => {
  const requestBody = {
    query: gql`
      query getCart($id: ID!) {
        cart(id: $id) {
          id
          checkoutUrl
        }
      }
    `,
    variables: { id: checkoutId },
  };
  const collectCheck = await client.query({ query: requestBody.query, variables: requestBody.variables });

  return collectCheck;
};

export const updateCartLineItem = async (createdCartID, cartLineid , quantity) => {
  const requestBody = {
    query: gql`
      mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
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
      }
    `,
    variables: {
      cartId: `${createdCartID}`,
      lines: {
        id: `${cartLineid}`,
        quantity: quantity,
      },
    },
  };

  try {
    const res = await client.mutate({ mutation: requestBody.query, variables: requestBody.variables });

    return res;
  } catch (error) {
    return undefined;
  }
};
export const getCuratedBrands = async (  ) => {


  
try {
  const res =  await fetch("https://pedlar-dev.ts.r.appspot.com/storefront/412809756899/vendors?sortKey=random");

  const updateCartResponse = await res.json();

  return updateCartResponse;
} catch (error) {
  return undefined;
}
 
};



