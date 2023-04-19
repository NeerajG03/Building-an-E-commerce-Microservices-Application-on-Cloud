import UserProductList from "@/components/UserProductList";
import {Typography, Button, Box} from "@mui/material";

import { useRouter } from "next/router";


const productList = [
  {
    pid: "01",
    pname: "Santoor",
    pquantity: 300,
    pprice : 100
  },
  {
    pid: "02",
    pname: "Gandor",
    pquantity: 0,
    pprice : 200
  },
  {
    pid: "03",
    pname: "Hunter",
    pquantity: 100,
    pprice : 200
  },
];

const orderList = [
  {
    oid: "01",
    otime: "2023-04-30",
    ototal: 500,
    ostatus: "New"
  },
  {
    oid: "01",
    otime: "2023-04-30",
    ototal: 500,
    ostatus: "New"
  },
  {
    oid: "01",
    otime: "2023-04-30",
    ototal: 500,
    ostatus: "New"
  },
];

export default function userproduct() {
  const router = useRouter();

  return (
    <>
      <Typography variant="h2" sx={{ padding: "16px" }}>
        User Order Page
      </Typography>
      <UserProductList products={productList}/>
      <Box sx={{textAlign:"right", marginRight:"93px"}}>
      <Button variant="contained" onClick={()=>{router.push('userorder')}}>
        Manage Orders 
      </Button>
      </Box>
    </>
  )
}