export const styles = {
  bannerText: {
    position: "absolute",
    right: "0px",
    bottom: "36px",
    margin: " 0 auto",
    width: "50%",
    paddingRight: "10px",
    ["@media (max-width:1145px)"]: {
      bottom: "-39px",
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
    ["@media (min-width:1440px)"]: {
      right: "6px",
      width: "44%",
    },
  },
  FirstPara: {
    opacity: "0.64",
    padding: "10px 0 22px 0px",
    color: " #1C1B1F",
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
    fontWeight: "600",
    padding: "15px 0",
    textTransform: " initial",
    marginRight: "28px",
    zIndex: "4",
    position: "relative",
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
    padding: "15px 0",
    zIndex: "5",
    position: "relative",
    textTransform: " initial",
    ["@media (max-width:600px)"]: {
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
  BoxSelector: {
    display: "flex",
    backgroundColor: "transparent",
    borderRadius: "10px",
    border: "1px solid rgba(28, 27, 31, 0.64)",
    marginBottom: "24px",
    padding: "6px 5px",
  },
  animateRow: {
    alignItems: "center",
    ["@media (max-width:800px)"]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  PopupBox: {
    backgroundColor: "#f9f6f2",
    borderRadius: "10px",
    p: 25,
  },
};
