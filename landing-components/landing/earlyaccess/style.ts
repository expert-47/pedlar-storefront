export const styles = {
  Box: {
    marginTop: "100px",
    display: "flex",
    backgroundColor: "white",
    borderRadius: "15px",
    position: "relative",
  },
  CreatorButton: {
    padding: "20px 16px",
    margin: "initial",
    backgroundColor: "#1C1B1F",
    color: "rgb(249, 246, 242)",
    borderRadius: "666px",
    zIndex: "4",
    "&:hover": {
      backgroundColor: "#1C1B1F",
    },
    ["@media (max-width:767px)"]: {
      marginBottom: "20px",
      width: "100%",
    },
  },
  BrandsButton: {
    backgroundColor: "transparent",
    border: "1px solid",
    padding: "20px 16px",
    margin: "initial",
    width: "auto",
    color: "rgb(28, 27, 31)",
    zIndex: "4",
    borderRadius: "666px",
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
  BoxSelector: {
    display: "flex",
    backgroundColor: "transparent",
    borderRadius: "10px",
    border: "1px solid rgba(28, 27, 31, 0.64)",
    marginBottom: "24px",
    padding: "6px 5px",
  },
};
