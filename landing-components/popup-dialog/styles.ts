import { outlinedInputClasses } from "@mui/material/OutlinedInput";

export const styles = {
  TextFeild: {
    width: "100%",
    color: "#49454F",
    borderRadius: "5px",
    marginBottom: "24px",
    [`& .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: "rgba(121, 116, 126, 1) !important",
      borderRadius: "5px",
      fontSize: "16px",
    },
    input: {
      fontSize: "16px",
      fontWeight: "400",
    },
  },
  TextFeilds: {
    width: "100%",
    fontSize: "16px",
    fontWeight: "400",
    color: "red",
    borderColor: "#49454F",
    borderRadius: "5px",
    marginBottom: "24px",
  },
  Button: {
    backgroundColor: "#1C1B1F",
    borderRadius: "666px",
    padding: "10px 16px",
    "&:hover": {
      backgroundColor: "#1C1B1F",
    },
  },
};
