import React from 'react';
import { Container } from '@mui/material';
import SearchBarPage from '../SearchBarPage/SearchBarPage';
import { Showproduct } from '../../components/showproduct/Showproduct';
import HeaderProductPage from '../HeaderProductPage/HeaderProductPage';




export default function ProductsHomePage() {


  return (
    <Container maxWidth="false" disableGutters>
      <HeaderProductPage />
      <SearchBarPage />
      <Showproduct />
    </Container>
  )
}
