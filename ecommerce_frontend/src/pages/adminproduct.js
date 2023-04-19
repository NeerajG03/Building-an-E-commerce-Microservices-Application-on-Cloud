import ProductList from "@/components/ProductList";
import { Typography, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";

const productList = [
  {
    pid: "01",
    pname: "Santoor",
    pquantity: 300,
  },
  {
    pid: "02",
    pname: "Gandor",
    pquantity: 300,
  },
  {
    pid: "03",
    pname: "Hunter",
    pquantity: 300,
  },
];

export default function adminproduct() {
  const router = useRouter();
  return (
    <>
      <Typography variant="h2" sx={{ padding: "16px" }}>
        Admin Home Page
      </Typography>
      <ProductList products={productList} />
      <Box sx={{ textAlign: "right" }}>
        <Button
          startIcon={<AddIcon />}
          type="add"
          variant="contained"
          color="success"
          sx={{ mt: 3, mb: 2, marginRight: "100px" }}
          onClick={() => {
            router.push("adminaddeditproduct");
          }}
        >
          Add Item
        </Button>
      </Box>
    </>
  );
}
