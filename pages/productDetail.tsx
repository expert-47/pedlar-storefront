import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import Cards from "../components/Cards/Cards";
import Dropdown from "../components/DropDown/Dropdown";
import { Commonbutton } from "../components/Button/Commonbutton";
import Accordionn from "../components/Accordion/Accordionn";
import AddIcon from "@mui/icons-material/Add";
import { productDetailss } from "../components/Cards/productDetailss";
import SmallCard from "../components/Cards/SmallCard";

const ProductDetails = () => {
  const options = [
    { label: " 1", value: 1 },

    { label: " 2", value: 2 },

    { label: " 3", value: 3 },

    { label: "4", value: 4 },

    { label: " 5", value: 5 },

    { label: " 6", value: 6 },
  ];

  const colors = [
    { label: "Green", value: "Green" },
    { label: "Red", value: "Red" },
    { label: "Yellow", value: "Yellow" },
  ];

  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <>
      <Grid container>
        <Grid lg={1} sm={12} xs={12} md={12}></Grid>
        <Grid lg={5} sm={12} xs={12} md={12}>
          <Cards img="/coats.png" style={{ height: "350px" }} />
        </Grid>
        <Grid lg={5} sm={12} xs={12} md={12}>
          <Typography variant="h5" className="pDetailHeading" style={{ fontSize: "14px", textAlign: "center" }}>
            Low Classic
          </Typography>
          <Typography style={{ fontSize: "40px", fontWeight: "bold", textAlign: "center" }}>Green Polyster</Typography>
          <Typography style={{ fontSize: "35px", fontWeight: "bold", textAlign: "center" }}>Blazer</Typography>
          <Typography style={{ fontSize: "20px", textAlign: "center", fontWeight: "bold" }}>$365</Typography>
          <Typography style={{ textAlign: "center" }}>
            Hi honeys! I have worked closely with some of my fave brands to curate my own store! All items are shipped out
            directly from each brand. I hope you love what I've put together.
          </Typography>
          <Typography style={{ textAlign: "center" }}>
            Hi honeys! I have worked closely with some of my fave brands to curate my own store! All items are shipped out
            directly from each brand. I hope you love what I've put together.{" "}
          </Typography>
          <br></br>
          <Grid container>
            <Grid lg={1} sm={12} md={12} xs={12}></Grid>

            <Grid lg={5} sm={12} md={12} xs={12}>
              <Typography>Size</Typography>
              <Dropdown
                options={options}
                className="size-dropdown"
                state={state}
                setState={setState}
                onChange={handleChange}
                stye={{ borderRadius: "20em" }}
              />
            </Grid>
            <Grid lg={1} sm={12} md={12} xs={12}>
              <Typography>Color</Typography>
              <Dropdown
                options={colors}
                className="size-dropdown"
                state={state}
                setState={setState}
                onChange={handleChange}
              />
            </Grid>
            <Grid container>
              <Grid lg={12} sm={12} md={12} xs={12}>
                <Commonbutton
                  variant="text"
                  label="Add to Cart"
                  style={{
                    width: "15em",
                    borderRadius: "30px",
                    backgroundColor: "black",
                    color: "white",
                    position: "relative",
                    left: "30%",
                    top: "40%",
                  }}
                  classname="addToCartBtn"
                />
              </Grid>
              <Grid lg={12} sm={12} md={12} xs={12}>
                <Commonbutton
                  variant="text"
                  label="Buy Now"
                  style={{
                    width: "15em",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    border: "1px solid black",
                    backgroundColor: "white",
                    color: "black",
                    position: "relative",
                    left: "30%",
                    top: "80%",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* 2nd container */}
        <Grid container style={{ marginTop: "-8%" }}>
          <Grid lg={1} sm={12} md={12} xs={12}>
            <Typography>1</Typography>
          </Grid>
          <Grid lg={5} sm={12} md={12} xs={12}>
            <Cards img="/coats.png" style={{ height: "350px" }} />
          </Grid>
          <Grid lg={5} style={{ marginTop: "12%" }}>
            <Typography
              variant="h6"
              style={{ textAlign: "center", fontSize: "15px", color: "purple", fontWeight: 700, lineHeight: "22px" }}
            >
              All orders shipped directly from each brand{" "}
            </Typography>
            <Accordionn
              style={{ fontWeight: "bold" }}
              accordionHeading="Product details"
              accordionSummary="lorem ipsum"
              Icon={AddIcon}
            />
            <Accordionn
              style={{ fontWeight: "bold" }}
              accordionHeading="Shipping"
              accordionSummary="lorem ipsum"
              Icon={AddIcon}
            />
            <Accordionn
              style={{ fontWeight: "bold" }}
              accordionHeading="Returns"
              accordionSummary="lorem ipsum"
              Icon={AddIcon}
            />
            <Accordionn
              style={{ fontWeight: "bold" }}
              accordionHeading="Duties & taxes"
              accordionSummary="lorem ipsum"
              Icon={AddIcon}
            />
          </Grid>
        </Grid>
        {/* 3rd container  */}
        <Grid container>
          <Grid lg={1} sm={12} md={12} xs={12}></Grid>
          <Grid lg={10} sm={12} md={12} xs={12}>
            <Cards img="/coats.png" style={{ height: "350px" }} />
          </Grid>
          <Grid lg={1} sm={12} md={12} xs={12}></Grid>
        </Grid>

        {/* 4th container  */}

        <Grid container>
          <Grid lg={1} sm={12} md={12} xs={12}></Grid>
          <Grid lg={10} sm={12} md={12} xs={12}>
            <Typography></Typography>
            <Typography style={{ fontWeight: "bold", fontSize: "15px", marginTop: "45px" }}>You might like</Typography>
          </Grid>
          <Grid lg={1} sm={12} md={12} xs={12}></Grid>
        </Grid>
        <Grid container>
          <Grid lg={1} sm={12} md={12} xs={12}></Grid>
          {productDetailss.map((items) => {
            return (
              <>
                <Grid lg={2}>
                  <SmallCard
                    img={items.img}
                    productName={items.productName}
                    productDescription={items.productDescription}
                    price={items.productPrice}
                  />
                </Grid>
              </>
            );
          })}

          {/* <Grid lg={10}>
            <Typography>1</Typography>
            <Typography variant="h5">You might Like</Typography>
            {productDetailss.map((items) => {
              console.log("items", items);
              return <SmallCard img={items.img} />;
            })}
          </Grid> */}
          <Grid lg={9}></Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;
