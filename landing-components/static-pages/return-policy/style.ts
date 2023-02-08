export const styles = {
  MainBox: {
    padding: "16px", //padding:"35px"
    paddingTop: "150px",
    paddingBottom: "75px",
    width: "89%", //width:"79%"
    ["@media (max-width:2500px)"]: {
      padding: "25px",
      paddingTop: "152px",
      paddingBottom: " 75px",
      width: "80%",
    },
    ["@media (max-width:1500px)"]: {
      padding: "35px",
      paddingTop: "152px",
      paddingBottom: " 75px",
      width: "80%",
    },
    ["@media (max-width:1025px)"]: {
      padding: "51px",
      paddingTop: "152px",
      paddingBottom: "75px",
      width: "74%",
    },
    ["@media (max-width:768px)"]: {
      padding: "34px",
      paddingTop: "152px",
      paddingBottom: "75px",
      width: " 74%",
    },
    ["@media (max-width:425px)"]: {
      padding: "16px",
      paddingTop: "152px",
      paddingBottom: "75px",
      width: " 91%",
    },
    ["@media (max-width:325px)"]: {
      padding: "16px",
      paddingTop: "152px",
      paddingBottom: "75px",
      width: " 89%",
    },
  },

  spacing: {
    paddingBottom: "20px",
  },
  startReturnTypo: {
    fontSize: "16px",
    fontWeight: "600",
    padding: "15px 5px",
    textAlign: "center",
    width: "100%",
    color: "white",
    backgroundColor: "#1C1B1F",
    border: "1.5px solid",
    borderRadius: "32px",
    "&:hover": {
      backgroundColor: "#1C1B1F",
    },
  },
  returnbutton: {
    width: "335px",
    height: "46px",
    backgroundColor: "primary.dark",
    color: "primary.main",
    borderRadius: "666px",
    fontWeight: "600",
    textTransform: "none",
    padding: "10px 32.5px",
    marginTop: "20px",
    marginBottom: "50px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
  },
};
