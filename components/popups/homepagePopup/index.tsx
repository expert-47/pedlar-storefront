import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Dialog, Modal, Typography } from "@mui/material";
import Link from "next/link";
import styles from "styles/home";
import { useRouter } from "next/router";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { toggleDialog } from "store/slice/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery, useTheme } from "@mui/material";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export default function HomepagePopup() {
  const router = useRouter();
  const slug = router?.query;
  const dispatch = useDispatch();
  const { storeName } = useSelector((state: any) => state.app);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));
  const showDilog = useSelector((state: any) => state.app.showDilog[storeName]) == false ? false : true;

  const handleClose = () => {
    dispatch(toggleDialog(false));
    document.body.style.overflow = "unset";
  };

  return (
    <div>
      {showDilog && isMatch ? (
        <Modal
          open={showDilog}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            overflowY: "hidden",
            justifyContent: "center",
            alignItems: "center",
            display: { xs: "none", sm: "flex" },
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
              width: "690px",
              flexDirection: "row",
              display: "flex",
              height: "454px",
              backgroundColor: "white",
              outline: "none",
              maxHeight: "460px",
            }}
          >
            <Box
              sx={{
                width: "60%",
                height: "100%",
                position: "relative",
              }}
            >
              <img src="/welcomeModalDesktop.webp" style={{ height: "456px", width: "100%" }} />
            </Box>
            <Box sx={{ paddingLeft: "3rem", paddingRight: "1rem", width: "40%" }}>
              <Box sx={{ textAlign: "right", marginTop: "1rem", cursor: "pointer" }}>
                <CloseOutlinedIcon onClick={() => handleClose()} />
              </Box>

              <Box>
                <Box
                  sx={{ fontSize: "26px", marginTop: "3rem", fontWeight: "bold", width: "243px", lineHeight: "30px" }}
                >
                  Free shipping &
                </Box>
                <Box sx={{ fontSize: "26px", fontWeight: "bold", width: "243px", lineHeight: "30px" }}>returns!</Box>
                <Box
                  sx={{
                    fontSize: "14px",
                    paddingTop: "1.5rem",
                    width: "230px",
                    height: "110px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    color: "#1C1B1F",
                  }}
                >
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
      ) : (
        <Dialog
          open={showDilog}
          onClose={handleClose}
          sx={{
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
            borderColor: "white",
            width: "100vw",
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                paddingTop: "5px",
                paddingRight: "5px",
              }}
            >
              <CloseOutlinedIcon onClick={() => handleClose()} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "77vh",
              }}
            >
              <Typography sx={{ fontSize: "26px", fontWeight: 700, width: "80%", lineHeight: "30px" }}>
                Free shipping & returns!
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  width: "80%",
                  fontWeight: 400,
                  lineHeight: "22px",
                  color: "#1C1B1F",
                  marginTop: "20px",
                }}
              >
                Shop with confidence! Free shipping & free returns on all orders. Order now and enjoy hassle free
                shopping. No catches, no hidden fees.
              </Typography>
              <Link href={{ pathname: "/products", query: { slug: slug.slug } }} as={`/${slug.slug}/products`}>
                <Button
                  sx={{
                    marginTop: "10px",
                    width: "90%",
                    backgroundColor: "primary.dark",
                    color: "primary.main",
                    borderRadius: "666px",
                    fontWeight: "600",
                    textTransform: "none",
                    padding: "10px 32.5px",
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Shop now
                </Button>
              </Link>
              <img
                src="/welcomeModalImageForMObile.webp"
                alt="PopUp Image"
                height={"100%"}
                width={"100%"}
                style={{ marginTop: "25px" }}
              />
            </Box>
          </Box>
        </Dialog>
      )}
    </div>
  );
}
