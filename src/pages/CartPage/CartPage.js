import React from 'react'
import { Container } from '@mui/material'
import Cart from '../../components/cart/Cart'
import HeaderProductPage from '../HeaderProductPage/HeaderProductPage'


export default function CartPage() {
  return (
    <Container maxWidth="false" disableGutters>
        <HeaderProductPage />
        <Cart />
    </Container>
  )
}
