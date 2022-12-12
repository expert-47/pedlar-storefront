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
    cursor: "pointer",
  },
  marqueetop: {
    color: "rgb(28, 27, 31)",
    opacity: "0.08",
    wordSpacing: '18px',
    paddingLeft: '30px',
    transform: 'translate(0px, 17px)',
    ['@media (max-width:600px)']:{
      transform: 'translate(0px, 11px)',
    },
  },
  marqueebottom: {
    color: "rgb(28, 27, 31)",
    transform: "rotate(-180deg)",
    opacity: "0.08",
    wordSpacing: '18px',
    paddingLeft: '30px',
  },
  LoginBox: {
    backgroundColor: "#f9f6f2",
    width: "500px",
    borderRadius: "10px",
    p: 25,
  },
  BoxSelector: {
    display: "flex",
    backgroundColor: "transparent",
    borderRadius: "10px",
    border: "1px solid rgba(28, 27, 31, 0.64)",
    marginBottom: "24px",
    padding: "6px 5px",
  },
};
