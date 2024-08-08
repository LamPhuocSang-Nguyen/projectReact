import { Container, Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/showbarcandySlice';
import "./CandyCenterMode.css";

function CenterMode() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 14,
        speed: 500,
    };

    const dispatch = useDispatch();
    const { barcandy } = useSelector((state) => state.barcandy);
    const status = useSelector((state) => state.product.status);
    const error = useSelector((state) => state.product.error);

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
        <Container maxWidth="false" className="slider-container">
            <Box sx={{ width: '100%' }}>
                <Slider {...settings}>
                    {
                        barcandy.items && barcandy.items.map((item, index) => (
                            <Box key={index}
                                sx={{
                                    width: '100%',
                                    backgroundColor: `${item.backgroundColor}`,
                                    height: '116px',
                                    minWidth: '140px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                <Box
                                    component="img"
                                    sx={{
                                        display: 'block',
                                        overflow: 'clip',
                                        width: '83px',
                                        height: '56px',
                                        maxWidth: '83px',
                                        margin: '25px 0 0 8px',
                                        overflowClipMargin: 'content-box',
                                        zIndex: '6',
                                    }}
                                    src={item.imageUrl}
                                    alt={`Carousel image ${index}`}
                                />
                                <Typography sx={{
                                    textTransform: 'uppercase',
                                    width: 'auto',
                                    padding: '0 3px',
                                    color: 'white',
                                    fontSize: '17px',
                                    fontWeight: '800',
                                    letterSpacing: '0',
                                    lineHeight: '14px',
                                    textAlign: 'center',
                                    margin: '0 0 0 0',
                                    opacity: '0',
                                    zIndex: '2',
                                }}></Typography>
                            </Box>
                        ))
                    }
                </Slider>
            </Box>
        </Container>
    );
}

export default CenterMode;
