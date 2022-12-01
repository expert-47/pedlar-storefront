export const styles = {
  mainGrid: {
    background: "#FFFFFF",
    borderRadius: "16px",
    padding: "40px 0",
    width: "100%",
    position: "relative",
    zIndex: "3",
  },
  gridboxText: {
    color: "#1C1B1F",
    lineHeight: "unset",
  },
  gridinnerPara: {
    color: "#1C1B1E",
    fontFamily: "Inter",
    opacity: "0.64",
  },
  gridinnereText: {
    color: "#1C1B1E",
  },
  creator: {
    color: "#8652FF",
    textDecoration: "none",
  },
  gridimgBox: {
    ["@media (max-width:600px)"]: {
      display: "flex",
    },
  },
  marqueetop: {
    color: "#ebe8e4",
  },
  marqueeright: {
    color: "#ebe8e4",
    width: "1350px",
    position: "absolute",
    transformOrigin: "335px 391px",
    transform: "rotate(90deg)",
    right: "0px",
    top: "0px",
    zIndex: "0",
  },
  marqueebottom: {
    color: "#ebe8e4",
    transform: "rotate(-180deg)",
  },
  marqueeleft: {
    color: "#ebe8e4",
    position: "absolute",
    transformOrigin: "366px 394px",
    transform: "rotate(-90deg)",
    left: "0",
    top: "0",
    zIndex: "-1",
  },
};
