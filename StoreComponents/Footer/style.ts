export const styles = {
  footerLink: {
    fontFamily: "Inter",
    display: "block",
    textDecoration: "none",
    fontSize: "22px",
    paddingBottom: "16px",
    fontWeight: "800",
  },
  footerText: {
    fontFamily: "Inter",
    paddingBottom: "18px",
    fontSize: "22px",
    fontWeight: "500",
    color: "#fff",
  },
  footersocial: {
    fontFamily: "Inter",
    color: "#fff",
    fontSize: "22px",
    fontWeight: "800",
    textDecoration: "none",
    paddingLeft: "16px",
  },
  staticFooter: {
    background: "#1C1B1F",
    borderRadius: " 16px 16px 0px 0px",
    padding: " 80px 0",
  },
  footerRow: {
    justifyContent: "space-between",
    padding: "0 10px",
    ["@media (max-width:800px)"]: {
      flexDirection: "column-reverse",
    },
  },
  footerLogo: {
    paddingBottom: "40px",
  },
  footersocialRow: {
    display: "flex",
    alignItems: "flex-start",
    ["@media (max-width:800px)"]: {
      flexDirection: "column-reverse",
    },
  },
  footerMoblink: {
    ["@media (max-width:800px)"]: {
      paddingTop: "15px",
    },
  },
};
