import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Link from "@mui/material/Link";
import EastIcon from "@mui/icons-material/East";
import Scrollspy from "react-scrollspy";

const Faq = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <CustomContainer>
      <Box sx={styles.MainBox}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            paddingTop: "130px",
            paddingLeft: { xs: "0px", lg: "20px" },
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
                items={["creator", "brand", "shopper", "general"]}
                currentClassName="faq-current"
                offset={-500}
              >
                <Box pb={26}>
                  <Link href="#creator" sx={styles.faqLink}>
                    Creator
                  </Link>
                  <Box className="faqHide">
                    <EastIcon sx={styles.eastIconStyle} />
                  </Box>
                </Box>
                <Box style={{ paddingBottom: "26px" }}>
                  <Link href="#brand" sx={styles.faqLink}>
                    Brand
                  </Link>
                  <Box className="faqHide">
                    <EastIcon sx={styles.eastIconStyle} />
                  </Box>
                </Box>
                <Box style={{ paddingBottom: "26px" }}>
                  <Link href="#shopper" sx={styles.faqLink}>
                    Shopper
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
                Creator
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
                  <Typography sx={styles.acordianText}>How do I get paid my commision?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Pedlar will pay your commisions monthly to your nominated bank account.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={styles.acordianText}>Who handles customer support?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Pedlar handles all customer support, including shipping queries, returns and all general enquires.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={styles.acordianText}>Who controls my Pedlar store?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Your Pedlar store is yours! Control what products are on your store. Control the personalisation of
                    your store. Control how, where and when you post about your Pedlar store.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel4" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={styles.acordianText}>Can I add and remove products from my store?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Yep, you can add or remove products whenever you want.
                  </Typography>
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
                  <Typography sx={styles.acordianText}>
                    What happens if there is a Brand I want on my store that isnt on Pedlar?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    We're always keen to bring on new Brands. Let us know by reaching out to hello@pedlar.store
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box sx={styles.scrollSection} id="brand">
              <Typography sx={styles.faqText} fontWeight={"600"} fontSize={"40px"}>
                Brands
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
                  <Typography sx={styles.acordianText}>
                    Will all of my stock be on Pedlar or can I select what I want to sell on Pedlar?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    You have the option of selecting what stock you want to sell through Pedlar. As part of the
                    onboarding process, our team will work with you to include or exclude any products you do not want
                    on Pedlar.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel7" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={styles.acordianText}>When and how do I receive payment for sales?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Payment will be remitted directly to the brand’s nominated bank account 30 days after the sale is
                    made. This allows for returns to be processed before payment is remitted.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel8"} onChange={handleChange("panel8")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel8" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={styles.acordianText}>
                    How does the post-purchase customer communications work?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    When a purchase is made through Pedlar, we send the order confirmation email to the customer. Pedlar
                    then takes care of any customer support that is required. If necessary, Pedlar will reach out to
                    brands on behalf of customers.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel9"} onChange={handleChange("panel9")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel9" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={styles.acordianText}>Can Pedlar change or update my product information? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    No, Pedlar is only able to read your information and cant make any changes. You retain all control
                    over your products and pricing.
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
                  expandIcon={expanded === "panel10" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel5bh-content"
                  id="panel5bh-header"
                >
                  <Typography sx={styles.acordianText}>
                    What if there are particular Influencers and Creators I want to sell my products?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    We're always keen to bring on new Creators. Let us know by reaching out to hello@pedlar.store
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box sx={styles.scrollSection} id="shopper">
              <Typography sx={styles.faqText} fontWeight={"600"} fontSize={"40px"}>
                Shopper
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
                  <Typography sx={styles.acordianText}>Why would I use Pedlar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Pedlar is an end-to-end platform that allows you to shop your favourite creators' or influencers'
                    style and aesthetic. From inspiration to purchase, everything takes place in one place without
                    having to jump across multiple platforms or websites.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel12"} onChange={handleChange("panel12")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel12" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={styles.acordianText}>Who am I buying from?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    At Pedlar you can buy items from many different brands. You are buying the items directly from the
                    brands.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel13"} onChange={handleChange("panel13")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel13" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={styles.acordianText}>Is Pedlar more expensive than the brands store?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    All products listed on Pedlar are priced the same as on the brands website. If a brand changes the
                    price of their products, this will automatically update across Pedlar stores.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel14"} onChange={handleChange("panel14")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel14" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={styles.acordianText}>How do I return or exchange an order?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Submit your order number and email address through our Returns form linked on every Pedlar store.
                    Once you have submitted your return, we'll send through a pre-paid returns label then simply post
                    your item(s).
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
                  <Typography sx={styles.acordianText}>Who will ship my order and can I track my order?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    All orders are shipped direct by the brand. When a purchase has been made, you will receive a
                    confirmation from Pedlar. You will then be provided with a tracking number as you normally would
                    when purchasing something online.
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
              <Accordion expanded={expanded === "panel17"} onChange={handleChange("panel17")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel17" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={styles.acordianText}>What does End-to-end mean?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    End-to-end means that Pedlar provides a platform that covers the shopping journey from browsing to
                    purchase. This means shoppers don't need to bounce around different websites or scour the internet
                    looking for the product and/or brand an influencer was wearing - they can simply browse and shop
                    their Pedlar store.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel18"} onChange={handleChange("panel18")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel18" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={styles.acordianText}>What is Creator Commerce?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Creator commerce is the point where commerce and the Creator Economy intersect. It is built off the
                    premise that people trust people, not brands. Creator commerce highlights the shift in control and
                    perception of Influencers and creators. No longer are these tools to be used by businesses. Instead,
                    these are viable channels where a Creator's personal brand has become the epicentre of a surrounding
                    communuty.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel19"} onChange={handleChange("panel19")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel19" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={styles.acordianText}>I have a question who do I speak to?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Pedlar customer support are responsible for answering all questions, whether they are specific to a
                    product, an order, returns or a general enquiry. We can be reached by using the chat support on all
                    Pedlar Storefronts, or you can reach out to hello@pedlar.store
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel20"}
                onChange={handleChange("panel20")}
                sx={styles.acordianMain}
                style={{ borderBottom: "1px solid rgb(28, 27, 31)", borderRadius: "unset" }}
              >
                <AccordionSummary
                  expandIcon={expanded === "panel20" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel5bh-content"
                  id="panel5bh-header"
                >
                  <Typography sx={styles.acordianText}>I have a question that is not listed</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    For any other questions or comments please reach out to hello@pedlar.store
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Faq;
