const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
  },
  bannerText: {
    fontWeight: "700",
    fontSize: { lg: "24px", md: "24px", sm: "20px", xs: "20px" },
  },
  typotext: {
    // height: "374px",
    padding: "15px",
    paddingTop: "50px",
  },
  baseFootTypoheading: {
    color: "primary.dark",
    marginTop: "40px",
    fontWeight: "700",
    fontSize: "22px",
  },
  typopara: {
    fontWeight: "700",
  },
  shopbutton: {
    width: "197px",
    height: "46px",
    backgroundColor: "primary.dark",
    color: "primary.main",
    borderRadius: "666px",
    fontWeight: "600",
    textTransform: "none",
    padding: "10px 32.5px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
  },
  startreturnbtn: {
    width: "335px",
    height: "46px",
    backgroundColor: "primary.dark",
    color: "primary.main",
    borderRadius: "666px",
    fontWeight: "600",
    textTransform: "none",
    padding: "10px 32.5px",
    fontSize: "16px",
    marginTop: "30px",
    lineHeight: "20px",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
  },

  mainbargrid: {
    // display: "flex",
    backgroundColor: "primary.dark",
  },
  bartext: {
    color: "primary.main",
    // minWidth: "50%",
    paddingRight: "50px",
  },
  barbtn: {
    display: "flex",
  },
  btn: {
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "30px",
    backgroundColor: "primary.main",
    color: "primary.dark",
    textTransform: "none",
    padding: "10px 32.5px",
    marginTop: { xs: "10px", sm: "10px", lg: "0px" },
    "&:hover": {
      backgroundColor: "primary.main",
    },
  },
  closeIcon: {
    color: "primary.main",
    cursor: "pointer",
  },
  gridtag1typo1: {
    fontSize: "22px",
    fontWeight: "700",
    font: "inter",
    color: "primary.dark",
  },
  gridtag1typo2: {
    // fontSize: "16px",
    // fontWeight: "600",
    color: "primary.dark",
  },
  arrowIcon: {
    fontSize: "medium",
    // padding: "2px",
    color: "primary.dark",
  },
  galleryImg1: {
    width: "100%",
    // height: "88%",
  },
  galleryImg2: {
    width: "100%",
  },
  bannerDivider: {
    marginTop: "50px",
    marginBottom: "50px",
    height: "1px",
  },
  footerDivider: {
    marginTop: "50px",
    marginBottom: "10px",
    height: "1px",
  },
  baseFooter: {
    fontWeight: "600",
  },
  boxtext: {
    color: "primary.dark",
    fontWeight: "600",
    paddingLeft: "8px",
    width: "90%",
    fontFamily: "Inter",
    // marginTop: "20px",
  },
  baseFootTypopara: {
    fontSize: "20px",
    color: "primary.dark",
    fontWeight: "600",
    marginTop: {
      xs: "60px",
      md: "-10px",
    },
  },
  baseFootTypotext: {
    fontSize: "20px",
    paddingTop: "6px",
    fontWeight: "600",
    color: "success.dark",
    cursor: "pointer",
  },
  bankingicons: {
    width: "34px",
    paddingLeft: "10px",
  },
  brandImage: {
    height: {
      lg: "150px",
      md: "100px",
      sm: "80px",
      xs: "80px",
    },
    width: {
      lg: "280px",
      md: "200px",
      sm: "170px",
      xs: "45%",
    },
    // ["@media (max-width: 374px)"]: {
    //   width: "140px",
    // },
  },
};

export default styles;
