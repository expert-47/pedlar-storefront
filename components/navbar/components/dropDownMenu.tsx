import { useState } from "react";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Menu from "@mui/material/Menu";

import styles from "styles/navbar";
import { Button, Grid, Typography, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

import Link from "next/link";
import { CustomContainer } from "components/layout";
import { useRouter } from "next/router";

interface Props {
  type: string;
  data: string[];
  loading: boolean;
}
const DropDownMenu = (props: Props) => {
  const { type = "Brands", data, loading } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownOption, setdropdownOption] = useState(false);

  const route = useRouter();
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const [viewAll, toggleViewAll] = useState(true);

  const handleClose = () => {
    setAnchorEl(null);
    setdropdownOption(false);
  };

  return (
    <>
      <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Button sx={styles.tabButtons} onClick={handleClick}>
          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "16px",
                color: "rgba(28, 27, 31, 0.8)",
                textTransform: "none",
                borderRadius: "0",
                paddingY: "0",
              }}
              color={openMenu ? "rgba(28, 27, 31, 0.32)" : "black"}
            >
              {type}
            </Typography>
          </Box>
          {openMenu ? <ExpandLess sx={styles.tabIcons} /> : <ExpandMore sx={styles.tabIcon} />}
        </Button>
      </Grid>

      <Grid display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <CustomContainer>
          <Menu
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            PaperProps={{
              elevation: 1,
              sx: {
                mt: 20,
                pb: 20,
                left: "0 !important",
                l: 0,
                borderRadius: 0,
                width: "100% ",
                maxWidth: "100% ",
                boxShadow: "none",
                borderTop: "1px solid rgba(28, 27, 31, 0.32)",
              },
            }}
            sx={styles.menu}
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Box
                sx={{
                  maxHeight: 200,
                  display: "flex",
                  flexFlow: "column wrap",
                  alignContent: "flex-end",
                  paddingRight: "10px",
                }}
              >
                {loading ? (
                  <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CircularProgress color="inherit" />
                  </Grid>
                ) : (
                  data?.map((data, index) => {
                    return (
                      <Link
                        as={`${route?.query?.slug}/products`}
                        href={{
                          pathname: `${route?.query?.slug}/products`,
                          query: { dataType: type, itemValue: data },
                        }}
                      >
                        <a
                          style={{
                            cursor: "pointer",
                            textDecoration: "none ",
                            color: "black",
                            minWidth: 150,
                            paddingRight: 20,
                          }}
                        >
                          <Typography sx={styles.menuItems}>{data}</Typography>
                        </a>
                      </Link>
                    );
                  })
                )}

                {/* {data.length > 9 && (
                                    <a
                                      style={{
                                        cursor: "pointer",
                                        textDecoration: "none ",
                                        color: "black",
                                      }}
                                    >
                                      <Typography
                                        onClick={() => {
                                          toggleViewAll((prv) => !prv);
                                        }}
                                        sx={[
                                          styles.menuItems,
                                          {
                                            textDecoration: "underline",
                                          },
                                        ]}
                                      >
                                        {viewAll ? "View all" : "View less"}
                                      </Typography>
                                    </a>
                                  )} */}
              </Box>
            </Box>
          </Menu>
        </CustomContainer>
        <Grid item></Grid>
      </Grid>
    </>
  );
};

export default DropDownMenu;
