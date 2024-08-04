import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../../redux/productSlice'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function Products() {
    // const dispatch = useDispatch();
    // const product = useSelector((state) => state.product.product)
    // const status = useSelector((state) => state.product.status);
    // const error = useSelector((state) => state.product.error);


    // useEffect(() => {
    //     if (status === 'start') {
    //         dispatch(fetchProduct());
    //     }
    // }, []);

    // if (status === 'loading') {
    //     return <div>Loading...</div>;
    // }

    // if (status === 'failed') {
    //     return <div>Error: {error}</div>;
    // }


    // console.log(product);

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image='https://coffee.alexflipnote.dev/hjpM1TCc78U_coffee.jpg'
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}
