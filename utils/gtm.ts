export const gtmEvents = (data: any) => {
  interface PageEventProps {
    event: string;
    page: string;
  }

  const pageEvent: PageEventProps = {
    ...data,
  };

  //@ts-ignore
  window?.dataLayer?.push({ ecommerce: null });
  window?.dataLayer?.push(data);
};

export const beginCheckout = (item: any, type = "checkout button") => {
  if (!Array.isArray(item)) {
    return;
  }

  item.map((data: any, index) => {
    return gtmEvents({
      event: "begin_checkout",
      ecommerce: {
        items: [
          {
            currency: data?.merchandise?.price?.currencyCode || "", // Currency
            item_name: data?.merchandise?.product?.title || "", // Name or ID is required.
            item_id: data?.merchandise?.product?.id
              ? data?.merchandise?.product?.id.split("/")[data?.merchandise?.product?.id.split("/").length - 1]
              : "", //ID of the item.
            price: parseFloat(data?.merchandise?.price?.amount || ""), //total price of the item.
            item_brand: data?.merchandise?.product?.vendor || "", // brand of the item.(this is the example value)
            ...(data?.merchandise?.product?.productType &&
              data?.merchandise?.product?.productType != "" && {
                item_category: data?.merchandise?.product?.productType || "",
              }), //The category to which the product belongs to.
            ...(data?.merchandise?.selectedOptions[0]?.value &&
              data?.merchandise?.selectedOptions[0]?.value != "" && {
                item_category2: data?.merchandise?.selectedOptions[0]?.value || "",
              }), //size of the product.
            ...(data?.merchandise?.selectedOptions[0]?.value &&
              data?.merchandise?.selectedOptions[0]?.value != "" && {
                item_variant: data?.merchandise?.selectedOptions[1]?.value || "",
              }), // color of the product.
            item_category3: type,
            //  item_list_name: "Category Page",//e.g. Filter results, Popular Picks For You ,Recently Viewed, Best sellers, Search Results, Personal Boutique etc.
            //  item_list_id: "H3123", //ID of the list in which the item was presented to the user.
            index: index + 1, // position of the item
            quantity: data?.quantity, //quantity of the item

            // promotion_id: "abc123",
            // promotion_name: "shop now"
          },
        ],
      },
    });
  });
};

export const viewCart = (items) => {
  let item = items.map((data, index) => {
    return {
      currency: data?.merchandise?.price?.currencyCode || "", // Currency
      item_name: data?.merchandise?.product?.title || "", // Name or ID is required.
      item_id: data?.merchandise?.product?.id
        ? data?.merchandise?.product?.id.split("/")[data?.merchandise?.product?.id.split("/").length - 1]
        : "", //ID of the item.
      price: parseFloat(data?.merchandise?.price?.amount || ""), //total price of the item.
      item_brand: data?.merchandise?.product?.vendor || "", // brand of the item.(this is the example value)
      ...(data?.merchandise?.product?.productType &&
        data?.merchandise?.product?.productType != "" && {
          item_category: data?.merchandise?.product?.productType || "",
        }), //The category to which the product belongs to.
      ...(data?.merchandise?.selectedOptions[0]?.value &&
        data?.merchandise?.selectedOptions[0]?.value != "" && {
          item_category2: data?.merchandise?.selectedOptions[0]?.value || "",
        }), //size of the product.
      ...(data?.merchandise?.selectedOptions[1]?.value &&
        data?.merchandise?.selectedOptions[1]?.value != "" && {
          item_variant: data?.merchandise?.selectedOptions[1]?.value || "",
        }), // color of the product.
      index: index + 1,
      // item_category: data?.productType || "", //The category to which the product belongs to.
      // item_category2: data?.size || "", //size of the product.
      // item_variant: data?.size || "", // color of the product.
      //  item_list_name: "Category Page",//e.g. Filter results, Popular Picks For You ,Recently Viewed, Best sellers, Search Results, Personal Boutique etc.
      //  item_list_id: "H3123", //ID of the list in which the item was presented to the user.
      // index: 2, // position of the item
      quantity: data?.quantity, //quantity of the item
      // promotion_id: "abc123",
    };
  });
  gtmEvents({
    event: "view_cart",
    ecommerce: {
      items: item,
    },
  });
};

