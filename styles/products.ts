const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
    borderBottom: 1,
    borderColor: "info.main",
    paddingBottom: "50px",
  },
  container: {
    justifyContent: "center",
    display: "flex",
  },
  typography: {
    textAlign: "left",
    fontSize: "14px",
    fontWeight: "700",
    color: "#1C1B1F",
  },
  inputLabel: {
    color: "rgba(28, 27, 31, 0.64)",
    fontSize: "16px",
    fontWeight: 600,
    textTransform: "none",
    padding: 0,
  },

  select: {
    height: "46px",
    width: "100%",
    border: "none",
    "&.Mui-focused": {
      borderRadius: "none",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    textAlign: "left",
    fontSize: "14px",
    fontWeight: "400",
  },
  descriptionGrid: {
    marginTop: "24px",
    borderTop: "thin solid lightgray;",
    justifyContent: "space-between",
  },
  descriptionTypography: {
    fontSize: "14px",
    fontWeight: "400",
    paddingTop: "30px",
    color: "#1C1B1F",
    textAlign: "start",
  },
  accordianGrid: {
    alignItems: "center",
    paddingTop: "25px",
    display: { md: "block" },
  },
  accordianTypography: {
    fontWeight: "700",
    fontSize: "14px",
    color: "#1C1B1F",
  },
  heading: { fontSize: "12px", fontWeight: "600" },
  description: { fontWeight: "600", fontSize: "40px", lineHeight: "120%", paddingTop: "14px" },
  price: { margin: "16px", fontWeight: "600", fontSize: "24px" },
  mainDescription: {
    color: "info.contrastText",
    paddingTop: "35px",
    fontWeight: "700",
    fontSize: "14px",
    display: { xs: "none", md: "block" },
  },
  bottomHeading: { marginTop: "24px", fontWeight: "700", fontSize: "14px", color: "primary.contrastText" },
  divider: {
    marginTop: "10px",
    fontWeight: "700",
    fontSize: "14px",
    color: "primary.contrastText",
    lineHeight: "10px",
  },
  bottomContainer: {
    paddingTop: "40px",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "1%",
    borderColor: "info.main",
    paddingBottom: "50px",
  },
  text: { paddingBottom: "20px", fontWeight: "600", fontSize: "22px" },
};

export default styles;
