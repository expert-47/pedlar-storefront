import React from "react";
import { Grid } from "@mui/material";

const BrandTitles = () => {
  return (
    <Grid
      container
      gap={2}
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      style={{ display: "flex", textAlign: "center", marginTop: "20px" }}
    >
      <Grid
        item
        xs={5.5}
        sm={2}
        md={2}
        lg={2.2}
        style={{
          border: "1px solid rgba(0,0,0,0.4)",
          textAlign: "center",
        }}
      >
        <img style={{ height: "176px", width: "176px" }} src="/Frame1.png" alt="bordergrid"></img>
      </Grid>
      <Grid item xs={5.5} sm={2} md={2} lg={2.2} style={{ border: "1px solid rgba(0,0,0,0.4)", textAlign: "center" }}>
        <img style={{ height: "176px", width: "176px" }} src="/Frame2.png" alt="bordergrid"></img>
      </Grid>
      <Grid item xs={5.5} sm={2} md={2} lg={2.2} style={{ border: "1px solid rgba(0,0,0,0.4)", textAlign: "center" }}>
        <img style={{ height: "176px", width: "176px" }} src="/Frame3.png" alt="bordergrid"></img>
      </Grid>
      <Grid item xs={5.5} sm={2} md={2} lg={2.2} style={{ border: "1px solid rgba(0,0,0,0.4)", textAlign: "center" }}>
        <img style={{ height: "176px", width: "176px" }} src="/Frame4.png" alt="bordergrid"></img>
      </Grid>
      <Grid item xs={5.5} sm={2} md={2} lg={2.2} style={{ border: "1px solid rgba(0,0,0,0.4)", textAlign: "center" }}>
        <img style={{ height: "176px", width: "176px" }} src="/Frame5.png" alt="bordergrid"></img>
      </Grid>
    </Grid>
  );
};

export default BrandTitles;
