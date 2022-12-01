export const styles = {
  footerLink: {
    fontFamily: "Inter",
    display: "block",
    textDecoration: "none",
    fontSize: "22px",
    paddingBottom: "16px",
    fontWeight: "600",
  },
  footerText: {
    fontFamily: "Inter",
    paddingBottom: "18px",
    color: "#fff",
  },
  footersocial: {
    fontFamily: "Inter",
    color: "#fff",
    fontSize: "22px",
    fontWeight: "600",
    textDecoration: "none",
    paddingLeft: "16px",
  },
  staticFooter: {
    background: "#1C1B1F",
    borderRadius: " 16px 16px 0px 0px",
    paddingTop: " 80px",
    paddingBottom: "40px",
  },
  footerRow: {
    justifyContent: "space-between",
    ["@media (max-width:767px)"]: {
      flexDirection: "column-reverse",
    },
  },
  footersocialRow: {
    display: "flex",
    alignItems: "flex-start",
    ["@media (max-width:800px)"]: {
      flexDirection: "column-reverse",
    },
  },
  footerMoblink: {
    ["@media (max-width:767px)"]: {
      paddingBottom: "50px",
    },
  },
  footerMobcol: {
    zIndex: "5",
    ["@media (max-width:767px)"]: {
      flexDirection: "column-reverse",
    },
  },
  footerLogocol: {
    zIndex: "5",
  },
};
