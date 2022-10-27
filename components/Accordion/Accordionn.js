import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordionn = (props) => {
  const { accordionSummary, accordionHeading, Icon, style } = props;
  return (
    <>
      <Accordion style={{ width: "40em" }}>
        <AccordionSummary expandIcon={<Icon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography style={style}> {accordionHeading} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{accordionSummary}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Accordionn;
