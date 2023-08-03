export const styles = {
  MainBox: {
    paddingTop: "25px",
  },
  fashionText: {
    ["@media (min-width:1300px)"]: {
      fontSize: "54px",
    },
  },
  bannerText: {
    position: "absolute",
    right: "-10px",
    bottom: "36px",
    margin: " 0 auto",
    width: "52%",
    paddingRight: "2px",
    ["@media (max-width:850px)"]: {
      width: "70%",
      bottom: "3px !important",
    },
    ["@media (max-width:1145px)"]: {
      bottom: "-67px",
    },
    ["@media (max-width:960px)"]: {
      bottom: " -48px",
    },
    ["@media (max-width:800px)"]: {
      bottom: "6px",
      width: "69%",
    },
    ["@media (max-width:767px)"]: {
      position: "unset",
      width: "100%",
      paddingTop: "20px",
    },
    ["@media (min-width:1452px)"]: {
      right: "-15px",
      width: "44%",
      bottom: "15px",
    },
  },
  FirstPara: {
    opacity: "0.64",
    padding: "20px 0 30px 0px",
    color: " #1C1B1F",
    lineHeight: "normal",
  },
  creator: {
    background: "#1C1B1F",
    borderRadius: " 666px",
    borderWidth: " 0px",
    borderColor: " initial",
    color: "#F9F6F2",
    width: " 170px",
    whiteSpace: "nowrap",
    cursor: "pointer",
    fontSize: "22px",
    lineHeight: "normal",
    fontWeight: "600",
    padding: "10px 20px",
    textTransform: " initial",
    zIndex: "4",
    position: "relative",
    height: "70px",
    "&:hover": {
      backgroundColor: "#1C1B1F",
    },
    ["@media (max-width:600px)"]: {
      width: "100%",
      marginBottom: "20px",
    },
  },
  brands: {
    background: "transparent",
    borderRadius: " 666px",
    borderWidth: " 0px",
    border: "1px solid #1C1B1F",
    color: "#1C1B1F",
    width: " 170px",
    whiteSpace: "nowrap",
    cursor: "pointer",
    fontSize: "22px",
    fontWeight: "600",
    padding: "10px 20px",
    marginLeft: { sm: "20px", md: "20px" },
    zIndex: "5",
    position: "relative",
    height: "70px",
    textTransform: " initial",
    ["@media (max-width:600px)"]: {
      width: "100%",
    },
  },

  animateRow: {
    display: "flex",
    alignItems: "center",
    ["@media (max-width:800px)"]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
};
