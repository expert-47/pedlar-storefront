export const styles = {
  MainBox: {
    paddingTop: { xs: "100px", lg: "150px" },
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-end",
    height: { xs: "355px", sm: "580px", md: "600px", lg: "auto", xl: "650px" },
    marginBottom: { xs: "350px", sm: "350px", md: "350px", lg: "auto" },
  },
  GridBox: {
    alignSelf: "center",
    position: { xs: "absolute", lg: "relative" },
    borderRadius: "20px",
    display: "flex",
    backgroundColor: "white",
    zIndex: " 99",
    top: { xs: "370px", sm: "520px", md: "520px", lg: "0px", xl: "0px" },
    width: { xs: "90%", sm: "600px", md: "600px", lg: "605px", xl: "580px" },
    right: { xs: "15px", sm: "20px", md: "5%", lg: "85px", xl: "45px" },
  },
  heading: {
    lineHeight: "1",
    color: "#1c1b1f",
    fontWeight: "bold",
  },
  title: {
    paddingTop: "20px",
    color: "#1c1b1f",
    opacity: "0.64",
    lineHeight: "30px",
    fontWeight: "600",
    paddingBottom: "10px",
  },
  Button: {
    backgroundColor: "#1c1b1f",
    fontWeight: "600",
    borderRadius: "40px",
    padding: "20px",
    "&:hover": {
      backgroundColor: "#1C1B1F",
    },
    ["@media (max-width:700px)"]: {
      padding: "15px",
    },
  },
  brandImg: {},
};
