import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles({
  name: "ComponentHome",
  uniqId: "homeComponent",
})((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: "595px",
    width: "100%",
    [theme.breakpoints.down("500")]: {
      width: "100%",
      height: "300px",
    },
  },
  typotext: {
    // height: "374px",
    padding: "15px",
    paddingTop: "50px",
  },
  baseFootTypoheading: {
    color: theme.palette.primary.dark,
    marginTop: "40px",
    fontWeight: "700",
  },
  typopara: {
    fontWeight: "700",
  },
  shopbutton: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.main,
    borderRadius: "666px",
    fontWeight: "600",
    textTransform: "none",
    "&:hover": {
      color: theme.palette.primary.contrastText,
    },
    padding: "10px 32.5px",
  },
  mainbargrid: {
    // display: "flex",
    backgroundColor: theme.palette.primary.dark,
  },
  bartext: {
    color: theme.palette.primary.main,
    fontSize: "24px",
    fontWeight: "700",
    minWidth:"50%",
    paddingRight: "50px"
  },
  barbtn: {
    display: "flex",
  },
  btn: {
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "30px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.dark,
    textTransform: "none",
    padding: "10px 32.5px",
  },
  closeIcon: {
    color: theme.palette.primary.main,
    
  },
  gridtag1typo1: {
    fontSize: "22px",
    fontWeight: "700",
    color: theme.palette.primary.dark,
  },
  gridtag1typo2: {
    fontSize: "12px",
    fontWeight: "600",
  },
  arrowIcon: {
    fontSize: "small",
    padding: "2px"
  },
  galleryImg1: {
    width: "100%",
    height: "88%",
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
    color: theme.palette.primary.dark,
    fontWeight: "600",
    paddingLeft: "8px",
  },
  baseFootTypopara: {
    color: theme.palette.primary.dark,
    fontWeight: "600",
  },
  baseFootTypotext: {
    paddingTop: "11px",
    fontWeight: "600",
    color: theme.palette.success.dark,
  },
  bankingicons: {
    width: "34px",
    paddingLeft: "10px",
  },
}));
export const style = {};
