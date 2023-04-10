const styles = {
  headerText1: {
    fontSize: "12px",
  },
  headerText2: {
    fontWeight: "400",
    fontSize: "22px",
    paddingLeft: "5px",
  },
  description: {
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "16px",
  },
  inputStyle: {
    width: "100%",
    height: "44px",
    padding: "20px",
    borderRadius: "70px",
    border: "1px solid #000000",
    fontSize: "14px",
    marginTop: {
      xs: 10,
      md: 10,
    },
  },
  checkoutText: {
    fontSize: "26px",
    fontWeight: "600",
    paddingTop: "20px",
  },
  checkoutButton: {
    width: "90%",
    backgroundColor: "primary.dark",
    color: "primary.main",
    borderRadius: "666px",
    fontWeight: "600",
    textTransform: "none",
    padding: "12px 24px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
    marginTop: "10px",
    marginBottom: "30px",
  },
  headingStyle: {
    fontWeight: "600",
    fontSize: "16px",
    marginTop: {
      xs: 10,
    },
  },
  checkoutContainer: {
    paddingLeft: {
      lg: 85,
      md: 85,
      sm: 10,
      xs: 10,
    },
  },
  mainContainer: {
    paddingLeft: {
      lg: 85,
      md: 85,
      sm: 10,
      xs: 10,
    },
    paddingRight: {
      lg: 85,
      md: 85,
      sm: 10,
      xs: 10,
    },
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  inputBaseGrid: {
    padding: {
      md: 10,
      sm: 5,
      sx: 5,
      lg: 10,
    },
  },
  totalText: {
    fontWeight: "600",
    fontSize: "16px",
    color: "#1C1B1F",
  },
  taxStyle: {
    fontWeight: "400",
    color: "#1C1B1F",
    left: "981px",
    padding: "5px",
    top: "676px",
    opacity: "0.3",
    letterSpacing: "-0.02em",
  },
  paymentTotal: {
    fontWeight: "600",
    fontSize: "22px",
    color: "#1C1B1F",
  },
  brandName: {
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "16px",
    textTransform: "uppercase",
  },
  vendorName: {
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "16px",
    textTransform: "uppercase",
  },
  productPrice: {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px",
    top: "232px",
  },
  addRemoveIcon: {
    fontSize: "14px",
    fontWeight: "400",
    letterSpacing: "-0.02em",
    color: "#000000",
    lineHeight: "20px",
    padding: "4px",
  },
  addRemoveText: {
    fontSize: "14px",
    fontWeight: "400",
    letterSpacing: "-0.02em",
    color: "#000000",
    lineHeight: "20px",
    padding: "2px",
  },
  removeButton: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#1C1B1F",
    textDecorationLine: "underline",
    lineHeight: "20px",
  },
  divider: {
    backgroundColor: "#DDDDDD",
    height: "0.5px",
    width: "100%",
    left: "935px",
    top: "343px",
    marginTop: "20px",
  },
  paymentButton: {
    width: "100%",
    height: "46px",
    borderRadius: "30px",
    backgroundColor: "black",
    color: "white",
    textTransform: "none",
    marginTop: {
      xs: 8,
      md: 8,
    },
    "&:hover": {
      backgroundColor: "primary.dark",
    },
  },
  cartDrawerTypo: {
    fontWeight: "600",
    fontSize: "26px",
  },
  cartDrawerSlider: {
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
};

export default styles;
