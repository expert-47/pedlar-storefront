import React from "react";
import { useStyles } from "styles/home";
import { Typography, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import { CustomContainer } from "components/Layout/layout";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";

const Bar = () => {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  return (
    <CustomContainer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        item
        xs={11}
        sm={11}
        md={11.5}
        lg={11.5}
        className={cx(classes.mainbargrid)}
        // alignItems="center"
        justifyContent={{ lg: "center", md: "center", sm: "center", xs: "center" }}
        paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
        paddingY={{ xs: theme.spacing(10), md: theme.spacing(8), lg: theme.spacing(10) }}
      >
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={8}
          lg={7.5}
          paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
          paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
        >
          <Typography className={cx(classes.bartext)}>
            Love Fashion? Have your own style? Share it with your community.
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={2}
          lg={4}
          className={cx(classes.barbtn)}
          paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
          paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
          justifyContent={{ lg: "flex-end", md: "flex-end" }}
          alignItems={{ lg: "center", md: "center" }}
        >
          <Button className={cx(classes.btn)}>Signup for free</Button>
        </Grid>
        <Box
        // style={{
        //   position: "absolute",
        //   top: 20,
        //   right: 20,
        // }}
        >
          <CloseIcon className={cx(classes.closeIcon)} />
        </Box>
      </Grid>
    </CustomContainer>
  );
};

export default Bar;
