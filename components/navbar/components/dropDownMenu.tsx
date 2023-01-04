import { useState } from "react";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "styles/navbar";
import { Button, Grid, useTheme, Checkbox, Divider, Typography, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import Text from "components/customText";
import ListItemText from "@mui/material/ListItemText";
import PedlarButton from "./pedlarButton";
import ProductHeader from "components/home/components/productHeader";
import Link from "next/link";
import { CustomContainer } from "components/layout";

interface Props {
  type: string;
  data: string[];
  loading: boolean;
}
const DropDownMenu = (props: Props) => {
  const theme = useTheme();
  const { type = "Brands", data, loading } = props;
  const [brands, setBrands] = useState(false);
  const [category, setCategory] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const showBrands = () => {
    setBrands((prv) => !prv);
  };
  const showCategory = () => {
    setCategory((prv) => !prv);
  };
  return (
    <>
      <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Button sx={styles.tabButton} onClick={handleClick}>
          <Box style={{ borderBottom: openMenu ? "solid #1C1B1F 1px" : "none" }}>{type}</Box>
          {openMenu ? <ExpandLess sx={styles.tabIcon} /> : <ExpandMore sx={styles.tabIcon} />}
        </Button>
      </Grid>
      <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <CustomContainer>
          <Menu
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            PaperProps={{
              elevation: 1,
              sx: {
                mt: 10.5,
                left: 0,
                l: 0,
                borderRadius: 0,
                width: "100%",
              },
            }}
            sx={styles.menu}
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
          >
            <CustomContainer>
              <Grid container style={{ maxWidth: "100%" }}>
                <Grid container item sx={styles.menuContainer}>
                  <CustomContainer>
                    <Box sx={styles.menuInnerContainer}>
                      {loading ? (
                        <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <CircularProgress color="inherit" />
                        </Grid>
                      ) : (
                        <Grid display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                          <Grid></Grid>

                          <Grid paddingRight={60}>
                            {data
                              .slice(0, 28)
                              .map((item , index) => (
                                <Link key={"dropdown-"+index} href={"./product"} style={{cursor:"pointer"}} >
                                  <Typography sx={styles.menuItems}>{item}</Typography>
                                </Link>
                              ))}
                            <Link href="/">
                              <ListItemText
                                style={{
                                  paddingTop: "4px",
                                  paddingLeft: "16px",
                                  color: "black",
                                  fontWeight: "600",
                                  fontSize: "12px",
                                  textDecoration: "underline",
                                }}
                              >
                                View all.....
                              </ListItemText>
                            </Link>
                          </Grid>
                        </Grid>
                      )}
                    </Box>
                  </CustomContainer>
                </Grid>
              </Grid>
            </CustomContainer>
          </Menu>
        </CustomContainer>
        <Grid item></Grid>
      </Grid>
    </>
  );
};

export default DropDownMenu;
