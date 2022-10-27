import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4
import Services from "images/Services/Services.png";

export const useStyles = makeStyles({
  name: "ComponentTec",
  uniqId: "tecComponent",
})((theme) => ({
  toolbar: {
    margin: "0px",

    backgroundImage: `url(${Services?.src})`,
    backgroundSize: "fit",
    backgroundPosition: "cover",
    opacity: "1",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.secondary.main,

    height: "600px",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingLeft: "20px",
    paddingRight: "20px",
    "&:hover": {
      borderRight: "1px solid blue",
      backgroundColor: theme.palette.success.dark,
      // Backgroud to set for this givin error not woking
    },
  },
  containerServices: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    paddingTop: "10px",
    paddingBottom: "5px",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: theme.palette.secondary.main,
  },
  Headings: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    height: "60%",
    flexDirection: "column",
  },
  descriptionServices: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5px",
    textAlign: "center",
  },
  description: {
    color: theme.palette.secondary.light,
    width: "65%",
    justifyContent: "center",
    margin: "20px",
    alignItems: "center",
    textAlign: "center",
  },
  img: {
    display: "flex",
    flexDirection: "column",

    marginTop: "40px",
    paddingRight: "20px",
  },
  styling: {
    color: theme.palette.secondary.light,
  },
  // Services Section
}));
export const style = {};
