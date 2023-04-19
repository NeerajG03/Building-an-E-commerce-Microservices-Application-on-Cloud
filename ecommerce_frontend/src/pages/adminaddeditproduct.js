import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useRouter } from "next/router";

const theme = createTheme();

export default function adminaddeditproduct() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query)
    if (router.query.isEdit) console.log("edit boy");
    else console.log("edit no boy");
  }, [router.query]);

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
            defaultValue={router.query.isEdit ? router.query.pid : ""}
/>
          <TextField
            margin="normal"
            required
            fullWidth
            name="pname"
            label="Product Name"
            id="pname"
            autoComplete="pname"
            defaultValue={router.query.isEdit ? router.query.pname : ""}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="pquantity"
            label="Product Quantity"
            id="pquantity"
            autoComplete="pquantity"
            defaultValue={router.query.isEdit ? router.query.pquantity : ""}
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
  );
}
