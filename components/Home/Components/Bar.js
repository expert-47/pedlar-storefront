import React from "react";
import { useStyles } from "../Style";
import { Typography, Button, Grid } from "@mui/material";
import { CustomContainer } from "components/Layout/layout";
import CloseIcon from "@mui/icons-material/Close";

const Bar = () => {
  const { classes, cx } = useStyles();
  return (
    <CustomContainer>
      <Grid container item lg={12} className={cx(classes.mainbargrid)}>
        <Grid container item xs={8} sm={8} md={8} lg={7.5}>
          <Typography className={cx(classes.bartext)}>
            Love Fashion? Have your own style? Share it with your community.
          </Typography>
        </Grid>
        <Grid container item xs={8} sm={3} md={2} lg={4} className={cx(classes.barbtn)}>
          <Button className={cx(classes.btn)}>Signup for free</Button>
        </Grid>
        <CloseIcon style={{ color: "white", paddingTop: "20px" }} />
      </Grid>
    </CustomContainer>
  );
};

export default Bar;
