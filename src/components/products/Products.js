import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../redux/productSlice";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Product from "../product/Product";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';


export default function Products() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProduct(currentPage));
  }, [currentPage]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));

  return (
    <Container>
      <Grid container spacing={2}>
        {product.items && product.items.map((item,index) => (
          <Grid key={index} item>
            <Product
              key={item.beanId}
              id={item.beanId}
              flavorName={item.flavorName}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          </Grid>
        ))}
      </Grid>

      <Grid
      container
      direction="row"
      justifyContent="center"
       alignItems="center"
      >
        <Stack spacing={2}>
          <Typography>Page: {currentPage}</Typography>
          <Pagination count={10} page={currentPage} onChange={handlePageChange} />
        </Stack>
      </Grid>


    </Container>
  );
}
