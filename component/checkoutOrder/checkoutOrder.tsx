import React from "react";
import { Grid, Button } from "@mui/material";
import Text from "components/customText";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useStyles } from "./style";

const CheckoutOrder = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container item lg={7} style={{ display: "flex" }}>
      <img src="/Product Image.png" className={cx(classes.image)}></img>
      <Grid style={{ marginLeft: "10px" }}>
        <Text fontSize="12px" className={cx(classes.brandName)}>
          Veja X Marni
        </Text>
        <Text fontSize="16px" className={cx(classes.productPrice)}>
          $320
        </Text>
        <Grid style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
          <Box
            component="span"
            sx={{ borderRadius: "3px", border: "1px solid #DDDDDD", width: "85px", height: "25px" }}
          >
            <Grid style={{ display: "flex", justifyContent: "space-between" }}>
              <RemoveIcon style={{ fontSize: "14px" }} className={cx(classes.addRemoveIcon)} />
              <Text fontSize="14px" className={cx(classes.addRemoveText)}>
                1
              </Text>
              <AddIcon style={{ fontSize: "14px" }} className={cx(classes.addRemoveIcon)} />
            </Grid>
          </Box>
          <Button
            variant="text"
            label="Remove"
            // classname="removeBtn"
            // className={cx(classes.removeButton)}
            style={{
              fontSize: "12px",
              fontWeight: "500",
              color: "#1C1B1F",
              textDecorationLine: "underline",
              lineHeight: "20px",
            }}
          />
        </Grid>
      </Grid>
      <Divider className={cx(classes.divider)} />
    </Grid>
  );
};

export default CheckoutOrder;
