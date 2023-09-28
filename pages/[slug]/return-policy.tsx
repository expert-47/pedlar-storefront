import { Box, Button, Divider, Typography, useMediaQuery, Theme } from "@mui/material";
import BaseFooter from "components/footer/baseFooter";
import Layout, { CustomContainer } from "components/layout";
import React from "react";
import { getUserDetail } from "apis/restApi/getUserDetail";
import Link from "next/link";
import { styles } from "../../landing-components/static-pages/return-policy/style";
import { seo } from "utils/seoData";

const Returnpolicy = (props: any) => {
  const { slug, headerData } = props;
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Layout
      seo={{
        title: seo.shippingTitle,
        description: seo.shippingDescription,
      }}
      slug={slug}
      storefrontName={headerData?.data?.storefrontName}
      collectionId={headerData?.data?.collectionId}
      productsPage={false}
      isMobile={isMobile}
    >
      <CustomContainer>
        <Box
          style={{
            paddingLeft: "20px",
          }}
        >
          <Typography
            textTransform={"none"}
            fontSize={{ xs: "48px", sm: "64px", md: "64px", lg: "64px" }}
            fontWeight={"700"}
            style={{ lineHeight: "normal", paddingBottom: "60px", paddingTop: "11px" }}
          >
            Shipping and Returns
          </Typography>

          <Typography textTransform={"none"} fontSize={"20px"} fontWeight={"400"} sx={styles.spacing}>
            We want you to be completely satisfied with your purchased; if for any you change your mind, we&apos;re
            happy to refund all full priced items
          </Typography>
          <Link href={`/${slug}/return-form`}>
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
            We understand that purchasing items online don’t always go as planned, that&quot;s why we offer free returns
            within Australia. For exchanges, please return the item and then re-order the preferred item.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} sx={styles.spacing}>
            To organise a return please submit a returns form on the Pedlar store you bought from and a member of our
            team will be in contact with instructions.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} sx={styles.spacing}>
            Returns must be received by us within 14 days of receiving your item. We offer a full refund for full priced
            items in original condition with their original packaging and tags. Item(s) must not have been worn, washed
            or altered in any way. Brands have the rights to deny any item/s that aren&quot;t returned in their original
            condition.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} sx={styles.spacing}>
            Once we receive your return and we are satisfied the items are in original condition, we will process this
            refund via the same payment method used to place the order. Please allow 2-3 business days for your return
            to be processed.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"} sx={styles.spacing}>
            If your order has arrived damaged, doesn&apos;t match the listing description or you are concerned that
            there is a fault, please submit returns form on the Pedlar store you bought from and our Team will be in
            contact to assist.
          </Typography>
        </Box>
      </CustomContainer>
      <Divider sx={{ marginTop: "50px", marginBottom: "10px", height: "1px" }} />
      <BaseFooter />
    </Layout>
  );
};

export default Returnpolicy;

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const headerData = await getUserDetail(slug);
  try {
    if (headerData?.data) {
      return {
        props: {
          headerData: headerData ? headerData : [],
          slug: slug || [],
        },
      };
    } else {
      return {
        props: {
          error: true,
        },
      };
    }
  } catch (error) {
    console.log("");
  }
}
