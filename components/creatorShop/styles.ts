export const styles = {
  desktopMainBox: {
    height: { xs: 300, sm: 350, md: 400, lg: 550 },
    position: "relative",
  },
  paperComponentMainBox: {
    position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: "100%",
    alignItems: "flex-end",
  },
  desktopPaperStyling: {
    padding: "30px 43px 43px 200px 30px",
    width: "50%",
    height: "226px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center",
    marginBottom: "3%",
    borderRadius: "10px",
  },
  textAlignCenter: {
    textAlign: "center",
  },
  desktopPaperTypography: {
    fontWeight: { sm: "700", md: "700" },
    fontSize: { sm: "25px", md: "35px" },
    lineHeight: { sm: "35px", md: "40px", lg: "45px" },
  },
  desktopButton: {
    width: { sm: "200px", md: "260px" },
    height: "46px",
    backgroundColor: "#1C1B1F",
    color: "primary.main",
    borderRadius: "666px",
    fontWeight: "600",
    textTransform: "none",
    padding: "12px 24px 12px 24px",
    marginTop: "30px",
    fontSize: "16px",
    marginBottom: "30px",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
  },
  desktopTypographyBox: {
    backgroundColor: "#8652FF",
    height: "58px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  desktopTypographyPremium: {
    fontWeight: "600",
    fontSize: "22px",
    lineHeight: "30px",
    color: "white",
    textAlign: "center",
  },
  mobileImageBox: {
    position: "relative",
    minHeight: "375px",
    zIndex: "-1",
    marginTop: "12px",
  },
  mobilePaperBox: {
    height: "346px",
    marginTop: "-6px",
  },
  borderRadiusTen: {
    borderRadius: "10px",
  },
  mobilePaperInnerBox: {
    textAlign: "center",
    padding: "40px  20px  20px  20px ",
  },
  mobilePaperTypography: {
    fontWeight: "700",
    fontSize: "29px",
    lineHeight: "45px",
  },
  mobileShopNowButton: {
    width: "95%",
    height: "46px",
    backgroundColor: "#1C1B1F",
    color: "primary.main",
    borderRadius: "666px",
    fontWeight: "600",
    textTransform: "none",
    padding: "12px 24px 12px 24px",
    marginTop: "30px",
    fontSize: "16px",
    marginBottom: "30px",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
  },
  mobilePremiumTextBox: {
    backgroundColor: "#8652FF",
    height: "148px",
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "60px",
  },
  mobilePremiumTypography: {
    fontWeight: "600",
    fontSize: "22px",
    lineHeight: "30px",
    color: "white",
    textAlign: "center",
    padding: "14px 21px 14px 21px",
  },
};
