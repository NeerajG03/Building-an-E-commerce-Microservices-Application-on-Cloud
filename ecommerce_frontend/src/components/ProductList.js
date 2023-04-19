import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Container,
  Typography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/router";

const theme = createTheme();

const ProductList = ({ products }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleDelete = (product) => {
    // Handle delete logic here
  };

  const handleEdit = (product) => {
    // Handle edit logic here
    router.push({
      pathname: 'adminaddeditproduct',
      query: {
        isEdit : true,
        pid : product.pid,
        pname: product.pname,
        pquantity: product.pquantity
      }
    });

  };
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.pname.toLowerCase().includes(searchText.toLowerCase())
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
                  <ListItemText primary={product.pquantity} />
                  <IconButton onClick={() => handleDelete(product)}>
                    <DeleteIcon sx={{ margin: "5px" }} />
                  </IconButton>
                  <IconButton onClick={() => handleEdit(product)}>
                    <EditIcon sx={{ margin: "5px" }} />
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

export default ProductList;
