export const styles = {
  mainGrid: {
    background: "#FFFFFF",
    borderRadius: "16px",
    width: "100%",
    position: "relative",
    zIndex: "3",
  },
  gridboxText: {
    color: "#1C1B1F",
    lineHeight: { lg: "64px", md: "62px", sm: "64px", xs: "40px" },
    // margin: "0 auto 0 0",
    // maxWidth: "1130px",
  },
  gridinnerPara: {
    color: "#1C1B1E",
    fontFamily: "Inter",
    opacity: "0.64",
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  gridinnereText: {
    color: "#1C1B1E",
    lineHeight: "normal",
  },
  creator: {
    color: "#8652FF",
    textDecoration: "none",
    cursor: "pointer",
    lineHeight: "normal",
  },
  marqueetop: {
    color: "rgb(28, 27, 31)",
    opacity: "0.08",
    wordSpacing: "18px",
    paddingLeft: "30px",
    lineHeight: "1 !important",

    transform: "translate(0px, 17px)",
    ["@media (max-width:600px)"]: {
      transform: "translate(0px, 11px)",
    },
  },
  marqueebottom: {
    color: "rgb(28, 27, 31)",
    transform: "rotate(-180deg)",
    opacity: "0.08",
    wordSpacing: "18px",
    paddingLeft: "30px",
    lineHeight: "1 !important",
  },
  LoginBox: {
    backgroundColor: "#f9f6f2",
    width: "500px",
    borderRadius: "10px",
    p: 25,
  },
  RespBox: {
    borderRadius: "10px",
    px: 25,
  },
  RespLoginBox: {
    borderRadius: "10px",
    paddingBottom: "30px",
    px: 25,
  },
  BoxSelector: {
    display: "flex",
    backgroundColor: "transparent",
    borderRadius: "10px",
    border: "1px solid rgba(28, 27, 31, 0.64)",
    marginBottom: "24px",
    padding: "6px 5px",
    width: "188px",
  },
};
