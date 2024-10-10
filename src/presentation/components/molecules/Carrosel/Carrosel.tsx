import React, {useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Box, Paper, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import robusta_amazonico from '../../../assets/carrosel-robusta-amazonico.svg'
import banner_club_halloween from '../../../assets/banner-club-halloween.svg'
import caramel_banana from '../../../assets/carrosel-caramel-banana.svg'

// alt img
import banner_club_halloween_alt from '../../../assets/banner-club-halloween-alt.svg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface Image {
  label: string;
  imgPath: string;
}

const images: Image[] = [
  {
    label: 'Imagem 1',
    imgPath: banner_club_halloween,
  },
  {
    label: 'Imagem 2',
    imgPath: robusta_amazonico,
  },
  {
    label: 'Imagem 3',
    imgPath: caramel_banana,
  },
];

export const Carrosel: React.FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const [currentImage, setCurrentImage] = useState(banner_club_halloween);
  const [isFirstImage, setIsFirstImage] = useState(true);  

  // Alternar entre as duas imagens em um intervalo de tempo
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstImage((prev) => !prev);
    }, 400); // Muda a cada 2 segundos
    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmontar
  }, []);

  useEffect(() => {
    setCurrentImage(isFirstImage ? banner_club_halloween : banner_club_halloween_alt);
  }, [isFirstImage]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box 
      sx={{
        width: '85vw',
        height: '95vh',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}>
      <Paper
        // square={false}
        // elevation={0}
        // sx={{
        //   display: 'flex',
        //   alignItems: 'center',
        //   height: 50,
        //   pl: 2,
        //   bgcolor: 'none',
        // }}
      >
        {/* <Typography>{images[activeStep].label}</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents>
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  height: '100%', // Altura do contêiner
                  display: 'flex',
                  justifyContent: 'center', // Centraliza horizontalmente
                  alignItems: 'center', // Centraliza verticalmente
                  maxWidth: 1950,
                  overflow: 'hidden',
                  width: '100%',
                  margin: 'auto',
                }}>
                {index === 0 ? ( // Apenas para o primeiro slide
                  <Box
                    component="img"
                    sx={{
                      maxHeight: '100%', // Ajusta a imagem para caber no contêiner
                      maxWidth: '100%',
                    }}
                    src={currentImage}
                    alt={`Alternating Image ${index}`}
                  />
                ) : (                  
                  <Box
                    component="img"
                    sx={{
                      maxHeight: '100%', // Ajusta a imagem para caber no contêiner
                      maxWidth: '100%',                 
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                )}  
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      {/* Button Left */}
      <Button
        size="small"
        onClick={handleBack}
        disabled={activeStep === 0}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          background: 'none',
          color: '#00000000',
        }}
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </Button>

      {/* Button Right */}
      <Button
        size="small"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          background: 'none',
          color: 'black', // Cor personalizada
        }}
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </Button>
    </Box>
  );
};
