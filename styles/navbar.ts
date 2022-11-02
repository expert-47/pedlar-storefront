const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  Typography: { color: (theme) => theme.palette.primary.contrastText },
  appBar: { backgroundColor: "white", width: "100%" },
  marquee: { backgroundColor: "black", color: "white", paddingTop: "12px", paddingBottom: "12px" },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  padding: {
    width: "100%",
    paddingRight: {
      md: (theme) => theme.spacing(30),
      sm: (theme) => theme.spacing(30),
      sx: (theme) => theme.spacing(30),
      lg: (theme) => theme.spacing(20),
    },
    paddingLeft: {
      md: (theme) => theme.spacing(30),
      sm: (theme) => theme.spacing(30),
      sx: (theme) => theme.spacing(30),
      lg: (theme) => theme.spacing(20),
    },
  },
  iconColor: { color: (theme) => theme.palette.success.dark },
  leftContainer: {
    display: "flex",
    alignItems: "center",
  },
  tabButton: { color: (theme) => theme.palette.success.dark, fontSize: "16px", fontWeight: "600" },
  menuItem: { color: "black", fontWeight: "600", fontSize: "12px" },
  menuContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  menuInnerContainer: {
    color: "black",
    fontWeight: "800",
    display: "flex",
    flexDirection: "row",
    width: "60%",
    flexWrap: "wrap",
    alignSelf: "flex-end",
  },
  menu: {
    marginTop: (theme) => theme.spacing(1.6),
    minWidth: "100%",
    left: "unset",
    right: "unset",
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
    padding: "2px",
  },
  responsiveTypography: {
    fontWeight: "400",
    padding: "2px",
  },
};

export default styles;
