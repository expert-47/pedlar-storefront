import { SxProps } from "@mui/material";

export const styles: SxProps = {
  MainBox: {
    paddingTop: "100px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",

    justifyContent: "space-between",
  },
  GridBox: {
    position: { xs: "absolute", lg: "relative" },
    borderRadius: "20px",
    display: "flex",
    backgroundColor: "white",
    zIndex: " 99",
    top: { xs: "370px", sm: "520px", md: "520px", lg: "0", xl: "0px" },
    width: { xs: "90%", sm: "600px", md: "600px", lg: "605px", xl: "580px" },
    right: { xs: "15px", sm: "20px", md: "5%", lg: "100px", xl: "100px" },
  },
  heading: {
    lineHeight: "1",
    color: "#1c1b1f",
    fontWeight: "bold",
    fontFamily: "Inter",
  },
  title: {
    paddingTop: "20px",
    color: "#1c1b1f",
    opacity: "0.64",
    lineHeight: "30px",
    fontWeight: "600",
    paddingBottom: "10px",
  },
  Button: {
    backgroundColor: "#1c1b1f",
    fontWeight: "600",
    borderRadius: "40px",
    padding: "20px",
    "&:hover": {
      backgroundColor: "#1C1B1F",
    },
    ["@media (max-width:700px)"]: {
      padding: "15px",
    },
  },
  brandImg: {
    // position: "relative",
  },
};
