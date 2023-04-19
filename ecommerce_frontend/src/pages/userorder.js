import OrderList from "@/components/OrderList";
import { Typography,Box,Button} from "@mui/material";
import FastRewindIcon from '@mui/icons-material/FastRewind';
import { useRouter } from "next/router";

const orderList = [
    {
      oid: "01",
      otime: "2023-04-30",
      ototal: 500,
      ostatus: "New"
    },
    {
      oid: "03",
      otime: "2021-04-30",
      ototal: 500,
      ostatus: "New"
    },
    {
      oid: "02",
      otime: "2022-04-30",
      ototal: 500,
      ostatus: "New"
    },
  ];
export default function userorder() {
    const router = useRouter();
    return (
        <>
          <Typography variant="h2" sx={{ padding: "16px" }}>
            User Order Page
          </Typography>
          <OrderList products={orderList}/>
          <Box sx={{textAlign:'right', marginRight:'92px'}}>

          <Button variant="contained" startIcon={<FastRewindIcon/>} onClick={()=>{router.push('userproduct')}}>
            Back 
          </Button>
          </Box>
        </>
      )
}