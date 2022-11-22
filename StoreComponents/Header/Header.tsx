import React from "react";
import { styles } from "./style";
import { Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ResponsiveHeader from "./ResponsiveHeader";

const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const openStorePage = () => {
    router.push("/store/storeIndex");
  };
  const openCreators = () => {
    router.push("/store/forcreator");
  };
  const openBrands = () => {
    router.push("/store/forbrands");
  };

  return (
    <>
      <AppBar sx={styles.header}>
        <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.MainGrid}>
          {isMatch ? (
            <>
              <ResponsiveHeader />
            </>
          ) : (
            <>
              <Grid item xs={12} sm={12} md={12} lg={3}>
                <Image src="/header-logo.svg" alt="header-logo" height={75} width={250} onClick={openStorePage} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={5} gap={1} style={{ textAlign: "center" }}>
                <Link href={"/store/storeIndex"}>
                  <Button sx={styles.Button} onClick={openCreators}>
                    For Creators
                  </Button>
                </Link>
                <Link href={"/store/storeIndex"}>
                  <Button sx={styles.Button} onClick={openBrands}>
                    For Brands
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4} gap={1} style={{ textAlign: "right" }}>
                <Link href={"/store/storeIndex"}>
                  <Button sx={styles.Login}>Log in</Button>
                </Link>
                <Link href={"/store/storeIndex"}>
                  <Button sx={styles.GetAccess}>Get Access</Button>
                </Link>
              </Grid>
            </>
          )}
        </Grid>
      </AppBar>
    </>
  );
};

export default Header;
