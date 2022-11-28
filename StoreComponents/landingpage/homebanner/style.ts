export const styles = {
  bannerText: {
    position: "absolute",
    right: "-20px",
    bottom: "2px",
    margin: " 0 auto",
    width: "45%",
    paddingRight: "10px",
    ["@media (max-width:1400px)"]: {
      bottom: "-16px",
    },
    ["@media (max-width:1145px)"]: {
      bottom: "-16px",
      right: "-8px",
    },
    ["@media (max-width:960px)"]: {
      bottom: " -48px",
    },
    ["@media (max-width:800px)"]: {
      bottom: "-93px",
    },
    ["@media (max-width:767px)"]: {
      position: "unset",
      width: "100%",
      padding: " 0 17px",
    },
  },
  FirstList: {
    color: " #1C1B1F",
    fontSize: "48px",
    ["@media (max-width:1145px)"]: {
      fontSize: "42px",
    },
    ["@media (max-width:800px)"]: {
      fontSize: "28px",
    },
    ["@media (max-width:767px)"]: {
      fontSize: "42px",
    },
  },
  FirstPara: {
    opacity: "0.64",
    fontSize: "22px",
    padding: "0 0 22px 0px",
    color: " #1C1B1F",
    ["@media (max-width:1145px)"]: {
      fontSize: "18px",
    },
    ["@media (max-width:767px)"]: {
      fontSize: "20px",
    },
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
    fontSize: "21px",
    fontWeight: "900",
    padding: "15px 0",
    textTransform: " initial",
    marginRight: "28px",
    "&:hover": {
      backgroundColor: "#1C1B1F",
    },
    ["@media (max-width:1145px)"]: {
      width: " 152px",
      fontSize: " 18px",
      fontWeight: "900",
      padding: "12px 0",
    },
    ["@media (max-width:850px)"]: {
      width: " 140px",
      fontSize: " 21px",
      padding: "12px 0",
    },
    ["@media (max-width:767px)"]: {
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
    fontSize: "21px",
    fontWeight: "900",
    padding: "15px 0",
    textTransform: " initial",
    ["@media (max-width:1145px)"]: {
      width: " 152px",
      fontSize: " 18px",
      fontWeight: "900",
      padding: "12px 0",
    },
    ["@media (max-width:850px)"]: {
      fontSize: " 16px",
      width: "140px",
      padding: "12px 0",
    },
    ["@media (max-width:767px)"]: {
      width: "100%",
    },
  },
  LoginBox: {
    backgroundColor: "#f9f6f2",
    width: "500px",
    borderRadius: "10px",
    p: 25,
  },
  TextFeild: {
    width: "100%",
    color: "rgb(121, 116, 126)",
    borderRadius: "5px",
    marginBottom: "24px",
  },
  TextFeilds: {
    width: "100%",
    border: ".5px solid rgba(0, 0, 0, 0.4)",
    borderRadius: "5px",
    marginBottom: "24px",
  },
  TabSelector: {
    background: " transparent",
    borderRadius: "10px",
    border: "1px solid rgba(28, 27, 31, 0.64)",
    marginBottom: "24px",
    width: "250px",
  },
  animateRow: {
    alignItems: "center",
    ["@media (max-width:800px)"]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
};
