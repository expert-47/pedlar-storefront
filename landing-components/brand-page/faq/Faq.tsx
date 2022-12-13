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
        paddingX={{ xs: theme.spacing(15), sm: theme.spacing(30), md: theme.spacing(30), lg: theme.spacing(35) }}
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
            <Typography sx={styles.faqText}>Frequently Asked Questionss</Typography>
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
                <Typography sx={styles.acordianText}>How do I get my brand on Pedlar?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.acordianPara}>
                  It takes less than two minutes to get set up on Pedlar. We seamlessly integrate your Shopify store into our platform using a Shopify app.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} sx={styles.acordianMain}>
              <AccordionSummary
                expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={styles.acordianText}>Do I need to manually upload all my product images, descriptions, sizes, prices and other product information onto Pedlar?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.acordianPara}>
                  No. Once we have integrated your Shopify store with Pedlar, all inventory management is done automatically in real-time through APIs.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} sx={styles.acordianMain}>
              <AccordionSummary
                expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={styles.acordianText}>What happens if there are changes to product prices, images and stock levels (e.g. product is sold out)?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.acordianPara}>
                All product information including prices, images and inventory levels are updated automatically on Pedlar. This means when changes are made on your Shopify store it is reflected on Pedlar in real time.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} sx={styles.acordianMain}>
              <AccordionSummary
                expandIcon={expanded === "panel4" ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={styles.acordianText}>How will I receive orders?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.acordianPara}>
                You receive orders as soon as they are made and they will appear as normal on your Shopify store. All Pedlar orders are tagged from Pedlar so you'll know its an order from us.
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
                <Typography sx={styles.acordianText}>How does shipping and returns work?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.acordianPara}>
                You (the brand) ships the order using your normal order fulfilment process. Pedlar is committed to adhering to your shipping and returns policy so it's business as usual for you. If Pedlar chooses to subsidise shipping and returns, Pedlar will absorb that cost.
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
