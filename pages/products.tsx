import Text from "components/customText";
import ProductHeader from "components/home/components/productHeader";
import Layout from "components/layout";
import { Grid, Button, useTheme, Divider, Box } from "@mui/material";
import Head from "next/head";
import BaseFooter from "components/footer/baseFooter";
import { useStyles } from "styles/home";
import Gallery from "components/home/components/Gallery";

const gallery1 = [
  {
    label: "Coat",
    imgPath: "/grid-img1.png",
    name: "Low Classic",
    type: "Green Polyester Blazer",
    price: "$365",
    crossPrice: "$420"
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

const Products = () => {
  const theme = useTheme();
  const { classes, cx } = useStyles();

  <link rel="icon" href="/favicon.ico" />;
  return (
    <Layout>
      <Head>
        <title>Pedlar</title>
        <meta property="og:image" content="url img" />
        <meta property="og:url" content="/home" />
        <meta property="og:type" content="Home" />
        <meta property="og:description" content="Home" />
        <meta property="og:title" content="Home" key="Home" name="description" />
      </Head>
      <Box
        sx={{
          alignItems: { xs: "center", md: "center", lg: "center" },
          justifyContent: { xs: "center", md: "center", lg: "center" },
          paddingLeft: { xs: "10px", md: "20px", lg: "40px" },
          paddingRight: { xs: "10px", md: "20px", lg: "40px" },

          // paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
        }}
      >
        <ProductHeader />
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
      </Box>
      <Grid
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Text fontSize="12px" fontWeight="600">
          {"You've viewed 20 out of 100 products"}
        </Text>
        <Button
          variant="outlined"
          style={{
            width: "15em",
            border: "2px solid black",
            borderRadius: "30px",
            backgroundColor: "white",
            color: "#1E1E1E",
            fontWeight: "600",
            fontSize: "16px",
            textTransform: "none",
            marginTop: "10px",
          }}
        >
          Load more
        </Button>
      </Grid>
      <Divider className={cx(classes.footerDivider)} />
      <BaseFooter />
    </Layout>
  );
};

export default Products;
