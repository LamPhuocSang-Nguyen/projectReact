import React from "react";
import { useEffect } from "react";
import { fetchProduct} from "../../redux/searchproductSlice";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Product from "../../components/product/Product";
import { useSelector, useDispatch } from "react-redux";
import {Container} from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { addItem } from "../../redux/cartSlice";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export function Showproduct() {
  const dispatch = useDispatch();
  const { findProduct } = useSelector((state) => state.findProduct);
  const status = useSelector((state) => state.findProduct.status);
  const error = useSelector((state) => state.findProduct.error);

  useEffect(() => {
    dispatch(fetchProduct(1));
    localStorage.setItem("data", findProduct.items)
  }, [dispatch]);


  useEffect(() => {
    if (status === "succeeded") {
      // Store the items in localStorage after successful fetch
      localStorage.setItem("data", JSON.stringify(findProduct.items));
      // console.log("Data stored in localStorage:", findProduct.items);
    }
  }, [status, findProduct]);


  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const storedData = localStorage.getItem("data");
  let parsedData = null;
  if (storedData) {
    try {
      parsedData = JSON.parse(storedData);
      // console.log("Retrieved data from localStorage:", parsedData);
    } catch (error) {
      console.error("Failed to parse stored data:", error);
      // Handle the error, maybe clear the invalid data from localStorage
      // localStorage.removeItem("data");
    }
  } else {
    // console.log("No data found in localStorage, initializing with default value");
    // Provide a default value or handle the absence of data
    parsedData = [];
  }
  

  return (
    <Container maxWidth="false" disableGutters>
      <Grid container>
        {parsedData &&
          parsedData.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={6} lg={4} xl={3} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Box
                mouse
                sx={{
                  width: "100%",
                  backgroundColor: `${item.backgroundColor}`,
                  textAlign: "center",
                  height: "600px",
                }}
              >
                <Product
                  key={item.beanId}
                  id={item.beanId}
                  flavorName={item.flavorName}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
                <Typography sx={{fontSize:"24px", color:"white", fontWeight:"300",fontFamily: "merel,sans-serif", lineHeight:"26px", letterSpacing:"3px"}}>{item.description}</Typography>
                <Box sx={{display:"flex", justifyContent: "space-around", marginTop:"100px"}}>
                <IconButton size="medium" onClick={()=>dispatch(addItem(item))}><AddIcon></AddIcon></IconButton>
                <IconButton size="medium"><RemoveIcon></RemoveIcon></IconButton>
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
