export const styles = {
  Box: {
    marginTop: "100px",
    display: "flex",
    backgroundColor: "white",
    borderRadius: "15px",
    paddingTop: "40px",
    paddingBottom: "40px",
    ["@media (max-width:800px)"]: {
      marginTop: "70px",
    },
  },
  creator: {
    backgroundColor: "#1C1B1F",
    width: "90%",
    color: "white",
    padding: "20px",
    borderRadius: "40px",
    "&:hover": {
      backgroundColor: "#1C1B1F",
    },
    ["@media (max-width:600px)"]: {
      marginBottom: "20px",
    },
  },
  brands: {
    backgroundColor: "white",
    border: "1px solid",
    width: "90%",
    color: "black",
    padding: "20px",
    borderRadius: "40px",
  },
  LoginBox: {
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
    padding: "5px",
  },
};
