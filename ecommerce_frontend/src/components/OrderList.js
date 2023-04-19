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


const OrderList = ({ products: orders }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredOrders = orders.filter((order) =>
    order.oid.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ padding: "16px" }}>
        {/* <Typography variant="h6">Product List</Typography> */}
        <TextField
          label="Search Orders"
          value={searchText}
          onChange={handleSearchChange}
          sx={{ margin: "16px" }}
        />
        <Box
          sx={{
            bgcolor: filteredOrders.length === 0 ? "#eba1a1" : "#f5f5f5",
            margin: "16px",
            borderRadius: "28px",
          }}
        >
          {filteredOrders.length === 0 ? (
            <Typography sx={{ padding: "20px" }}>No orders found</Typography>
          ) : (
            <List>
              {filteredOrders.map((order) => (
                <ListItem key={order.oid}>
                  <ListItemText primary={order.oid} />
                  <ListItemText secondary={"Time : " + order.otime}/>
                  <ListItemText secondary={"Total : " + order.ototal}/>
                  <ListItemText secondary={"Status : " + order.ostatus}/>
                  
                  <IconButton onClick={() => console.log('cancel order', order.oid)}>
                    <RemoveCircleOutlineIcon sx={{ margin: "5px" }} />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default OrderList;
