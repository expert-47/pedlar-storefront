import React from "react";
import BannerImg from "./components/banner";
import BrandListing from "./components/brandListing";
import { Box, Grid, useTheme } from "@mui/material";
import Bar from "./components/bar";
import BaseFooter from "components/footer/baseFooter";
import Divider from "@mui/material/Divider";
import styles from "styles/home";
import BrandTitles from "./components/brandTitles";
import Gallery from "./components/Gallery";


const gallery1 = [
  {
    label: "Coat",
    imgPath: "/grid-img1.png",
    name: "Low Classic",
    type: "Green Polyester Blazer",
    price: "$365",
  },
  {
    label: "Veja",
    imgPath: "/grid-img2.png",
    name: "Veja X Marni",
    type: "35s",
    price: "$320",
  },
  {
    label: "Mask",
    imgPath: "/grid-img3.png",
    name: "Sisley Paris",
    type: "Eye Contour Mask",
    price: "$42",
  },
  {
    label: "Fleece",
    imgPath: "/grid-img4.png",
    name: "Nike",
    type: "High-Waisted Fleece Open",
    price: "$975",
  },
  {
    label: "Earring",
    imgPath: "/grid-img5.png",
    name: "Matteau",
    type: "Drop Earring Collection",
    price: "$42",
  },
];
const gallery2 = [
  {
    label: "Kasbah",
    imgPath: "/grid-img7.png",
    name: "19-69",
    type: "KASBAH",
    price: "$310",
  },
  {
    label: "Purse",
    imgPath: "/grid-img6.png",
    name: "Ganni",
    type: "Beaded Banana Purse",
    price: "$525",
  },
  {
    label: "Mask",
    imgPath: "/grid-img3.png",
    name: "Sisley Paris",
    type: "Eye Contour Mask",
    price: "$42",
  },
  {
    label: "Fleece",
    imgPath: "/grid-img4.png",
    name: "Nike",
    type: "High-Waisted Fleece Open",
    price: "$975",
  },
  {
    label: "Coco",
    imgPath: "/grid-img8.png",
    name: "Hunza G",
    type: "Coco Bikini",
    price: "$300",
  },
];

export const Home = (props) => {
  const theme = useTheme();


  

  // const data =   axios.get(`https://pedlar-dev.ts.r.appspot.com/user/${props?.slugValue}/details`)
  // .then(res => {
  //     console.log("responese..." , res)
    
  // })
  // const address = `https://pedlar-dev.ts.r.appspot.com/user/${props?.slugValue}/details`;
  // const fetcher = async (url) => await axios.get(url);
  // const { data, error } = useSwr(address, fetcher.data);




  // const data2  = useSwr(`https://pedlar-dev.ts.r.appspot.com/user/brandon-new-store/details`);

// console.log("data" ,   data);
// console.log("sucess" , data?.success);

  // debugger;
  return (


    <Grid>

      

      <BannerImg  HeaderData={props?.HeaderData}  />
      <Divider sx={styles.bannerDivider} />
      <Bar />
      <Box
        sx={{
          paddingLeft: { xs: theme.spacing(20), sm: theme.spacing(40), md: theme.spacing(80), lg: theme.spacing(40) },
          paddingRight: { xs: theme.spacing(20), sm: theme.spacing(40), md: theme.spacing(80), lg: theme.spacing(40) },
        }}
      >
        <BrandListing leftHeading="New Additions" rightHeading="SHOP ALL" />
        <Gallery
          girdProps={{
            flexDirection: {
              lg: "row-reverse",
              md: "row-reverse",
              sm: "column-reverse",
              xs: "column-reverse",
            },
          }}
          data={gallery1}
        />
        <Gallery
          data={gallery2}
          girdProps={{
            flexDirection: {
              lg: "row",
              md: "row",
              sm: "column-reverse",
              xs: "column-reverse",
            },
            marginTop: 40,
          }}
          columnSpacing={0}
        />
        <BrandListing leftHeading=" Curated Brands" rightHeading="SHOP BRANDS" />
        <BrandTitles />
      </Box>
      <Divider sx={styles.footerDivider} />
      <BaseFooter />
    </Grid>
    // : "No Record "
  );
};
