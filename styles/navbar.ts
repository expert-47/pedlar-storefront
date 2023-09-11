const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  Typography: { color: "primary.contrastText" },
  appBar: { backgroundColor: "white", width: "100%" },
  marquee: { backgroundColor: "black", color: "white", paddingTop: "6px", paddingBottom: "6px" },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  padding: {
    width: "100%",
    paddingRight: {
      md: 20,
      sm: 23,
      sx: 30,
      lg: 20,
    },
    paddingLeft: {
      md: 20,
      sm: 23,
      sx: 30,
      lg: 20,
    },
  },
  iconColor: { color: "success.dark" },
  leftContainer: {
    display: "flex",
    alignItems: "center",
  },
  navTypo: {
    fontSize: "22px",
    fontWeight: "400",
    paddingLeft: "5px",
  },
  tabButton: {
    color: "rgba(28, 27, 31, 0.8)",
    fontSize: "16px",
    fontWeight: "600",
    textTransform: "none",
    borderRadius: "0",
    paddingY: "0",
  },
  tabButtons: {
    color: "rgba(28, 27, 31, 0.8)",
    fontSize: "16px !important",
    fontWeight: "600 !important",
    textTransform: "none",
    borderRadius: "0",
    paddingY: "0",
  },
  tabIcon: { alignItems: "center" },
  tabIcons: { alignItems: "center", color: "rgba(28, 27, 31, 0.32)" },
  menuItem: { color: "black", fontWeight: "600", fontSize: "12px", left: "303px", top: "203px" },
  menuContainer: {
    width: "100vw",
  },
  menuInnerContainer: {
    display: "flex",
    flexWrap: " wrap",
    alignContent: "center",
    justifyContent: "flex-start",
  },
  menuItems: {
    fontWeight: "500",
    fontSize: "14px",
    paddingTop: "8px",
  },
  menuItems2: {
    fontWeight: "500",
    fontSize: "14px",
    paddingTop: "8px",
    lineHeight: "30px",
  },
  menu: {
    backgroundImage:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5018382352941176) 0%)",
    backgroundSize: "100% calc(100% - 103px)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    display: "flex",
    flexDirection: "row",
    top: "-12px",
    marginTop: 1.6,
    minWidth: "100%",
    left: "unset",
    right: "unset",
    borderRadius: 0,
  },
  menuText1: {
    fontWeight: "600",
    color: "#1C1B1F",
  },
  menuText2: {
    fontWeight: "600",
    color: "rgba(28, 27, 31, 0.8)",
  },
  menuButton: {
    backgroundColor: "#000000",
    color: "white",
    borderRadius: "25px",
    width: "100%",
    textTransform: "none",
    fontWeight: "600",
    fontSize: "16px",
    "& hover": {
      backgroundColor: "#000000",
    },
  },

  outlinedButton: {
    backgroundColor: "white",
    color: "black",
    borderColor: "black",
    borderRadius: "25px",
    width: "100%",
    textTransform: "none",
    fontWeight: "600",
    fontSize: "16px",
  },
  menuCheck: {
    fontSize: "16px",
    fontWeight: "400",
    margin: "0px",
    "&.Mui-checked": {
      color: "black",
    },
  },
  menuDivider: {
    top: "173px",
    border: "0.001px solid rgb(28 27 31 / 7%)",
    marginTop: "12px",
    marginBottom: "12px",
  },
  drawerText: {
    color: "black",
    fontWeight: "500",
    lineHeight: "160%",
    alignItems: "center",
  },
  drawerList: {
    height: "230px",
  },
  drawerIcon: {
    color: "black",
  },
  gridtext: {
    fontWeight: "600",
  },
  zeroPadding: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  center: { display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" },
  drawerContainer: { paddingTop: "36px", paddingLeft: "10px", paddingRight: "10px" },
  searchBox: {
    paddingLeft: "5px",
    display: "flex",
    alignItems: "center",
    borderRadius: "25px",
    border: "1px solid rgba(0,0,0,0.3)",
  },
  navTypography: {
    fontWeight: "400",
    paddingLeft: "2px",
  },
  menuIcon: {
    paddingRight: "18px",
    paddingTop: "6px",
    marginLeft: "6px",
  },
  responsiveTypography: {
    fontSize: "22px",
    fontWeight: "400",
    padding: "5px",
  },
  shoppingCartIcon: {
    maxWidth: "20px",
    paddingRight: {
      xs: "24px",
    },
  },
};

export default styles;
