import { useState } from "react";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Menu from "@mui/material/Menu";

import styles from "styles/navbar";
import { Button, Grid, useTheme, Typography, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

import ListItemText from "@mui/material/ListItemText";
// import PedlarButton from "./pedlarButton";
// import ProductHeader from "components/home/components/productHeader";
import Link from "next/link";
import { CustomContainer } from "components/layout";
import { useRouter } from "next/router";

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
  const [dropdownOption, setdropdownOption] = useState(false);

  const route = useRouter();
  // const { asPath } = useRouter();

  // console.log("asPath...,.,..,.,.,....,,.,.,.,,.," , asPath);
  // console.log("route route?.query.slug...,.,..,.,.,....,,.,.,.,,.," , route?.query.slug);

  const openMenu = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setdropdownOption(false);
  };
  // const showBrands = () => {
  //   setBrands((prv) => !prv);
  // };
  // const showCategory = () => {
  //   setCategory((prv) => !prv);
  // };

  console.log("drop state ..........", dropdownOption);

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
                        <Box>
                          {/* display={"flex"} justifyContent={"space-between"} alignItems={"center"} */}
                          {/* <Grid></Grid> */}

                          <Grid container paddingRight={60}>
                            <Grid item sm={6} md={6}></Grid>
                            <Grid item sm={6} md={6} lg={6}>
                              <Grid container>
                                {dropdownOption
                                  ? data.map((item, index) => (
                                      <Grid key={"dropdown-" + index} item sm={2} md={3}>
                                        {/* routePath ? routePath : */}
                                        <Link
                                          as={`${route?.query?.slug}/products`}
                                          href={{
                                            pathname: `${route?.query?.slug}/products`,
                                            query: { dataType: type, itemValue: item },
                                          }}
                                        >
                                          <a
                                            style={{
                                              cursor: "pointer",
                                              textDecoration: "none !important",
                                              color: "black",
                                            }}
                                          >
                                            <Typography sx={styles.menuItems}>{item}</Typography>
                                          </a>
                                        </Link>
                                      </Grid>
                                    ))
                                  : data.slice(0, 2).map((item, index) => (
                                      <Grid key={"dropdown-" + index} item sm={2} md={3}>
                                        <Link
                                          as={`/${route?.query?.slug}/products`}
                                          href={{
                                            pathname: `/${route?.query?.slug}/products`,
                                            query: { dataType: type, itemValue: item },
                                          }}
                                          style={{ cursor: "pointer" }}
                                        >
                                          <a style={{ cursor: "pointer", textDecoration: "none", color: "black" }}>
                                            <Typography sx={styles.menuItems}>{item}</Typography>
                                          </a>
                                        </Link>
                                      </Grid>
                                    ))}
                                {dropdownOption === false && data?.length > 2 && (
                                  <Button onClick={() => setdropdownOption(true)}>
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
                                      View all
                                    </ListItemText>
                                  </Button>
                                )}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Box>
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
