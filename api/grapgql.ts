import { apiCall } from "./graphqlApi";

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
