import { Grid, Typography, Button, Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import CheckoutOrder from "components/checkoutOrder/checkoutOrder";
import styles from "styles/checkout";

import { useEffect, useState } from "react";
import { getCartProducts } from "api/grapgql";
import { checkoutCartDetails } from "../../api/grapgql";

const CartDrawer = (props: { openDrawer: boolean; toggleDrawer: (value: boolean) => void }) => {
  const { openDrawer, toggleDrawer } = props;
 

  const [cartData, setCartData] = useState([]);
  const [totalPrice , setTotalPrice]=useState();

 
  
  const apiForCheckout = async () => {
    if (typeof window !== "undefined") {
      const createdCartID = localStorage.getItem("cartID");
      const response = await checkoutCartDetails(createdCartID);
      window.open(response?.data?.cart?.checkoutUrl);
    }
  };



  useEffect(() => {

    if (typeof window !== "undefined") {
      const cartID = localStorage.getItem("cartID");

    

       getCartProducts(cartID).then((response) => {

        setCartData(response?.data?.cart?.lines?.nodes);
      });

    }
    
  }, [openDrawer , toggleDrawer]);
  // getting cart products

  useEffect(()=>{
    // if(cartData?.length > 0){
    // const  price = cartData.reduce((total,item)=>{
  
    //   return typeof(total) =="object"? (Number(total.merchandise?.price?.amount)  * Number(total.quantity)) + (Number(item?.merchandise.price?.amount) * Number(item.quantity)):total+( Number(item?.merchandise.price?.amount) * Number(item.quantity));

    // });

    // setTotalPrice(price);

    // }

   

  });

 
  

  const paperStyle = {
    color: "black",
    width: {
      lg: "25%",
      md: "30%",
    },
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: "20px",
    maxHeight: "100%",
  };

  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={() => toggleDrawer(false)}
      PaperProps={{
        sx: paperStyle,
      }}
    >
      <Grid container>
        <Grid
          container
          item
          xs={12}
          md={12}
          lg={12}
          display={"flex"}
          maxHeight="30px"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography sx={styles.cartDrawerTypo}>{`Cart(${cartData?.length})`}</Typography>
          <CloseIcon
            onClick={() => {
              toggleDrawer(false);
            }}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={12}
          lg={12}
          justifyContent={"center"}
          alignItems={"center"}
          paddingY={"40px"}
          sx={styles.cartDrawerSlider}
        >
          {/* {data.map((item) => ( */}

          {cartData?.map((item : any, index) => {
           
            return (
              <CheckoutOrder
                key={index}
                image={item?.merchandise?.image?.url || ""}
                name={item?.merchandise?.title || ""}
                price={item?.merchandise?.price?.amount || 0}
                CurrencyCode= {item?.merchandise?.price?.currencyCode || "$"}
                quantity={item?.quantity}
                itemData={item}
              />
            );
          })}
      
        </Grid>
      </Grid>

      <Grid
        item
        container
        xs={12}
        md={12}
        lg={12}
        direction={"column"}
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
      >
        <Grid
          container
          item
          style={{ display: "flex", padding: "5px", justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={styles.totalText}>Total</Typography>
            <Typography fontSize="12px" sx={styles.taxStyle}>
              Incl. VAT & Taxes
            </Typography>
          </Grid>
        
          <Typography sx={styles.paymentTotal}>
          A${totalPrice ? totalPrice : ""}
          </Typography>
        </Grid>

        <Button
          // href={checkoutData?.data?.cart?.checkoutUrl}
          // disabled={cartData?.length > 0 ? false : true}
          sx={styles.checkoutButton}
          onClick={apiForCheckout}
        >
          Checkout
        </Button>

        {/* <Link href="/checkout">
          <Button sx={styles.checkoutButton} >Checkout</Button>
        </Link> */}
      </Grid>
    </Drawer>
  );
};

export default CartDrawer;
