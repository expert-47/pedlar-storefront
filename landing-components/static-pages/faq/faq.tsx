import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { CustomContainer } from "../../landinglayout";
import { styles } from "./style";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Faq = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <CustomContainer>
      <Box sx={styles.MainBox}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={styles.faqText} fontWeight={"700"} fontSize={"64px"}>
            Frequently Asked Questions
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.GridStyles}>
          <Grid item xs={12} sm={12} md={4} lg={4} style={{ textAlign: "center" }}>
            <Typography sx={styles.faqText} fontWeight={"600"} fontSize={"22px"} style={{ cursor: "pointer" }}>
              Creator
            </Typography>
            <Typography sx={styles.faqText} fontWeight={"600"} fontSize={"22px"} style={{ cursor: "pointer" }}>
              Brand
            </Typography>
            <Typography sx={styles.faqText} fontWeight={"600"} fontSize={"22px"} style={{ cursor: "pointer" }}>
              Shopper
            </Typography>
            <Typography sx={styles.faqText} fontWeight={"600"} fontSize={"22px"} style={{ cursor: "pointer" }}>
              General
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Box sx={styles.headingbox}>
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
                  <Typography sx={styles.acordianText}>Why should I set up a Pedlar store?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Pedlar stores are a quick and risk-free way to set up your own digital store and sell products from
                    brands you love. Your storefront will be a place for your community to browse and shop your style.
                    The best part: you'll earn 20% commision on all the sales you make.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={styles.acordianText}>Do I get paid for being on Pedlar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Creators earn a 20% commission on all sales made on their Pedlar store. Brands only pay commision
                    when a sale is made.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={styles.acordianText}>Does it cost to join Pedlar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Nope! It's completely free for both Creators and Brands.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel4" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={styles.acordianText}>How can I join Pedlar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Since Pedlar is an invite only platform, submit an application and our team will get back to you
                    within 24 hours. Pedlar is excited to partner with Creators with all types of aesthetic and style!
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
                  <Typography sx={styles.acordianText}>Does my store have its own unique URL?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Yep, when signing up you can choose your own unique URL.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box sx={styles.headingbox}>
              <Typography sx={styles.faqText} fontWeight={"600"} fontSize={"40px"}>
                Brands
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
                  <Typography sx={styles.acordianText}>Why should I set up a Pedlar store?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Pedlar stores are a quick and risk-free way to set up your own digital store and sell products from
                    brands you love. Your storefront will be a place for your community to browse and shop your style.
                    The best part: you'll earn 20% commision on all the sales you make.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={styles.acordianText}>Do I get paid for being on Pedlar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Creators earn a 20% commission on all sales made on their Pedlar store. Brands only pay commision
                    when a sale is made.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={styles.acordianText}>Does it cost to join Pedlar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Nope! It's completely free for both Creators and Brands.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel4" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={styles.acordianText}>How can I join Pedlar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Since Pedlar is an invite only platform, submit an application and our team will get back to you
                    within 24 hours. Pedlar is excited to partner with Creators with all types of aesthetic and style!
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
                  <Typography sx={styles.acordianText}>Does my store have its own unique URL?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Yep, when signing up you can choose your own unique URL.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box sx={styles.headingbox}>
              <Typography sx={styles.faqText} fontWeight={"600"} fontSize={"40px"}>
                Shopper
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
                  <Typography sx={styles.acordianText}>Why should I set up a Pedlar store?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Pedlar stores are a quick and risk-free way to set up your own digital store and sell products from
                    brands you love. Your storefront will be a place for your community to browse and shop your style.
                    The best part: you'll earn 20% commision on all the sales you make.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={styles.acordianText}>Do I get paid for being on Pedlar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Creators earn a 20% commission on all sales made on their Pedlar store. Brands only pay commision
                    when a sale is made.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={styles.acordianText}>Does it cost to join Pedlar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Nope! It's completely free for both Creators and Brands.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel4" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={styles.acordianText}>How can I join Pedlar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Since Pedlar is an invite only platform, submit an application and our team will get back to you
                    within 24 hours. Pedlar is excited to partner with Creators with all types of aesthetic and style!
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
                  <Typography sx={styles.acordianText}>Does my store have its own unique URL?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Yep, when signing up you can choose your own unique URL.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box sx={styles.headingbox}>
              <Typography sx={styles.faqText} fontWeight={"600"} fontSize={"40px"}>
                General
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
                  <Typography sx={styles.acordianText}>Why should I set up a Pedlar store?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Pedlar stores are a quick and risk-free way to set up your own digital store and sell products from
                    brands you love. Your storefront will be a place for your community to browse and shop your style.
                    The best part: you'll earn 20% commision on all the sales you make.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={styles.acordianText}>Do I get paid for being on Pedlar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Creators earn a 20% commission on all sales made on their Pedlar store. Brands only pay commision
                    when a sale is made.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={styles.acordianText}>Does it cost to join Pedlar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Nope! It's completely free for both Creators and Brands.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} sx={styles.acordianMain}>
                <AccordionSummary
                  expandIcon={expanded === "panel4" ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={styles.acordianText}>How can I join Pedlar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Since Pedlar is an invite only platform, submit an application and our team will get back to you
                    within 24 hours. Pedlar is excited to partner with Creators with all types of aesthetic and style!
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
                  <Typography sx={styles.acordianText}>Does my store have its own unique URL?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={styles.acordianPara}>
                    Yep, when signing up you can choose your own unique URL.
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
