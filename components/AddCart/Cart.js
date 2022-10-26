import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomGrid from "../Layout/layout";

const Cart = () => {
  return (
    <CustomGrid>
      <Box sx={{ flexGrow: 1, paddingTop: "160px" }}>
        <Grid container spacing={6}>
          <Grid xs={12} sm={12} md={12} lg={6} sx={{ textAlign: "center" }}>
            <Grid>
              <img src="/grid-img1.png"></img>
            </Grid>
            <Grid>
              <img src="/grid-img1.png"></img>
            </Grid>
            <Grid>
              <img src="/grid-img1.png"></img>
            </Grid>
          </Grid>

          <Grid container item xs={12} sm={12} md={12} lg={6} sx={{ textAlign: "center" }}>
            <Grid>
              <Typography sx={{ fontSize: "12px" }}>Low Clasic</Typography>
              <Typography sx={{ fontWeight: "600", fontSize: "40px" }}>
                Green Polyster <br></br>Blazer
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                {
                  " Hi honeys! I’ve worked closely with some of my fave brands <br></br>tocurate my own store! All items are shipped out directly from each brand. I hope you love what I've put together."
                }{" "}
                <br></br>
                <br></br>
                {
                  "Hi honeys! I’ve worked closely with some of my fave brands to<br></br> curate my own store! All items are shipped out directly from each  brand. I hope you love what I've put together."
                }
              </Typography>
              <Grid
                conatiner
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                gap={1}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Grid item xs={12} sm={12} md={8} lg={5}>
                  <Typography style={{ textAlign: "left", fontSize: "14px", weight: "700" }}>Size</Typography>
                  <FormControl sx={{ width: "90%" }}>
                    <InputLabel id="demo-simple-select-label">XS</InputLabel>
                    <Select>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={5}>
                  <Typography style={{ textAlign: "left", fontSize: "14px", weight: "700" }}>Color</Typography>
                  <FormControl sx={{ width: "90%" }}>
                    <InputLabel>Green</InputLabel>
                    <Select>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid sx={{ paddingTop: "20px", display: "flex", flexDirection: "column", textAlign: "center" }}>
                <Grid item xs={10} sm={8} md={4} lg={5} sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#000000",
                      color: "white",
                      borderRadius: "8px",
                      width: "100%",
                      height: "50px",
                    }}
                  >
                    Add to cart
                  </Button>
                </Grid>
                <Grid item xs={10} sm={8} md={4} lg={5} sx={{ paddingTop: "15px" }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "8px",
                      width: "100%",
                      height: "50px",
                    }}
                  >
                    Contained
                  </Button>
                </Grid>
              </Grid>
              <Typography sx={{ color: "#6750A4", paddingTop: "35px" }}>
                All orders shipped directly from each brand{" "}
              </Typography>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Product </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Details</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Shipping</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Duties and Taxes</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </CustomGrid>
  );
};

export default Cart;
