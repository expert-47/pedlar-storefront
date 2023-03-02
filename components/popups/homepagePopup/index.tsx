import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Modal } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "next/link";
import styles from "styles/home";
import { useRouter } from "next/router";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { toggleDialog } from "store/slice/appSlice";
import { useDispatch, useSelector } from "react-redux";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export default function HomepagePopup() {
  // const [open, setOpen] = React.useState(true);
  const router = useRouter();
  const slug = router?.query;
  const dispatch = useDispatch();

  const { showDilog } = useSelector((state) => state.app);

  const handleClose = () => {
    dispatch(toggleDialog(false));
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
      {showDilog && (
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
              <img src="/popImg.png" style={{ height: "456px", width: "100%" }} />
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
      )}
      {/* {mobile view} */}

      {showDilog && (
        <Modal
          open={showDilog}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
            borderColor: "white",
            "&:focus": {
              outline: "none",
            },
            outline: "none",
            fontFamily: "inter",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <Box
            sx={{
              height: "85% !important",
              backgroundColor: "white",
              outline: "none",
              width: "90% !important",
            }}
          >
            <Box
              style={{
                height: "52.5%",
              }}
            >
              <Box sx={{ textAlign: "right", marginRight: 20, marginTop: 10 }}>
                <CloseOutlinedIcon onClick={() => handleClose()} />
              </Box>

              <Box>
                <Box
                  sx={{
                    fontSize: "26px",
                    fontWeight: 700,
                    width: "255px",
                    lineHeight: "30px",
                    marginLeft: "40px",
                  }}
                >
                  Free shipping & returns!
                </Box>
                <Box
                  sx={{
                    fontSize: "14px",
                    width: "230px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    color: "#1C1B1F",
                    marginLeft: "40px",
                    marginTop: "20px",
                  }}
                >
                  Shop with confidence! Free shipping & free returns on all orders. Order now and enjoy hassle free
                  shopping. No catches, no hidden fees.
                </Box>
                <Box sx={{ marginLeft: "40px", marginTop: "10px" }}>
                  <Link href={{ pathname: "/products", query: { slug: slug.slug } }} as={`/${slug.slug}/products`}>
                    <Button sx={styles.shopbutton}>Shop now</Button>
                  </Link>
                </Box>
              </Box>
              <Box>
                <img
                  src="/popImg.png"
                  height={"100%"}
                  width={"100%"}
                  style={{ marginTop: "15.5%", objectFit: "cover", imageRendering: "auto" }}
                />
              </Box>
            </Box>
          </Box>
        </Modal>
      )}
    </div>
  );
}
