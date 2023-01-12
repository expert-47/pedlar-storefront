import React from "react";
import styles from "styles/home";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { CustomGrid } from "components/layout";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { useRouter } from "next/router";

const BrandListing = (props: { leftHeading: string; rightHeading: string }) => {
  const theme = useTheme();
  const { leftHeading, rightHeading } = props;
  const router = useRouter();
  const slug = router?.query;

  return (
    <CustomGrid
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid
        container
        item
        xs={12}
        md={12}
        lg={12}
        alignItems={{ xs: "center", md: "center", lg: "center" }}
        justifyContent={{ xs: "space-between", md: "space-between", lg: "space-between" }}
        paddingY={{ xs: theme.spacing(10), md: theme.spacing(20), lg: theme.spacing(20) }}
      >
        <Grid
          container
          item
          xs={7}
          sm={9}
          md={9}
          lg={9}
          justifyContent={{ xs: "flex-start", md: "flex-start", lg: "flex-start" }}
        >
          <Typography sx={styles.gridtag1typo1}>{leftHeading}</Typography>
        </Grid>

        <Link href={{ pathname: "/products", query: { slug: slug.slug } }} as={`/${slug.slug}/products`}>
          <Grid
            container
            item
            xs={5}
            sm={3}
            md={3}
            lg={3}
            justifyContent={{ xs: "flex-end", sm: "flex-end", md: "flex-end", lg: "flex-end" }}
            style={{
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            <Typography sx={styles.gridtag1typo2}>{rightHeading}</Typography>
            <ArrowForwardIcon sx={styles.arrowIcon} />
          </Grid>
        </Link>
      </Grid>
    </CustomGrid>
  );
};

export default BrandListing;
