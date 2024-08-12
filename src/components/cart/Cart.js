import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addItem, removeItem, clearCart} from "../../redux/cartSlice"
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
    const {cart} = useSelector(state=>state.cart)


  return (
    <div>
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
                            <TableCell>{item.beanId}</TableCell>
                            <TableCell>{item.flavorName}</TableCell>
                            <TableCell><Box component="img" sx={{width:"50px", height:"50px"}} src={item.imageUrl} alt='img'></Box></TableCell>
                            <TableCell>
                                <Button onClick={()=>dispatch(addItem(item))} color='warning'>+</Button>
                                <span>{item.quantity}</span>
                                <Button onClick={()=>dispatch(removeItem(item.id))} color='danger'>-</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

        <Button onClick={()=>dispatch(clearCart())} color='warning'>Clear cart</Button>
    </TableContainer>
</div>
  )
}