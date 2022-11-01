import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles({
  name: "CheckoutOrder",
  uniqId: "orderCheckout",
})(() => ({
  inputStyle: {
    width: "100%",
    height: "44px",
    padding: "20px",
    borderRadius: "70px",
    border: "1px solid #000000",
    fontSize: "14px",
  },
  checkoutText: {
    fontWeight:"600",
    paddingLeft: "50px",
    paddingTop: "20px"
  },
  headingStyle: {
    fontWeight: "600",
    fontSize: "16px",
    // margin: "",
    paddingTop: "20px",
    paddingBottom: "20px",
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
  image: {
    height: "100",
    width: "100",
  },
  brandName: {
    fontWeight: "600",
    textTransform: "uppercase",
    marginTop: "15px",
  },
  productPrice: {
    fontWeight: "600",
    lineHeight: "20px",
    top: "232px",
  },
  addRemoveIcon: {
    fontWeight: "400",
    letterSpacing: "-0.02em",
    color: "#000000",
    lineHeight: "20px",
    // width: "7px",
    // height: "20px",
    padding: "4px",
  },
  addRemoveText: {
    fontWeight: "400",
    letterSpacing: "-0.02em",
    color: "#000000",
    lineHeight: "20px",
    padding: "2px",
  },
  // removeButton: {
  //   fontSize: "12px",
  //   fontWeight: "500",
  //   color: "#1C1B1F",
  //   textDecorationLine: "underline",
  //   lineHeight: "20px",
  // },
  divider: {
    backgroundColor: "#DDDDDD",
    height: "0.5px",
    width: "100%",
    left: "935px",
    top: "343px"
  }
}));
export const style = {};
