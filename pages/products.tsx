import Text from "components/customText";
import GalleryGrid from "components/home/components/gridGallery";
import ProductHeader from "components/home/components/productHeader";
import Layout, { CustomGrid } from "components/layout";
import { Grid, Button, useTheme } from "@mui/material";
import Head from "next/head";


const Products = () => {
  const theme = useTheme();

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
        alignItems={{ xs: "center", md: "center", lg: "center" }}
        justifyContent={{ xs: "center", md: "center", lg: "center" }}
        paddingX={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(40) }}
        paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}>

        <ProductHeader />
        <GalleryGrid 
        paddingX={0}
        />
        <GalleryGrid
          container
          gap={4}
          lg={12}
          style={{ minHeight: "auto", flexDirection: "row-reverse", marginTop: "70px" }}
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
        <Text fontSize="10px" fontWeight="600">
          {"You ' ve viewed 20 out 0f 100 products"}
        </Text>
        <Button
          variant="outlined"
          style={{
            width: "15em",
            border: "2px solid black",
            borderRadius: "30px",
            backgroundColor: "white",
            color: "#1E1E1E",
            fontWeight: "900",
            fontSize: "13px",
            textTransform: "none",
            marginTop: "10px",
          }}
        >
          Load more
        </Button>
      </Grid>
    </Layout>
  );
};

export default Products;
