import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import styles from "styles/navbar";
import { Button, Grid, Typography, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { CustomContainer } from "components/layout";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

interface Props {
  type: string;
  data: string[];
  loading: boolean;
}
const DropDownMenu = (props: Props) => {
  const { type = "Brands", data, loading } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const storeName = useSelector((data: any) => data.app.storeName);
  const route = useRouter();
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigateToProduct = (data: any) => {
    route.push(
      {
        pathname: `${route.basePath}/${storeName}/products`,
        query: { dataType: type, itemValue: data.label },
      },
      `${route.basePath}/${storeName}/products`,
    );
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
              elevation: 0,
              sx: {
                mt: 10,
                pb: 10,
                p: 10,

                borderRadius: 0,
                width: {
                  sx: data?.length <= 6 ? "150px" : `${(data?.length / 6) * 170}px`,
                  lg: data?.length <= 6 ? "200px" : `${(data?.length / 6) * 220}px`,
                },
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
                  ml: 10,
                }}
              >
                {loading ? (
                  <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CircularProgress color="inherit" />
                  </Grid>
                ) : (
                  data?.map((data: any, index: number) => {
                    if (data.count != 0) {
                      return (
                        <Box
                          key={data?.label + index}
                          sx={{
                            width: 150,
                            paddingRight: 20,
                            wordBreak: "break-word",
                          }}
                          onClick={() => {
                            navigateToProduct(data);
                          }}
                        >
                          <a
                            style={{
                              cursor: "pointer",
                              textDecoration: "none ",
                              color: "black",
                            }}
                          >
                            <Typography sx={styles.menuItems}>{data?.label || ""}</Typography>
                          </a>
                        </Box>
                      );
                    }
                  })
                )}
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
