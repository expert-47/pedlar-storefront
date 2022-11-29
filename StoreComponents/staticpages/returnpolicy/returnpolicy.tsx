import React from "react";
import { CustomContainer } from "../../landinglayout";
import { Grid, Typography, Box } from "@mui/material";
import { styles } from "./style";

const ReturnPolicy = () => {
  return (
    <CustomContainer>
      <Box sx={styles.MainBox}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography textTransform={"none"} fontSize={"48px"}>
            Pedlar Shipping and Returns Policy (Shoppers)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"}>
            Shipping
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            All shipping is free on Pedlar.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            Our Brands on Pedlar provide efficient shipping service throughout Australia. Delivery and Shipping is
            organised by the brands.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            We ask the brands on Pedlar to dispatch items within 48 hours. Please reach out to our team at
            hello@pedlar.store if you have any queries relating to the shipment of your order.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"}>
            Delivery Timings
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            The standard delivery time differs between brands. In the event that a product ordered is not available we
            will endeavour to notify you within 2 business days to arrange an alternative product or a full refund.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"}>
            Why is my order split into different deliveries?
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            If you have purchased multiple items from different brands you will receive separate deliveries. All the
            products sold Pedlar will be shipped directly from the brand.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"}>
            Returns
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            We understand that purchasing items online don’t always go as planned, that"s why we offer free returns
            within Australia. For exchanges, please return the item and then re-order the preferred item.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            To organise a return please submit a returns form on the Pedlar store you bought from and a member of our
            team will be in contact with instructions.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            Returns must be received by us within 14 days of receiving your item. We offer a full refund for full priced
            items in original condition with their original packaging and tags. Item(s) must not have been worn, washed
            or altered in any way. Brands have the rights to deny any item/s that aren"t returned in their original
            condition.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            Once we receive your return and we are satisfied the items are in original condition, we will process this
            refund via the same payment method used to place the order. Please allow 2-3 business days for your return
            to be processed.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            If your order has arrived damaged, doesn't match the listing description or you are concerned that there is
            a fault, please submit returns form on the Pedlar store you bought from and our Team will be in contact to
            assist.
          </Typography>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default ReturnPolicy;
