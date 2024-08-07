import React from 'react'
import { Container } from '@mui/material'
import SearchBar from '../../components/searchbar/SearchBar'


export default function SearchBarPage() {
  return (
    <Container maxWidth="false" disableGutters>
      <SearchBar />
    </Container>
  )
}
