export const styles = {
  Box: {
    marginTop: { xs: "50px", md: "100px" },
    display: "flex",
    backgroundColor: "white",
    borderRadius: "15px",
    position: "relative",
    zIndex: "9",
  },
  CreatorButton: {
    padding: "20px 16px",
    margin: "initial",
    backgroundColor: "#1C1B1F",
    color: "rgb(249, 246, 242)",
    borderRadius: "666px",
    width: "172px",
    marginRight: "23px",
    zIndex: "4",
    "&:hover": {
      backgroundColor: "#1C1B1F",
    },
    ["@media (max-width:767px)"]: {
      marginBottom: "20px",
      width: "100%",
      marginRight: "0px",
      marginTop: "30px",
    },
  },
  BrandsButton: {
    backgroundColor: "transparent",
    border: "1px solid",
    padding: "20px 16px",
    margin: "initial",
    color: "rgb(28, 27, 31)",
    width: "172px",
    zIndex: "4",
    borderRadius: "666px",
    ["@media (max-width:767px)"]: {
      width: "100%",
    },
  },
};
