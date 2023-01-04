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
