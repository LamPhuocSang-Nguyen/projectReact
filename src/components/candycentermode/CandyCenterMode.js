import { Container, Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/showbarcandySlice";
import "./CandyCenterMode.css";

function CenterMode() {
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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 14,
    speed: 500,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 12,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 10,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 6,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          centerPadding: "5px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          centerPadding: "5px",
        },
      },
    ],
  };

  return (
    <Container maxWidth="false">
      <Slider {...settings} className="slider-container">
        {barcandy.items &&
          barcandy.items.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                backgroundColor: `${item.backgroundColor}`,
                flexDirection: "column",
                padding: "10px", // Added padding for spacing
              }}
            >
              <Box
                component="img"
                sx={{
                  display: "block",
                  width: "100%",
                  margin: "0 auto",
                  height: {
                    xs: "50px",  // Smaller height for small screens
                    sm: "75px",
                    md: "100px", // Original height for medium screens
                    lg: "120px",
                  },
                  zIndex: "6",
                }}
                src={item.imageUrl}
                alt={`Carousel image ${index}`}
              />
              <Typography
                sx={{
                  textTransform: "uppercase",
                  width: "auto",
                  padding: "0 3px",
                  color: "white",
                  fontSize: {
                    xs: "10px",  // Smaller font size for small screens
                    sm: "12px",
                    md: "14px",  // Original font size for medium screens
                    lg: "17px",
                  },
                  fontWeight: "800",
                  letterSpacing: "0",
                  lineHeight: "14px",
                  textAlign: "center",
                  margin: "0 0 0 0",
                  opacity: "0",
                  zIndex: "2",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
      </Slider>
    </Container>
  );
}

export default CenterMode;
