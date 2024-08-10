import React from "react";
import { useEffect } from "react";
import { fetchProduct } from "../../redux/searchproductSlice";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Product from "../../components/product/Product";
import { useSelector, useDispatch } from "react-redux";

export function Showproduct() {
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        {findProduct.items &&
          findProduct.items.map((item, index) => (
            <Grid key={index} item xs={2} sm={4}>
              <Box
                mouse
                sx={{
                  width: "100%",
                  backgroundColor: `${item.backgroundColor}`,
                  textAlign:"center",
                  height:"600px",
                }}
              >
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
    </Box>
  );
}
