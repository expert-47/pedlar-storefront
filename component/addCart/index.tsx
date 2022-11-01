import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CustomGrid from "../../components/layout";
import AddIcon from "@mui/icons-material/Add";

import { useStyles } from "tss-react/mui";
import SwipeableTextMobileStepper from "./components/carousel";

const Cart = () => {
  const { classes, cx } = useStyles();
  const [Size, setSize] = React.useState("");
  const [Colour, setColour] = React.useState("");
  const handleChange1 = (event) => {
    setSize(event.target.value);
  };
  const handleChange2 = (event) => {
    setColour(event.target.value);
  };

  return (
    <>
      <CustomGrid>
        <Box sx={{ flexGrow: 1, paddingTop: "20px", borderBottom: 1, borderColor: "#C5C5C5", paddingBottom: "50px" }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ textAlign: "center", paddingTop: "26px" }}>
              <Grid item xs={12} sx={{ display: { lg: "none", md: "none", sm: "none" } }}>
                <SwipeableTextMobileStepper />
              </Grid>
              <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
                <img src="/grid-img1.png"></img>
              </Grid>
              <Grid item sx={{ display: { xs: "none", sm: "block", paddingTop: "25px" } }}>
                <img src="/grid-img1.png"></img>
              </Grid>
              <Grid item sx={{ display: { xs: "none", sm: "block", paddingTop: "25px" } }}>
                <img src="/grid-img1.png"></img>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ justifyContent: "center" }}>
              <Grid item xs={11} sm={6} md={10} lg={6} sx={{ textAlign: "center", paddingTop: "40px" }}>
                <Grid>
                  <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>LOW CLASSIC</Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "40px", lineHeight: "120%", paddingTop: "14px" }}>
                    Green Polyster <br></br> Blazer
                  </Typography>
                  <Grid item xs={12} sm={12} md={12} lg={12} gap={1} sx={{ display: "flex", flexDirection: "row" }}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "24px",
                          paddingTop: "30px",
                          textDecoration: "line-through",
                          textAlign: "right",
                          color: "#808080 ",
                        }}
                      >
                        $420
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Typography sx={{ fontWeight: "600", fontSize: "24px", paddingTop: "30px", textAlign: "left" }}>
                        $365
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography sx={{ fontSize: "14px", fontWeight: "400", paddingTop: "30px" }}>
                    {
                      " Hi honeys! I’ve worked closely with some of my fave brands tocurate my own store! All items are shipped out directly from each brand. I hope you love what I've put together."
                    }
                    <br></br>
                    <br></br>
                    {
                      "Hi honeys! I’ve worked closely with some of my fave brands to curate my own store! All items are shipped out directly from each  brand. I hope you love what I've put together."
                    }
                  </Typography>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    gap={1}
                    sx={{
                      paddingTop: "30px",
                      paddingBottom: "30px",
                      display: "flex",
                    }}
                  >
                    <Grid item xs={12} sm={10} md={6} lg={6} sx={{}}>
                      <Typography style={{ textAlign: "left", fontSize: "14px", weight: "700", paddingLeft: "15px" }}>
                        Size
                      </Typography>
                      <FormControl sx={{ width: "100%" }}>
                        <Select
                          value={Size}
                          onChange={handleChange1}
                          displayEmpty
                          sx={{
                            borderRadius: "50px",
                            height: "46px",
                            width: "100%",
                            borderColor: "#000000 20%",
                            textAlign: "left",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          <MenuItem value="">XS</MenuItem>
                          <MenuItem value={10}>Small</MenuItem>
                          <MenuItem value={20}>Medium</MenuItem>
                          <MenuItem value={30}>Large</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={10} md={6} lg={6}>
                      <Typography style={{ textAlign: "left", fontSize: "14px", weight: "700", paddingLeft: "15px" }}>
                        Color
                      </Typography>
                      <FormControl sx={{ width: "100%" }}>
                        <Select
                          value={Colour}
                          onChange={handleChange2}
                          displayEmpty
                          sx={{
                            borderRadius: "50px",
                            height: "46px",
                            width: "100%",
                            borderColor: "#000000 20%",
                            textAlign: "left",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          <MenuItem value="">Green</MenuItem>
                          <MenuItem value={10}>Blue</MenuItem>
                          <MenuItem value={20}>Yellow</MenuItem>
                          <MenuItem value={30}>Orange</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
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
                          backgroundColor: "#000000",
                          color: "white",
                          borderRadius: "25px",
                          width: "100%",
                          height: "46px",
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
                        }}
                      >
                        Buy now
                      </Button>
                    </Grid>
                  </Grid>
                  <Typography
                    sx={{
                      color: "#6750A4",
                      paddingTop: "35px",
                      fontWeight: "700",
                      fontSize: "14px",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    All orders shipped directly from each brand{" "}
                  </Typography>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    sx={{ alignItems: "center", paddingTop: "25px", display: { xs: "none", md: "block" } }}
                  >
                    <Accordion>
                      <AccordionSummary expandIcon={<AddIcon />}>
                        <Typography sx={{ fontWeight: "700", fontSize: "14px" }}>Product </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                          amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary expandIcon={<AddIcon />}>
                        <Typography sx={{ fontWeight: "700", fontSize: "14px" }}>Details</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                          amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary expandIcon={<AddIcon />}>
                        <Typography sx={{ fontWeight: "700", fontSize: "14px" }}>Shipping</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                          amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary expandIcon={<AddIcon />}>
                        <Typography sx={{ fontWeight: "700", fontSize: "14px" }}>Duties and Taxes</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                          amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          spacing={4}
          sx={{
            paddingTop: "40px",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "1%",
            borderColor: "#C5C5C5",
            paddingBottom: "50px",
          }}
        >
          <Grid container item xs={11} sm={9} md={10} lg={9.2} sx={{ paddingTop: "30px" }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography sx={{ paddingBottom: "20px", fontWeight: "600", fontSize: "22px" }}>
                You might like
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={2.4} lg={2.4} sx={{ paddingBottom: "50px" }}>
              <img style={{ width: "90%", height: "70%" }} src="/grid-img3.png"></img>
              <Typography sx={{ fontWeight: "600", fontSize: "12px" }}>SISLEY PARIS</Typography>
              <Typography sx={{ fontWeight: "600", fontSize: "16px", width: "90%" }}>Eye Contour Mask</Typography>
              <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>$42</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={2.4} lg={2.4} sx={{ paddingBottom: "50px" }}>
              <img style={{ width: "90%", height: "70%" }} src="/grid-img3.png"></img>
              <Typography sx={{ fontWeight: "600", fontSize: "12px" }}>SISLEY PARIS</Typography>
              <Typography sx={{ fontWeight: "600", fontSize: "16px", width: "90%" }}>Eye Contour Mask</Typography>
              <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>$42</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={2.4} lg={2.4} sx={{ paddingBottom: "50px" }}>
              <img style={{ width: "90%", height: "70%" }} src="/grid-img3.png"></img>
              <Typography sx={{ fontWeight: "600", fontSize: "12px" }}>SISLEY PARIS</Typography>
              <Typography sx={{ fontWeight: "600", fontSize: "16px", width: "90%" }}>Eye Contour Mask</Typography>
              <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>$42</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={2.4} lg={2.4} sx={{ paddingBottom: "50px" }}>
              <img style={{ width: "90%", height: "70%" }} src="/grid-img3.png"></img>
              <Typography sx={{ fontWeight: "600", fontSize: "12px" }}>SISLEY PARIS</Typography>
              <Typography sx={{ fontWeight: "600", fontSize: "16px", width: "90%" }}>Eye Contour Mask</Typography>
              <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>$42</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={2.4} lg={2.4} sx={{ paddingBottom: "50px" }}>
              <img style={{ width: "90%", height: "70%" }} src="/grid-img3.png"></img>
              <Typography sx={{ fontWeight: "600", fontSize: "12px" }}>SISLEY PARIS</Typography>
              <Typography sx={{ fontWeight: "600", fontSize: "16px", width: "90%" }}>Eye Contour Mask</Typography>
              <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>$42</Typography>
            </Grid>
          </Grid>
        </Grid>
      </CustomGrid>
    </>
  );
};

export default Cart;
