import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles({
  name: "ComponentFooter",
  uniqId: "footerComponent",
})((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "30px",
    paddingTop: "8px",
    paddingBottom: "4px",
    paddingRight: "30px",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },
  footerImage: {
    height: "24px",
    width: "35px",
    padding: "2px",
    lineHeight: "16px",
  },
  footerText: {
    fontWeight: "400",
    lineHeight: "16px",
    letterSpacing: "0.4px",
    color: theme.palette.primary.contrastText,
  },
}));
export const style = {};
