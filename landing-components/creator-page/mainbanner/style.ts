export const styles = {
  MainBox: {
    paddingTop: "163px",
    display: "flex",
    alignItems:'center',
    ["@media (max-width:1250px)"] : {
      paddingTop: "112px",
    },
    ["@media (max-width:1160px)"] : {
      alignItems:'flex-start',
  }
  },
  GridBox: {
    width: "100%",
    padding: "40px",
    borderRadius: "20px",
    backgroundColor: "white",
    margin: '0 0 0 auto',
    maxWidth: '602px',
    zIndex:' 99',
    ["@media (max-width:1250px)"] : {
      maxWidth: '455px',
    },
    ["@media (max-width:1160px)"] : {
        margin: '300px 0 0 auto',
        maxWidth: '602px',
    }
  },
  heading: {
    lineHeight: "60px",
    color: "#1c1b1f",
    fontWeight: "bold",
    fontFamily: "Inter",
  },
  title: {
    paddingTop: "20px",
    color: "#1c1b1f",
    opacity: "0.64",
    lineHeight: "30px",
    fontWeight: "600",
    paddingBottom: "10px",
  },
  Button: {
    backgroundColor: "#1c1b1f",
    fontWeight: "600",
    borderRadius: "40px",
    padding: "20px",
    "&:hover": {
      backgroundColor: "#1C1B1F",
    },
  },
  brandImg:{
    position: 'absolute',
    left:'0px',
    objectFit: 'cover',
    width: '656px',
  }
};
