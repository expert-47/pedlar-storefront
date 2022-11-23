import { AppBar, Button, Drawer, Grid, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { styles } from "./style";

const ResponsiveHeader = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const openStorePage = () => {
    router.push("/store/storeIndex");
  };
  const openCreators = () => {
    router.push("/store/forcreator");
  };
  const openBrands = () => {
    router.push("/store/forbrands");
  };

  const onClickDrawer = () => {
    setOpen(true);
    //console.log("clicked Open");
  };

  const onCloseDrawer = () => {
    setOpen(false);
    //console.log("clicked close");
  };

  const paperStyle = {
    width: "40%",
    boxShadow: "none",
    backgroundColor: "#f9f6f2",
  };
  return (
    <AppBar elevation={0} sx={styles.Respheader}>
      <Image
        src="/header-logo.svg"
        alt="header-logo"
        height={75}
        width={250}
        onClick={openStorePage}
        style={{ paddingLeft: "38px" }}
      />
      <Drawer
        anchor="right"
        open={open}
        PaperProps={{
          sx: paperStyle,
        }}
      >
        <Grid container style={{ alignItems: "center", justifyContent: "space-between", paddingBottom: "32px" }}>
          <img
            src="/header-logo.svg"
            alt="header-logo"
            style={{ height: "62px", width: "192px", paddingLeft: "18px" }}
            onClick={openStorePage}
          />
          <IconButton onClick={onCloseDrawer}>
            <CloseIcon style={{ height: "40px", width: "40px", marginRight: "19px", color: "black" }} />
          </IconButton>
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} style={{ display: "flex", flexDirection: "column" }}>
          <Grid>
            <Button sx={styles.ButtonR} onClick={openCreators}>
              <Typography textTransform="none" sx={styles.ButtonRTypo}>
                For Creators
              </Typography>
            </Button>
          </Grid>
          <Grid>
            <Button sx={styles.ButtonR} onClick={openBrands}>
              <Typography textTransform="none" sx={styles.ButtonRTypo}>
                For Brands
              </Typography>
            </Button>
          </Grid>
          <Grid style={{ textAlign: "center" }}>
            <Grid>
              <Button sx={styles.GetAccess1}>
                <Typography textTransform="none" sx={styles.ButtonRTypo}>
                  Get Access
                </Typography>
              </Button>
            </Grid>
            <Grid>
              <Button sx={styles.Login1}>
                <Typography textTransform="none" sx={styles.ButtonRTypo}>
                  Log in
                </Typography>
              </Button>
              
            </Grid>
          </Grid>
        </Grid>
      </Drawer>
      <IconButton aria-label="Drawer" onClick={onClickDrawer} style={{ color: "black", paddingRight: "40px" }}>
        <MenuIcon />
      </IconButton>
    </AppBar>
  );
};

export default ResponsiveHeader;
