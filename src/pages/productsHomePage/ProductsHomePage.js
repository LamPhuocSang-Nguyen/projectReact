import React from 'react';
import { Container } from '@mui/material';
import HeaderPages from '../Header/Header';
import SearchBarPage from '../SearchBarPage/SearchBarPage';
import Product from '../../components/product/Product';
import { useDispatch, useSelector } from 'react-redux';




export default function ProductsHomePage() {
  const dispatch = useDispatch();
  const {product} = useSelector((state)=>state.product);

  return (
    <Container maxWidth="false" disableGutters>
        <HeaderPages />
        <SearchBarPage />

        {
          product.items && product.items.map((item,index)=>(
            <Product
            key={item.beanId}
            id={item.beanId}
            flavorName={item.flavorName}
            description={item.description}
            imageUrl={item.imageUrl}
          />
          ))
        }
    </Container>
  )
}
