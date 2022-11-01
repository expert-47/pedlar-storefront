import Text from "components/customText";
import GalleryGrid1 from "components/home/components/gridGallery";
import ProductHeader from "components/home/components/productHeader";
import Layout, { CustomGrid } from "components/layout";
import { Grid, Button } from "@mui/material";
import Head from "next/head";

const index = () => {
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
      <CustomGrid>
        <ProductHeader />
        <GalleryGrid1 />
        <GalleryGrid1
          container
          gap={4}
          lg={12}
          style={{ minHeight: "auto", flexDirection: "row-reverse", marginTop: "70px" }}
        />
      </CustomGrid>

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

export default index;
