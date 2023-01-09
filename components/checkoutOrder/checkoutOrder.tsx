import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import styles from "styles/checkout";
import { updateCartLineItem } from "api/grapgql";
import CircularIndeterminate from "components/muiLoader";

interface Props {
  name: string;
  price: string;
  image: string;
  quantity: number;
  itemData : any;
}

const CheckoutOrder = (props: Props) => {
  const [productCount, setProductCount] = useState(props?.quantity);

  const incQuantityHandler = () => {
    const createdCartID = localStorage.getItem("cartID");
   
  if(props?.itemData?.merchandise?.quantityAvailable === props?.quantity){
      console.log("limit full");
  }
  else {
    updateCartLineItem(createdCartID, props?.itemData?.id, productCount).then((res) => {
    
      console.log("res", res);
    });
  }

  };

  // const decQuantityHandler = () => {
  //   if (numbers > 0) {
  //     setNumbers(numbers - 1);
  //   }
  // };



  



  return (
    <>
    {
      
    }
    <Box
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Box
        style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "row" }}
      >
        <Box
          style={{
            width: "130px",
            height: "130px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          <img src={props?.image} width="130px" height={"130px"} />
          {/* <Image src={props.image} width={130} height={130} layout="responsive" objectFit="fill"></Image> */}
        </Box>
        <Box
          style={{ marginBottom: "5px", cursor: "pointer", display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Typography sx={styles.brandName}>{props.name}</Typography>
          <Typography sx={styles.productPrice}>{props.price}</Typography>
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
              <RemoveIcon   sx={styles.addRemoveIcon}  />
              <Typography sx={styles.addRemoveText}>{props?.quantity}</Typography>
              <AddIcon sx={styles.addRemoveIcon} onClick={incQuantityHandler} />
            </Box>
            <Button sx={styles.removeButton}>Remove</Button>
          </Box>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
    </Box>
    </>
  );
};
// component={"button"} disabled={props?.itemData?.quantityAvailable === props?.itemData?.quantity ? true : false} 
export default CheckoutOrder;
