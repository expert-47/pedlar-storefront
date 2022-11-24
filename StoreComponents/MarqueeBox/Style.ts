export const styles = {
  mainGrid: {
    background: "#FFFFFF",
    borderRadius: "16px",
    padding: "40px 0",
    width: "100%",
  },
  gridboxText: {
    fontSize: "54px",
    color: "#1C1B1F",
    padding: "0 0 100px 0",
    fontWeight: " 700",
    ["@media (max-width:1100px)"]: {
      padding: "0 0 71px 0",
      fontSize: "42px",
    },
    ["@media (max-width:767px)"]: {
      fontSize: "25px",
      padding: "0 0 39px 0",
    },
  },
  gridinnerPara: {
    color: "#1C1B1E",
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "22px",
    opacity: "0.64",
    ["@media (max-width:1199px)"]: {
      fontSize: "18px",
    },
  },
  gridinnereText: {
    color: "#1C1B1E",
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "22px",
    ["@media (max-width:1199px)"]: {
      fontSize: "22px",
    },
  },
  creator: {
    color: "#8652FF",
    fontWeight: "600",
    fontSize: "22px",
    paddingLeft: "22px",
    ["@media (max-width:1199px)"]: {
      fontSize: "17px",
    },
  },
  gridimgBox: {
    ["@media (max-width:767px)"]: {
      display: "flex",
    },
  },
  gridimgBoxInner: {
    marginTop: "10px",
    ["@media (max-width:767px)"]: {
      marginTop: "0px",
      marginLeft: " 12px",
      maxWidt: "40%",
    },
  },
  marqueetop: {
    color: "#ebe8e4",
    width: "1350px",
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
    width: "1350px",
    transform: "rotate(-180deg)",
  },
  marqueeleft: {
    color: "#ebe8e4",
    width: "1350px",
    position: "absolute",
    transformOrigin: "366px 394px",
    transform: "rotate(-90deg)",
    left: "0",
    top: "0",
    zIndex: "-1",
  },
};
