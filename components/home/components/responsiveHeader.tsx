import {
  Drawer,
  List,
  ListItemText,
  Grid,
  Typography,
  InputBase,
  ListItem,
  MenuItem,
  ListItemButton,
  Button,
  useTheme,
  Checkbox,
  Divider
} from "@mui/material";
import Link from "next/link";

import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/system";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Marquee from "react-fast-marquee";
import styles from "styles/navbar";
import { shopList } from "components/navbar/data";


interface Props {
  data: string[];
}

export const ResponsiveHeader = (props: Props) => {
  const theme = useTheme();
  const { data } = props;


  const paperStyle = {
    color: "black",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  };

  const onClickDrawer = () => {
    toggleDrawer(!openDrawer);
  };
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
    setOpens(false);

  };
  const handleClicks = () => {
    setOpens(!opens);
    setOpen(false);

  };

  return (
    <React.Fragment>
      <Grid columns={{ xs: 12, md: 12 }}
        item style={{ display: "flex" }}
      >
        <Grid>
          <Button onClick={handleClick} style={{ fontSize: "16px", color: "#1C1B1F", fontWeight: "600", padding: "unset" }}>
            <Grid>
              Brands
            </Grid>
            {open ? <ExpandLess style={{ transform: "scale(0.8)" }} /> : <ExpandMore style={{ transform: "scale(0.8)" }} />}
          </Button>
        </Grid>

        <Grid>
          <Button onClick={handleClicks} style={{ fontSize: "16px", color: "#1C1B1F", fontWeight: "600", padding: "unset" }}>
            <Grid>Category</Grid> {opens ? <ExpandLess style={{ transform: "scale(0.8)" }} /> : <ExpandMore style={{ transform: "scale(0.8)" }} />}
          </Button>

        </Grid>
      </Grid>
      <Collapse in={open} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Divider sx={styles.menuDivider} />

        <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          container item xs={12} sm={12} md={12}>

          <Box sx={styles.menuInnerContainer}>
            {data.map((item) => (
              <MenuItem>
                <Checkbox sx={styles.menuCheck} />
                <ListItemText>{item}</ListItemText>
              </MenuItem>
            ))}
          </Box>
          <Grid
            xs={12}
            sm={12}
            md={2}
            lg={2}
            paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
            paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
          >
            <Button variant="contained" sx={styles.menuButton}>
              Apply
            </Button>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={2}
            lg={2}
            paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
            paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
          >
            <Button variant="outlined" sx={styles.outlinedButton}>
              Reset filters
            </Button>
          </Grid>
        </Grid>
      </Collapse>
      <Collapse in={opens}>
        <Divider sx={styles.menuDivider} />

        <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }} container item xs={12} sm={12} md={12}>

          <Box sx={styles.menuInnerContainer}>
            {shopList.map((item) => (
              <MenuItem>
                <Checkbox sx={styles.menuCheck} />
                <ListItemText>{item}</ListItemText>
              </MenuItem>
            ))}
          </Box>
          <Grid
            xs={12}
            sm={12}
            md={2}
            lg={2}
            paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
            paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
          >
            <Button variant="contained" sx={styles.menuButton}>
              Apply
            </Button>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={2}
            lg={2}
            paddingX={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
            paddingY={{ xs: theme.spacing(10), md: theme.spacing(10), lg: theme.spacing(10) }}
          >
            <Button variant="outlined" sx={styles.outlinedButton}>
              Reset filters
            </Button>
          </Grid>
        </Grid>
      </Collapse>
    </React.Fragment>
  );
};
