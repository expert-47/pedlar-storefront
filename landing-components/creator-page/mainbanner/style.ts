export const styles = {
  MainBox: {
    paddingTop: "100px",
    display: "flex",
    alignItems: "center",
  },
  GridBox: {
    position: "absolute",
    borderRadius: "20px",
    backgroundColor: "white",
    zIndex: " 99",
    /* Extra small devices (phones, 600px and down) */
    ["@media (max-width: 600px)"]: {
      // maxWidth: "665px",
      width: "90%",
      top: "370px",
      left: "18px",
    },
    /* Medium devices (landscape tablets, 768px and up) */
    ["@media (min-width: 768px)"]: {
      maxWidth: "600px",
      top: "520px",
      left: "140px",
    },
    /* Large devices (laptops/desktops, 992px and up) */
    ["@media (min-width: 992px)"]: {
      maxWidth: "600px",
      top: "525px",
      left: "370px",
    },
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    ["@media (min-width: 1200px)"]: {
      maxWidth: "605px",
      top: "160px",
      left: "710px",
    },
    ["@media (min-width: 1536px)"]: {
      maxWidth: "580px",
      top: "160px",
      left: "1095px",
    },
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
