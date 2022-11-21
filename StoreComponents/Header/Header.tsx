import React from "react";
import { styles } from "./style";
import { Button, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <AppBar sx={styles.header}>
        <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.MainGrid}>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Image src="/header-logo.svg" alt="header-logo" height={75} width={250} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5} gap={1} style={{ textAlign: "center" }}>
            <Link href={"/store/storeIndex"}>
              <Button sx={styles.Button}>For Creators</Button>
            </Link>
            <Link href={"/store/storeIndex"}>
              <Button sx={styles.Button}>For Brands</Button>
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
        </Grid>
      </AppBar>
    </>
  );
};

export default Header;
