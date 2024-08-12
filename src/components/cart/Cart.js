import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {loadItem, addItem, removeItem, clearCart} from "../../redux/cartSlice"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function Cart() {
    const dispatch = useDispatch();
    const { cart } = useSelector(state=>state.cart)

    React.useEffect(()=>{
        dispatch(loadItem())
    },[])

    console.log(cart)


  return (
    <TableContainer component={Paper}>
        <Table hover>
            <TableHead>
                <TableRow>
                    <th>id</th>
                    <th>flavorName</th>
                    <th>image</th>
                    <th>Action</th>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    cart&&cart.map((item,index)=>(
                        <TableRow key={index}>
                            <TableCell sx={{textAlign:"center"}}>{item.beanId}</TableCell>
                            <TableCell sx={{textAlign:"center"}}>{item.flavorName}</TableCell>
                            <TableCell sx={{textAlign:"center"}}><Box component="img" sx={{width:"50px", height:"50px"}} src={item.imageUrl} alt='img'></Box></TableCell>
                            <TableCell sx={{textAlign:"center"}}>
                                {/* <Button onClick={()=>dispatch(addItem(item))} color='warning'>+</Button> */}
                                <span>{item.quantity}</span>
                                {/* <Button onClick={()=>dispatch(removeItem(item.beanId))} color='danger'>-</Button> */}
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

        <Button onClick={()=>dispatch(clearCart())} color='warning' sx={{textAlign:"center"}}>Clear cart</Button>
    </TableContainer>
  )
}