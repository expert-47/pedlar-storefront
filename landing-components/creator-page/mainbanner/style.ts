export const styles = {
  MainBox: {
    paddingTop: "141px",
    display: "flex",
    alignItems: "center",
    ["@media (min-width:1400px)"]: {
      paddingTop: "192px",
    },
    ["@media (max-width:1250px)"]: {
      paddingTop: "112px",
    },
    ["@media (max-width:1160px)"]: {
      alignItems: "flex-start",
    },
    ["@media (max-width:800px)"]: {
      paddingTop: "109px",
    },
  },
  GridBox: {
    width: "100%",
    borderRadius: "20px",
    backgroundColor: "white",
    margin: "0 0 0 auto",
    maxWidth: "602px",
    zIndex: " 99",
    ["@media (min-width:1400px)"]: {
      maxWidth: "746px",
    },
    ["@media (max-width:1250px)"]: {
      maxWidth: "455px",
    },
    ["@media (max-width:1160px)"]: {
      margin: "300px 0 0 auto",
      maxWidth: "602px",
    },
    ["@media (max-width:700px)"]: {
      margin: "200px 0 0 auto",
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
    position: "absolute",
    left: "0px",
    objectFit: "cover",
    width: "656px",
    ["@media (max-width:1160px)"]: {
      width: "95%",
    },
  },
};
