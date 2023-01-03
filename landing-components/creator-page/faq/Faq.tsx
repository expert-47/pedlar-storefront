import React from "react";
import { styles } from "./style";
import { Box, Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CustomContainer } from "../../landinglayout";
import { useTheme } from "@mui/material";

const Faq = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  const theme = useTheme();
  return (
    <CustomContainer>
      <Box
        paddingX={{ xs: theme.spacing(15), md: theme.spacing(20), lg: theme.spacing(30) }}
        style={{ zIndex: "999", position: "relative" }}
      >
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{ justifyContent: "space-between", marginTop: "100px" }}
          paddingX={{ xs: theme.spacing(5), sm: theme.spacing(25), md: theme.spacing(20), lg: theme.spacing(30) }}
        >
          <Grid item xs={12} sm={12} md={5} lg={4}>
            <Typography sx={styles.faqText}>Frequently Asked Questions</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
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
                <Typography sx={styles.acordianText} margin={{ xs: "10px 0px" }}>
                  How do I build my store?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.acordianPara}>
                  We'll send you a link once we accept your application. Select products from your favourite brands,
                  customise your store to make it your own and share your unique URL with your followers. All done in
                  less than two minutes!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} sx={styles.acordianMain}>
              <AccordionSummary
                expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={styles.acordianText} margin={{ xs: "10px 0px" }}>Do I have to buy or manage inventory?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.acordianPara}>
                  Nope, all inventory is held by the brands. This also means you don't have to worry about shipping and
                  returns.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} sx={styles.acordianMain}>
              <AccordionSummary
                expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={styles.acordianText} margin={{ xs: "10px 0px" }}>Where and how can I promote my Pedlar store?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.acordianPara}>
                  You can promote your Pedlar site wherever you want by sharing your unique URL. Popular places to start
                  are link in bio on your social channels and LinkTree.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} sx={styles.acordianMain}>
              <AccordionSummary
                expandIcon={expanded === "panel4" ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={styles.acordianText} margin={{ xs: "10px 0px" }}>Why should I set up a Pedlar store?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.acordianPara}>
                  Pedlar stores are a quick and risk-free way to set up your own digital store and sell products from
                  brands you love. Your storefront will be a place for your community to browse and shop your style. The
                  best part: you'll earn 20% commision on all the sales you make.
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
                <Typography sx={styles.acordianText} margin={{ xs: "10px 0px" }}>How can I join Pedlar?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.acordianPara}>
                  Since Pedlar is an invite only platform, submit an application and our team will get back to you
                  within 24 hours. Pedlar is excited to partner with Creators with all types of aesthetic and style!
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Faq;
