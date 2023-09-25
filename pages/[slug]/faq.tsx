import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  Theme,
} from "@mui/material";
import React from "react";
import { CustomContainer } from "../../landing-components/landinglayout";
import { styles } from "../../landing-components/static-pages/faq/style";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Link from "@mui/material/Link";
import EastIcon from "@mui/icons-material/East";
import Scrollspy from "react-scrollspy";
import Layout from "components/layout";
import BaseFooter from "components/footer/baseFooter";

import { getUserDetail } from "apis/restApi/getUserDetail";
import { seo } from "utils/seoData";

const Faq = (props) => {
  const { slug, headerData } = props;
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Layout
      slug={slug}
      seo={{
        title: seo.faqTitle,
        description: seo.faqDescription,
      }}
      storefrontName={headerData?.data?.storefrontName}
      collectionId={headerData?.data?.collectionId}
      isMobile={isMobile}
    >
      <CustomContainer>
        <Box sx={styles.MainBox}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
              paddingTop: "13px",
              paddingLeft: { xs: "0px", lg: "15px" },
            }}
          >
            <Typography
              sx={styles.faqTextmain}
              fontWeight={"700"}
              fontSize={{ xs: "48px", sm: "64px", md: "64px", lg: "64px" }}
            >
              Frequently Asked Questions
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.GridStyles} style={{ position: "relative" }}>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              sx={{
                ...styles.tabList,
                paddingTop: { xs: "0px", lg: "0px" },
              }}
            >
              <div className="faq-sticky">
                <Scrollspy
                  items={["creator", "return", "orders", "general"]}
                  currentClassName="faq-current"
                  offset={-500}
                >
                  <Box style={{ paddingBottom: "26px" }}>
                    <Link href="#creator" sx={styles.faqLink}>
                      Shipping
                    </Link>
                    <Box className="faqHide">
                      <EastIcon sx={styles.eastIconStyle} />
                    </Box>
                  </Box>
                  <Box style={{ paddingBottom: "26px" }}>
                    <Link href="#return" sx={styles.faqLink}>
                      Returns
                    </Link>
                    <Box className="faqHide">
                      <EastIcon sx={styles.eastIconStyle} />
                    </Box>
                  </Box>
                  <Box style={{ paddingBottom: "26px" }}>
                    <Link href="#orders" sx={styles.faqLink}>
                      Orders
                    </Link>
                    <Box className="faqHide">
                      <EastIcon sx={styles.eastIconStyle} />
                    </Box>
                  </Box>
                  <Box style={{ paddingBottom: "26px" }}>
                    <Link href="#general" sx={styles.faqLink}>
                      General
                    </Link>
                    <Box className="faqHide">
                      <EastIcon sx={styles.eastIconStyle} />
                    </Box>
                  </Box>
                </Scrollspy>
              </div>
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={8}>
              <Box sx={styles.scrollSection} id="creator">
                <Typography sx={styles.faqText} fontWeight={"600"} fontSize={"40px"}>
                  Shipping
                </Typography>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  sx={styles.acordianMain}
                  style={{ borderRadius: "unset" }}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel1" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={styles.acordianText}>How much does shipping cost?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>All shipping is free on Pedlar.</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} sx={styles.acordianMain}>
                  <AccordionSummary
                    expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={styles.acordianText}>Who will ship my order and can I track my order?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      All orders are shipped direct by the Brand. When a purchase has been made, you will receive a
                      confirmation from Pedlar. You will then be provided with a tracking number as you normally would
                      when purchasing something online.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} sx={styles.acordianMain}>
                  <AccordionSummary
                    expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography sx={styles.acordianText}>Why is my order split into different deliveries?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      If you have purchased multiple items from different Brands you will receive separate deliveries.
                      All the products sold through Pedlar will be shipped directly from the brand.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} sx={styles.acordianMain}>
                  <AccordionSummary
                    expandIcon={expanded === "panel4" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={styles.acordianText}>Do you ship internationally?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>Yes, we ship internationally</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                  sx={styles.acordianMain}
                  style={{ borderBottom: "1px solid rgb(28, 27, 31)", borderRadius: "unset" }}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel5" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                  >
                    <Typography sx={styles.acordianText}>How long does shipping take?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>Shipping times will vary depending on the Brand.</Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
              <Box sx={styles.scrollSection} id="return">
                <Typography sx={styles.faqText} fontWeight={"600"} fontSize={"40px"}>
                  Returns
                </Typography>
                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                  sx={styles.acordianMain}
                  style={{ borderRadius: "unset" }}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel6" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={styles.acordianText}>How much does it cost to return an order?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      It is free to return items to the Brands. Pedlar will pay for return shipping.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")} sx={styles.acordianMain}>
                  <AccordionSummary
                    expandIcon={expanded === "panel7" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={styles.acordianText}>How do I return or exchange an order?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      Submit your order number and email address through our <a href="return-form">Returns</a> form
                      linked on every Pedlar store. Once you have submitted your return, we'll send through a pre-paid
                      returns label, then simply post your item(s).
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel8"} onChange={handleChange("panel8")} sx={styles.acordianMain}>
                  <AccordionSummary
                    expandIcon={expanded === "panel8" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography sx={styles.acordianText}>Are there any items I can't return or exchange?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      Yes, for hygene reasons Pedlar does not offer returns or exhanges on swimwear, jewellery,
                      underwear, lingerie or innerwear.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel9"} onChange={handleChange("panel9")} sx={styles.acordianMain}>
                  <AccordionSummary
                    expandIcon={expanded === "panel9" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={styles.acordianText}>When will I be refunded for my return?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      Once we receive your return and we are satisfied the items are in original condition, we will
                      process this refund via the same payment method used to place the order. Please allow 2-3 business
                      days once the item/s are received for your return to be processed.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel10"}
                  onChange={handleChange("panel10")}
                  sx={styles.acordianMain}
                  style={{ borderBottom: "1px solid rgb(28, 27, 31)", borderRadius: "unset" }}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel8" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                  >
                    <Typography sx={styles.acordianText}>Is there a time limit on returns?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      Returns must be received by the Brand within 14 days of receiving your item. We offer a full
                      refund for full priced items in original, as new condition with their original packaging and tags.
                      Item(s) must not have been worn, washed or altered in any way. Brands have the right to deny any
                      item/s that aren't returned in their original condition.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
              <Box sx={styles.scrollSection} id="orders">
                <Typography sx={styles.faqText} fontWeight={"600"} fontSize={"40px"}>
                  Orders
                </Typography>
                <Accordion
                  expanded={expanded === "panel11"}
                  onChange={handleChange("panel11")}
                  sx={styles.acordianMain}
                  style={{ borderRadius: "unset" }}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel11" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={styles.acordianText}>Is my credit card information secure?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      We will never store your credit card information. We process all orders via Shopify, whose secure
                      server and encryption technology goes above and beyond security industry standards.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel12"}
                  onChange={handleChange("panel12")}
                  sx={styles.acordianMain}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel12" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={styles.acordianText}>How can I pay for things?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      We accept the following methods of payment: Shop Pay
                      <br /> Visa
                      <br /> Mastercard
                      <br /> American Express
                      <br /> Paypal
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel13"}
                  onChange={handleChange("panel13")}
                  sx={styles.acordianMain}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel13" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography sx={styles.acordianText}>Will I be charged duties and taxes?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      If you do not live in Australia, please be aware of any import duties and taxes that may be
                      charged on deliveries to your country. Duties and taxes will be based on the value of the order
                      and the tax-free threshold (if it exists) for goods imported. These charges depend on your
                      country’s import legislation and will not be covered by Pedlar.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel14"}
                  onChange={handleChange("panel14")}
                  sx={styles.acordianMain}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel14" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={styles.acordianText}>
                      Can I change or amend my order once it has been placed?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      If you notice something is incorrect with your order after it has been placed, please contact us
                      immediately. We will do our best to change or amend the order, however, we are unable to make any
                      changes once your order has been dispatched.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel15"}
                  onChange={handleChange("panel15")}
                  sx={styles.acordianMain}
                  style={{ borderBottom: "1px solid rgb(28, 27, 31)", borderRadius: "unset" }}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel15" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                  >
                    <Typography sx={styles.acordianText}>
                      What do I do if I receive an incorrect or faulty item?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      Incorrect items – please email us with your order number/receipt and details of the incorrect item
                      received. Once we receive your request, we will assist with correcting your order.
                      <br />
                      <br />
                      Faulty items – Please email us your order number/receipt and a photo of the fault and our customer
                      care team will assist with the matter
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
              <Box sx={styles.scrollSection} id="general">
                <Typography sx={styles.faqText} fontWeight={"600"} fontSize={"40px"}>
                  General
                </Typography>
                <Accordion
                  expanded={expanded === "panel16"}
                  onChange={handleChange("panel16")}
                  sx={styles.acordianMain}
                  style={{ borderRadius: "unset" }}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel16" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={styles.acordianText}>What is Pedlar?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      Pedlar is an e-commerce platform that allows creators and influencers to build and personalise
                      digital storefronts to showcase and sell products from brands they love. Our end-to-end platform
                      allows us to close the gap on the shopping journey.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel17"}
                  onChange={handleChange("panel17")}
                  sx={styles.acordianMain}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel17" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={styles.acordianText}>
                      Is Pedlar the same price as buying direct from the Brand?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      Yes, all products listed on Pedlar are priced the same as on the brands website. If a brand
                      changes the price of their products, this will automatically update across Pedlar stores.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel18"}
                  onChange={handleChange("panel18")}
                  sx={styles.acordianMain}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel18" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography sx={styles.acordianText}>Who handles customer support?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      Pedlar handles all customer support, including shipping queries, returns and all general enquires.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel19"}
                  onChange={handleChange("panel19")}
                  sx={styles.acordianMain}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel19" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={styles.acordianText}>
                      What happens if there is a Creator or Brand I want on Pedlar that isnt on Pedlar?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      We're always looking to bring on new Creators and Brands. Let us know by reaching out to
                      hello@pedlar.store
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel20"}
                  onChange={handleChange("panel20")}
                  sx={styles.acordianMain}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel20" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={styles.acordianText}>Who am I buying from?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      At Pedlar you can buy items from many different Brands. You are buying the items directly from the
                      Brands.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel21"}
                  onChange={handleChange("panel21")}
                  sx={styles.acordianMain}
                  style={{ borderBottom: "1px solid rgb(28, 27, 31)", borderRadius: "unset" }}
                >
                  <AccordionSummary
                    expandIcon={expanded === "panel21" ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                  >
                    <Typography sx={styles.acordianText}>
                      How does the post-purchase customer communications work?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={styles.acordianPara}>
                      When a purchase is made through Pedlar, we send the order confirmation email to you. Pedlar then
                      takes care of any customer support that is required. If necessary, Pedlar will reach out to Brands
                      on your behalf.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CustomContainer>
      <Divider sx={{ marginTop: "50px", marginBottom: "10px", height: "1px" }} />
      <BaseFooter />
    </Layout>
  );
};

export default Faq;

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const headerData = await getUserDetail(slug);

  return {
    props: {
      headerData: headerData ? headerData : [],
      slug: slug || [],
    },
  };

  return {
    props: {
      error: true,
    },
  };
}
