import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useRouter } from "next/router";

const theme = createTheme();

export default function adminaddeditproduct() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      pid: data.get("pid"),
      pname: data.get("pname"),
      pquantity: data.get("pquantity"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h2" sx={{ padding: "16px" }}>
        Add Item
      </Typography>
      <Container sx={{ padding: "10px" }}>
        <Box
          sx={{
            bgcolor: "#f5f5f5",
            margin: "16px",
            padding: "18px",
            borderRadius: "28px",
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="pid"
            label="Product ID"
            name="id"
            autoComplete="pid"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="pname"
            label="Product Name"
            id="pname"
            autoComplete="pname"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="pquantity"
            label="Product Quantity"
            id="pquantity"
            autoComplete="pquantity"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              router.push("adminproduct");
            }}
          >
            Add
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              router.push("adminproduct");
            }}
          >
            Cancel
          </Button>
        </Box>
      </Container>
    </ThemeProvider>

    // <ThemeProvider theme={theme}>
    //   <Container component="main" maxWidth="xs">
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         marginTop: 8,
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
    //         <LockOutlinedIcon />
    //       </Avatar>
    //       <Typography component="h1" variant="h5">
    //         Add Product
    //       </Typography>
    //       <Box
    //         component="form"
    //         onSubmit={handleSubmit}
    //         noValidate
    //         sx={{ mt: 1 }}
    //       >
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           id="email"
    //           label="Email Address"
    //           name="email"
    //           autoComplete="email"
    //           autoFocus
    //         />
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           name="password"
    //           label="Password"
    //           type="password"
    //           id="password"
    //           autoComplete="current-password"
    //         />

    //         <Grid container>
    //           <Grid item xs />
    //           <Grid item>
    //             <Link
    //               href="#"
    //               variant="body2"
    //               onClick={() => {
    //                 router.push("register");
    //               }}
    //             >
    //               {"Don't have an account? Sign Up"}
    //             </Link>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </Box>
    //   </Container>
    // </ThemeProvider>
  );
}