export const addToCart = (data) => {
  gtmEvents({
    event: "add_to_cart",
    ecommerce: {
      items: {
        currency: data?.priceRange?.minVariantPrice?.currencyCode || "", // Currency
        item_name: data?.title || "", // Name or ID is required.
        item_id: data?.id ? data?.id.split("/")[data?.id.split("/").length - 1] : "", //ID of the item.
        price: parseFloat(data?.priceRange?.minVariantPrice?.amount || ""), //total price of the item.
        item_brand: data?.vendor || "", // brand of the item.(this is the example value)
        ...(data?.productType && data?.productType != "" && { item_category: data?.productType || "" }), //The category to which the product belongs to.
        ...(data?.size && data?.size != "" && { item_category2: data?.size }), //size of the product.
        ...(data?.color && data?.color != "" && { item_variant: data?.color }),
        index: data?.index,
        //  item_list_name: "Category Page",//e.g. Filter results, Popular Picks For You ,Recently Viewed, Best sellers, Search Results, Personal Boutique etc.
        //  item_list_id: "H3123", //ID of the list in which the item was presented to the user.
        // index: 2, // position of the item
        quantity: data?.quantity, //quantity of the item
        // promotion_id: "abc123",
        // promotion_name: "shop now"
      },
    },
  });
};

export const removeFromCart = (data) => {
  gtmEvents({
    event: "remove_from_cart",
    ecommerce: {
      items: [
        {
          currency: data?.merchandise?.price?.currencyCode || "", // Currency
          item_name: data?.merchandise?.product?.title || "", // Name or ID is required.
          item_id: data?.merchandise?.product?.id
            ? data?.merchandise?.product?.id.split("/")[data?.merchandise?.product?.id.split("/").length - 1]
            : "", //ID of the item.
          price: parseFloat(data?.merchandise?.price?.amount || ""), //total price of the item.
          item_brand: data?.merchandise?.product?.vendor || "", // brand of the item.(this is the example value)
          ...(data?.merchandise?.product?.productType &&
            data?.merchandise?.product?.productType != "" && {
              item_category: data?.merchandise?.product?.productType || "",
            }), //The category to which the product belongs to.
          ...(data?.merchandise?.selectedOptions[0]?.value &&
            data?.merchandise?.selectedOptions[0]?.value != "" && {
              item_category2: data?.merchandise?.selectedOptions[0]?.value || "",
            }),
          ...(data?.merchandise?.selectedOptions[0]?.value &&
            data?.merchandise?.selectedOptions[0]?.value != "" && {
              item_variant: data?.merchandise?.selectedOptions[1]?.value || "",
            }), // color of the product.
          index: data?.index ? data?.index + 1 : 1,
          // item_category: data?.productType || "", //The category to which the product belongs to.
          // item_category2: data?.size || "", //size of the product.
          // item_variant: data?.size || "", // color of the product.
          //  item_list_name: "Category Page",//e.g. Filter results, Popular Picks For You ,Recently Viewed, Best sellers, Search Results, Personal Boutique etc.
          //  item_list_id: "H3123", //ID of the list in which the item was presented to the user.
          // index: 2, // position of the item
          quantity: data?.quantity, //quantity of the item
          // promotion_id: "abc123",
          // promotion_name: "shop now"
        },
      ],
    },
  });
};
export const selectItem = (item) => {
  gtmEvents({
    event: "select_item",
    ecommerce: {
      items: [
        {
          currency: item?.priceRange?.minVariantPrice?.currencyCode || "", // Currency
          item_name: item?.title || "", // Name or ID is required.
          item_id: item?.id ? item?.id.split("/")[item?.id.split("/").length - 1] : "", //ID of the item.
          price: parseFloat(item?.priceRange?.minVariantPrice?.amount || ""), //total price of the item.
          item_brand: item?.vendor || "", // brand of the item.(this is the example value)
          ...(item?.productType && item?.productType != "" && { item_category: item?.productType || "" }), //The category to which the product belongs to.
          index: item?.index ? item.index + 1 : 1,
          // item_category2: size, //size of the product.
          //   item_variant: color, // color of the product.
          //  item_list_name: "Category Page",//e.g. Filter results, Popular Picks For You ,Recently Viewed, Best sellers, Search Results, Personal Boutique etc.
          //  item_list_id: "H3123", //ID of the list in which the item was presented to the user.
          // index: 2, // position of the item
          quantity: item?.totalInventory, //quantity of the item
          // promotion_id: "abc123",
          // promotion_name: "shop now"
        },
      ],
    },
  });
};

