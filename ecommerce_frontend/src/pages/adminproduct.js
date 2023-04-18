import ProductList from "@/components/ProductList"
import { Typography, Button, Box } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';


const productList = [
    {
        id : '01',
        name : "Santoor",
        quantity : 300
    },
    {
        id : '02',
        name : "Gandor",
        quantity : 300
    },
    {
        id : '03',
        name : "Hunter",
        quantity : 300
    }
]

export default function adminproduct() {
  return (
    <>
        <Typography variant="h2" sx={{padding:'16px'}}>Admin Home Page</Typography>
        <ProductList products={productList}/>
        <Box sx={{textAlign:'right'}}>
            <Button startIcon={<AddIcon/>} type="add" variant="contained" color="success" sx={{ mt: 3, mb: 2 ,marginRight:'100px'}}>
                Add Item
            </Button>
        </Box>
    </>
  )
}