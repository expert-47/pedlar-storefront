import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { DialogContent, IconButton, Modal } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "next/link";
import styles from "styles/home";
import { useRouter } from "next/router";
import PedlarImage from "components/pedlarImage";
import popImg from "../../../public/popImg.jpg";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const BootstrapDialog = styled(Dialog)(() => ({}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export default function HomepagePopup() {
  const [open, setOpen] = React.useState(true);
  const router = useRouter();
  const slug = router?.query;

  // useEffect(() => {
  //   setOpen(true);
  //   // document.body.style.overflow = "hidden";
  // }, []);

  const handleClose = () => {
    console.log("BC");
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
      {open && (
        <Modal
          open={true}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            overflowY: "hidden",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            maxHeight: "100%",

            border: 0,
            borderColor: "white",
            "&:focus": {
              outline: "none",
            },
            outline: "none",
            fontFamily: "inter",
          }}
        >
          <Box
            sx={{
              width: "42%",
              flexDirection: "row",
              display: "flex",
              height: "454px",
              backgroundColor: "white",
              outline: "none",
              maxHeight: "464px",
            }}
          >
            <Box
              sx={{
                width: "60%",
                height: "100%",
                position: "relative",
              }}
            >
              <img src="/popImg.jpg" style={{ height: "456px", width: "100%" }} />

              <img
                src="/pedlarWhite.png"
                style={{ position: "absolute", bottom: "20px", left: "20px", color: "white" }}
              />
            </Box>
            <Box sx={{ paddingLeft: "3rem", paddingRight: "1rem", width: "40%" }}>
              {/* <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}></BootstrapDialogTitle> */}
              <Box sx={{ textAlign: "right", marginTop: "1rem", cursor: "pointer" }}>
                <CloseOutlinedIcon onClick={() => handleClose()} />
              </Box>

              <Box>
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
            </Box>
          </Box>
        </Modal>
      )}
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
