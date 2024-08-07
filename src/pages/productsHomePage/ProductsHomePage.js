import React from 'react';
import { Container } from '@mui/material';
import HeaderPages from '../Header/Header';
import SearchBarPage from '../SearchBarPage/SearchBarPage';




export default function ProductsHomePage() {
  return (
    <Container maxWidth="false" disableGutters>
        <HeaderPages />
        <SearchBarPage />
    </Container>
  )
}
