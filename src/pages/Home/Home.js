import React from "react";
import HeaderPages from "../../pages/Header/Header";
import Products from "../../components/products/Products";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer"
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="false" disableGutters='true'>
      <HeaderPages />
      <Carousel />
      <Products />
      <Footer />
    </Container>
  );
}
