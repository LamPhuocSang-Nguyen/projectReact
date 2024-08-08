import React from 'react';
import { Container } from '@mui/material';
import HeaderPages from '../Header/Header';
import SearchBarPage from '../SearchBarPage/SearchBarPage';
import Product from '../../components/product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct } from '../../redux/searchproductSlice';




export default function ProductsHomePage() {
  const dispatch = useDispatch();
  const {findProduct} = useSelector((state)=>state.findProduct);
  const status = useSelector((state) => state.findProduct.status);
  const error = useSelector((state) => state.findProduct.error);

  useEffect(() => {
    dispatch(fetchProduct(1));
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

console.log(findProduct.items)


  return (
    <Container maxWidth="false" disableGutters>
        <HeaderPages />
        <SearchBarPage />

        {
          findProduct.items && findProduct.items.map((item,index)=>(
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
