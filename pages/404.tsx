import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
export default function Custom404() {
  return (
    <>
      <Box
        sx={{
          padding: "310px 0",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Grid sx={{ justifyContent: "center", display: "flex", padding: "25px" }}>
          <Typography sx={{ fontSize: "25px" }}>404 &nbsp; </Typography>
          <Typography sx={{ fontSize: "25px", fontWeight: "200" }}>| This page could not be found</Typography>
        </Grid>
      </Box>
    </>
  );
}
