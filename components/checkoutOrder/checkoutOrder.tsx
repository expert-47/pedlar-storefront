import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import styles from "styles/checkout";
import { updateCartLineItem } from "api/grapgql";
import { Alert } from "@mui/material";

import CircularIndeterminate from "components/muiLoader";

interface Props {
  name: string;
  price: string;
  image: string;
  quantity: number;
  itemData : any;
  CurrencyCode:string;
}

const CheckoutOrder = (props: Props) => {
  const [productCount, setProductCount] = useState(props?.quantity);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const incQuantityHandler = () => {
    const createdCartID = localStorage.getItem("cartID");
    setError(false);
   
  if(props?.itemData?.merchandise?.quantityAvailable === props?.quantity){
    setError(true);
    setErrorMessage("This Item is Currently out of Stock");
  }
  else {
    updateCartLineItem(createdCartID, props?.itemData?.id, productCount).then((res) => {
    
      console.log("res", res);
    });
  }

  };
  const productDecrementHandler =(quantity : number)=>{

    console.log("qunatity" , quantity);
    const createdCartID = localStorage.getItem("cartID");
    setError(false);
  };

  // const decQuantityHandler = () => {
  //   if (numbers > 0) {
  //     setNumbers(numbers - 1);
  //   }
  // };

  const handleAlertClose = () => {
		setError(false);
		setErrorMessage("");
	};

  



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
          <Typography sx={styles.productPrice}>{`${props?.CurrencyCode === "AUD" ? "A$" : ""} ${props?.price}`}</Typography>
          {error ? <Alert onClose={handleAlertClose} severity="error">{errorMessage}</Alert> : null}
        
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
              <RemoveIcon   sx={styles.addRemoveIcon} onClick={()=>productDecrementHandler(props?.quantity)}  />

              <Typography sx={styles.addRemoveText}>{props?.quantity}</Typography>
              <AddIcon sx={styles.addRemoveIcon} onClick={incQuantityHandler} />
            </Box>
            <Button sx={styles.removeButton} >Remove</Button>
          </Box>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
    </Box>
    </>
  );
};

export default CheckoutOrder;
