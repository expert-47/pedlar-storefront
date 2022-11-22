import { AppBar, Button, Drawer, Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { styles } from "./style";

const ResponsiveHeader = () => {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);

  const openStorePage = () => {
    router.push("/store/storeIndex");
  };
  const openCreators = () => {
    router.push("/store/forcreator");
  };
  const openBrands = () => {
    router.push("/store/forbrands");
  };

  const onClickDrawer = useCallback(() => {
    setOpenDrawer(!openDrawer);
  }, []);

  const paperStyle = {
    width: "50%",
    boxShadow: "none",
  };
  return (
    <AppBar sx={styles.Respheader}>
      <Image src="/header-logo.svg" alt="header-logo" height={75} width={250} onClick={openStorePage} />
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: paperStyle,
        }}
      >
        <img
          src="/header-logo.svg"
          alt="header-logo"
          style={{ height: "100px", width: "200px" }}
          onClick={openStorePage}
        />
        <CloseIcon />
        <Grid container item xs={12} sm={12} md={12} lg={12} style={{ display: "flex", flexDirection: "column" }}>
          <Grid>
            <Button sx={styles.Button} onClick={openCreators}>
              For Creators
            </Button>
          </Grid>
          <Grid>
            <Button sx={styles.Button} onClick={openBrands}>
              For Brands
            </Button>
          </Grid>
          <Grid>
            <Button sx={styles.Login1}>Log in</Button>
          </Grid>
          <Grid>
            <Button sx={styles.GetAccess1}>Get Access</Button>
          </Grid>
        </Grid>
      </Drawer>
      <IconButton aria-label="Drawer" onClick={onClickDrawer} style={{ color: "black" }}>
        <MenuIcon />
      </IconButton>
    </AppBar>
  );
};

export default ResponsiveHeader;
