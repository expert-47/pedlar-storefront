import React from "react";
import { Button, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import styles from "styles/checkout";

interface Props {
  data: string[];
  name: string;
  price: string;
}

const CheckoutOrder = (props: Props) => {
  return (
    <Box
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Box style={{ display: "flex", width: "100%", alignItems: "center", flexDirection: "row" }}>
        <Box
          style={{
            width: "130px",
            height: "130px",
          }}
        >
          <img src="/productImage.png" style={{ cursor: "pointer" }} />
        </Box>
        <Box
          style={{ marginBottom: "5px", cursor: "pointer", display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Typography sx={styles.brandName}>Veja X Marni</Typography>
          <Typography sx={styles.productPrice}>$320</Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            marginTop={"15px"}
          >
            <Box
              component="span"
              sx={{
                borderRadius: "3px",
                border: "1px solid #DDDDDD",
                width: "85px",
                height: "25px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <RemoveIcon sx={styles.addRemoveIcon} />
              <Typography sx={styles.addRemoveText}>1</Typography>
              <AddIcon sx={styles.addRemoveIcon} />
            </Box>
            <Button sx={styles.removeButton}>Remove</Button>
          </Box>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
    </Box>
  );
};

export default CheckoutOrder;
