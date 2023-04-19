import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Container,
  Typography,
  Button,
  Box,
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/router";

const theme = createTheme();


const UserProductList = ({ products }) => {
  const router = useRouter();
  const [cart, setCart] = useState({
    total:0
  })

  const [searchText, setSearchText] = useState("");

  const addTocart = (product) => {
    const tempCart = {...cart}
    if(tempCart[product.pid]){
      tempCart[product.pid] += 1

    }
    else{
      tempCart[product.pid] = 1
    }
    tempCart.total +=1
    setCart(tempCart);
  };
  
  const removeFromCart = (product)=>{
    const tempCart = {...cart}
    if(tempCart[product.pid]){
      tempCart[product.pid] -= 1
      tempCart.total -=1
    }
    setCart(tempCart);
  }

  const placeOrder = () => {
    let totalAmount = 0
    const productDict = products.reduce((dict, product) => {
      dict[product.pid] = product.pprice;
      return dict;
    }, {});

    Object.keys(cart).forEach(pid=>{ if (pid != 'total') totalAmount += cart[pid] * productDict[pid]})

    router.push({
      pathname: 'orderplaced',
      query: {
        totalprice: totalAmount
      }
    });
  }

  
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.pname.toLowerCase().includes(searchText.toLowerCase()) && parseInt(product.pquantity)!=0
  );

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ padding: "16px" }}>
        {/* <Typography variant="h6">Product List</Typography> */}
        <TextField
          label="Search Products"
          value={searchText}
          onChange={handleSearchChange}
          sx={{ margin: "16px" }}
        />
        <Box
          sx={{
            bgcolor: filteredProducts.length === 0 ? "#eba1a1" : "#f5f5f5",
            margin: "16px",
            borderRadius: "28px",
          }}
        >
          {filteredProducts.length === 0 ? (
            <Typography sx={{ padding: "20px" }}>No products found</Typography>
          ) : (
            <List>
              {filteredProducts.map((product) => (
                <ListItem key={product.pid}>
                  <ListItemText primary={product.pname} />
                  <ListItemText secondary={"price : " + product.pprice}/>
                  <ListItemText secondary={cart[product.pid] === undefined ? 0:cart[product.pid]}/>
                  
                  <IconButton onClick={() => addTocart(product)}>
                    <AddCircleOutlineIcon sx={{ margin: "5px" }} />
                  </IconButton>
                  <IconButton onClick={() => removeFromCart(product)}>
                    <RemoveCircleOutlineIcon sx={{ margin: "5px" }} />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
        <Box sx={{ textAlign: "right", marginRight:'30px' }}>
          <Button variant="contained" startIcon={<ShoppingCartCheckoutIcon/>} onClick={placeOrder}>
                Place Order
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default UserProductList;
