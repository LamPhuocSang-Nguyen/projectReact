import React from 'react';
import { Container } from '@mui/material';
import HeaderPages from '../Header/Header';
import SearchBarPage from '../SearchBarPage/SearchBarPage';
import Product from '../../components/product/Product';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct } from '../../redux/searchproductSlice';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';




export default function ProductsHomePage() {
  const dispatch = useDispatch();
  const { findProduct } = useSelector((state) => state.findProduct);
  const status = useSelector((state) => state.findProduct.status);
  const error = useSelector((state) => state.findProduct.error);

  useEffect(() => {
    dispatch(fetchProduct(1));
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }


  return (
    <Container maxWidth="false" disableGutters>
      <HeaderPages />
      <SearchBarPage />

      <Grid container>
        {findProduct.items && findProduct.items.map((item, index) => (
          <Grid key={index} item>
            <Box mouse sx={{width:"100%",backgroundColor:`${item.backgroundColor}`}}>
            <Product
              key={item.beanId}
              id={item.beanId}
              flavorName={item.flavorName}
              description={item.description}
              imageUrl={item.imageUrl}
            />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
