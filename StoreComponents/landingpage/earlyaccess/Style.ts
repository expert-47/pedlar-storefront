export const styles = {
  Box: {
    marginTop: "100px",
    display: "flex",
    backgroundColor: "white",
    borderRadius: "15px",
  },
  creator: {
    backgroundColor: "#1C1B1F",
    color: "white",
    borderRadius: "40px",
    "&:hover": {
      backgroundColor: "#1C1B1F",
    },
    ["@media (max-width:767px)"]: {
      marginBottom: "20px",
      width:'100%',
    },
  },
  brands: {
    backgroundColor: "white",
    border: "1px solid",
    color: "black",
    borderRadius: "40px",
    ["@media (max-width:767px)"]: {
      width:'100%',
    },
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
