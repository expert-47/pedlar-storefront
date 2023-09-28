export const styles = {
  mainGrid: {
    background: "#FFFFFF",
    borderRadius: "16px",
    width: "100%",
    position: "relative",
    zIndex: "3",
    paddingTop: "15px",
  },
  gridboxText: {
    color: "#1C1B1F",
    lineHeight: { lg: "64px", md: "62px", sm: "64px", xs: "40px" },
  },
  gridinnerPara: {
    color: "#1C1B1E",

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
    opacity: "0.5",
    wordSpacing: "18px",
    paddingLeft: "30px",
    transform: "translate(0px, 17px)",
    ["@media (max-width:600px)"]: {
      transform: "translate(0px, 11px)",
    },
  },
  marqueebottom: {
    color: "rgb(28, 27, 31)",
    transform: "rotate(-180deg)",
    opacity: "0.5",
    wordSpacing: "18px",
    paddingLeft: "30px",
  },
};
