import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Container, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setBackGround } from '../../redux/carouselSlide';
import "./Carousel.css";
import { useRef, useEffect } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const { carousel } = useSelector((state) => state.carousel);
  const myRef = useRef(null);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const getbackground = (a) => {
    dispatch(setBackGround(a));
  };

  useEffect(() => {
    if (myRef.current) {
      myRef.current.classList.add('custom-image-class');
    }
  }, [myRef.current]);

  return (
    <Container maxWidth="false" disableGutters>
      <Box sx={{ flexGrow: 1 }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={(id) => {
            handleStepChange(id);
            getbackground(id);
          }}
          enableMouseEvents
        >
          {carousel.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Grid container sx={{
                  backgroundColor: `${step.bg}`, 
                  height: {
                    xs: "400px",
                    sm: "600px",
                    md: "700px",
                    lg: "830px",
                    xl: "100vh"
                  },
                  alignItems: 'center',
                }}>
                  <Grid item xs={12} md={6}>
                    <Box
                      component="img"
                      sx={{
                        width: '100%',
                        height: {
                          xs: "300px",
                          sm: "400px",
                          md: "500px",
                          lg: "600px",
                          xl: "70vh"
                        },
                        objectFit: "cover",
                        backgroundColor: `${step.bg}`,
                      }}
                      ref={myRef} 
                      className="MuiBox-root css-1ul3npa"
                      src={step.imgPath}
                      alt={`Carousel image ${index}`} 
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box
                      component="section"
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: `${step.bg}`,
                        height: "100%",
                        textAlign: "center",
                        padding: { xs: 2, md: 4 },
                      }}
                    >
                      <Typography 
                        variant="h4" 
                        component="h2"
                        sx={{
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '4rem' },
                          marginBottom: { xs: 2, md: 4 },
                          fontSize:"70px",
                          color:"#fff",
                          fontWeight:"900",
                          textTransform:"uppercase",
                          fontFamily:"merel, sans-serif"
                        }}
                      >
                        {step.name}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
    </Container>
  );
}

export default Carousel;
