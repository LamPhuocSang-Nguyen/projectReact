import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Container, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setBackGround } from '../../redux/carouselSlide';
import "./Carousel.css";
import {useRef, useEffect} from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const { carousel } = useSelector((state) => state.carousel);
  const myRef = useRef(null);
  // const maxSteps = carousel.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };


  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const getbackground = (a) => {
    dispatch(setBackGround(a));
  }
  useEffect(() => {
    if (myRef.current) {
      /*console.log(myRef.current); // This logs the <img> element to the console*/

      // Adding a class to the element
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
                  backgroundColor: `${step.bg}`, height: {
                    xs: "400px",
                    sm: "600px",
                    md: "700px",
                    lg: "830px",
                  }
                }}>
                  <Grid item xs={6}>
                    <Box
                      component="img"
                      sx={{
                        overflow: 'hidden',
                        width: '100%',
                        height: "100%",
                        objectFit: "contain",
                        backgroundColor: `${step.bg}`,
                        display: "flex", 
                        alignItems: "center",
                        
                      }}
                      ref={myRef} 
                      className="MuiBox-root css-1ul3npa"
                      src={step.imgPath}
                      alt={`Carousel image ${index}`} />
                  </Grid>

                  <Grid item xs={6}>
                    <Box
                      component="section"
                      sx={{
                        display: 'block',
                        overflow: 'hidden',
                        width: '100%',
                        backgroundColor: `${step.bg}`,
                        height: "100%",
                        textAlign: "center",
                      }}>
                      <Typography variant="h1" component="h2">
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