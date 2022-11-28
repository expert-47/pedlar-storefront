export const styles = {
  footerLink: {
    fontFamily: "Inter",
    display: "block",
    textDecoration: "none",
    fontSize: "22px",
    paddingBottom: "16px",
    fontWeight: "800",
  },
  ["@media (max-width:767px)"]: {
    paddingBottom: "20px",
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
    paddingTop: " 80px",
    paddingBottom:"40px",
    ["@media (max-width:1240px)"]: {
      padding: '80px 21px 40px',
    },
    ["@media (max-width:767px)"]: {
      padding: '41px 21px 20px',
    },
  },
  footerRow: {
    justifyContent: "space-between",
    ["@media (max-width:767px)"]: {
      flexDirection: "column-reverse",
    },
  },
  footerLogo: {
    paddingBottom: "40px",
    ["@media (max-width:767px)"]: {
      paddingTop: "40px",
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
    ["@media (max-width:800px)"]: {
      paddingTop: "15px",
    },
  },
  footerMobcol:{
    ["@media (max-width:767px)"]: {
      flexDirection: 'column-reverse',
    },
  }
};
