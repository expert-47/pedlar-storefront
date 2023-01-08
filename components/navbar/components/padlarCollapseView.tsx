import React from "react";
import Link from "next/link";

import { Box, Collapse, Grid, MenuItem, useTheme } from "@mui/material";
import { CustomContainer } from "components/layout";
import styles from "styles/navbar";

interface Props {
  open: boolean;
  data: string[];
}
const PadlarCollapseView = (props: Props) => {
  const theme = useTheme();
  const { open, data } = props;

  return (
    <Grid
      container
      sx={{
        backgroundColor: "white",
        position: "absolute",
        top: theme.spacing(106),
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: "100%",
        // boxShadow: 1,
      }}
    >
      <CustomContainer>
        <Collapse in={open} timeout={100}>
          <Grid sx={styles.menuContainer}>
            <Box sx={styles.menuInnerContainer}>
              {data.slice(0, 30).map((item, index) => (
                <MenuItem
                  key={index}
                  style={{ color: "black", fontWeight: "600", fontSize: "12px", textTransform: "capitalize" }}
                >
                  {item}
                </MenuItem>
              ))}
              <MenuItem sx={styles.menuItem}>
                <Link href="/">
                  <a>View all</a>
                </Link>
              </MenuItem>
            </Box>
          </Grid>
        </Collapse>
      </CustomContainer>
    </Grid>
  );
};

export default PadlarCollapseView;
