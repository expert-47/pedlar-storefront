import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import styles from "styles/checkout";

const CheckoutOrder = () => {

  return (
    <Grid container item lg={7} style={{ display: "flex" }}>
      <img src="/Product Image.png" width="100" height="100"></img>
      <Grid style={{ margin: "10px",  }}>
        <Typography fontSize="12px" sx={styles.brandName}>
          Veja X Marni
        </Typography>
        <Typography fontSize="16px" sx={styles.productPrice}>
          $320
        </Typography>
        <Grid style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
          <Box
            component="span"
            sx={{ borderRadius: "3px", border: "1px solid #DDDDDD", width: "85px", height: "25px" }}
          >
            <Grid style={{ display: "flex", justifyContent: "space-between" }}>
              <RemoveIcon sx={styles.addRemoveIcon} />
              <Typography sx={styles.addRemoveText}>
                1
              </Typography>
              <AddIcon sx={styles.addRemoveIcon} />
            </Grid>
          </Box>
          <Button sx={styles.removeButton}>Remove</Button>
        </Grid>
      </Grid>
      <Divider sx={styles.divider} />
    </Grid>
  );
};

export default CheckoutOrder;
