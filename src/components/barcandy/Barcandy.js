import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/showbarcandySlice';
import { Container, Box, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useEffect, useState, useRef } from 'react';


function Barcandy() {
  const dispatch = useDispatch();
  const { barcandy } = useSelector((state) => state.barcandy);
  const theme = useTheme();
  // const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = 12;
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);
  const [currentPage, setCurrentPage] = useState(1);

  const stackRef = useRef()

  useEffect(() => {
    dispatch(fetchProduct(currentPage));
  }, [dispatch, currentPage]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };



  return (
    <Container maxWidth="false" disableGutters>
      <Stack direction="row" ref={stackRef} sx={{position: 'relative'}}>
        {
          barcandy.items && barcandy.items.map((item, index) => (
            <Box 
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
                  margin: '23px 0 0 8px',
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
      </Stack>

      <MobileStepper maxWidth="false" disableGutters
        position="static"
        variant="none"
        sx={{
          flexGrow: 1,
        }}
        nextButton={
          <Button size="small" onClick={handleNext} sx={{height:'116px', transform: "translateY(-116%)", position:'absolute', zIndex:'6', left:'95%', top:'106%'}}>
            
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft sx={{width: "100px", height: "100px", color:"#fff", fontWeight:"800"}}/>
            ) : (
              <KeyboardArrowRight sx={{width: "100px", height: "100px", color:"#fff", fontWeight:"800"}}/>
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={currentPage === 1} sx={{height:'116px', transform: "translateY(-116%)", position:'absolute', zIndex:'6', right:'95%', top:'106%'}}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight sx={{width: "100px", height: "100px", color:"#fff", fontWeight:"800"}}/>
            ) : (
              <KeyboardArrowLeft sx={{width: "100px", height: "100px", color:"#fff", fontWeight:"800"}}/>
            )}
            
          </Button>
        }
      />
    </Container>
  );
}

export default Barcandy;
