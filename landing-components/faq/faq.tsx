//package imports
import React from "react";
import {
  Box,
  Grid,
  useTheme,
  Accordion,
  Typography,
  useMediaQuery,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
//component
import { CustomContainer } from "../landinglayout";
//style
import { styles } from "./style";

interface Props {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
}

const Faq = ({
  question1,
  question2,
  question3,
  question4,
  question5,
  answer1,
  answer2,
  answer3,
  answer4,
  answer5,
}: Props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery("(max-width:767px)");
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <CustomContainer>
      <Box
        style={{ margin: isMatch ? "34px 0px" : "80px 0px", zIndex: "9", position: "relative" }}
        paddingX={{ xs: theme.spacing(20), sm: theme.spacing(30), md: theme.spacing(30), lg: theme.spacing(35) }}
      >
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{ justifyContent: "space-between" }}
          paddingX={{ xs: theme.spacing(0), md: theme.spacing(20), lg: theme.spacing(30) }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={3.5}
            paddingX={{ xs: theme.spacing(0), md: theme.spacing(30), lg: theme.spacing(25) }}
          >
            <Typography sx={styles.faqText} fontWeight={"700"} fontSize={{ xs: "48px", lg: "54px" }}>
              Frequently Asked Questions
            </Typography>
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
                sx={{
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
              >
                <Typography sx={styles.acordianText}>{question1}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.acordianPara}>{answer1}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} sx={styles.acordianMain}>
              <AccordionSummary
                expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                sx={{
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
              >
                <Typography sx={styles.acordianText}>{question2}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.acordianPara}>{answer2}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} sx={styles.acordianMain}>
              <AccordionSummary
                expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                sx={{
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
              >
                <Typography sx={styles.acordianText}>{question3}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.acordianPara}>{answer3}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} sx={styles.acordianMain}>
              <AccordionSummary
                expandIcon={expanded === "panel4" ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                sx={{
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
              >
                <Typography sx={styles.acordianText}>{question4}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.acordianPara}>{answer4}</Typography>
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
                sx={{
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
              >
                <Typography sx={styles.acordianText}>{question5}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.acordianPara}>{answer5}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default Faq;
