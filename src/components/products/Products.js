import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../../redux/productSlice'
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Product from '../product/Product';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';






export default function Products() {
    const dispatch = useDispatch();
    const { product, totalPage } = useSelector((state) => state.product);
    const status = useSelector((state) => state.product.status);
    const error = useSelector((state) => state.product.error);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (status === 'start') {
            dispatch(fetchProduct(currentPage));
        }
    }, [currentPage]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    console.log(product)


    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    }



    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {product.items && product.items.map((item) => (
                        <Grid item xl={3} md={6}>
                            <Product
                                id={item.beanId}
                                flavorName={item.flavorName}
                                description={item.description}
                                imageUrl={item.imageUrl}
                            />
                        </Grid>
                    ))
                    }
                </Grid>
            </Box>
            <Stack spacing={2}>
                <Pagination count={10} />
            </Stack>
        </div >
    );
}
