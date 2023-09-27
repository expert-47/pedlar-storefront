export const styles = {
  MainBox: {
    paddingTop: "100px",
    display: "flex",
  },
  GridBox: {
    width: "100%",
    borderRadius: "20px",
    maxWidth: "610px",
    backgroundColor: "white",
    position: "absolute",
    right: "0",
    ["@media (min-width:1440px)"]: {
      maxWidth: "690px",
    },
    ["@media (min-width:1441px)"]: {
      maxWidth: "690px",
    },
    ["@media (max-width:1280px)"]: {
      maxWidth: "584px",
    },
    ["@media (max-width:994px)"]: {
      position: "unset",
      marginLeft: "auto",
      marginTop: "-150px",
      zIndex: "999",
      maxWidth: "700px",
    },
    ["@media (max-width:1200px)"]: {
      position: "unset",
      marginLeft: "auto",
      marginTop: "-150px",
      zIndex: "999",
      maxWidth: "600px",
    },
    ["@media (max-width:767px)"]: {
      marginTop: "0",
    },
  },
  heading: {
    lineHeight: "1",
    color: "#1c1b1f",
    fontWeight: "bold",
    maxWidth: "526px",
    ["@media (max-width:600px)"]: {
      maxWidth: "272px !important",
      margin: "0 auto 0 0",
    },
  },
  title: {
    color: "#1c1b1f",
    opacity: "0.64",
    lineHeight: "30px",
    fontWeight: "600",
  },
  Button: {
    backgroundColor: "#1c1b1f",
    fontWeight: "600",
    borderRadius: "40px",
    padding: "20px",
    zIndex: "9",
    "&:hover": {
      backgroundColor: "#1C1B1F",
    },
    ["@media (max-width:767px)"]: {
      width: "100%",
    },
  },
  GridImg: {},
};
