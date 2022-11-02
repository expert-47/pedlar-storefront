import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CustomGrid, { CustomContainer } from "../layout";
import AddIcon from "@mui/icons-material/Add";

import { useStyles } from "tss-react/mui";
import Layout from "../layout";
import Options from "./components/options"

const Action = () => {
  const { classes, cx } = useStyles();
  return(
    <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    sx={{ paddingTop: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}
                  >
                    <Grid item xs={12} sm={7} md={6.7} lg={6.7} sx={{ width: "100%" }}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#1C1B1F",
                          color: "white",
                          borderRadius: "25px",
                          width: "100%",
                          height: "46px",
                          fontWeight: "600",
                          fontSize: "16px",
                          textTransform: 'none'

                        }}
                      >
                        Add to cart
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={7} md={6.7} lg={6.7} sx={{ paddingTop: "20px", width: "100%" }}>
                      <Button
                        variant="outlined"
                        sx={{
                          color: "black",
                          borderRadius: "25px",
                          width: "100%",
                          height: "46px",
                          borderColor: "black",
                          fontSize: "16px",
                          fontWeight: "600",
                          textTransform: 'none',

                        }}
                      >
                        Buy now
                      </Button>
                    </Grid>
                  </Grid>
  )
                    }
  export default Action;