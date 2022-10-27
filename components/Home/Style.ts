import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles({
  name: "ComponentAbout",
  uniqId: "aboutComponent",
})((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: "595px",
    width: "100%",
    [theme.breakpoints.down('500')]: {
      width: "100%",
      height: "300px",
    },
  },
  typotext: {
    height: "374px",
    padding: "30px",
    paddingTop: "50px",
  },
  typopara: {
    fontWeight: "700",
  },
  shopbutton: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "20px",
    fontWeight: "600",
  },
  mainbargrid: {
    display: "flex",
    backgroundColor: "black",
    marginTop: "49px",
  },
  bartext: {
    color: "white",
    fontSize: "24px",
    fontWeight: "700",
    paddingTop: "38px",
    paddingBottom: "38px",
    paddingLeft: "38px",
  },
  barbtn: {
    display: "flex",
    alignItems: "center",
  },
  btn: {
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "30px",
    backgroundColor: "white",
    color: "black",
  },
  gridtag1typo1: {
    fontSize: "22px",
    fontWeight: "700",
  },
  gridtag1typo2: {
    fontSize: "12px",
    fontWeight: "600",
  },
  boxtext: {
    color: "black",
    fontWeight: "600",
    paddingLeft: "8px",
  },
}));
export const style = {};
