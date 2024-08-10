import { Container, Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/showbarcandySlice";
import "./CandyCenterMode.css";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 14,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundColor: "#008080",
          borderRadius: "100px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundColor: "#008080",
          borderRadius: "100px",
        }}
        onClick={onClick}
      />
    );
  }
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
              }}
            >
              <Box
                component="img"
                sx={{
                  display: "block",
                  width: "100%",
                  margin: "0 auto",
                  height: "100px",
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
                  fontSize: "17px",
                  fontWeight: "800",
                  letterSpacing: "0",
                  lineHeight: "14px",
                  textAlign: "center",
                  margin: "0 0 0 0",
                  opacity: "0",
                  zIndex: "2",
                }}
              ></Typography>
            </Box>
          ))}
      </Slider>
    </Container>
  );
}

export default CenterMode;
