const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    borderColor: "info.main",
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
  select: {
    borderRadius: "50px",
    height: "46px",
    width: "100%",
    borderColor: "success.main",
    "&.Mui-focused": {
      borderRadius: "50px",
      borderColor: "success.main",
      "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "50px",
        borderColor: "success.main",
      },
    },
    textAlign: "left",
    fontSize: "14px",
    fontWeight: "400",
  },
  descriptionGrid: {
    display: "flex",
    marginTop: "24px",
    borderTop: "thin solid lightgray;",
    justifyContent: "space-between",
  },
  descriptionTypography: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#1C1B1F",
    textAlign: "start",
  },
  accordianGrid: {
    alignItems: "center",
    display: { md: "block" },
  },
  accordianTypography: {
    fontSize: "16px",
    color: "#1C1B1F",
  },
  description: {
    fontWeight: "600",
    fontSize: { xs: "20px", sm: "20px", md: "30px", lg: "30px" },
    lineHeight: "120%",
    paddingTop: "14px",
  },
  price: {
    margin: "16px",
  },
  mainDescription: {
    color: "info.contrastText",
    paddingTop: "30px",
    paddingBottom: "30px",
    fontWeight: "700px",
    fontSize: "16px",
    lineHeight: "22px",
  },
  bottomHeading: { marginTop: "24px", fontWeight: "700", fontSize: "14px", color: "primary.contrastText" },
  divider: {
    marginTop: "10px",
    fontWeight: "700",
    fontSize: "14px",
    color: "primary.contrastText",
    lineHeight: "10px",
  },
  sign: {
    marginTop: "20px",
    color: "rgba(0, 0, 0, 0.54)",
  },
  bottomContainer: {
    borderColor: "info.main",
    paddingBottom: "50px",
    marginLeft: "0px",
  },
  eachSlideEffect: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "contain",
    height: "300px",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  },
  eachSlideEffectSpan: {
    padding: "20px",
    fontSize: "20px",
    background: "#efefef",
    textAlign: "center",
  },
  text: { paddingBottom: "20px" },
  footerDivider: {
    marginBottom: "10px",
    height: "1px",
  },
};

export default styles;
