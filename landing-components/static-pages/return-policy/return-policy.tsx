import React from "react";
import { CustomContainer } from "../../landinglayout";
import { Typography, Box, Button, Grid } from "@mui/material";
import { styles } from "./style";
import Link from "next/link";

const ReturnPolicy = (props) => {
  const { slug } = props;

  return (
    <CustomContainer>
      <Box sx={styles.MainBox}>
        <Typography
          textTransform={"none"}
          fontSize={{ xs: "48px", sm: "64px", md: "64px", lg: "64px" }}
          fontWeight={"700"}
          style={{ lineHeight: "normal", paddingBottom: "60px", paddingTop: "11px" }}
        >
          Shipping and Returns
        </Typography>

        <Typography textTransform={"none"} fontSize={"20px"} fontWeight={"400"} sx={styles.spacing}>
          We want you to be completely satisfied with your purchased; if for any you change your mind, we're happy to
          refund all full priced items
        </Typography>
        <Link href={"/return-form"}>
          <Button sx={styles.returnbutton}>Start Return</Button>
        </Link>
        <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"} sx={styles.spacing}>
          Shipping
        </Typography>
        <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} sx={styles.spacing}>
          All shipping is free on Pedlar.
        </Typography>
        <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} sx={styles.spacing}>
          Our Brands on Pedlar provide efficient shipping service throughout Australia. Delivery and Shipping is
          organised by the brands.
        </Typography>
        <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} sx={styles.spacing}>
          We ask the brands on Pedlar to dispatch items within 48 hours. Please reach out to our team at
          hello@pedlar.store if you have any queries relating to the shipment of your order.
        </Typography>
        <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"} sx={styles.spacing}>
          Delivery Timings
        </Typography>
        <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} sx={styles.spacing}>
          The standard delivery time differs between brands. In the event that a product ordered is not available we
          will endeavour to notify you within 2 business days to arrange an alternative product or a full refund.
        </Typography>
        <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"} sx={styles.spacing}>
          Why is my order split into different deliveries?
        </Typography>
        <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} sx={styles.spacing}>
          If you have purchased multiple items from different brands you will receive separate deliveries. All the
          products sold Pedlar will be shipped directly from the brand.
        </Typography>
        <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"} sx={styles.spacing}>
          Returns
        </Typography>
        <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} sx={styles.spacing}>
          We understand that purchasing items online don’t always go as planned, that"s why we offer free returns within
          Australia. For exchanges, please return the item and then re-order the preferred item.
        </Typography>
        <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} sx={styles.spacing}>
          To organise a return please submit a returns form on the Pedlar store you bought from and a member of our team
          will be in contact with instructions.
        </Typography>
        <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} sx={styles.spacing}>
          Returns must be received by us within 14 days of receiving your item. We offer a full refund for full priced
          items in original condition with their original packaging and tags. Item(s) must not have been worn, washed or
          altered in any way. Brands have the rights to deny any item/s that aren"t returned in their original
          condition.
        </Typography>
        <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} sx={styles.spacing}>
          Once we receive your return and we are satisfied the items are in original condition, we will process this
          refund via the same payment method used to place the order. Please allow 2-3 business days for your return to
          be processed.
        </Typography>
        <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} sx={styles.spacing}>
          If your order has arrived damaged, doesn't match the listing description or you are concerned that there is a
          fault, please submit returns form on the Pedlar store you bought from and our Team will be in contact to
          assist.
        </Typography>
      </Box>
    </CustomContainer>
  );
};

export default ReturnPolicy;