export const selectPromission = (
  storeName,
  name = "shop now",
  creativeName = "home page banner",
  slot = "1",
  promotionId = "abc123",
) => {
  gtmEvents({
    event: "select_promotion",
    ecommerce: {
      items: [
        {
          promotion_id: promotionId,
          promotion_name: name, // name of the banner/promotion
          creative_name: creativeName,
          creative_slot: slot,
          location_id: `${process.env.NEXT_PUBLIC_HOST_URL}${storeName}`, //location_id belongs to the current page url
          index: slot,
        },
      ],
    },
  });
};

export const homeImpressiongmtEvent = (storeName) => {
  gtmEvents({
    event: "view_promotion",
    ecommerce: {
      items: [
        {
          promotion_id: "abc123",
          promotion_name: "shop now", // name of the banner/promotion
          creative_name: "home page banner",
          creative_slot: "1",
          location_id: `${process.env.NEXT_PUBLIC_HOST_URL}${storeName}`, //location_id belongs to the current page url
          index: 1,
        },
      ],
    },
  });
  gtmEvents({
    event: "view_promotion",
    ecommerce: {
      items: [
        {
          location_id: `${process.env.NEXT_PUBLIC_HOST_URL}${storeName}`, //location_id belongs to the current page url

          promotion_id: "abc12d3",
          promotion_name: "shop brand", // name of the banner/promotion
          creative_name: "curated brands",
          creative_slot: "2",
          index: 2,
        },
      ],
    },
  });
  gtmEvents({
    event: "view_promotion",
    ecommerce: {
      items: [
        {
          promotion_id: "abc12ddd3",
          promotion_name: "shop all", // name of the banner/promotion
          creative_name: "new additions",
          creative_slot: "3",
          location_id: `${process.env.NEXT_PUBLIC_HOST_URL}${storeName}`, //location_id belongs to the current page url
          index: 3,
        },
      ],
    },
  });
};

export const homeProductsImpressiongmtEvent = (data: any) => {
  data?.map((item: any, index) => {
    return gtmEvents({
      event: "view_item_list",
      ecommerce: {
        items: [
          {
            currency: item?.priceRange?.minVariantPrice?.currencyCode || "", // Currency
            item_name: item?.title || "", // Name or ID is required.
            item_id: item?.id ? item?.id.split("/")[item?.id.split("/").length - 1] : "", //ID of the item.
            price: parseFloat(item?.priceRange?.minVariantPrice?.amount || ""), //total price of the item.
            item_brand: item?.vendor || "", // brand of the item.(this is the example value)
            ...(item?.productType && item?.productType != "" && { item_category: item?.productType || "" }), //The category to which the product belongs to.
            index: index + 1,
            // item_category2: size, //size of the product.
            //   item_variant: color, // color of the product.
            item_list_name: "new additions", //e.g. Filter results, Popular Picks For You ,Recently Viewed, Best sellers, Search Results, Personal Boutique etc.
            //  item_list_id: "H3123", //ID of the list in which the item was presented to the user.
            // index: 2, // position of the item
            quantity: item?.totalInventory, //quantity of the item
            // promotion_id: "abc123",
            // promotion_name: "shop now"
          },
        ],
      },
    });
  });
};

export const productsImpressiongmtEvent = (data: any, type = "all products") => {
  data.map((item: any, index) => {
    return gtmEvents({
      event: "view_item_list",
      ecommerce: {
        items: [
          {
            currency: item?.priceRange?.minVariantPrice?.currencyCode || "", // Currency
            item_name: item?.title || "", // Name or ID is required.
            item_id: item?.id ? item?.id.split("/")[item?.id.split("/").length - 1] : "", //ID of the item.
            price: parseFloat(item?.priceRange?.minVariantPrice?.amount || ""), //total price of the item.
            item_brand: item?.vendor || "", // brand of the item.(this is the example value)
            ...(item?.productType && item?.productType != "" && { item_category: item?.productType || "" }), //The category to which the product belongs to.
            index: index + 1,
            // item_category2: size, //size of the product.
            //   item_variant: color, // color of the product.
            item_list_name: type, //e.g. Filter results, Popular Picks For You ,Recently Viewed, Best sellers, Search Results, Personal Boutique etc.
            //  item_list_id: "H3123", //ID of the list in which the item was presented to the user.
            // index: 2, // position of the item
            quantity: item?.totalInventory, //quantity of the item
            // promotion_id: "abc123",
            // promotion_name: "shop now"
          },
        ],
      },
    });
  });
};

