import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "next/link";
import styles from "styles/home";
import { useRouter } from "next/router";

const BootstrapDialog = styled(Dialog)(() => ({}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export default function HomepagePopup() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const slug = router?.query;

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = "unset";
  };

  function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{}} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

  return (
    <div>
      {/* {desktop view} */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          display: { xs: "none", sm: "block" },
          fontFamily: "Inter",
          "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            overflowY: "hidden !important",
          },
        }}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}></BootstrapDialogTitle>
        <Box>
          <Grid container>
            <Grid item xs={6} sx={{ marginTop: "-32px" }}>
              <img src="/popImg.jpg" style={{ position: "relative", height: "100%" }} />
              <img
                src="/pedlarWhite.png"
                style={{ position: "absolute", bottom: "20px", left: "20px", color: "white" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
              <Box sx={{ marginLeft: "3rem" }}>
                <Box sx={{ fontSize: "20px", marginTop: "3rem", fontWeight: "bold" }}>Free shipping &</Box>
                <Box sx={{ fontSize: "20px", fontWeight: "bold" }}>returns!</Box>
                <Box sx={{ fontSize: "15px", paddingTop: "1.5rem" }}>
                  Shop with confidence! Free shipping & free returns on all orders. Order now and enjoy hassle free
                  shopping. No catches, no hidden fees.
                </Box>
                <Box sx={{ marginTop: "3rem" }}>
                  <Link href={{ pathname: "/products", query: { slug: slug.slug } }} as={`/${slug.slug}/products`}>
                    <Button sx={styles.shopbutton}>Shop now</Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </BootstrapDialog>
      {/* {mobile view} */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ display: { xs: "block", sm: "none" }, fontFamily: "Inter" }}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}></BootstrapDialogTitle>
        <Box>
          <Box sx={{ padding: "2rem" }}>
            <Box sx={{ fontSize: "24px", fontWeight: "bold" }}>Free shipping &</Box>
            <Box sx={{ fontSize: "24px", fontWeight: "bold" }}> returns!</Box>
            <Box sx={{ paddingTop: "1.5rem" }}>
              Shop with confidence! Free shipping & free returns on all orders. Order now and enjoy hassle free
              shopping. No catches, no hidden fees.
            </Box>
            <Box sx={{ marginTop: "3rem", marginBottom: "1rem" }}>
              <Link href={{ pathname: "/products", query: { slug: slug.slug } }} as={`/${slug.slug}/products`}>
                <Button sx={styles.shopbutton}>Shop now</Button>
              </Link>
            </Box>
          </Box>
          <Box>
            <img src="/popImg.jpg" style={{ position: "relative", width: "100%" }} />
            <img src="/pedlarWhite.png" style={{ position: "absolute", top: "160%", left: "20px", color: "white" }} />
          </Box>
        </Box>
      </BootstrapDialog>
    </div>
  );
}
