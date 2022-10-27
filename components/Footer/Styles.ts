import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles({
  name: "ComponentAbout",
  uniqId: "aboutComponent",
})(() => ({
  gridstyle: {
    display: "flex",
    paddingLeft: "49px",
    paddingRight: "49px",
    alignItems: "center",
    justifyContent: "center",
  },
  typoheading: {
    marginTop: "40px",
    fontWeight: "700",
  },
  typopara: {
    fontWeight: "600",
    color: "rgba(28, 27, 31, 0.64)",
  },
  typotext: {
    paddingTop: "11px",
    fontWeight: "600",
    color: "rgba(28, 27, 31, 0.64)",
  },
  bankingicons: {
    width: "34px",
    paddingLeft: "10px",
  },
}));
export const styles = {};
