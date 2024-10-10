import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';

import banner_club_halloween_alt from '../../../assets/banner-club-halloween-alt.svg'

interface IBannerHalloween {
    imageUrl: React.ReactNode;
  }

export const BannerHalloween: React.FC<IBannerHalloween> = ({ imageUrl }) => {
    
    const [currentImage, setCurrentImage] = useState(imageUrl);
    const [isFirstImage, setIsFirstImage] = useState(true);  
    
    // Alternar entre as duas imagens em um intervalo de tempo
    useEffect(() => {
      const interval = setInterval(() => {
        setIsFirstImage((prev) => !prev);
      }, 400); //time
      return () => clearInterval(interval); // Limpa o intervalo quando o componente desmontar
    }, []);
    
    useEffect(() => {
      setCurrentImage(isFirstImage ? imageUrl : banner_club_halloween_alt);
    }, [isFirstImage]);

    return (
        <Box
          sx={{
            height: '100vh', // O banner ocupa 100% da altura da tela
            maxHeight: '800px',
            backgroundImage: `url(${currentImage})`, // Imagem de fundo recebida via prop
            backgroundSize: 'cover', // A imagem cobre todo o espaço do banner
            backgroundPosition: 'left', // Centraliza a imagem
            backgroundRepeat: 'no-repeat', // Não repete a imagem
            display: 'flex', // Flexbox para centralizar o conteúdo
            justifyContent: 'center', // Centraliza horizontalmente
            alignItems: 'center', // Centraliza verticalmente
            position: 'relative', // Mantém o banner no fluxo normal da página
            mx: '-24px'
          }}>
            <Button
                variant="contained" // Estilo do botão (contained, outlined, etc.)
                color="secondary" // Cor do botão
                sx={{
                  position: 'absolute', // Para controlar o posicionamento do botão
                  bottom: 280, // Ajusta a distância do botão para a parte inferior
                  left: '10%',
                }}>
                Get Started
            </Button>
        </Box>
      );
    };
