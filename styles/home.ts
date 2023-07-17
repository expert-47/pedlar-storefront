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
    marginTop: "10px",
    // width: "197px",
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
    backgroundColor: "primary.dark",
  },
  bartext: {
    color: "primary.main",
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
    width : "100%",
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
    color: "primary.dark",
  },
  arrowIcon: {
    fontSize: "medium",
    color: "primary.dark",
  },
  galleryImg1: {
    width: "100%",
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
    marginTop: "60px",
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
      lg: "285px",
      md: "238px",
      sm: "170px",
      xs: "45%",
    },
  },
  paper :{
       width:"34px" ,
       height:"34px" ,
       display:"flex",
      justifyContent:"center",
      alignItems:"center",
      marginTop: "20px",
  }
};

export default styles;
