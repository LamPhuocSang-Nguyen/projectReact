import React from 'react'
import HeaderPages from '../../pages/Header/Header'
import Products from '../../components/products/Products'
import Carousel from '../../components/carousel/Carousel'

export default function Home() {
  return (
    <div><HeaderPages />
    <Carousel />
      <Products />
    </div>
  )
}
