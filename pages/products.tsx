import Text from "components/customText";
import GalleryGrid from "components/home/components/gridGallery";
import ProductHeader from "components/home/components/productHeader";
import Layout, { CustomGrid } from "components/layout";
import { Grid, Button, useTheme, Divider } from "@mui/material";
import Head from "next/head";
import BrandListing from "components/home/components/brandListing";
import GridGallery from "components/home/components/gridGallery";
import BaseFooter from "components/footer/baseFooter";
import { useStyles } from "styles/home";



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
      <Grid
        container
        sm={11.5}
        md={10.5}
        lg={12}
        sx={{display: "flex", alignItems: "center", padding: "180px"}}
        alignItems={{ xs: "center", md: "center", lg: "center" }}
        justifyContent={{ xs: "center", md: "center", lg: "center" }}
        paddingX={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
        paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}>

        <ProductHeader />
        <GalleryGrid 
        paddingX={0}
        />
        <GalleryGrid 
        paddingX={0}
        style={{
          flexDirection: "row-reverse",
          display: "flex",
        }}
        />
        <GalleryGrid 
        paddingX={0}
        />


      </Grid>

      <Grid
        container
        sm={12}
        lg={12}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "70px",
          marginBottom: "100px",
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
