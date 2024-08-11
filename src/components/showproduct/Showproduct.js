import React from "react";
import { useEffect } from "react";
import { fetchProduct,filterGluten,filterSugarFree,filterSeason } from "../../redux/searchproductSlice";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Product from "../../components/product/Product";
import { useSelector, useDispatch } from "react-redux";
import {Container} from "@mui/system";

export function Showproduct() {
  const dispatch = useDispatch();
  const { findProduct } = useSelector((state) => state.findProduct);
  const status = useSelector((state) => state.findProduct.status);
  const error = useSelector((state) => state.findProduct.error);

  useEffect(() => {
    dispatch(fetchProduct(1));
    // dispatch(filterGluten());
    // dispatch(filterSugarFree());
    // dispatch(filterSeason());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <Container maxWidth="false" disableGutters>
      <Grid container>
        {findProduct.items &&
          findProduct.items.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={6} lg={4} xl={3}>
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
              </Box>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
