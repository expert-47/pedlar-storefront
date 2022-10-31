import { makeStyles } from "tss-react/mui";
import useMediaQuery from '@mui/material/useMediaQuery';
export const useStyles = makeStyles({
  name: "ComponentAbout",
  uniqId: "aboutComponent",
})((theme) => ({
  htag: {
    backgroundColor: "blue",
    color: "black",
    textAlign: "center",
  },
  disp:{
    [theme.breakpoint.down('500')]:{
      display:'none',
    }
  }
}));
export const style = {};