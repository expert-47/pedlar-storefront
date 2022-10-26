import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles({
  name: "ComponentAbout",
  uniqId: "aboutComponent",
})(() => ({
  gridstyle: {
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    padding:"20px"
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
}));
export const styles = {};
