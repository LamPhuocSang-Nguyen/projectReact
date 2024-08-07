import React from "react";
import HeaderPages from "../../pages/Header/Header";
import Products from "../../components/products/Products";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer"
import { Container } from "@mui/material";
import Title from "../../components/title/Title";
import BarCandyPage from "../BarCandyPage/BarCandyPage";

export default function Home() {



  return (
    <Container maxWidth="false" disableGutters>
      <HeaderPages/>
      <Carousel />
      <BarCandyPage />
      <Title />
      <Products />
      <Footer />
    </Container>
  );
}