export const productDetailImpressiongmtEvent = (item: any) => {
  gtmEvents({
    event: "view_item",
    ecommerce: {
      items: [
        {
          currency: item?.priceRange?.minVariantPrice?.currencyCode || "", // Currency
          item_name: item?.title || "", // Name or ID is required.
          item_id: item?.id ? item?.id.split("/")[item?.id.split("/").length - 1] : "", //ID of the item.
          price: parseFloat(item?.priceRange?.minVariantPrice?.amount || ""), //total price of the item.
          item_brand: item?.vendor || "", // brand of the item.(this is the example value)
          ...(item?.productType && item?.productType != "" && { item_category: item?.productType || "" }), //The category to which the product belongs to.
          ...(item?.size && item?.size != "" && { item_category2: item?.size || "" }), //size of the product.
          ...(item?.color && item?.color != "" && { item_variant: item?.color || "" }), // color of the product.
          index: item?.index || 1,
          //  item_list_name: "Category Page",//e.g. Filter results, Popular Picks For You ,Recently Viewed, Best sellers, Search Results, Personal Boutique etc.
          //  item_list_id: "H3123", //ID of the list in which the item was presented to the user.
          // index: 2, // position of the item
          quantity: item?.totalInventory, //quantity of the item
          // promotion_id: "abc123",
          // promotion_name: "shop now"
        },
      ],
    },
  });
};

export const increaseCartProduct = (data) => {
  gtmEvents({
    event: "add_to_cart",
    ecommerce: {
      items: {
        currency: data?.merchandise?.price?.currencyCode || "", // Currency
        item_name: data?.merchandise?.product?.title || "", // Name or ID is required.
        item_id: data?.merchandise?.product?.id
          ? data?.merchandise?.product?.id.split("/")[data?.merchandise?.product?.id.split("/").length - 1]
          : "", //ID of the item.
        price: parseFloat(data?.merchandise?.price?.amount || ""), //total price of the item.
        item_brand: data?.merchandise?.product?.vendor || "", // brand of the item.(this is the example value)
        ...(data?.merchandise?.product?.productType &&
          data?.merchandise?.product?.productType != "" && {
            item_category: data?.merchandise?.product?.productType || "",
          }), //The category to which the product belongs to.
        ...(data?.merchandise?.selectedOptions[0]?.value &&
          data?.merchandise?.selectedOptions[0]?.value != "" && {
            item_category2: data?.merchandise?.selectedOptions[0]?.value || "",
          }), //size of the product.
        ...(data?.merchandise?.selectedOptions[0]?.value &&
          data?.merchandise?.selectedOptions[0]?.value != "" && {
            item_variant: data?.merchandise?.selectedOptions[1]?.value || "",
          }), // color of the product.
        index: data?.index ? data?.index + 1 : 1,
        // item_category: data?.productType || "", //The category to which the product belongs to.
        // item_category2: data?.size || "", //size of the product.
        // item_variant: data?.size || "", // color of the product.
        //  item_list_name: "Category Page",//e.g. Filter results, Popular Picks For You ,Recently Viewed, Best sellers, Search Results, Personal Boutique etc.
        //  item_list_id: "H3123", //ID of the list in which the item was presented to the user.
        // index: 2, // position of the item
        quantity: data?.quantity, //quantity of the item
        // promotion_id: "abc123",
        // promotion_name: "shop now"
      },
    },
  });
};

export const buyNowbeginCheckout = (data: any) => {
  gtmEvents({
    event: "begin_checkout",
    ecommerce: {
      items: [
        {
          currency: data?.priceRange?.minVariantPrice?.currencyCode || "", // Currency
          item_name: data?.title || "", // Name or ID is required.
          item_id: data?.id ? data?.id.split("/")[data?.id.split("/").length - 1] : "", //ID of the item.
          price: parseFloat(data?.priceRange?.minVariantPrice?.amount || ""), //total price of the item.
          item_brand: data?.vendor || "", // brand of the item.(this is the example value)
          ...(data?.productType && data?.productType != "" && { item_category: data?.productType || "" }), //The category to which the product belongs to.
          index: data?.index ? data.index : 1,
          item_category2: data?.size || "", //size of the product.
          item_variant: data?.color || "", // color of the product.
          //  item_list_name: "Category Page",//e.g. Filter results, Popular Picks For You ,Recently Viewed, Best sellers, Search Results, Personal Boutique etc.
          //  item_list_id: "H3123", //ID of the list in which the item was presented to the user.
          // index: 2, // position of the item
          quantity: data.quantity, //quantity of the item
          item_category3: "buy now button",
          // promotion_id: "abc123",
          // promotion_name: "shop now"
        },
      ],
    },
  });
};
