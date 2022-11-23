import React from "react"
import {styles} from "./style"
import { Box, Grid, Typography} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {

    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
        <Grid container item xs={12} sm={12} md={12} lg={12}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
                <Typography sx={styles.faqText}>Frequently Asked Questions</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header">
                        <Typography>
                            Why should I set up a Pedlar store?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Pedlar stores are a quick and risk-free way to set up your own digital store and sell products from brands you love. Your storefront will be a place for your community to browse and shop your style. The best part: you'll earn 20% commision on all the sales you make.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header">
                        <Typography>Do I get paid for being on Pedlar?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Creators earn a 20% commission on all sales made on their Pedlar store. Brands only pay commision when a sale is made.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header">
                        <Typography>
                            Does it cost to join Pedlar?
                        </Typography>
                        
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Nope! It's completely free for both Creators and Brands.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header">
                        <Typography>How can I join Pedlar?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Since Pedlar is an invite only platform, submit an application and our team will get back to you within 24 hours. Pedlar is excited to partner with Creators with all types of aesthetic and style!
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header">
                        <Typography>Does my store have its own unique URL?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Yep, when signing up you can choose your own unique URL.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Faq
